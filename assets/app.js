/* =========================================================================
   Learn System Engineering — shared interactivity
   Depends on assets/site-data.js (defines window.SITE)
   Handles: theme, font-size, mobile drawer, sidebar render, on-page TOC
            with scroll-spy, client-side search, back-to-top.
   ========================================================================= */
(function () {
  "use strict";
  var SITE = window.SITE || { groups: [], search: [] };
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var LS = window.localStorage;

  var currentFile = (location.pathname.split("/").pop() || "index.html") || "index.html";

  /* --------------------------------------------------- APPEARANCE PANEL */
  /* Controls background theme, font family, reading density, text size.
     The no-flash inline script in <head> applies saved values on load;
     here we wire the panel controls and keep their active states in sync. */
  function initAppearance() {
    var d = document.documentElement;
    var panel = $("#appearance-panel");
    var btn   = $(".js-appearance");
    var back  = $(".js-appearance-backdrop");

    // make sure attributes exist so CSS selectors + active states resolve
    if (!d.getAttribute("data-font"))    d.setAttribute("data-font", "sans");
    if (!d.getAttribute("data-density")) d.setAttribute("data-density", "cozy");
    if (!d.getAttribute("data-theme"))   d.setAttribute("data-theme", "light");

    function curSize() {
      var v = parseFloat(getComputedStyle(d).getPropertyValue("--fs-scale"));
      return isNaN(v) ? 1 : v;
    }
    function sync() {
      var bg = d.getAttribute("data-theme"), font = d.getAttribute("data-font"),
          den = d.getAttribute("data-density"), sz = curSize();
      $$(".js-bg").forEach(function (b) { b.classList.toggle("is-active", b.dataset.bg === bg); });
      $$(".js-font").forEach(function (b) { b.classList.toggle("is-active", b.dataset.font === font); });
      $$(".js-density").forEach(function (b) { b.classList.toggle("is-active", b.dataset.density === den); });
      $$(".js-size").forEach(function (b) { b.classList.toggle("is-active", parseFloat(b.dataset.size) === sz); });
    }

    if (!panel) { return; }

    function open()  { panel.hidden = false; if (back) back.hidden = false; if (btn) btn.setAttribute("aria-expanded", "true"); sync(); }
    function close() { panel.hidden = true;  if (back) back.hidden = true;  if (btn) btn.setAttribute("aria-expanded", "false"); }
    function toggle(){ panel.hidden ? open() : close(); }

    if (btn)  btn.addEventListener("click", function (e) { e.stopPropagation(); toggle(); });
    if (back) back.addEventListener("click", close);
    window.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    $$(".js-bg").forEach(function (b) { b.addEventListener("click", function () {
      d.setAttribute("data-theme", b.dataset.bg); LS.setItem("lse-theme", b.dataset.bg); sync();
    }); });
    $$(".js-font").forEach(function (b) { b.addEventListener("click", function () {
      d.setAttribute("data-font", b.dataset.font); LS.setItem("lse-font", b.dataset.font); sync();
    }); });
    $$(".js-density").forEach(function (b) { b.addEventListener("click", function () {
      d.setAttribute("data-density", b.dataset.density); LS.setItem("lse-density", b.dataset.density); sync();
    }); });
    $$(".js-size").forEach(function (b) { b.addEventListener("click", function () {
      d.style.setProperty("--fs-scale", b.dataset.size); LS.setItem("lse-fs", b.dataset.size); sync();
    }); });

    var reset = $(".js-appearance-reset");
    if (reset) reset.addEventListener("click", function () {
      ["lse-theme", "lse-font", "lse-density", "lse-fs"].forEach(function (k) { LS.removeItem(k); });
      var sys = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
      d.setAttribute("data-theme", sys);
      d.setAttribute("data-font", "sans");
      d.setAttribute("data-density", "cozy");
      d.style.setProperty("--fs-scale", "1");
      sync();
    });

    sync();
  }

  /* --------------------------------------------------------- MOBILE DRAWER */
  function initDrawer() {
    var sidebar  = $(".sidebar");
    var backdrop = $(".backdrop");
    var burger   = $(".nav__burger");
    function open()  { if (sidebar) sidebar.classList.add("is-open"); if (backdrop) backdrop.classList.add("is-open"); }
    function close() { if (sidebar) sidebar.classList.remove("is-open"); if (backdrop) backdrop.classList.remove("is-open"); }
    if (burger)   burger.addEventListener("click", open);
    if (backdrop) backdrop.addEventListener("click", close);
    var closeBtn = $(".js-drawer-close");
    if (closeBtn) closeBtn.addEventListener("click", close);
    // close drawer when a sidebar link is tapped (mobile)
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest(".sidebar__link, .sidebar__sublink");
      if (a && window.innerWidth <= 920) close();
    });
    window.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* -------------------------------------------------------- SIDEBAR RENDER */
  function renderSidebar() {
    var host = $("#sidebar-nav");
    if (!host) return;
    var html = "";
    (SITE.groups || []).forEach(function (g) {
      html += '<div class="sidebar__group">';
      html += '<p class="sidebar__title">' + esc(g.title) + "</p>";
      g.items.forEach(function (it) {
        var kids = it.children || [];
        var childHere = kids.some(function (ch) { return ch.href === currentFile; });
        var selfHere = it.href === currentFile;
        var active = (selfHere || childHere) ? " is-active" : "";
        var num = it.num ? '<span class="num">' + esc(it.num) + "</span>" : '<span class="num"></span>';
        if (kids.length) {
          var expanded = selfHere || childHere;  // active parent auto-expands
          html += '<div class="sidebar__item' + (expanded ? " is-expanded" : "") + '">';
          html += '<div class="sidebar__row">';
          html += '<a class="sidebar__link' + active + '" href="' + it.href + '">' + num + "<span>" + esc(it.label) + "</span></a>";
          html += '<button class="sidebar__caret" aria-label="Toggle ' + esc(it.label) + '" aria-expanded="' + (expanded ? "true" : "false") + '"><span class="chev">&#9656;</span></button>';
          html += "</div>";
          html += '<div class="sidebar__sub">';
          kids.forEach(function (ch) {
            var ca = ch.href === currentFile ? " is-active" : "";
            html += '<a class="sidebar__sublink' + ca + '" href="' + ch.href + '">' + esc(ch.label) + "</a>";
          });
          html += "</div></div>";
        } else {
          html += '<a class="sidebar__link' + active + '" href="' + it.href + '">' + num + "<span>" + esc(it.label) + "</span></a>";
        }
      });
      html += "</div>";
    });
    host.innerHTML = html;

    // caret toggles expand/collapse without navigating
    $$(".sidebar__caret", host).forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var item = btn.closest(".sidebar__item");
        if (!item) return;
        var open = item.classList.toggle("is-expanded");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ---------------------------------------------- ON-PAGE TOC + SCROLL SPY */
  function slugify(s) {
    return s.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
  }
  function buildToc() {
    var article = $(".content__inner");
    if (!article) return;
    var toc   = $("#toc-list");
    var heads = $$("h2, h3", article);
    if (!heads.length) {
      if (toc) toc.innerHTML = '<p class="toc__empty">No sections on this page.</p>';
      return;
    }

    heads.forEach(function (h) { if (!h.id) h.id = slugify(h.textContent); });
    var linkHtml = heads.map(function (h) {
      var lvl = h.tagName === "H3" ? " lvl-3" : "";
      return '<a class="toc-link' + lvl + '" href="#' + h.id + '">' + esc(h.textContent) + "</a>";
    }).join("");

    if (toc) toc.innerHTML = linkHtml;
    addAnchors(heads);

    // scroll spy keeps both the right-hand TOC and the section-jump popover in sync
    var tocLinks  = toc ? $$(".toc-link", toc) : [];
    var jumpLinks = buildSectionJump(linkHtml);
    function spy() {
      var pos = window.scrollY + (parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 62) + 24;
      var idx = 0;
      heads.forEach(function (h, i) { if (h.offsetTop <= pos) idx = i; });
      tocLinks.forEach(function (l, i) { l.classList.toggle("is-active", i === idx); });
      jumpLinks.forEach(function (l, i) { l.classList.toggle("is-active", i === idx); });
    }
    window.addEventListener("scroll", throttle(spy, 100));
    spy();
  }

  /* Floating "jump to a section" control (down-arrow, top-right).
     Appears after the reader scrolls down a little; opens a popover listing
     the same sections as the right-hand panel — handy on mobile, where that
     panel is hidden. Returns the popover's links so scroll-spy can track them. */
  function buildSectionJump(linkHtml) {
    var btn = document.createElement("button");
    btn.className = "sectjump";
    btn.setAttribute("aria-label", "Jump to a section on this page");
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = '<span class="sectjump__chev" aria-hidden="true">' +
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<polyline points="6 9 12 15 18 9"></polyline></svg></span>';

    var backdrop = document.createElement("div");
    backdrop.className = "sectjump-backdrop"; backdrop.hidden = true;

    var panel = document.createElement("div");
    panel.className = "sectjump-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Sections on this page");
    panel.hidden = true;
    panel.innerHTML = '<p class="sectjump-panel__title">In this article</p>' + linkHtml;

    document.body.appendChild(backdrop);
    document.body.appendChild(panel);
    document.body.appendChild(btn);

    function open()  { panel.hidden = false; backdrop.hidden = false; btn.classList.add("is-open");    btn.setAttribute("aria-expanded", "true"); }
    function close() { panel.hidden = true;  backdrop.hidden = true;  btn.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); }

    btn.addEventListener("click", function (e) { e.stopPropagation(); panel.hidden ? open() : close(); });
    backdrop.addEventListener("click", close);
    $$("a", panel).forEach(function (a) { a.addEventListener("click", close); });
    window.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    // visible only once scrolled down a bit; hidden (and closed) back at the top
    window.addEventListener("scroll", throttle(function () {
      if (window.scrollY > 300) { btn.classList.add("is-visible"); }
      else { btn.classList.remove("is-visible"); close(); }
    }, 150));

    return $$("a", panel);
  }
  function addAnchors(heads) {
    heads.forEach(function (h) {
      if (!h.id) h.id = slugify(h.textContent);
      if (h.querySelector(".anchor")) return;
      var a = document.createElement("a");
      a.className = "anchor"; a.href = "#" + h.id; a.textContent = "#";
      a.setAttribute("aria-label", "Link to this section");
      h.appendChild(a);
    });
  }

  /* ----------------------------------------------------------------- SEARCH */
  /* Full-text search across every page. The index (window.SEARCH_DOCS, built
     by tools/build_search_index.py and shipped as assets/search-index.js) is
     loaded lazily. Query syntax mirrors the reference site:
       "exact phrase"   words must appear together
       +required        the page must contain this word
       plain words      match ANY; pages with more matches rank higher
     Results are tiles (one per page) with per-section snippets; clicking a hit
     jumps to the exact spot on the real page and highlights the term. */

  var SEARCH = null;          // overlay element (built once)
  var SEARCH_DOCS = null;     // the index, once loaded
  var _searchQuery = "";
  var _idxLoading = false, _idxCallbacks = [];

  function loadSearchIndex(cb) {
    if (window.SEARCH_DOCS) { SEARCH_DOCS = window.SEARCH_DOCS; if (cb) cb(); return; }
    if (cb) _idxCallbacks.push(cb);
    if (_idxLoading) return;
    _idxLoading = true;
    var s = document.createElement("script");
    s.src = "assets/search-index.js";
    function done() {
      SEARCH_DOCS = window.SEARCH_DOCS || [];
      _idxLoading = false;
      var cbs = _idxCallbacks; _idxCallbacks = [];
      cbs.forEach(function (f) { f(); });
    }
    s.onload = done; s.onerror = done;
    document.head.appendChild(s);
  }

  /* "phrase" / +required / plain terms ---------------------------------- */
  function parseQuery(q) {
    var phrases = [];
    var rest = String(q).replace(/"([^"]+)"/g, function (m, p) {
      var t = p.trim().toLowerCase(); if (t) phrases.push(t); return " ";
    });
    var required = [], terms = [];
    rest.split(/\s+/).forEach(function (tok) {
      tok = tok.trim(); if (!tok) return;
      if (tok.charAt(0) === "+" && tok.length > 1) required.push(tok.slice(1).toLowerCase());
      else terms.push(tok.toLowerCase());
    });
    return { phrases: phrases, required: required, terms: terms,
             tokens: phrases.concat(required, terms) };
  }

  /* Rank pages; collect up to 4 section hits each, with context lines. */
  function runSearch(q) {
    var p = parseQuery(q);
    if (!p.tokens.length) return [];
    var results = [];
    (SEARCH_DOCS || []).forEach(function (entry) {
      var titleLower = (entry.pageTitle + " " + (entry.moduleTitle || "")).toLowerCase();
      var combined = (titleLower + "\n" +
        entry.sections.map(function (s) { return s.lines.join("\n"); }).join("\n")).toLowerCase();

      if (!p.phrases.every(function (t) { return combined.indexOf(t) >= 0; })) return;
      if (!p.required.every(function (t) { return combined.indexOf(t) >= 0; })) return;
      if (p.terms.length && !p.terms.some(function (t) { return combined.indexOf(t) >= 0; })) return;

      var score = 0;
      p.tokens.forEach(function (t) { if (titleLower.indexOf(t) >= 0) score += 5; });
      var matches = [];
      entry.sections.forEach(function (sec) {
        var headingLower = sec.heading.toLowerCase();
        sec.lines.forEach(function (line, li) {
          var lower = line.toLowerCase();
          var tok = null;
          for (var k = 0; k < p.tokens.length; k++) {
            if (lower.indexOf(p.tokens[k]) >= 0) { tok = p.tokens[k]; break; }
          }
          if (!tok) return;
          score += 1 + (headingLower.indexOf(tok) >= 0 ? 1 : 0);
          if (matches.length < 4) {
            matches.push({
              sectionId: sec.id, heading: sec.heading, token: tok, line: line,
              prev: li > 0 ? sec.lines[li - 1] : "",
              next: li < sec.lines.length - 1 ? sec.lines[li + 1] : ""
            });
          }
        });
      });
      if (!matches.length) {  // matched only in the title
        var ttok = p.tokens[0];
        for (var j = 0; j < p.tokens.length; j++) {
          if (titleLower.indexOf(p.tokens[j]) >= 0) { ttok = p.tokens[j]; break; }
        }
        matches.push({ sectionId: (entry.sections[0] || {}).id || "", heading: "Page title",
                       token: ttok, line: entry.pageTitle, prev: "", next: "" });
      }
      results.push({ href: entry.href, pageTitle: entry.pageTitle,
                     moduleTitle: entry.moduleTitle, matches: matches, score: score });
    });
    results.sort(function (a, b) { return b.score - a.score; });
    return results;
  }

  /* Bold every occurrence of token inside an (escaped) line. */
  function emph(line, token) {
    var out = esc(line);
    if (!token) return out;
    var rx = new RegExp("(" + token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return out.replace(rx, '<strong class="so-kw">$1</strong>');
  }
  /* Compact snippet: ~4 words either side of the matched word. */
  function compactSnippet(line, token) {
    var words = line.split(/\s+/);
    var first = token.split(" ")[0];
    var wi = -1;
    for (var k = 0; k < words.length; k++) {
      if (words[k].toLowerCase().indexOf(first) >= 0) { wi = k; break; }
    }
    if (wi < 0) wi = 0;
    var start = Math.max(0, wi - 4), end = Math.min(words.length, wi + 5);
    var snip = words.slice(start, end).join(" ");
    if (start > 0) snip = "… " + snip;
    if (end < words.length) snip += " …";
    return emph(snip, token);
  }

  function renderResultsHTML(q, results) {
    if (!results.length) {
      return '<div class="so-empty">No matches for <strong>' + esc(q) + '</strong>.' +
        '<br>Try fewer or different words, the <code>"exact phrase"</code> / <code>+word</code> ' +
        'helpers, or the “Try the web” button above.</div>';
    }
    var grid = results.map(function (p) {
      var hits = p.matches.map(function (m) {
        var compact = '<span class="so-hit-compact">' + compactSnippet(m.line, m.token) + '</span>';
        var detail = '<span class="so-hit-detail">';
        if (m.prev) detail += '<span class="so-ctx">' + emph(m.prev, m.token) + '</span>';
        detail += '<span class="so-cur">' + emph(m.line, m.token) + '</span>';
        if (m.next) detail += '<span class="so-ctx">' + emph(m.next, m.token) + '</span>';
        detail += '</span>';
        return '<button class="so-hit" type="button" ' +
          'data-href="' + esc(p.href) + '" data-sec="' + esc(m.sectionId) + '" ' +
          'data-hl="' + esc(m.token) + '">' +
          '<span class="so-hit-sec">' + esc(m.heading) + '</span>' +
          compact + detail + '</button>';
      }).join("");
      return '<div class="so-tile">' +
        '<div class="so-tile-title">' + esc(p.pageTitle) + '</div>' +
        (p.moduleTitle ? '<div class="so-tile-module">' + esc(p.moduleTitle) + '</div>' : "") +
        hits + '</div>';
    }).join("");
    return '<div class="so-grid">' + grid + '</div>';
  }

  /* Build the overlay once, reusing the page's existing #search-overlay node. */
  function ensureSearchOverlay() {
    if (SEARCH) return SEARCH;
    var ov = $("#search-overlay");
    if (!ov) { ov = document.createElement("div"); ov.id = "search-overlay"; document.body.appendChild(ov); }
    ov.className = "search-overlay";
    ov.setAttribute("role", "dialog");
    ov.setAttribute("aria-modal", "true");
    ov.setAttribute("aria-label", "Search");
    ov.hidden = true;
    ov.innerHTML =
      '<div class="so-panel">' +
        '<div class="so-bar">' +
          '<span class="so-bar-ic" aria-hidden="true">&#128269;</span>' +
          '<input class="so-input" id="search-input" type="text" placeholder="Search the site…" ' +
            'aria-label="Search" autocomplete="off" spellcheck="false">' +
          '<button class="so-go" type="button">Search</button>' +
          '<a class="so-tips-toggle" role="button" tabindex="0">How to search better &#9662;</a>' +
          '<button class="so-close js-search-close" type="button" aria-label="Close search" title="Close (Esc)">&#10005;</button>' +
        '</div>' +
        '<div class="so-tips" hidden>' +
          '<strong>Search tips</strong>' +
          '<ul>' +
            '<li><b>Exact phrase</b> — wrap words in quotes: <code>"life cycle"</code> finds those words together.</li>' +
            '<li><b>Require a word</b> — put <code>+</code> in front: <code>+risk +process</code> returns only pages containing <em>both</em>.</li>' +
            '<li><b>Any words</b> — plain words match pages containing <em>any</em> of them; pages with more matches rank higher.</li>' +
            '<li><b>Combine them</b> — e.g. <code>+verification "decision gate"</code>.</li>' +
          '</ul>' +
        '</div>' +
        '<div class="so-toolbar">' +
          '<button class="so-google" type="button">&#127760; Don\'t find it here? Try the web …</button>' +
          '<span class="so-count"></span>' +
          '<button class="so-detail-toggle" type="button">See more details …</button>' +
        '</div>' +
        '<div class="so-results" id="search-results"></div>' +
      '</div>' +
      '<button class="so-totop" type="button" title="Back to top" aria-label="Back to top">&#8593;</button>';
    SEARCH = ov;

    var qa = function (sel) { return ov.querySelector(sel); };
    var input = qa(".so-input");
    qa(".so-close").addEventListener("click", closeSearch);
    qa(".so-go").addEventListener("click", function () { doSearch(input.value); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); doSearch(input.value); }
      else if (e.key === "Escape") { closeSearch(); }
    });
    // live, as-you-type results (debounced)
    var t;
    input.addEventListener("input", function () {
      clearTimeout(t); t = setTimeout(function () { doSearch(input.value); }, 110);
    });
    qa(".so-tips-toggle").addEventListener("click", function () {
      var tips = qa(".so-tips"); tips.hidden = !tips.hidden;
    });
    qa(".so-detail-toggle").addEventListener("click", function () {
      var res = qa(".so-results"); var on = res.classList.toggle("detailed");
      qa(".so-detail-toggle").textContent = on ? "Show less ▴" : "See more details …";
    });
    qa(".so-google").addEventListener("click", function () {
      var term = (_searchQuery || input.value || "").trim();
      var url = "https://www.google.com/search?q=" +
        encodeURIComponent("systems engineering — " + term);
      window.open(url, "_blank", "noopener");
    });
    qa(".so-totop").addEventListener("click", function () { ov.scrollTo({ top: 0, behavior: "smooth" }); });
    ov.addEventListener("scroll", function () {
      qa(".so-totop").classList.toggle("visible", ov.scrollTop > 240);
    }, { passive: true });
    // delegated click → jump to the exact spot on the real page
    qa(".so-results").addEventListener("click", function (e) {
      var hit = e.target.closest && e.target.closest(".so-hit");
      if (!hit) return;
      var d = hit.dataset;
      var qs = "hl=" + encodeURIComponent(d.hl);
      if (d.sec) qs = "sec=" + encodeURIComponent(d.sec) + "&" + qs;
      window.location.href = d.href + "?" + qs + (d.sec ? "#" + d.sec : "");
    });
    return ov;
  }

  /* Render results for a query into the (already-open) overlay. */
  function doSearch(q) {
    q = (q || "").trim();
    _searchQuery = q;
    var ov = ensureSearchOverlay();
    var res = ov.querySelector(".so-results");
    var count = ov.querySelector(".so-count");
    if (!SEARCH_DOCS) {
      res.innerHTML = '<div class="so-empty">Loading search index…</div>';
      loadSearchIndex(function () { doSearch(q); });
      return;
    }
    res.classList.remove("detailed");
    ov.querySelector(".so-detail-toggle").textContent = "See more details …";
    if (!q) {
      count.textContent = "";
      res.innerHTML = '<div class="so-empty">Type a keyword to search every page — titles, sections, and content.</div>';
      return;
    }
    var results = runSearch(q);
    count.textContent = results.length + (results.length === 1 ? " page" : " pages") + " for “" + q + "”";
    res.innerHTML = renderResultsHTML(q, results);
  }

  function openSearch(q) {
    q = (q || "").trim();
    var ov = ensureSearchOverlay();
    var input = ov.querySelector(".so-input");
    input.value = q;
    ov.hidden = false;
    ov.classList.add("is-open");
    document.body.classList.add("search-open");
    ov.scrollTop = 0;
    loadSearchIndex(function () { doSearch(q); });
    setTimeout(function () { input.focus(); }, 50);
  }
  function closeSearch() {
    if (!SEARCH) return;
    SEARCH.hidden = true;
    SEARCH.classList.remove("is-open");
    document.body.classList.remove("search-open");
  }

  function initSearch() {
    ensureSearchOverlay();   // build + hide now (prevents a flash of the old static overlay)
    $$(".js-search-open").forEach(function (b) { b.addEventListener("click", function () { openSearch(""); }); });
    window.addEventListener("keydown", function (e) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); openSearch(""); }
      else if (e.key === "/" && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(""); }
      else if (e.key === "Escape" && SEARCH && !SEARCH.hidden) { closeSearch(); }
    });
    // preload the index when the browser is idle so the first search is instant
    var idle = window.requestIdleCallback || function (f) { return setTimeout(f, 1200); };
    idle(function () { loadSearchIndex(); });
  }

  /* Wrap occurrences of `term` inside root in <mark class="search-hit">; return the first. */
  function highlightText(root, term) {
    if (!root || !term) return null;
    var rx = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "ig");
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = walker.nextNode())) {
      var pn = n.parentNode;
      if (!pn || /^(MARK|SCRIPT|STYLE)$/.test(pn.nodeName)) continue;
      rx.lastIndex = 0;
      if (rx.test(n.nodeValue)) nodes.push(n);
    }
    var first = null;
    nodes.forEach(function (node) {
      var s = node.nodeValue, frag = document.createDocumentFragment(), last = 0, m;
      rx.lastIndex = 0;
      while ((m = rx.exec(s))) {
        if (m.index > last) frag.appendChild(document.createTextNode(s.slice(last, m.index)));
        var mk = document.createElement("mark"); mk.className = "search-hit"; mk.textContent = m[0];
        frag.appendChild(mk); if (!first) first = mk;
        last = m.index + m[0].length;
        if (m.index === rx.lastIndex) rx.lastIndex++;   // guard zero-length
      }
      if (last < s.length) frag.appendChild(document.createTextNode(s.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
    return first;
  }

  /* If we arrived from a search result (?sec=&hl=), scroll to + highlight it.
     Must run AFTER buildToc(), which assigns ids to any headings lacking them. */
  function applySearchDeepLink() {
    var params = new URLSearchParams(location.search);
    var sec = params.get("sec"), hl = params.get("hl");
    if (!sec && !hl) return;
    history.replaceState(null, "", location.pathname + location.hash);
    var content = $(".content__inner");
    if (!content) return;
    var firstMark = hl ? highlightText(content, hl) : null;
    var target = null;
    if (sec) {
      var secEl = document.getElementById(sec);
      if (secEl) {
        var marks = $$("mark.search-hit", content);
        target = marks.find(function (mk) {
          return secEl.compareDocumentPosition(mk) & Node.DOCUMENT_POSITION_FOLLOWING;
        }) || secEl;
      }
    }
    target = target || firstMark;
    if (target) setTimeout(function () { target.scrollIntoView({ behavior: "smooth", block: "center" }); }, 80);
  }

  /* ------------------------------------------------------------ BACK TO TOP */
  function initBackToTop() {
    var btn = $(".back-to-top");
    if (!btn) return;
    window.addEventListener("scroll", throttle(function () {
      btn.classList.toggle("is-visible", window.scrollY > 500);
    }, 150));
    btn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  /* --------------------------------------------------------- ACTIVE NAVLINK */
  function markActiveNav() {
    // collect module file names from the "Modules" sidebar group
    var moduleFiles = [];
    (SITE.groups || []).forEach(function (g) {
      if (/module|chapter/i.test(g.title)) g.items.forEach(function (it) { moduleFiles.push(it.href); });
    });
    $$(".nav__links a").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === currentFile) a.classList.add("is-active");
      if (a.classList.contains("js-nav-modules") && moduleFiles.indexOf(currentFile) >= 0) {
        a.classList.add("is-active");
      }
    });
  }

  /* ------------------------------------------------------------- utilities */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
  }); }
  function hl(text, q) {
    if (!q) return esc(text);
    var out = esc(text);
    q.split(/\s+/).filter(Boolean).forEach(function (term) {
      var re = new RegExp("(" + term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
      out = out.replace(re, "<mark>$1</mark>");
    });
    return out;
  }
  function throttle(fn, ms) {
    var t = 0, last;
    return function () {
      var now = Date.now(); last = arguments;
      if (now - t >= ms) { t = now; fn.apply(null, last); }
    };
  }

  /* ------------------------------------------------------------------- init */
  document.addEventListener("DOMContentLoaded", function () {
    initAppearance();
    renderSidebar();
    initDrawer();
    buildToc();
    initSearch();
    initBackToTop();
    markActiveNav();
    applySearchDeepLink();   // after buildToc(): headings now have ids to anchor to
  });
})();
