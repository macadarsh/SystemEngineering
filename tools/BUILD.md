# Build & content guide

This site is **generated**. `tools/generate.py` rebuilds every HTML page from a few
sources. The golden rule:

> **Never edit a generated `*.html` file directly.** The next build overwrites it.
> Edit the *source* instead (see below), then run the build.

```bash
python3 tools/generate.py     # run from the repo root
```

The build prints a report and a `git diff --stat` tip at the end.

---

## How the pieces fit

| Layer | Lives in | When you touch it |
|------|----------|-------------------|
| **Structure / template** (head, nav, sidebar, page shell, scripts, theme) | `tools/generate.py` functions + `assets/styles.css`, `assets/app.js` | Upgrading the look/layout of *every* page at once |
| **Site map** (which chapters/pages exist, order, sidebar groups) | `MODULES`, `SECTION_PAGES`, `ABOUT_INCOSE_PAGES`, `NAV`, `CHAPTER_SECTIONS` in `generate.py` | Adding/removing/reordering pages |
| **Chapter & podcast content** | HTML fragments under `content/` (see `content/README.md`) | Writing/editing a page's content |
| **Media** (images, video, audio) | `assets/img/ch<N>/`, `assets/video/ch<N>/`, `assets/audio/` | Adding figures/videos/audio |
| **Practice questions** | `assets/practice-data.js` (+ engine `assets/practice.js`) | Adding/editing quiz questions |

All editable page content lives under `content/` in one consistent layout (one fragment
file per page). The build **auto-discovers** these files, so adding content never
requires editing `generate.py`. See `content/README.md` for the folder map.

Because content and structure are separate, the two kinds of change don't collide:
- **Adding content** to one page edits one source → only that page changes.
- **Upgrading structure** edits the template → every page re-renders, but content is
  pulled fresh from its source, so nothing is lost.

---

## Recipes

### Add or edit a chapter's Quick Recap / Core Concepts / Detailed Review

Content is **auto-discovered** from `content/chapters/ch<N>/<section>.html`, where
`<section>` is `quick-recap`, `core-concepts`, or `detailed-review`. Just create (or
edit) the fragment and build — no `generate.py` change needed. Examples:

- Fill Chapter 3 Core Concepts → create `content/chapters/ch3/core-concepts.html`.
- Edit Chapter 2 Detailed Review → edit `content/chapters/ch2/detailed-review.html`.

A fragment is the page **body** only (headings, paragraphs, tables, figures). Reference
images with a root-relative path, e.g. `<img src="assets/img/ch3/fig-1.png">`. A page
with no fragment stays a **"Coming soon"** placeholder. For a custom intro line, add an
entry to `SUBPAGE_LEDES` in `generate.py` keyed by `(chapter#, "section-suffix")`;
otherwise the page inherits its chapter's lede. (See `content/README.md`.)

### Add or edit a chapter's podcast

Create `content/podcasts/ch<N>.html` with the audio-player markup (the build auto-loads
`assets/podcast-player.js`). Put the audio in `assets/audio/`. Build.

### Edit a standalone article page (Weekly Plan, Case Studies, About INCOSE)

These live in `content/pages/<file>.html` (same name as the output page, e.g.
`content/pages/weekly-plan.html`). Edit the fragment and build. Their existence/title/
lede/order are defined by `SECTION_PAGES` / `ABOUT_INCOSE_PAGES` in `generate.py`; the
body is the fragment.

### Add a new chapter's questions to Practice

1. Add the questions to `assets/practice-data.js` under a new id, e.g.
   `window.PRACTICE.ch3 = { no:3, title:"…", questions:[ {n,q,options,correct,explanation}, … ] }`
   (`correct` is the 0-based index of the right option).
2. In `generate.py`, add the chapter to `PRACTICE_CHAPTERS`, e.g.
   `3: ("ch3", "Chapter 3 name", 100)`.
3. Build. That chapter's practice page becomes an interactive quiz; the others are
   untouched.

`practice-data.js` is **not** generated — keep it in sync by hand. (It's data/JS, so it
stays under `assets/` rather than `content/`.)

### Upgrade the structure / template

Edit the relevant function in `generate.py` (e.g. `page_shell`, `nav_block`, `head`)
or the shared `assets/styles.css` / `assets/app.js`, then build. All pages pick up the
change; content is re-wrapped, not rewritten.

---

## Safety nets (built into the build)

- **Anti-clobber guard.** If a page on disk has real content but the generator has no
  source for it, the build **skips that page and warns** instead of replacing it with a
  placeholder. (This is what previously wiped Chapter 2's content.) To clear the
  warning: move the content into a source, or delete the stale file to reset it.
- **Missing-file error.** If a `content/…` file referenced in `generate.py` is missing,
  the build stops with a clear error rather than producing a blank page.
- **Build report.** Lists how many pages have content vs. placeholders, and names every
  placeholder still to fill.
- **Deterministic output.** No timestamps are baked in, so two builds are byte-identical.

## Confirm an update only touched what you intended

```bash
python3 tools/generate.py
git diff --stat        # only the pages you meant to change should appear
```

If an unexpected page shows up in the diff, that change reached further than intended —
investigate before committing.
