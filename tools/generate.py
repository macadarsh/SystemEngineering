#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Learn System Engineering — static site generator.

Single source of truth for the site structure. Run this to (re)generate:
  - index.html
  - one HTML page per module / section
  - assets/site-data.js   (powers the left site-index + search)

To add content later: edit the MODULES / SECTION_PAGES data below and re-run:
    python3 tools/generate.py
The shared look & behaviour live in assets/styles.css and assets/app.js.
"""

import os, re, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

BRAND = {
    "name": "Learn System Engineering",
    "tag": "Foundations → Practitioner",
    "email": "mac.adarsh@gmail.com",
}

# Top navigation (label, href, extra_class)
NAV_LINKS = [
    ("Chapters", "chapter-1.html", "js-nav-modules"),
    ("Weekly Plan", "weekly-plan.html", ""),
    ("Practice Q/A", "practice-questions.html", ""),
    ("Case Studies", "case-studies.html", ""),
    ("Podcast", "podcast.html", ""),
    ("About INCOSE", "what-is-incose.html", ""),
]


def slug(s):
    s = re.sub(r"[^\w\s-]", "", s.lower()).strip()
    return re.sub(r"\s+", "-", s)


# ---------------------------------------------------------------------------
# CONTENT MODEL
# Each block is a tuple:  ("h2", text) ("h3", text) ("p", text)
#                         ("ul", [items]) ("ol", [items])
#                         ("note", label, text) ("tip", label, text)
# ---------------------------------------------------------------------------

MODULES = [  # structure only; page content lives in content/ (see tools/BUILD.md)
    {
        "file": "chapter-1.html",
        "title": "Chapter 1",
        "lede": "Systems Engineering Introduction — what SE is, why it matters, its core systems concepts, its foundations, and its roots in systems thinking. Based on the INCOSE Systems Engineering Handbook, 5th Edition (2023), Chapter 1.",
    },
    {
        "file": "chapter-2.html",
        "title": "Chapter 2",
        "lede": "System Life Cycle Concepts, Models, and Processes — life-cycle stages and decision gates, the sequential / incremental / evolutionary model families, and the four ISO/IEC/IEEE 15288 process groups. Based on the INCOSE Systems Engineering Handbook, 5th Edition (2023), Chapter 2.",
    },
    {
        "file": "chapter-3.html",
        "title": "Chapter 3",
        "lede": "Life Cycle Analyses and Methods — the quality-characteristic “-ilities” (affordability, RAM, safety, security, resilience, HSI, logistics, and more) and the cross-cutting SE methods (modelling, analysis & simulation, prototyping, traceability, interface management, architecture frameworks, patterns). Based on the INCOSE Systems Engineering Handbook, 5th Edition (2023), Chapter 3.",
    },
    {
        "file": "chapter-4.html",
        "title": "Chapter 4",
        "lede": "Tailoring and Application Considerations — adapting Systems Engineering to its context: tailoring processes to an acceptable level of risk; the MBSE, Agile, Lean, and Product Line Engineering approaches; nine system types from greenfield to enterprise; and how SE is applied across ten product sectors. Based on the INCOSE Systems Engineering Handbook, 5th Edition (2023), Chapter 4.",
    },
    {
        "file": "chapter-5.html",
        "title": "Chapter 5",
        "lede": "This chapter is awaiting content.",
    },
]
# ---------------------------------------------------------------------------
# SECTION PAGES (also use the 3-panel layout)
# ---------------------------------------------------------------------------

SECTION_PAGES = [  # structure only; page content lives in content/pages/ (see tools/BUILD.md)
    {
        "file": "weekly-plan.html",
        "title": "8-Week Study Plan",
        "section_label": "Study Plan",
        "lede": "An eight-week roadmap through the five chapters, with a small task each week to turn reading into practice. Adjust the pace to suit you.",
    },
    {
        "file": "case-studies.html",
        "title": "Case Studies",
        "section_label": "Case Studies",
        "lede": "Short, illustrative examples of systems-engineering ideas in the real world. To be expanded with sourced, detailed cases.",
    },
]

ABOUT_INCOSE_PAGES = [  # structure only; page content lives in content/pages/ (see tools/BUILD.md)
    {
        "file": "what-is-incose.html",
        "title": "What is INCOSE?",
        "section_label": "About INCOSE",
        "lede": "The International Council on Systems Engineering — the global professional body for the discipline.",
    },
    {
        "file": "incose-exams.html",
        "title": "INCOSE Exams & Certification",
        "section_label": "About INCOSE",
        "lede": "INCOSE’s SEP certification program and the knowledge exam that underpins it.",
    },
]

# ---------------------------------------------------------------------------
# RENDERING
# ---------------------------------------------------------------------------

def render_blocks(blocks):
    """Return (html, list_of_h2_headings)."""
    out, heads = [], []
    for b in blocks:
        kind = b[0]
        if kind == "h2":
            hid = slug(b[1]); heads.append(b[1])
            out.append('<h2 id="%s">%s</h2>' % (hid, b[1]))
        elif kind == "h3":
            out.append('<h3 id="%s">%s</h3>' % (slug(b[1]), b[1]))
        elif kind == "h4":
            out.append('<h4 id="%s">%s</h4>' % (slug(b[1]), b[1]))
        elif kind == "p":
            out.append("<p>%s</p>" % b[1])
        elif kind == "ul":
            out.append("<ul>" + "".join("<li>%s</li>" % i for i in b[1]) + "</ul>")
        elif kind == "ol":
            out.append("<ol>" + "".join("<li>%s</li>" % i for i in b[1]) + "</ol>")
        elif kind == "note":
            out.append('<div class="note"><div class="note__label">%s</div><div>%s</div></div>' % (b[1], b[2]))
        elif kind == "tip":
            out.append('<div class="note note--tip"><div class="note__label">%s</div><div>%s</div></div>' % (b[1], b[2]))
        elif kind == "qa":
            q, a = b[1]
            out.append('<details class="qa"><summary>%s</summary><div class="qa__a">%s</div></details>' % (q, a))
        elif kind == "raw":
            out.append(b[1])
    return "\n".join(out), heads


# Every chapter is split into these three sub-sections (rendered as h2).
# A chapter dict supplies blocks under the keys "recap" / "core" / "detail";
# a missing/empty key renders a "coming soon" placeholder.
# Each chapter expands into three separate sub-pages.
# (Section title, chapter-dict key, filename suffix, icon, blurb)
CHAPTER_SECTIONS = [
    ("Quick Recap", "recap", "quick-recap", "\U0001F4DD", "A fast, high-level summary of the chapter — the key points at a glance."),
    ("Core Concepts", "core", "core-concepts", "\U0001F4D8", "The essential ideas explained with more depth, structure, and examples."),
    ("Detailed Review", "detail", "detailed-review", "\U0001F4D6", "A thorough, section-by-section walk through the chapter material."),
]


def subfile(base, suffix):
    """chapter-1.html + 'quick-recap' -> chapter-1-quick-recap.html"""
    return base[:-5] + "-" + suffix + ".html"


def practice_file(i):
    return "practice-chapter-%d.html" % i


def podcast_file(i):
    return "podcast-chapter-%d.html" % i


def promote(blocks):
    """Bump heading levels up one (h3->h2, h4->h3) for standalone sub-pages."""
    out = []
    for b in blocks:
        if b[0] == "h3":
            out.append(("h2",) + tuple(b[1:]))
        elif b[0] == "h4":
            out.append(("h3",) + tuple(b[1:]))
        else:
            out.append(b)
    return out


def placeholder_blocks(blurb):
    return [("note", "Coming soon",
             "%s This section is being developed and will be added next." % blurb)]


def render_tiles(tiles):
    """tiles: list of (icon, title, desc, href, cta)."""
    cards = "".join(
        '<a class="card" href="%s"><span class="card__icon">%s</span><h3>%s</h3>'
        '<p>%s</p><span class="card__more">%s &rarr;</span></a>' % (t[3], t[0], t[1], t[2], t[4])
        for t in tiles
    )
    return '<div class="grid grid--3">%s</div>' % cards


# -- shared HTML fragments (token style: @@NAME@@) --------------------------

def nav_links_html():
    parts = []
    for label, href, cls in NAV_LINKS:
        c = (" " + cls) if cls else ""
        parts.append('<a class="navlink%s" href="%s">%s</a>' % (c, href, label))
    return "".join(parts)


NAV = """<header class="nav">
  <button class="iconbtn nav__burger" aria-label="Open navigation">&#9776;</button>
  <a class="nav__brand" href="index.html">
    <span class="nav__logo">SE</span>
    <span class="nav__brand-text">@@BRAND@@<small>@@TAG@@</small></span>
  </a>
  <nav class="nav__links" aria-label="Primary">@@NAVLINKS@@</nav>
  <div class="nav__spacer"></div>
  <div class="nav__tools">
    <button class="searchbtn js-search-open" aria-label="Search">
      <span>&#128269;</span><span class="searchbtn__txt">Search</span><kbd>Ctrl K</kbd>
    </button>
    <button class="iconbtn js-appearance" aria-label="Appearance settings" title="Appearance (background, font, density, size)" aria-haspopup="dialog" aria-expanded="false">Aa</button>
  </div>
