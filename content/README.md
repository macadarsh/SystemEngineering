# `content/` — page content (source of truth)

Everything here is **source**. The build (`python3 tools/generate.py`) reads these
files and produces the finished `*.html` pages in the repo root. **Never edit the
generated pages directly** — edit the files here and rebuild.

## Layout

```
content/
  chapters/
    ch<N>/
      quick-recap.html      → chapter-<N>-quick-recap.html
      core-concepts.html    → chapter-<N>-core-concepts.html
      detailed-review.html  → chapter-<N>-detailed-review.html
  podcasts/
    ch<N>.html              → podcast-chapter-<N>.html
```

Each file is the **body** of one page (HTML fragment — headings, paragraphs, tables,
figures, players). The site shell (nav, sidebar, theme, scripts) is added by the build.

Media lives under `assets/`, by type, with per-chapter subfolders for the big stuff:

```
assets/img/ch<N>/...      images / figures for chapter N
assets/video/ch<N>/...    videos for chapter N   (add as needed)
assets/audio/...          podcast audio (already chapter-named, e.g. ch2-short.m4a)
```

Reference media from a fragment with a root-relative path, e.g.
`<img src="assets/img/ch2/fig-2-01.png">`.

## Auto-discovery — adding a page is just adding a file

The build **auto-discovers** these files. To fill a "Coming soon" page, drop the
fragment at the path above and rebuild — no generator edit needed. Examples:

- Chapter 3 Core Concepts → create `content/chapters/ch3/core-concepts.html`.
- Chapter 4 podcast → create `content/podcasts/ch4.html` (audio player markup; the
  build auto-loads `assets/podcast-player.js`).

A page with no fragment renders a "Coming soon" placeholder. (The `.gitkeep` files just
keep the empty chapter folders in version control so the structure is visible.)

## Ledes (the intro line under the title)

By default a sub-page inherits its chapter's lede. To give one a custom intro, add an
entry to `SUBPAGE_LEDES` in `tools/generate.py`, keyed by `(chapter#, "suffix")`.

## Practice questions

These are data, not a fragment — they live in `assets/practice-data.js`
(`window.PRACTICE`). See `tools/BUILD.md`.

See `tools/BUILD.md` for the full workflow and the build's safety guards.
