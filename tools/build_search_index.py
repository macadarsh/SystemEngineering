#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Learn System Engineering — full-text search index builder.

Reads the ACTUAL rendered .html pages in the site root and emits
    assets/search-index.js   ->   window.SEARCH_DOCS = [ ... ]

Each entry:
    {
      "href":        "chapter-2-detailed-review.html",
      "pageTitle":   "Chapter 2 — Detailed Review",
      "moduleTitle": "Chapter 2",
      "sections": [ { "id": "...", "heading": "...", "lines": ["...", ...] }, ... ]
    }

Why parse HTML instead of reusing generate.py?
  generate.py is the structural scaffolder, but some pages (e.g. the large
  hand-authored Chapter 2 sub-pages) contain content that is NOT in
  generate.py's data model. Indexing the HTML on disk captures the real,
  shipped content of every page — exactly what the reader actually sees —
  and never risks overwriting authored pages.

Section ids mirror app.js: a heading's existing id="" is used as-is; when a
heading has no id, we slugify its text with the SAME rules app.js uses at
runtime (buildToc -> slugify), so search deep-links resolve to the right anchor.

Run:
    python3 tools/build_search_index.py
"""

import os
import re
import html
import json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Pages that are not article content (no .content__inner) are skipped
# automatically; we also skip these explicitly.
SKIP = {"index.html"}

SENT = "\x01"  # heading marker, never appears in page text


def slugify(s):
    """Mirror app.js slugify(): lower, drop non [A-Za-z0-9_ -], trim, spaces->-."""
    s = s.lower()
    s = re.sub(r"[^\w\s-]", "", s, flags=re.ASCII)
    s = s.strip()
    return re.sub(r"\s+", "-", s)


def clean_text(fragment):
    """Strip tags, unescape entities, collapse whitespace."""
    t = re.sub(r"<[^>]+>", "", fragment)
    t = html.unescape(t)
    return re.sub(r"\s+", " ", t).strip()


def extract_between(s, start_pat, end_pat):
    """Return substring after the first start_pat up to the first following end_pat."""
    sm = re.search(start_pat, s, flags=re.S | re.I)
    if not sm:
        return None
    rest = s[sm.end():]
    em = re.search(end_pat, rest, flags=re.S | re.I)
    return rest[: em.start()] if em else rest


def page_title(doc):
    m = re.search(r'<h1[^>]*class="[^"]*page-title[^"]*"[^>]*>(.*?)</h1>', doc, flags=re.S | re.I)
    if not m:
        m = re.search(r"<h1[^>]*>(.*?)</h1>", doc, flags=re.S | re.I)
    return clean_text(m.group(1)) if m else ""


def module_label(doc):
    bm = re.search(r'<div class="breadcrumb">(.*?)</div>', doc, flags=re.S | re.I)
    if not bm:
        return ""
    raw = re.sub(r"<a[^>]*>(.*?)</a>", r"\1", bm.group(1), flags=re.S | re.I)
    raw = clean_text(raw)
    crumbs = [c.strip() for c in re.split(r"›|&rsaquo;|>", raw) if c.strip()]
    mods = [c for c in crumbs if c.lower() != "home"]
    # crumbs are [Home, <area...>, <page>]; the page itself is the last crumb.
    return mods[-2] if len(mods) >= 2 else ""


def build_sections(content_html, ptitle):
    """Group content into sections keyed by h2/h3 headings, mirroring the
    reference engine's per-section line model."""
    s = content_html
    # drop nav-ish bits we don't want in the index
    s = re.sub(r'<div class="breadcrumb">.*?</div>', " ", s, flags=re.S | re.I)
    s = re.sub(r"<h1\b[^>]*>.*?</h1>", " ", s, flags=re.S | re.I)

    # mark each h2/h3 as a self-contained sentinel line carrying tag|id|text
    def headrepl(m):
        opentag, inner = m.group(2) or "", m.group(3)
        idm = re.search(r'\bid="([^"]*)"', opentag)
        text = clean_text(inner)
        hid = idm.group(1) if idm else slugify(text)
        return "\n%s%s%s%s%s%s%s\n" % (SENT, m.group(1).lower(), SENT, hid, SENT, text, SENT)

    s = re.sub(r"<(h2|h3)\b([^>]*)>(.*?)</\1>", headrepl, s, flags=re.S | re.I)

    # turn block boundaries into newlines, then strip the rest
    s = re.sub(r"</(p|li|h[1-6]|tr|pre|blockquote|div|summary|figcaption)>", "\n", s, flags=re.I)
    s = re.sub(r"<br\s*/?>", "\n", s, flags=re.I)
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)

    sections = []
    cur = {"id": "", "heading": ptitle, "lines": []}  # intro (lede etc.)
    for raw in s.split("\n"):
        line = re.sub(r"\s+", " ", raw).strip()
        if not line:
            continue
        if line.startswith(SENT):
            parts = line.split(SENT)
            if cur["lines"]:
                sections.append(cur)
            cur = {"id": parts[2], "heading": parts[3], "lines": []}
        elif len(line) > 1:
            cur["lines"].append(line)
    if cur["lines"]:
        sections.append(cur)
    return sections


def index_page(path, fname):
    with open(path, encoding="utf-8") as f:
        doc = f.read()
    content = extract_between(doc, r'class="content__inner"\s*>', r'<div class="pager"')
    if content is None:
        content = extract_between(doc, r'class="content__inner"\s*>', r"</main>")
    if content is None:
        return None  # not an article page
    ptitle = page_title(doc) or os.path.splitext(fname)[0]
    sections = build_sections(content, ptitle)
    # keep pages that have any indexable text
    if not any(sec["lines"] for sec in sections):
        return None
    return {
        "href": fname,
        "pageTitle": ptitle,
        "moduleTitle": module_label(doc),
        "sections": sections,
    }


def main():
    docs = []
    for fname in sorted(os.listdir(ROOT)):
        if not fname.endswith(".html") or fname in SKIP:
            continue
        entry = index_page(os.path.join(ROOT, fname), fname)
        if entry:
            docs.append(entry)

    out = (
        "/* Auto-generated by tools/build_search_index.py — do not edit by hand.\n"
        "   Rebuild after changing page content:  python3 tools/build_search_index.py */\n"
        "window.SEARCH_DOCS = " + json.dumps(docs, ensure_ascii=False, separators=(",", ":")) + ";\n"
    )
    out_path = os.path.join(ROOT, "assets", "search-index.js")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(out)

    n_lines = sum(len(sec["lines"]) for d in docs for sec in d["sections"])
    n_secs = sum(len(d["sections"]) for d in docs)
    print("Indexed %d pages, %d sections, %d text lines." % (len(docs), n_secs, n_lines))
    print("Wrote assets/search-index.js (%d KB)." % (len(out) // 1024))


if __name__ == "__main__":
    main()