</header>"""

APPEARANCE_PANEL = """<div class="appearance__backdrop js-appearance-backdrop" hidden></div>
<div class="appearance" id="appearance-panel" role="dialog" aria-label="Appearance settings" hidden>
  <div class="appearance__group">
    <p class="appearance__label">Background</p>
    <div class="seg seg--2">
      <button class="seg__btn js-bg" data-bg="light"><span class="swatch swatch--light"></span>Light</button>
      <button class="seg__btn js-bg" data-bg="sepia"><span class="swatch swatch--sepia"></span>Sepia</button>
      <button class="seg__btn js-bg" data-bg="dim"><span class="swatch swatch--dim"></span>Dim</button>
      <button class="seg__btn js-bg" data-bg="dark"><span class="swatch swatch--dark"></span>Dark</button>
    </div>
  </div>
  <div class="appearance__group">
    <p class="appearance__label">Font</p>
    <div class="seg seg--2">
      <button class="seg__btn js-font" data-font="sans"><span class="preview-sans">Ag</span>Sans</button>
      <button class="seg__btn js-font" data-font="serif"><span class="preview-serif">Ag</span>Serif</button>
      <button class="seg__btn js-font" data-font="legible"><span class="preview-legible">Ag</span>Hyperlegible</button>
      <button class="seg__btn js-font" data-font="lexend"><span class="preview-lexend">Ag</span>Lexend</button>
    </div>
  </div>
  <div class="appearance__group">
    <p class="appearance__label">Text density</p>
    <div class="seg seg--3">
      <button class="seg__btn js-density" data-density="compact">Compact</button>
      <button class="seg__btn js-density" data-density="cozy">Cozy</button>
      <button class="seg__btn js-density" data-density="comfortable">Comfortable</button>
    </div>
  </div>
  <div class="appearance__group">
    <p class="appearance__label">Text size</p>
    <div class="seg seg--4">
      <button class="seg__btn js-size" data-size="0.9"><span class="size-glyph" style="font-size:12px">A</span>S</button>
      <button class="seg__btn js-size" data-size="1"><span class="size-glyph" style="font-size:15px">A</span>M</button>
      <button class="seg__btn js-size" data-size="1.12"><span class="size-glyph" style="font-size:18px">A</span>L</button>
      <button class="seg__btn js-size" data-size="1.25"><span class="size-glyph" style="font-size:21px">A</span>XL</button>
    </div>
  </div>
  <button class="appearance__reset js-appearance-reset">Reset to defaults</button>
