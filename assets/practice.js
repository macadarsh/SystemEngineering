/* Per-chapter practice quiz engine.
   Mount: <div id="quiz" data-chapter="ch1"></div>
   Data:  window.PRACTICE[chapterId] = { no, title, questions:[{n,q,options,correct,explanation}] } */
(function () {
  "use strict";

  var mount = document.getElementById("quiz");
  if (!mount) return;

  var DATA = window.PRACTICE || {};
  var chId = mount.getAttribute("data-chapter");
  var chapter = DATA[chId];

  if (!chapter || !chapter.questions || !chapter.questions.length) {
    mount.innerHTML = '<div class="note"><div class="note__label">Coming soon</div>' +
      '<div>Practice questions for this chapter haven’t been added yet.</div></div>';
    return;
  }

  var quiz = { count: "20", order: "order", items: [], answers: {}, submitted: false, filter: "all" };

  function esc(s) { return (s == null ? "" : String(s)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function letter(i) { return String.fromCharCode(65 + i); }

  /* ---------- Setup screen ---------- */
  function renderSetup() {
    var total = chapter.questions.length;
    var counts = [["10", "10"], ["20", "20"], ["50", "50"], ["all", "All (" + total + ")"]]
      .filter(function (o) { return o[0] === "all" || parseInt(o[0], 10) <= total; });

    var h = '<div class="qz-setup">';
    h += '<div class="qz-field"><p class="qz-field__label">How many questions</p><div class="qz-seg" id="qz-count">';
    counts.forEach(function (o) {
      h += '<button type="button" data-v="' + o[0] + '"' + (o[0] === quiz.count ? ' class="is-on"' : '') + '>' + o[1] + '</button>';
    });
    h += '</div></div>';

    h += '<div class="qz-field"><p class="qz-field__label">Order</p><div class="qz-seg" id="qz-order">';
    [["order", "In order"], ["shuffle", "Shuffle"]].forEach(function (o) {
      h += '<button type="button" data-v="' + o[0] + '"' + (o[0] === quiz.order ? ' class="is-on"' : '') + '>' + o[1] + '</button>';
    });
    h += '</div></div>';

    h += '<div class="qz-actions"><button type="button" class="btn" id="qz-start">Start practising</button>' +
      '<span class="qz-hint">' + total + ' questions available in this chapter.</span></div>';
    h += '</div>';
    mount.innerHTML = h;

    bindSeg("qz-count", function (v) { quiz.count = v; });
    bindSeg("qz-order", function (v) { quiz.order = v; });
    document.getElementById("qz-start").addEventListener("click", startQuiz);
  }

  function bindSeg(id, cb) {
    var seg = document.getElementById(id);
    seg.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () {
        seg.querySelectorAll("button").forEach(function (x) { x.classList.remove("is-on"); });
        b.classList.add("is-on"); cb(b.dataset.v);
      });
    });
  }

  /* ---------- Build pool ---------- */
  function buildPool() {
    var pool = chapter.questions.map(function (q) { return q; });
    if (quiz.order === "shuffle") {
      for (var i = pool.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)), t = pool[i]; pool[i] = pool[j]; pool[j] = t;
      }
    }
    if (quiz.count !== "all") pool = pool.slice(0, parseInt(quiz.count, 10));
    return pool;
  }

  function startQuiz() {
    quiz.items = buildPool(); quiz.answers = {}; quiz.submitted = false; quiz.filter = "all";
    renderQuiz(); window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function retrySameItems() {
    quiz.answers = {}; quiz.submitted = false; quiz.filter = "all";
    renderQuiz(); window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------- Quiz screen ---------- */
  function renderQuiz() {
    var h = '<div id="qz-scoreslot"></div>';
    h += '<div class="qz-bar"><span class="qz-bar__prog" id="qz-prog"></span><span class="qz-bar__grow"></span>' +
      '<button type="button" class="btn btn--ghost btn--sm" id="qz-change">Change set</button>' +
      '<button type="button" class="btn btn--sm" id="qz-submit">Submit</button></div>';
    h += '<div id="qz-list">';
    quiz.items.forEach(function (it, qi) {
      h += '<div class="qz-card" id="qz-c-' + qi + '">';
      h += '<div class="qz-card__num">Question ' + (qi + 1) + ' of ' + quiz.items.length + '<span id="qz-s-' + qi + '"></span></div>';
      h += '<div class="qz-card__q">' + esc(it.q) + '</div>';
      it.options.forEach(function (o, oi) {
        h += '<div class="qz-opt" data-qi="' + qi + '" data-oi="' + oi + '">' +
          '<span class="qz-opt__mark">' + letter(oi) + '</span>' +
          '<span class="qz-opt__txt">' + esc(o) + '</span></div>';
      });
      h += '<div id="qz-x-' + qi + '"></div></div>';
    });
    h += '</div>';
    mount.innerHTML = h;

    mount.querySelectorAll(".qz-opt").forEach(function (opt) {
      opt.addEventListener("click", function () {
        if (quiz.submitted) return;
        var qi = +opt.dataset.qi, oi = +opt.dataset.oi;
        quiz.answers[qi] = oi;
        document.getElementById("qz-c-" + qi).querySelectorAll(".qz-opt").forEach(function (o) {
          o.classList.toggle("is-sel", +o.dataset.oi === oi);
        });
        updateProgress();
      });
    });
    document.getElementById("qz-submit").addEventListener("click", submitQuiz);
    document.getElementById("qz-change").addEventListener("click", renderSetup);
    updateProgress();
  }

  function updateProgress() {
    var el = document.getElementById("qz-prog");
    if (el) el.textContent = quiz.submitted ? "Submitted" :
      (Object.keys(quiz.answers).length + " of " + quiz.items.length + " answered");
  }

  /* ---------- Grade ---------- */
  function submitQuiz() {
    quiz.submitted = true;
    var total = quiz.items.length, attempted = 0, correct = 0;
    quiz.items.forEach(function (it, qi) {
      var a = quiz.answers[qi], card = document.getElementById("qz-c-" + qi);
      card.querySelectorAll(".qz-opt").forEach(function (o) {
        o.classList.add("is-locked"); o.classList.remove("is-sel");
        var oi = +o.dataset.oi;
        if (oi === it.correct) o.classList.add("is-correct");
        if (a !== undefined && a === oi && a !== it.correct) o.classList.add("is-wrong");
      });
      var state, badge;
      if (a === undefined) { state = "skip"; badge = '<span class="qz-badge qz-badge--skip">Not attempted</span>'; }
      else if (a === it.correct) { state = "correct"; correct++; attempted++; badge = '<span class="qz-badge qz-badge--correct">Correct</span>'; }
      else { state = "wrong"; attempted++; badge = '<span class="qz-badge qz-badge--wrong">Incorrect</span>'; }
      card.dataset.state = state;
      document.getElementById("qz-s-" + qi).innerHTML = "&nbsp;" + badge;
      document.getElementById("qz-x-" + qi).innerHTML =
        '<div class="qz-expl"><strong>Correct answer: ' + letter(it.correct) + '.</strong> ' + esc(it.explanation) + '</div>';
    });
    renderScoreboard(total, attempted, correct);

    var bar = document.querySelector(".qz-bar");
    if (bar) {
      bar.querySelectorAll(".btn").forEach(function (b) { b.remove(); });
      var retry = document.createElement("button");
      retry.type = "button"; retry.className = "btn btn--ghost btn--sm"; retry.textContent = "Retry";
      retry.addEventListener("click", retrySameItems);
      var nw = document.createElement("button");
      nw.type = "button"; nw.className = "btn btn--sm"; nw.textContent = "New practice";
      nw.addEventListener("click", renderSetup);
      bar.appendChild(retry); bar.appendChild(nw);
    }
    updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderScoreboard(total, attempted, correct) {
    var pct = total ? Math.round((correct / total) * 100) : 0;
    var msg = pct >= 90 ? "Outstanding!" : pct >= 75 ? "Great work!" : pct >= 50 ? "Solid progress" : "Keep practising";
    var h = '<div class="qz-score"><div class="qz-score__head"><div class="qz-score__msg">' + msg + '</div>' +
      '<span class="qz-bar__grow"></span><div class="qz-filters"><span class="qz-filters__label">Show</span>';
    [["all", "All"], ["correct", "Correct"], ["wrong", "Wrong"], ["skip", "Unattempted"]].forEach(function (f) {
      h += '<button type="button" class="qz-fbtn' + (f[0] === quiz.filter ? ' is-on' : '') + '" data-f="' + f[0] + '">' + f[1] + '</button>';
    });
    h += '</div></div><div class="qz-stats">';
    h += '<div class="qz-stat"><div class="qz-stat__v">' + total + '</div><div class="qz-stat__l">Questions</div></div>';
    h += '<div class="qz-stat"><div class="qz-stat__v">' + attempted + '</div><div class="qz-stat__l">Attempted</div></div>';
    h += '<div class="qz-stat qz-stat--good"><div class="qz-stat__v">' + correct + '</div><div class="qz-stat__l">Correct</div></div>';
    h += '<div class="qz-stat ' + (pct >= 50 ? "qz-stat--good" : "qz-stat--bad") + '"><div class="qz-stat__v">' + pct + '%</div><div class="qz-stat__l">Score</div></div>';
    h += '</div></div>';
    document.getElementById("qz-scoreslot").innerHTML = h;

    document.querySelectorAll(".qz-fbtn").forEach(function (b) {
      b.addEventListener("click", function () {
        quiz.filter = b.dataset.f;
        document.querySelectorAll(".qz-fbtn").forEach(function (x) { x.classList.remove("is-on"); });
        b.classList.add("is-on");
        applyFilter();
      });
    });
  }

  function applyFilter() {
    quiz.items.forEach(function (it, qi) {
      var card = document.getElementById("qz-c-" + qi);
      card.style.display = (quiz.filter === "all" || card.dataset.state === quiz.filter) ? "" : "none";
    });
  }

  renderSetup();
})();
