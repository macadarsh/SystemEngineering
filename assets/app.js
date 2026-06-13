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
        var active = it.href === currentFile ? " is-active" : "";
        var num = it.num ? '<span class="num">' + esc(it.num) + "</span>" : '<span class="num"></span>';
        html += '<a class="sidebar__link' + active + '" href="' + it.href + '">' + num + "<span>" + esc(it.label) + "</span></a>";
        if (it.children && it.children.length) {
          html += '<div class="sidebar__sub">';
          it.children.forEach(function (ch) {
            html += '<a class="sidebar__sublink" href="' + ch.href + '">' + esc(ch.label) + "</a>";
          });
          html += "</div>";
        }
      });
      html += "</div>";
    });
    host.innerHTML = html;
  }

  /* ---------------------------------------------- ON-PAGE TOC + SCROLL SPY */
  function slugify(s) {
    return s.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
  }
  function buildToc() {
    var toc = $("#toc-list");
    var article = $(".content__inner");
    if (!article) return;
    var heads = $$("h2, h3", article);
    if (!toc) { addAnchors(heads); return; }
    if (!heads.length) { toc.innerHTML = '<p class="toc__empty">No sections on this page.</p>'; return; }

    var html = "";
    heads.forEach(function (h) {
      if (!h.id) h.id = slugify(h.textContent);
      var lvl = h.tagName === "H3" ? " lvl-3" : "";
      html += '<a class="toc-link' + lvl + '" href="#' + h.id + '">' + esc(h.textContent) + "</a>";
    });
    toc.innerHTML = html;
    addAnchors(heads);

    // scroll spy — highlights the right-hand TOC and the nested left-panel links
    var links = $$(".toc-link", toc);
    var subLinks = $$(".sidebar__sublink");
    function spy() {
      var pos = window.scrollY + (parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 62) + 24;
      var idx = 0;
      heads.forEach(function (h, i) { if (h.offsetTop <= pos) idx = i; });
      links.forEach(function (l, i) { l.classList.toggle("is-active", i === idx); });
      // active chapter sub-section = most recent .chsec heading at/above scroll
      var secId = null;
      heads.forEach(function (h) {
        if (h.classList.contains("chsec") && h.offsetTop <= pos) secId = h.id;
      });
      subLinks.forEach(function (l) {
        l.classList.toggle("is-active", secId !== null && l.getAttribute("href") === currentFile + "#" + secId);
      });
    }
    window.addEventListener("scroll", throttle(spy, 100));
    spy();
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
  function initSearch() {
    var overlay = $("#search-overlay");
    if (!overlay) return;
    var input   = $("#search-input");
    var results = $("#search-results");
    var idx = SITE.search || [];
    var activeIdx = -1;

    function open() {
      overlay.classList.add("is-open");
      input.value = ""; render("");
      setTimeout(function () { input.focus(); }, 30);
    }
    function close() { overlay.classList.remove("is-open"); }

    function render(q) {
      activeIdx = -1;
      q = q.trim().toLowerCase();
      var list;
      if (!q) {
        list = idx.slice(0, 8);
      } else {
        list = idx.map(function (it) {
          var hay = (it.title + " " + it.section + " " + (it.keywords || "") + " " + (it.snippet || "")).toLowerCase();
          var score = 0;
          q.split(/\s+/).forEach(function (term) {
            if (!term) return;
            if (it.title.toLowerCase().indexOf(term) >= 0) score += 5;
            if (hay.indexOf(term) >= 0) score += 1;
          });
          return { it: it, score: score };
        }).filter(function (x) { return x.score > 0; })
          .sort(function (a, b) { return b.score - a.score; })
          .slice(0, 12).map(function (x) { return x.it; });
      }
      if (!list.length) {
        results.innerHTML = '<div class="search-empty">No results for &ldquo;' + esc(q) + '&rdquo;</div>';
        return;
      }
      results.innerHTML = list.map(function (it, i) {
        return '<a class="search-result" data-i="' + i + '" href="' + it.href + '">' +
          '<div class="search-result__title">' + hl(it.title, q) + "</div>" +
          '<div class="search-result__meta">' + esc(it.section) + "</div>" +
          (it.snippet ? '<div class="search-result__snippet">' + hl(it.snippet, q) + "</div>" : "") +
          "</a>";
      }).join("");
    }
    function setActive(d) {
      var items = $$(".search-result", results);
      if (!items.length) return;
      activeIdx = (activeIdx + d + items.length) % items.length;
      items.forEach(function (el, i) {
        el.classList.toggle("is-active", i === activeIdx);
        if (i === activeIdx) el.scrollIntoView({ block: "nearest" });
      });
    }

    input.addEventListener("input", function () { render(input.value); });
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
    $(".js-search-close") && $(".js-search-close").addEventListener("click", close);

    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); setActive(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setActive(-1); }
      else if (e.key === "Enter") {
        var items = $$(".search-result", results);
        var target = activeIdx >= 0 ? items[activeIdx] : items[0];
        if (target) location.href = target.getAttribute("href");
      } else if (e.key === "Escape") { close(); }
    });

    $$(".js-search-open").forEach(function (b) { b.addEventListener("click", open); });
    window.addEventListener("keydown", function (e) {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey))) { e.preventDefault(); open(); }
      else if (e.key === "/" && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); open(); }
    });
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
  });
})();