</div>"""

SEARCH_OVERLAY = """<div class="search-overlay" id="search-overlay" role="dialog" aria-modal="true" aria-label="Search">
  <div class="search-box">
    <div class="search-box__input">
      <span>&#128269;</span>
      <input id="search-input" type="text" placeholder="Search modules, topics, questions…" autocomplete="off" spellcheck="false">
      <button class="esc js-search-close" aria-label="Close search">Esc</button>
    </div>
    <div class="search-results" id="search-results"></div>
  </div>
</div>"""

THEME_INIT = ("<script>(function(){try{var d=document.documentElement,ls=localStorage;"
              "var t=ls.getItem('lse-theme')||(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');"
              "d.setAttribute('data-theme',t);"
              "var f=ls.getItem('lse-font');if(f)d.setAttribute('data-font',f);"
              "d.setAttribute('data-density',ls.getItem('lse-density')||'cozy');"
              "var s=parseFloat(ls.getItem('lse-fs'));"
              "if(!isNaN(s))d.style.setProperty('--fs-scale',s);}catch(e){}})();</script>")


def head(title, desc):
    return ("""<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="%s">
<title>%s</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700;800&family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/styles.css">
%s
</head>
<body>""" % (html.escape(desc), html.escape(title), THEME_INIT))


SCRIPTS = """<script src="assets/site-data.js"></script>
<script src="assets/app.js"></script>"""

# Extra scripts for interactive practice (quiz) pages. practice-data.js must load
# before practice.js (the engine reads window.PRACTICE).
PRACTICE_SCRIPTS = """
<script src="assets/practice-data.js"></script>
<script src="assets/practice.js"></script>"""

DOC_END = """
</body>
</html>"""

# Chapter index -> (data id in practice-data.js, descriptive name, question count).
# Only these chapters render an interactive quiz; others stay "coming soon".
PRACTICE_CHAPTERS = {
    1: ("ch1", "Systems Engineering Foundations", 100),
    2: ("ch2", "System Life Cycle Concepts, Models & Processes", 100),
}

# Extra script for podcast pages (custom audio player).
PODCAST_SCRIPTS = """
<script src="assets/podcast-player.js"></script>"""

# Optional custom intro (lede) for a chapter sub-page, keyed by (chapter#, section-suffix).
# Any page not listed here inherits its chapter's lede. Content itself is auto-discovered
# from content/chapters/ch<N>/<suffix>.html — drop a file there and it becomes that page.
SUBPAGE_LEDES = {
    (1, "core-concepts"): "A deeper pass through the Systems Engineering Introduction: what SE is and why it manages risk, what a system and an engineered system are, why SE matters under complexity (with the ROI and life-cycle-cost evidence), the core systems concepts every practitioner needs, the discipline's foundations, and its roots in systems science and systems thinking. This builds on the Quick Recap with more structure, vocabulary, and worked reasoning, and prepares the ground for the figure-by-figure Detailed Review.",
    (1, "detailed-review"): "A thorough, section-by-section walk through “Systems Engineering Introduction.” We cover what SE is, why it matters, the systems concepts (boundary and system of interest, emergence, interfacing/interoperating/enabling systems, the innovation ecosystem, hierarchy, states and modes, and complexity), the SE foundations, and system science and systems thinking — illustrated with all eight original handbook figures and their attributions.",
    (2, "core-concepts"): "A deeper pass through the System Life Cycle: how work is organised into stages and gated by decisions, the three families of life-cycle models and when each fits, and the ISO/IEC/IEEE 15288 process framework that turns a need into a delivered, operated, and retired system. This builds on the Quick Recap with more structure, vocabulary, and worked reasoning, and prepares the ground for the figure-by-figure Detailed Review.",
    (2, "detailed-review"): "A thorough, section-by-section walk through “System Life Cycle Concepts, Models, and Processes.” We cover life-cycle stages and decision gates, the sequential / incremental / evolutionary model families, and all thirty ISO/IEC/IEEE 15288 processes across four groups — illustrated with the original handbook figures and their attributions.",
    (3, "core-concepts"): "A deeper, exam-weighted pass through the quality-characteristic approaches and the cross-cutting SE methods — the definitions, the representative -ilities, and the high-yield distinctions (the three availability types, ALARP, the resilience triad, the traceability types, the N² convention). Builds on the Quick Recap and prepares the figure-by-figure Detailed Review.",
    (3, "detailed-review"): "A thorough, section-by-section walk through ‘Life Cycle Analyses and Methods’ — every quality-characteristic approach and SE method, illustrated with the original handbook figures (3.1–3.18) and their attributions.",
    (4, "core-concepts"): "A deeper, exam-weighted pass through tailoring, the four SE methodologies/approaches, the nine system types, and the ten product-sector applications — the definitions, the key distinctions (greenfield vs. brownfield, Maier’s SoS characteristics and the four SoS types, the CPS/SoS/IoT relationship), and why context changes how SE is applied. Builds on the Quick Recap and prepares the figure-by-figure Detailed Review.",
    (4, "detailed-review"): "A thorough, section-by-section walk through ‘Tailoring and Application Considerations’ — tailoring, the SE methodologies/approaches, the system types, and the product-sector applications, illustrated with all twelve original handbook figures (4.1–4.12) and the seven tables, with their attributions.",
}


def chapter_src(i, suffix):
    """Path to a chapter sub-page's content fragment, or None if not authored yet."""
    rel = "content/chapters/ch%d/%s.html" % (i, suffix)
    return rel if os.path.exists(os.path.join(ROOT, rel)) else None


