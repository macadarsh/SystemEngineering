# Learn System Engineering

A static learning site (GitHub-Pages ready) mirroring the structure of the Java site.
Currently a **structural template** with light, generic placeholder content — real
content will be curated later from your own sources.

## Features
- Homepage with hero + numbered sections (Goal, Modules, Plan, Practice, Apply)
- Three-panel content pages: **left** = full site index, **center** = content, **right** = "In this article" TOC (auto-built, with scroll-spy)
- Client-side **search** (Ctrl/Cmd-K or `/`)
- **Light/dark** theme + **text-size** toggle (both remembered)
- Fully **responsive** — on mobile the left index becomes a slide-in drawer (☰) and all nav tools stay available

## Structure
```
index.html              Homepage
intro-to-se.html …      12 module pages (three-panel)
weekly-plan.html        12-week study plan
practice-questions.html Self-check Q&A
case-studies.html       Illustrative examples
what-is-incose.html     About INCOSE — overview
incose-exams.html       About INCOSE — SEP certification & exams
assets/styles.css       All styling + themes
assets/app.js           Theme, search, TOC, drawer, etc.
assets/site-data.js     AUTO-GENERATED — sidebar index + search data
tools/generate.py       Source of truth — regenerates all pages
```

## Editing content
Two options:

1. **Edit the HTML directly** — change the text inside `<main class="content">` on any page. The TOC and search-within-page rebuild automatically.
2. **Edit `tools/generate.py`** (recommended for adding/removing pages) — update the `MODULES` / `SECTION_PAGES` data, then run:
   ```bash
   python3 tools/generate.py
   ```
   This regenerates every page **and** `assets/site-data.js` so the sidebar and search stay in sync.

## Publish (GitHub Pages)
Push to a repo and enable Pages on the branch root, or keep using your existing
`macadarsh.github.io` setup. No build step required — it's plain HTML/CSS/JS.
