/* =========================================================================
   Podcast audio player — Learn System Engineering
   Custom controls: play/pause, stop, skip ±10s, draggable seek bar,
   keyboard support, and playback-speed cycling.
   Markup expected (see podcast-chapter-*.html):
     <div class="player" data-src="assets/audio/xxx.m4a"> … </div>
   ========================================================================= */
(function () {
  "use strict";

  var SKIP = 10;                                  // seconds for back/forward
  var RATES = [1, 1.25, 1.5, 1.75, 2, 0.75];      // cycle order

  function fmt(t) {
    if (!isFinite(t) || t < 0) t = 0;
    t = Math.floor(t);
    var h = Math.floor(t / 3600);
    var m = Math.floor((t % 3600) / 60);
    var s = t % 60;
    var mm = h ? (m < 10 ? "0" + m : m) : m;
    var ss = s < 10 ? "0" + s : s;
    return (h ? h + ":" : "") + mm + ":" + ss;
  }

  function setup(root) {
    var audio = root.querySelector("audio");
    if (!audio) return;

    var playBtn = root.querySelector(".js-play");
    var stopBtn = root.querySelector(".js-stop");
    var backBtn = root.querySelector(".js-back");
    var fwdBtn  = root.querySelector(".js-fwd");
    var rateBtn = root.querySelector(".js-rate");
    var scrub   = root.querySelector(".js-scrub");
    var played  = root.querySelector(".js-played");
    var buffered = root.querySelector(".js-buffered");
    var handle  = root.querySelector(".js-handle");
    var curEl   = root.querySelector(".js-cur");
    var durEl   = root.querySelector(".js-dur");

    var dragging = false;
    var rateIdx = 0;

    function pct() {
      var d = audio.duration;
      return d && isFinite(d) ? (audio.currentTime / d) * 100 : 0;
    }

    function paint() {
      var p = pct();
      if (played) played.style.width = p + "%";
      if (handle) handle.style.left = p + "%";
      if (curEl) curEl.textContent = fmt(audio.currentTime);
      if (scrub) {
        scrub.setAttribute("aria-valuenow", Math.round(audio.currentTime));
        scrub.setAttribute("aria-valuetext", fmt(audio.currentTime) + " of " + fmt(audio.duration));
      }
    }

    function paintBuffered() {
      if (!buffered || !audio.duration) return;
      try {
        if (audio.buffered.length) {
          var end = audio.buffered.end(audio.buffered.length - 1);
          buffered.style.width = (end / audio.duration) * 100 + "%";
        }
      } catch (e) { /* ignore */ }
    }

    function setIcon() {
      if (!playBtn) return;
      var playing = !audio.paused && !audio.ended;
      playBtn.innerHTML = playing ? "&#10074;&#10074;" : "&#9654;";
      playBtn.setAttribute("aria-label", playing ? "Pause" : "Play");
    }

    // ---- controls -------------------------------------------------------
    function toggle() {
      // pause every other player on the page before starting this one
      if (audio.paused) {
        document.querySelectorAll(".player audio").forEach(function (a) {
          if (a !== audio) a.pause();
        });
        audio.play();
      } else {
        audio.pause();
      }
    }
    if (playBtn) playBtn.addEventListener("click", toggle);

    if (stopBtn) stopBtn.addEventListener("click", function () {
      audio.pause();
      audio.currentTime = 0;
      paint();
    });

    if (backBtn) backBtn.addEventListener("click", function () {
      audio.currentTime = Math.max(0, audio.currentTime - SKIP);
      paint();
    });

    if (fwdBtn) fwdBtn.addEventListener("click", function () {
      var d = audio.duration || Infinity;
      audio.currentTime = Math.min(d, audio.currentTime + SKIP);
      paint();
    });

    if (rateBtn) rateBtn.addEventListener("click", function () {
      rateIdx = (rateIdx + 1) % RATES.length;
      audio.playbackRate = RATES[rateIdx];
      rateBtn.textContent = RATES[rateIdx] + "×";
    });

    // ---- seek bar (click + drag) ---------------------------------------
    function seekFromEvent(e) {
      var rect = scrub.getBoundingClientRect();
      var x = (e.clientX !== undefined ? e.clientX : 0) - rect.left;
      var ratio = Math.min(1, Math.max(0, x / rect.width));
      if (audio.duration && isFinite(audio.duration)) {
        audio.currentTime = ratio * audio.duration;
        paint();
      }
    }

    if (scrub) {
      scrub.addEventListener("pointerdown", function (e) {
        dragging = true;
        root.classList.add("is-scrubbing");
        scrub.setPointerCapture(e.pointerId);
        seekFromEvent(e);
      });
      scrub.addEventListener("pointermove", function (e) {
        if (dragging) seekFromEvent(e);
      });
      scrub.addEventListener("pointerup", function (e) {
        dragging = false;
        root.classList.remove("is-scrubbing");
        try { scrub.releasePointerCapture(e.pointerId); } catch (er) {}
      });
      scrub.addEventListener("pointercancel", function () {
        dragging = false;
        root.classList.remove("is-scrubbing");
      });

      // keyboard: arrows seek, home/end jump
      scrub.addEventListener("keydown", function (e) {
        if (!audio.duration) return;
        var handled = true;
        switch (e.key) {
          case "ArrowRight": case "ArrowUp":
            audio.currentTime = Math.min(audio.duration, audio.currentTime + SKIP); break;
          case "ArrowLeft": case "ArrowDown":
            audio.currentTime = Math.max(0, audio.currentTime - SKIP); break;
          case "Home": audio.currentTime = 0; break;
          case "End": audio.currentTime = audio.duration; break;
          case " ": case "Enter": toggle(); break;
          default: handled = false;
        }
        if (handled) { e.preventDefault(); paint(); }
      });
    }

    // ---- media events ---------------------------------------------------
    audio.addEventListener("loadedmetadata", function () {
      if (durEl) durEl.textContent = fmt(audio.duration);
      if (scrub) scrub.setAttribute("aria-valuemax", Math.round(audio.duration || 0));
      paint();
      paintBuffered();
    });
    audio.addEventListener("timeupdate", function () { if (!dragging) paint(); });
    audio.addEventListener("progress", paintBuffered);
    audio.addEventListener("play", setIcon);
    audio.addEventListener("pause", setIcon);
    audio.addEventListener("ended", function () { setIcon(); });

    // initial paint (metadata may already be available from cache)
    if (audio.readyState >= 1 && durEl) durEl.textContent = fmt(audio.duration);
    setIcon();
    paint();
  }

  function init() {
    document.querySelectorAll(".player").forEach(setup);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