def podcast_src(i):
    """Path to a chapter's podcast fragment, or None if not authored yet."""
    rel = "content/podcasts/ch%d.html" % i
    return rel if os.path.exists(os.path.join(ROOT, rel)) else None


_HEADING_RE = re.compile(r'<(h2|h3)[^>]*\bid="([^"]*)"[^>]*>(.*?)</\1>', re.S)


def frag_headings(rel):
    """Read a content fragment and return (h2_list[(text, id)], all_heading_texts).
    Used to build the search index from content/ instead of inline blocks."""
    if not rel:
        return [], []
    full = os.path.join(ROOT, rel)
    if not os.path.exists(full):
        return [], []
    body = open(full, encoding="utf-8").read()
    h2s, all_texts = [], []
    for tag, hid, inner in _HEADING_RE.findall(body):
        text = re.sub(r"<[^>]+>", "", inner).strip()
        all_texts.append(text)
        if tag == "h2":
            h2s.append((text, hid))
    return h2s, all_texts

BACK_TO_TOP = '<button class="back-to-top" aria-label="Back to top">&#8593;</button>'
BACKDROP = '<div class="backdrop"></div>'

DRAWER_HEAD = """<div class="sidebar__mobhead">
    <span class="sidebar__title" style="padding:0">Browse</span>
    <button class="iconbtn iconbtn--ghost js-drawer-close" aria-label="Close navigation">&times;</button>
  </div>"""


def nav_block():
    return (NAV.replace("@@BRAND@@", BRAND["name"])
               .replace("@@TAG@@", BRAND["tag"])
               .replace("@@NAVLINKS@@", nav_links_html()))


def crumbs_html(crumbs):
    parts = []
    for i, (label, href) in enumerate(crumbs):
        last = i == len(crumbs) - 1
        if href and not last:
            parts.append('<a href="%s">%s</a>' % (href, html.escape(label)))
        else:
            parts.append(html.escape(label))
    return '<div class="breadcrumb">' + " &rsaquo; ".join(parts) + "</div>"


def page_shell(title, lede, crumbs, body, prev_link=None, next_link=None, extra_scripts=""):
    pager = '<div class="pager">'
    pager += ('<a class="prev" href="%s"><small>&larr; Previous</small>%s</a>' % (prev_link[1], prev_link[0])
              if prev_link else "<span></span>")
    pager += ('<a class="next" href="%s"><small>Next &rarr;</small>%s</a>' % (next_link[1], next_link[0])
              if next_link else "<span></span>")
    pager += "</div>"

    doc = head(title + " · " + BRAND["name"], lede or title)
    doc += nav_block()
    doc += APPEARANCE_PANEL
    doc += BACKDROP
    doc += SEARCH_OVERLAY
    doc += '<div class="layout">'
    doc += '<aside class="sidebar">' + DRAWER_HEAD + '<nav id="sidebar-nav" aria-label="Site index"></nav></aside>'
    doc += '<main class="content"><div class="content__inner">'
    doc += crumbs_html(crumbs)
    doc += '<h1 class="page-title">%s</h1>' % title
    if lede:
        doc += '<p class="page-lede">%s</p>' % lede
    doc += body
    doc += pager
    doc += "</div></main>"
    doc += '<aside class="toc"><p class="toc__title">In this article</p><nav id="toc-list"></nav></aside>'
    doc += "</div>"
    doc += BACK_TO_TOP
    doc += SCRIPTS
    doc += extra_scripts
    doc += DOC_END
    return doc


def content_page(page, crumbs, prev_link=None, next_link=None):
    # Content auto-discovered from content/pages/<file>; fall back to inline blocks if present.
    src = "content/pages/" + page["file"]
    if os.path.exists(os.path.join(ROOT, src)):
        body = read_text(src)
    elif page.get("blocks"):
        body, _ = render_blocks(page["blocks"])
    else:
        body, _ = render_blocks(placeholder_blocks("%s — coming soon." % page["title"]))
    return page_shell(page["title"], page["lede"], crumbs, body, prev_link, next_link)


def prose_page(title, lede, crumbs, blocks, prev_link=None, next_link=None):
    body, _ = render_blocks(blocks)
    return page_shell(title, lede, crumbs, body, prev_link, next_link)


def landing_page(title, lede, crumbs, tile_sets):
    """tile_sets: list of (heading, intro_or_None, tiles)."""
    parts = []
    for heading, intro, tiles in tile_sets:
        parts.append('<h2 id="%s">%s</h2>' % (slug(heading), heading))
        if intro:
            parts.append("<p>%s</p>" % intro)
        parts.append(render_tiles(tiles))
    return page_shell(title, lede, crumbs, "\n".join(parts))


def home_page():
    doc = head(BRAND["name"], "A structured, self-paced path through the fundamentals of systems engineering — chapters, a study plan, practice Q/A, and case studies.")
    doc += nav_block()
    doc += APPEARANCE_PANEL
    doc += BACKDROP
    doc += SEARCH_OVERLAY
    # drawer-only sidebar so mobile users get the full index here too
    doc += '<aside class="sidebar sidebar--drawer">' + DRAWER_HEAD + '<nav id="sidebar-nav" aria-label="Site index"></nav></aside>'

    doc += '<div class="home">'
    # hero
    doc += """<section class="hero">
      <span class="hero__eyebrow">Foundations &middot; Self-paced</span>
      <h1>%s</h1>
      <p>A structured path from the core ideas of systems engineering to confident, practical understanding — organised into chapters, a study plan, practice Q/A, and case studies.</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <a class="btn" href="%s">Start with Chapter 1 &rarr;</a>
        <a class="btn btn--ghost" href="weekly-plan.html">See the 8-week plan</a>
      </div>
    </section>""" % (BRAND["name"], MODULES[0]["file"])

    # Explore — one tile per area of the site
    explore = [
        ("\U0001F4DA", "Chapters", "Five chapters, each with a Quick Recap, Core Concepts, and Detailed Review.", MODULES[0]["file"], "Browse chapters"),
        ("\U0001F5D3️", "8-Week Study Plan", "An eight-week roadmap pairing chapters with small, practical tasks.", "weekly-plan.html", "View the plan"),
        ("✅", "Practice Q/A", "Self-check questions for each chapter, with model answers to reveal when ready.", "practice-questions.html", "Try the questions"),
        ("\U0001F50E", "Case Studies", "Short, illustrative examples of systems-engineering ideas in the real world.", "case-studies.html", "Read case studies"),
        ("\U0001F3DB️", "About INCOSE", "The global systems-engineering body, its handbook, and the SEP certification exams.", "what-is-incose.html", "Learn about INCOSE"),
    ]
    explore_cards = "".join(
        '<a class="card" href="%s"><span class="card__icon">%s</span><h3>%s</h3><p>%s</p>'
        '<span class="card__more">%s &rarr;</span></a>' % (e[3], e[0], e[1], e[2], e[4]) for e in explore
    )
    doc += """<section class="section">
      <h2>Explore</h2>
      <p class="section__intro">Everything is organised into a few clear areas — pick where to start.</p>
      <div class="grid grid--3">%s</div>
    </section>""" % explore_cards

    # footer / contact
    doc += """<footer class="footer">
      <h2>Get in touch</h2>
      <p>Spotted something to fix, or want a topic covered in more depth? I’d love to hear from you.</p>
      <a class="btn" href="mailto:%s">Send a message</a>
      <div class="footer__legal">&copy; Adarsh Mishra. Built as a learning resource. All rights reserved.</div>
    </footer>""" % BRAND["email"]

    doc += "</div>"  # .home
    doc += BACK_TO_TOP
    doc += SCRIPTS
    doc += DOC_END
    return doc


# ---------------------------------------------------------------------------
# site-data.js (sidebar groups + search index)
# ---------------------------------------------------------------------------

def build_site_data():
    import json

    # Chapters group — each chapter is a landing page with 3 sub-page children
    module_items = []
    for i, m in enumerate(MODULES, 1):
        children = [{"label": title, "href": subfile(m["file"], suffix)}
                    for title, _k, suffix, _icon, _blurb in CHAPTER_SECTIONS]
        module_items.append({"num": str(i), "label": m["title"], "href": m["file"], "children": children})

    # Practice Q/A and Podcast each get per-chapter sub-pages as nested children
    practice_children = [{"label": m["title"], "href": practice_file(i)} for i, m in enumerate(MODULES, 1)]
    podcast_children = [{"label": m["title"], "href": podcast_file(i)} for i, m in enumerate(MODULES, 1)]

    page_by_file = {p["file"]: p for p in (SECTION_PAGES + ABOUT_INCOSE_PAGES)}

    def ritem(fname, children=None):
        p = page_by_file[fname]
        d = {"num": "", "label": p["title"], "href": p["file"]}
        if children:
            d["children"] = children
        return d

    resources_items = [
        ritem("what-is-incose.html"),
        ritem("incose-exams.html"),
        ritem("weekly-plan.html"),
        ritem("case-studies.html"),
        {"num": "", "label": "Practice Q/A", "href": "practice-questions.html", "children": practice_children},
        {"num": "", "label": "Podcast", "href": "podcast.html", "children": podcast_children},
    ]

    groups = [
        {"title": "Resources", "items": resources_items},
        {"title": "Chapters", "items": module_items},
    ]

    # ---- search index ----
    search = []
    for i, m in enumerate(MODULES, 1):
        search.append({"title": m["title"], "href": m["file"],
                       "section": "Chapters", "keywords": "", "snippet": m["lede"]})
        for title, _key, suffix, _icon, blurb in CHAPTER_SECTIONS:
            sub_href = subfile(m["file"], suffix)
            src = chapter_src(i, suffix)
            h2s, all_heads = frag_headings(src)
            search.append({"title": "%s — %s" % (m["title"], title), "href": sub_href,
                           "section": m["title"], "keywords": " ".join(all_heads),
                           "snippet": (m["lede"] if src else blurb)})
            for text, hid in h2s:
                search.append({"title": text, "href": "%s#%s" % (sub_href, hid),
                               "section": "%s · %s" % (m["title"], title), "keywords": "", "snippet": ""})

    search.append({"title": "Practice Q/A", "href": "practice-questions.html",
                   "section": "Practice Q/A", "keywords": "questions exercises self-check",
                   "snippet": "Self-check questions for each chapter."})
    search.append({"title": "Podcast", "href": "podcast.html",
                   "section": "Podcast", "keywords": "audio episodes listen",
                   "snippet": "Audio discussions for each chapter."})
    for i, m in enumerate(MODULES, 1):
        search.append({"title": "Practice Q/A — %s" % m["title"], "href": practice_file(i),
                       "section": "Practice Q/A", "keywords": "", "snippet": ""})
        search.append({"title": "Podcast — %s" % m["title"], "href": podcast_file(i),
                       "section": "Podcast", "keywords": "", "snippet": ""})

    for p in SECTION_PAGES + ABOUT_INCOSE_PAGES:
        search.append({"title": p["title"], "href": p["file"],
                       "section": p["section_label"], "keywords": "", "snippet": p["lede"]})
        h2s, _ = frag_headings("content/pages/" + p["file"])
        for text, hid in h2s:
            search.append({"title": text, "href": "%s#%s" % (p["file"], hid),
                           "section": p["title"], "keywords": "", "snippet": ""})

    data = {"brand": BRAND["name"], "groups": groups, "search": search}
    return "/* Auto-generated by tools/generate.py — edit the generator, not this file. */\nwindow.SITE = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"


# ---------------------------------------------------------------------------
# WRITE EVERYTHING
# ---------------------------------------------------------------------------

# Build bookkeeping (populated by write()) — powers the build report + guards.
GENERATED = []        # list of (path, is_placeholder)
SKIPPED = []          # pages we refused to overwrite to protect real content
PLACEHOLDER_MARKER = '<div class="note__label">Coming soon</div>'


def is_placeholder_html(s):
    """True if an HTML page is just a 'Coming soon' placeholder."""
    return PLACEHOLDER_MARKER in s


def write(path, content):
    full = os.path.join(ROOT, path)
    new_is_ph = path.endswith(".html") and is_placeholder_html(content)

    # GUARD: never silently replace a page that has real content with a placeholder.
    # The reliable signal is the placeholder marker itself: if the page on disk is NOT
    # a placeholder but the generator now has no content for it, refuse to overwrite.
    # This protects content authored directly in a generated HTML file (bypassing a
    # source). Move such content into a source, or delete the file, to clear it.
    if new_is_ph and os.path.exists(full):
        existing = open(full, encoding="utf-8").read()
        if existing.strip() and not is_placeholder_html(existing):
            SKIPPED.append(path)
            print("  !! WARNING: %s already has real content, but the generator has none "
                  "for it.\n     Skipped to avoid wiping it. Put its content in a source "
                  "(content/<name>.html\n     or inline blocks in MODULES) to silence this, "
                  "or delete the file to reset it." % path)
            return

    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    GENERATED.append((path, new_is_ph))
    print("wrote", path)


def read_text(path):
    """Read a pre-authored content fragment (relative to repo root).
    Fails loudly (rather than producing a blank page) if the file is missing."""
    full = os.path.join(ROOT, path)
    if not os.path.exists(full):
        raise SystemExit(
            "ERROR: content file '%s' is referenced by generate.py but does not exist.\n"
            "Create it (or fix the path) before building." % path)
    with open(full, encoding="utf-8") as f:
        return f.read().strip()


def main():
    pages = 0
    write("index.html", home_page()); pages += 1

    # ---- Chapters: a landing page + three sub-pages each ----
    for i, m in enumerate(MODULES, 1):
        study_tiles = [(icon, title, blurb, subfile(m["file"], suffix), "Open")
                       for title, _k, suffix, icon, blurb in CHAPTER_SECTIONS]
        extra_tiles = [
            ("✅", "Practice Q/A", "Test yourself on %s." % m["title"], practice_file(i), "Practice"),
            ("\U0001F3A7", "Podcast", "Listen to the %s discussion." % m["title"], podcast_file(i), "Listen"),
        ]
        tile_sets = [
            ("Study this chapter", None, study_tiles),
            ("Practice & listen", None, extra_tiles),
        ]
        write(m["file"], landing_page(m["title"], m["lede"],
              [("Home", "index.html"), (m["title"], None)], tile_sets)); pages += 1

        subs = [(title, suffix) for title, _key, suffix, _icon, _blurb in CHAPTER_SECTIONS]
        for j, (title, _key, suffix, _icon, blurb) in enumerate(CHAPTER_SECTIONS):
            fname = subfile(m["file"], suffix)
            prevl = (subs[j - 1][0], subfile(m["file"], subs[j - 1][1])) if j > 0 else (m["title"], m["file"])
            nextl = (subs[j + 1][0], subfile(m["file"], subs[j + 1][1])) if j < len(subs) - 1 else None
            crumbs = [("Home", "index.html"), (m["title"], m["file"]), (title, None)]
            ptitle = "%s — %s" % (m["title"], title)
            src = chapter_src(i, suffix)
            if src:
                # Content is auto-discovered from content/chapters/ch<N>/<suffix>.html and
                # wrapped in the current shell, so a regenerate never wipes it. Custom intro
                # via SUBPAGE_LEDES; otherwise the page inherits its chapter's lede.
                lede = SUBPAGE_LEDES.get((i, suffix)) or m["lede"]
                write(fname, page_shell(ptitle, lede, crumbs, read_text(src), prevl, nextl)); pages += 1
            else:
                lede = "%s for %s — coming soon." % (title, m["title"])
                write(fname, prose_page(ptitle, lede, crumbs,
                      placeholder_blocks(blurb), prevl, nextl)); pages += 1

    # ---- Practice Q/A: landing + per-chapter pages ----
    practice_tiles = []
    for i, m in enumerate(MODULES, 1):
        if i in PRACTICE_CHAPTERS:
            _id, name, count = PRACTICE_CHAPTERS[i]
            practice_tiles.append(("✅", m["title"], "%s — %d questions." % (name, count),
                                   practice_file(i), "Start practising"))
        else:
            practice_tiles.append(("\U0001F553", m["title"], "Practice questions coming soon.",
                                   practice_file(i), "Coming soon"))
    write("practice-questions.html", landing_page(
        "Practice Q/A", "Self-check questions for each chapter — pick a chapter to begin.",
        [("Home", "index.html"), ("Practice Q/A", None)],
        [("Practice by chapter", None, practice_tiles)])); pages += 1
    for i, m in enumerate(MODULES, 1):
        crumbs = [("Home", "index.html"), ("Practice Q/A", "practice-questions.html"), (m["title"], None)]
        if i in PRACTICE_CHAPTERS:
            data_id, name, count = PRACTICE_CHAPTERS[i]
            lede = ("%s — %d multiple-choice questions. Choose how many and in what order, "
                    "answer at your own pace, then submit to score and review with explanations."
                    % (name, count))
            body = '<div id="quiz" data-chapter="%s"></div>' % data_id
            write(practice_file(i), page_shell("Practice Q/A — %s" % m["title"], lede, crumbs,
                  body, extra_scripts=PRACTICE_SCRIPTS)); pages += 1
        else:
            blocks = placeholder_blocks("Practice questions for %s will appear here." % m["title"])
            write(practice_file(i), prose_page("Practice Q/A — %s" % m["title"],
                  "Self-check questions for %s — coming soon." % m["title"], crumbs, blocks)); pages += 1

    # ---- Podcast: landing + per-chapter pages ----
    podcast_tiles = [("\U0001F3A7", m["title"], "Podcast episode for %s." % m["title"], podcast_file(i), "Open")
                     for i, m in enumerate(MODULES, 1)]
    write("podcast.html", landing_page(
        "Podcast", "Audio discussions for each chapter — pick a chapter to listen.",
        [("Home", "index.html"), ("Podcast", None)],
        [("Podcast by chapter", None, podcast_tiles)])); pages += 1
    for i, m in enumerate(MODULES, 1):
        crumbs = [("Home", "index.html"), ("Podcast", "podcast.html"), (m["title"], None)]
        ptitle = "Podcast — %s" % m["title"]
        src = podcast_src(i)
        if src:
            # Auto-discovered from content/podcasts/ch<N>.html; needs the audio-player script.
            lede = "Audio discussions for %s. Choose the short summary or the full deep-dive." % m["title"]
            write(podcast_file(i), page_shell(ptitle, lede, crumbs, read_text(src),
                  extra_scripts=PODCAST_SCRIPTS)); pages += 1
        else:
            blocks = placeholder_blocks("The podcast episode and notes for %s will appear here." % m["title"])
            write(podcast_file(i), prose_page(ptitle,
                  "Podcast for %s — coming soon." % m["title"], crumbs, blocks)); pages += 1

    # ---- Weekly plan & case studies ----
    for p in SECTION_PAGES:
        write(p["file"], content_page(p, [("Home", "index.html"), (p["title"], None)])); pages += 1

    # ---- About INCOSE pages ----
    a = len(ABOUT_INCOSE_PAGES)
    for i, p in enumerate(ABOUT_INCOSE_PAGES):
        prevl = (ABOUT_INCOSE_PAGES[i - 1]["title"], ABOUT_INCOSE_PAGES[i - 1]["file"]) if i > 0 else None
        nextl = (ABOUT_INCOSE_PAGES[i + 1]["title"], ABOUT_INCOSE_PAGES[i + 1]["file"]) if i < a - 1 else None
        crumbs = [("Home", "index.html"), ("About INCOSE", None), (p["title"], None)]
        write(p["file"], content_page(p, crumbs, prevl, nextl)); pages += 1

    write("assets/site-data.js", build_site_data())
    build_report()


def build_report():
    html_pages = [(p, ph) for p, ph in GENERATED if p.endswith(".html")]
    placeholders = sorted(p for p, ph in html_pages if ph)
    rich = [p for p, ph in html_pages if not ph]
    print("\n=== Build report ===")
    print("  %d HTML pages: %d with content, %d placeholder."
          % (len(html_pages), len(rich), len(placeholders)))
    if placeholders:
        print("  Placeholders still to fill (add a source to turn these into real pages):")
        for p in placeholders:
            print("    - " + p)
    if SKIPPED:
        print("  !! %d page(s) SKIPPED to protect existing content — see warnings above:"
              % len(SKIPPED))
        for p in SKIPPED:
            print("    - " + p)
    print("\nTip: run `git diff --stat` now — only the pages you intended to change "
          "should appear.\n     If an unexpected page shows up, that update touched "
          "more than intended.")


if __name__ == "__main__":
    main()
