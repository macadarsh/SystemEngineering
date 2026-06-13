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
    ("Modules", "intro-to-se.html", "js-nav-modules"),
    ("Weekly Plan", "weekly-plan.html", ""),
    ("Practice", "practice-questions.html", ""),
    ("Case Studies", "case-studies.html", ""),
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

MODULES = [
    {
        "file": "intro-to-se.html",
        "title": "Introduction to Systems Engineering",
        "lede": "What systems engineering is, why it exists, and where it sits in the development of complex products and services.",
        "blocks": [
            ("h2", "What is a system?"),
            ("p", "A <strong>system</strong> is a set of interacting elements — hardware, software, people, processes, data, and facilities — organised to achieve a purpose that none of the parts can achieve alone. The behaviour of a system comes not just from its parts but from the way those parts are connected and interact."),
            ("ul", ["Elements: the parts that make up the system.",
                    "Interfaces: where elements meet and exchange energy, material, or information.",
                    "Boundary: what is inside the system versus part of its environment.",
                    "Purpose: the need the system exists to satisfy."]),
            ("h2", "What systems engineers do"),
            ("p", "Systems engineering is an interdisciplinary approach to realising successful systems. The systems engineer keeps the whole in view: balancing competing needs, defining how the parts fit together, and making sure the delivered system actually meets stakeholder needs across its whole life."),
            ("tip", "In short", "Domain specialists go deep on a part; the systems engineer is responsible for the relationships between the parts and the success of the whole."),
            ("h2", "Why it matters"),
            ("p", "As systems grow in scale and interconnection, most failures trace not to a single broken component but to gaps at the interfaces, unstated assumptions, or requirements that never matched the real need. Systems engineering is the discipline that manages exactly that complexity."),
        ],
    },
    {
        "file": "systems-thinking.html",
        "title": "Systems Thinking & Core Concepts",
        "lede": "The mental models that underpin the discipline: holistic thinking, emergence, boundaries, and feedback.",
        "blocks": [
            ("h2", "Holistic vs reductionist thinking"),
            ("p", "Reductionist thinking understands something by breaking it into parts. Systems thinking adds the complementary view: understanding how those parts interact as a whole. Both are needed — you decompose to design, then integrate to deliver."),
            ("h2", "Emergence"),
            ("p", "<strong>Emergent properties</strong> are characteristics of the whole system that none of the individual parts possess — safety, usability, performance, resilience. Because they only appear when parts interact, they cannot be fully verified by testing parts in isolation."),
            ("note", "Key idea", "Emergence is why a system can be ‘correct’ part-by-part yet fail as a whole."),
            ("h2", "Boundaries, context, and feedback"),
            ("p", "Defining the system boundary determines what you control versus what you must treat as the environment. Feedback loops — where outputs influence future inputs — are a primary source of both useful regulation and surprising behaviour."),
        ],
    },
    {
        "file": "se-lifecycle.html",
        "title": "The SE Lifecycle & Process Models",
        "lede": "How a system is conceived, developed, used, and retired — and the process models that organise that journey.",
        "blocks": [
            ("h2", "Lifecycle stages"),
            ("p", "A typical lifecycle moves through concept, development, production, utilisation, support, and retirement. Each stage has different decisions, risks, and stakeholders, but they are connected: choices made early constrain everything downstream."),
            ("ol", ["Concept — explore needs and feasible solutions.",
                    "Development — design, build, and verify the system.",
                    "Production — manufacture or assemble the system.",
                    "Utilisation & support — operate and sustain it in service.",
                    "Retirement — withdraw and dispose of it responsibly."]),
            ("h2", "The Vee model"),
            ("p", "The Vee links definition activities on the left (needs → requirements → architecture → detailed design) with the corresponding integration and test activities on the right (unit → integration → system → acceptance). Each level of definition has a matching level of verification."),
            ("h2", "Iterative and agile approaches"),
            ("p", "Strictly sequential models struggle when needs are uncertain or change quickly. Iterative, incremental, and agile approaches deliver in smaller cycles, learning and adjusting as they go, while still preserving systems-level discipline."),
        ],
    },
    {
        "file": "requirements-engineering.html",
        "title": "Stakeholder Needs & Requirements",
        "lede": "Turning fuzzy stakeholder needs into clear, verifiable requirements — and keeping them traceable.",
        "blocks": [
            ("h2", "Eliciting stakeholder needs"),
            ("p", "Requirements begin with people. Interviews, workshops, observation, and analysis of the operational context surface what stakeholders actually need — which is often different from what they first ask for."),
            ("h2", "Writing good requirements"),
            ("p", "A good requirement is necessary, unambiguous, verifiable, feasible, and free of design. It states <em>what</em> is needed, not <em>how</em> to build it."),
            ("ul", ["Necessary — traces to a real need.",
                    "Unambiguous — only one reasonable interpretation.",
                    "Verifiable — you can prove it was met.",
                    "Consistent — does not conflict with others.",
                    "Feasible — achievable within constraints."]),
            ("tip", "Test", "If you cannot describe how you would verify a requirement, it is not yet a good requirement."),
            ("h2", "Traceability and management"),
            ("p", "Every requirement should trace up to the need it serves and down to the design that satisfies it and the test that verifies it. Traceability is what lets you assess the impact of a change before you make it."),
        ],
    },
    {
        "file": "architecture-design.html",
        "title": "System Architecture & Design",
        "lede": "Defining the structure of the solution: functions, physical elements, interfaces, and the trade-offs between them.",
        "blocks": [
            ("h2", "Functional vs physical architecture"),
            ("p", "The <strong>functional architecture</strong> describes what the system must do and how functions interact. The <strong>physical architecture</strong> describes the components that perform those functions. Allocation maps functions to components."),
            ("h2", "Decomposition and allocation"),
            ("p", "Large systems are decomposed into subsystems and components. Requirements and functions are allocated down the hierarchy, and budgets (mass, power, cost, latency) are apportioned so the parts add up to a system that meets its targets."),
            ("h2", "Trade studies"),
            ("p", "When several architectures could work, a trade study compares them against weighted criteria so the choice is explicit and defensible rather than accidental."),
            ("note", "Watch the interfaces", "Most integration problems live at interfaces. Defining them early and clearly is among the highest-leverage things an architect does."),
        ],
    },
    {
        "file": "mbse-sysml.html",
        "title": "Modelling & MBSE (SysML)",
        "lede": "Model-Based Systems Engineering — replacing scattered documents with a single, connected model of the system.",
        "blocks": [
            ("h2", "From documents to models"),
            ("p", "Traditional SE captures the system in many separate documents that drift out of sync. <strong>MBSE</strong> captures requirements, behaviour, structure, and parametrics in one connected model, so a change in one place is reflected everywhere."),
            ("h2", "SysML in brief"),
            ("p", "SysML is a graphical modelling language for systems. Its diagrams cover four pillars: structure, behaviour, requirements, and parametrics."),
            ("ul", ["Structure — block definition and internal block diagrams.",
                    "Behaviour — activity, sequence, and state machine diagrams.",
                    "Requirements — requirement diagrams and traceability.",
                    "Parametrics — constraints and engineering analyses."]),
            ("h2", "Tools and methodologies"),
            ("p", "MBSE is supported by modelling tools and guided by methodologies that prescribe what to model and in what order. The method matters as much as the tool — a model without discipline is just expensive documentation."),
        ],
    },
    {
        "file": "verification-validation.html",
        "title": "Integration, Verification & Validation",
        "lede": "Bringing the parts together and proving the system is built right and is the right system.",
        "blocks": [
            ("h2", "Integration strategy"),
            ("p", "Integration assembles verified components into larger assemblies. A good strategy sequences the build so problems are found early and isolated to as few new interfaces as possible."),
            ("h2", "Verification methods"),
            ("p", "<strong>Verification</strong> asks ‘did we build the system right?’ — does it meet its requirements. The four classic methods are inspection, analysis, demonstration, and test."),
            ("h2", "Validation and acceptance"),
            ("p", "<strong>Validation</strong> asks ‘did we build the right system?’ — does it satisfy the real stakeholder need in its operational environment. Acceptance is the formal agreement that it does."),
            ("tip", "Remember", "Verification is against requirements; validation is against needs. A system can pass verification and still fail validation if the requirements were wrong."),
        ],
    },
    {
        "file": "risk-decision.html",
        "title": "Risk & Decision Management",
        "lede": "Identifying what could go wrong, deciding what to do about it, and making choices in a structured way.",
        "blocks": [
            ("h2", "Identifying and assessing risk"),
            ("p", "A risk is an uncertain event that, if it occurs, affects objectives. Risks are usually assessed on two axes — likelihood and impact — and ranked so attention goes where it matters most."),
            ("h2", "Risk handling strategies"),
            ("ul", ["Avoid — change the plan so the risk cannot occur.",
                    "Mitigate — reduce its likelihood or impact.",
                    "Transfer — shift it to another party (e.g. insurance, supplier).",
                    "Accept — acknowledge it and plan a contingency."]),
            ("h2", "Structured decision making"),
            ("p", "Major technical decisions benefit from being made explicitly: define the criteria, weight them, evaluate the alternatives, and record the rationale so the decision can be revisited if assumptions change."),
        ],
    },
    {
        "file": "configuration-management.html",
        "title": "Configuration & Change Management",
        "lede": "Keeping control of what the system is, what changed, and why — across its whole life.",
        "blocks": [
            ("h2", "Baselines and configuration items"),
            ("p", "A <strong>baseline</strong> is an agreed, recorded snapshot of the system definition. <strong>Configuration items</strong> are the things put under control. Together they answer the question: what exactly is this system, right now?"),
            ("h2", "Change control"),
            ("p", "Changes are proposed, assessed for impact, approved or rejected, and then implemented and recorded. The point is not to prevent change but to make it deliberate and visible."),
            ("h2", "Status accounting and audits"),
            ("p", "Status accounting records the current state of every item and change. Audits confirm that the system as built matches the system as documented."),
        ],
    },
    {
        "file": "technical-management.html",
        "title": "Technical & Project Management",
        "lede": "Planning, organising, and measuring the engineering effort so the system arrives on scope, on time, and on budget.",
        "blocks": [
            ("h2", "Planning the technical effort"),
            ("p", "The Systems Engineering Management Plan (SEMP) sets out how the engineering will be done: processes, organisation, reviews, and how the technical work connects to the project plan."),
            ("h2", "Measuring progress"),
            ("p", "Technical progress is tracked with measures such as requirements verified, mass or power margin remaining, and defects found versus fixed — not just schedule and cost."),
            ("note", "Reviews", "Milestone reviews (e.g. requirements, design, readiness) are decision gates: evidence is presented and a deliberate go / no-go choice is made."),
            ("h2", "Interfaces with project management"),
            ("p", "Systems engineering owns the technical ‘what and how’; project management owns the ‘when, who, and how much’. They succeed or fail together, so the two must stay tightly coordinated."),
        ],
    },
    {
        "file": "specialty-engineering.html",
        "title": "Specialty Engineering",
        "lede": "The cross-cutting ‘-ilities’ that must be designed in, not bolted on: reliability, safety, security, and human factors.",
        "blocks": [
            ("h2", "Reliability, availability, maintainability"),
            ("p", "These determine whether a system keeps working and how quickly it returns to service when it does not. They are quantified, allocated, and verified just like any other requirement."),
            ("h2", "Safety and security"),
            ("p", "Safety protects people and the environment from the system; security protects the system from deliberate harm. Both rely on identifying hazards or threats early and designing controls into the architecture."),
            ("h2", "Human factors"),
            ("p", "People are part of the system. Designing for human capabilities and limitations reduces error, training cost, and operational risk."),
        ],
    },
    {
        "file": "operations-disposal.html",
        "title": "Operations, Maintenance & Disposal",
        "lede": "The longest part of most systems’ lives: using, sustaining, and eventually retiring them.",
        "blocks": [
            ("h2", "Transition to operations"),
            ("p", "Handover moves the system from the development team to operators and maintainers, with the training, documentation, spares, and support arrangements needed to run it."),
            ("h2", "Sustainment and maintenance"),
            ("p", "In service, the system is maintained, upgraded, and monitored. For many systems this phase dominates total lifecycle cost, which is why it must be designed for from the start."),
            ("h2", "Retirement and disposal"),
            ("p", "Eventually the system is withdrawn. Responsible disposal addresses safety, environmental impact, data, and the migration of users to whatever replaces it."),
        ],
    },
]

# ---------------------------------------------------------------------------
# SECTION PAGES (also use the 3-panel layout)
# ---------------------------------------------------------------------------

WEEKLY_PLAN_TABLE = """
<table>
  <thead><tr><th>Week</th><th>Focus</th><th>Module(s)</th><th>Do this week</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Orientation</td><td>Introduction to Systems Engineering</td><td>Read Module 1; write your own one-line definition of a system.</td></tr>
    <tr><td>2</td><td>Mindset</td><td>Systems Thinking &amp; Core Concepts</td><td>Sketch the boundary &amp; interfaces of a system you know.</td></tr>
    <tr><td>3</td><td>The journey</td><td>The SE Lifecycle &amp; Process Models</td><td>Map the Vee model onto a past project.</td></tr>
    <tr><td>4</td><td>Needs</td><td>Stakeholder Needs &amp; Requirements</td><td>Write 5 requirements that pass the ‘good requirement’ test.</td></tr>
    <tr><td>5</td><td>Structure</td><td>System Architecture &amp; Design</td><td>Draw a functional vs physical view of one product.</td></tr>
    <tr><td>6</td><td>Modelling</td><td>Modelling &amp; MBSE (SysML)</td><td>Explore the four SysML pillars with a small example.</td></tr>
    <tr><td>7</td><td>Review</td><td>Modules 1–6</td><td>Revision + first practice question set.</td></tr>
    <tr><td>8</td><td>Proving it</td><td>Integration, Verification &amp; Validation</td><td>Pick a requirement; choose a verification method.</td></tr>
    <tr><td>9</td><td>Uncertainty</td><td>Risk &amp; Decision Management</td><td>Build a small risk register with handling strategies.</td></tr>
    <tr><td>10</td><td>Control</td><td>Configuration &amp; Change Management</td><td>Define a baseline and a change-control flow.</td></tr>
    <tr><td>11</td><td>Leading the work</td><td>Technical &amp; Project Management + Specialty Engineering</td><td>Outline a one-page SEMP; list the key ‘-ilities’.</td></tr>
    <tr><td>12</td><td>End of life &amp; wrap-up</td><td>Operations, Maintenance &amp; Disposal</td><td>Full revision + second practice set + a case study.</td></tr>
  </tbody>
</table>
"""

SECTION_PAGES = [
    {
        "file": "weekly-plan.html",
        "title": "12-Week Study Plan",
        "section_label": "Weekly Plan",
        "lede": "A week-by-week roadmap through the modules, with a small task each week to turn reading into practice. Adjust the pace to suit you.",
        "blocks": [
            ("h2", "How to use this plan"),
            ("p", "Each week pairs one or two modules with a short, concrete task. The goal is steady progress and a habit of applying ideas, not racing to the end. Use the review weeks to consolidate before moving on."),
            ("h2", "The plan"),
            ("raw", WEEKLY_PLAN_TABLE),
            ("h2", "Tips for sticking with it"),
            ("ul", ["Protect a fixed slot each week — consistency beats intensity.",
                    "Always finish a week by doing, not just reading.",
                    "Keep a running list of questions to revisit in review weeks."]),
            ("note", "Placeholder", "This schedule is a generic starting structure. Once you add your own sources and depth, the weekly tasks can point at specific readings and exercises."),
        ],
    },
    {
        "file": "practice-questions.html",
        "title": "Practice Questions",
        "section_label": "Practice",
        "lede": "Self-check questions grouped by topic. Try to answer before expanding the model answer.",
        "blocks": [
            ("h2", "Fundamentals"),
            ("qa", ("Why can a system fail even when every component works correctly?",
                    "Because system behaviour is emergent — it arises from interactions between parts. Faults often live at interfaces or in mismatched assumptions, which component-level testing does not exercise.")),
            ("qa", ("What distinguishes a systems engineer from a domain specialist?",
                    "The systems engineer is responsible for the whole and the relationships between parts — balancing needs, defining interfaces, and ensuring overall success — rather than going deepest on any single part.")),
            ("h2", "Requirements"),
            ("qa", ("Name three properties of a good requirement.",
                    "Any of: necessary, unambiguous, verifiable, consistent, feasible, and free of design. A useful quick test is verifiability — if you cannot say how you would prove it, it is not ready.")),
            ("qa", ("What is requirements traceability and why does it matter?",
                    "It is the linkage from a need to the requirement, design, and test that address it. It lets you assess the impact of a change before making it, and prove coverage.")),
            ("h2", "Architecture & V&V"),
            ("qa", ("What is the difference between verification and validation?",
                    "Verification checks the system against its requirements (‘built it right’). Validation checks it against the real stakeholder need in its operational context (‘built the right thing’).")),
            ("qa", ("Why is interface definition so important in architecture?",
                    "Most integration problems occur at interfaces. Defining them early and unambiguously prevents costly rework when parts are brought together.")),
            ("h2", "Management"),
            ("qa", ("What is the purpose of a baseline in configuration management?",
                    "A baseline is an agreed, recorded snapshot of the system definition. It gives a known reference point so that changes can be made, tracked, and audited deliberately.")),
            ("note", "Placeholder", "These are generic starter questions. As you curate sources, this page can grow into a full topic-tagged question bank with difficulty levels."),
        ],
    },
    {
        "file": "case-studies.html",
        "title": "Case Studies",
        "section_label": "Case Studies",
        "lede": "Short, illustrative examples of systems-engineering ideas in the real world. To be expanded with sourced, detailed cases.",
        "blocks": [
            ("h2", "When requirements miss the need"),
            ("p", "A recurring pattern across failed projects: every requirement was met, yet the delivered system did not solve the user’s real problem. The lesson is the verification / validation gap — building it right is not the same as building the right thing."),
            ("h2", "Interfaces as the hidden risk"),
            ("p", "Many high-profile integration failures trace back to a mismatch at an interface — different units, assumptions, or timing between two correctly-built parts. It is a standing argument for early, explicit interface control."),
            ("h2", "Designing the -ilities in"),
            ("p", "Systems that were reliable, safe, and maintainable in service almost always treated those properties as first-class requirements from the start, rather than trying to add them late. Retrofitting an ‘-ility’ is expensive and rarely as effective."),
            ("note", "Placeholder", "These vignettes are intentionally generic. Once you supply specific sources, each can become a full case study with background, what happened, and the SE lessons drawn out."),
        ],
    },
]

INCOSE_LEVELS_TABLE = """
<table>
  <thead><tr><th>Level</th><th>Who it is for</th><th>Knowledge exam?</th><th>Experience</th></tr></thead>
  <tbody>
    <tr><td><strong>ASEP</strong><br>Associate SEP</td><td>Knowledgeable, typically junior systems engineers.</td><td>Yes — pass the knowledge exam.</td><td>No SE experience required.</td></tr>
    <tr><td><strong>CSEP</strong><br>Certified SEP</td><td>Practising systems engineers.</td><td>Yes — same exam as ASEP.</td><td>~5 years of SE experience (with a qualifying degree) plus an application reviewed against references.</td></tr>
    <tr><td><strong>ESEP</strong><br>Expert SEP</td><td>Senior systems engineers and leaders.</td><td>No exam — by application.</td><td>~25 years of recognised SE experience (20 if already a CSEP) plus demonstrated leadership.</td></tr>
  </tbody>
</table>
"""

ABOUT_INCOSE_PAGES = [
    {
        "file": "what-is-incose.html",
        "title": "What is INCOSE?",
        "section_label": "About INCOSE",
        "lede": "The International Council on Systems Engineering — the global professional body for the discipline.",
        "blocks": [
            ("h2", "Who they are"),
            ("p", "<strong>INCOSE</strong> (the International Council on Systems Engineering) is a not-for-profit membership organisation founded in 1990. It connects systems engineers across industry, academia, and government, and is widely regarded as the leading professional body for the field."),
            ("p", "INCOSE has roughly 26,000 members and associates worldwide — individual, corporate, and student members — organised into around 70 local chapters across three sectors: the Americas, EMEA (Europe, Middle East &amp; Africa), and Asia-Oceania."),
            ("h2", "Mission"),
            ("p", "INCOSE’s stated mission is to advance the state of the art and practice of systems engineering — promoting transdisciplinary, scalable approaches that produce technologically appropriate solutions to meet societal needs."),
            ("h2", "What INCOSE does"),
            ("ul", ["Publishes the <em>INCOSE Systems Engineering Handbook (SEH)</em>, the discipline’s canonical reference.",
                    "Co-stewards the Systems Engineering Body of Knowledge (SEBoK).",
                    "Publishes the peer-reviewed <em>Systems Engineering</em> journal and <em>INSIGHT</em> magazine.",
                    "Runs the SEP professional certification program (ASEP, CSEP, ESEP).",
                    "Hosts around 55 technical working groups that create INCOSE products and guidance.",
                    "Runs international symposia, workshops, and regional conferences."]),
            ("h2", "Why it matters to learners"),
            ("p", "For anyone learning systems engineering, INCOSE is the reference point. Its handbook defines the vocabulary and lifecycle processes used throughout this site, and its certifications are a common way to demonstrate competence to employers."),
            ("note", "Placeholder", "This is a basic overview gathered from public sources to establish the page. We will expand and refine it later, with specific references."),
        ],
    },
    {
        "file": "incose-exams.html",
        "title": "INCOSE Exams & Certification",
        "section_label": "About INCOSE",
        "lede": "INCOSE’s SEP certification program and the knowledge exam that underpins it.",
        "blocks": [
            ("h2", "The SEP certification program"),
            ("p", "INCOSE certifies Systems Engineering Professionals (SEP) at three levels of increasing experience and demonstrated capability: <strong>ASEP</strong>, <strong>CSEP</strong>, and <strong>ESEP</strong>."),
            ("h2", "The three levels at a glance"),
            ("raw", INCOSE_LEVELS_TABLE),
            ("h2", "The knowledge exam"),
            ("p", "ASEP and CSEP both require passing the same multiple-choice <strong>knowledge exam</strong>, drawn entirely from the <em>INCOSE Systems Engineering Handbook</em>. Since 15 March 2025 the exam is based wholly on the <strong>SEH Fifth Edition (2023)</strong>. Every question is multiple choice with a single correct answer."),
            ("h2", "Format & logistics"),
            ("ul", ["Available by computer (online, remotely proctored) or on paper.",
                    "Standard computer exam: 120 questions in 120 minutes (100 scored, plus up to 20 or 50 unscored ‘beta’ questions).",
                    "Paper exam: usually 100 questions in 100 minutes.",
                    "Roughly one minute per question; you may review and change answers.",
                    "Candidates may attempt the exam up to three times in a 12-month period."]),
            ("h2", "Preparing"),
            ("p", "The single most important resource is the SE Handbook itself — most people who pass have read it more than once. <strong>Academic Equivalency</strong> offers an alternative route to meet the knowledge requirement (for ASEP/CSEP) without sitting the exam, and INCOSE offers a short paid practice exam to preview the format."),
            ("tip", "Always verify", "Exam content, fees, and requirements change over time. Confirm the current details on incose.org before relying on them."),
            ("note", "Placeholder", "Figures here reflect public information current as of 2026. We will expand this page with deeper, sourced guidance later."),
        ],
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
<script src="assets/app.js"></script>
</body>
</html>"""

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


def content_page(page, prev_link, next_link, section_label):
    body, _ = render_blocks(page["blocks"])
    pager = '<div class="pager">'
    if prev_link:
        pager += '<a class="prev" href="%s"><small>&larr; Previous</small>%s</a>' % (prev_link[1], prev_link[0])
    else:
        pager += "<span></span>"
    if next_link:
        pager += '<a class="next" href="%s"><small>Next &rarr;</small>%s</a>' % (next_link[1], next_link[0])
    else:
        pager += "<span></span>"
    pager += "</div>"

    doc = head(page["title"] + " · " + BRAND["name"], page["lede"])
    doc += nav_block()
    doc += APPEARANCE_PANEL
    doc += BACKDROP
    doc += SEARCH_OVERLAY
    doc += '<div class="layout">'
    # left
    doc += '<aside class="sidebar">' + DRAWER_HEAD + '<nav id="sidebar-nav" aria-label="Site index"></nav></aside>'
    # center
    doc += '<main class="content"><div class="content__inner">'
    doc += '<div class="breadcrumb"><a href="index.html">Home</a> &rsaquo; %s</div>' % html.escape(section_label)
    doc += '<h1 class="page-title">%s</h1>' % page["title"]
    doc += '<p class="page-lede">%s</p>' % page["lede"]
    doc += body
    doc += pager
    doc += "</div></main>"
    # right
    doc += '<aside class="toc"><p class="toc__title">In this article</p><nav id="toc-list"></nav></aside>'
    doc += "</div>"
    doc += BACK_TO_TOP
    doc += SCRIPTS
    return doc


def home_page():
    doc = head(BRAND["name"], "A structured, self-paced path through the fundamentals of systems engineering — modules, a weekly plan, practice questions, and case studies.")
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
      <p>A structured path from the core ideas of systems engineering to confident, practical understanding — organised into modules, a weekly plan, practice questions, and case studies.</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <a class="btn" href="%s">Start with Module 1 &rarr;</a>
        <a class="btn btn--ghost" href="weekly-plan.html">See the 12-week plan</a>
      </div>
    </section>""" % (BRAND["name"], MODULES[0]["file"])

    # Explore — one tile per area of the site
    explore = [
        ("\U0001F4DA", "Modules", "Twelve modules from foundations through architecture, V&amp;V, and operations to disposal.", MODULES[0]["file"], "Browse modules"),
        ("\U0001F5D3️", "12-Week Study Plan", "A week-by-week roadmap pairing modules with small, practical tasks.", "weekly-plan.html", "View the plan"),
        ("✅", "Practice Questions", "Self-check questions grouped by topic, with model answers to reveal when ready.", "practice-questions.html", "Try the questions"),
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
    return doc


# ---------------------------------------------------------------------------
# site-data.js (sidebar groups + search index)
# ---------------------------------------------------------------------------

def build_site_data():
    import json
    module_items = [{"num": str(i), "label": m["title"], "href": m["file"]}
                    for i, m in enumerate(MODULES, 1)]
    # "Resources" group sits above the modules, in an explicit order.
    page_by_file = {p["file"]: p for p in (SECTION_PAGES + ABOUT_INCOSE_PAGES)}

    def res_item(fname):
        p = page_by_file[fname]
        return {"num": "", "label": p["title"], "href": p["file"]}

    # Same order as the top navigation: Weekly Plan, Practice, Case Studies, About INCOSE
    resources_order = [
        "weekly-plan.html",                            # 12-Week Study Plan
        "practice-questions.html",                     # Practice Questions
        "case-studies.html",                           # Case Studies
        "what-is-incose.html", "incose-exams.html",    # About INCOSE
    ]
    resources_items = [res_item(f) for f in resources_order]

    groups = [
        {"title": "Resources", "items": resources_items},
        {"title": "Modules", "items": module_items},
    ]

    search = []
    # module-level + heading-level entries
    for i, m in enumerate(MODULES, 1):
        kws = " ".join(h for h in [b[1] for b in m["blocks"] if b[0] == "h2"])
        search.append({"title": m["title"], "href": m["file"],
                       "section": "Module %d" % i, "keywords": kws, "snippet": m["lede"]})
        for b in m["blocks"]:
            if b[0] == "h2":
                search.append({"title": b[1], "href": "%s#%s" % (m["file"], slug(b[1])),
                               "section": m["title"], "keywords": "", "snippet": ""})
    for p in SECTION_PAGES + ABOUT_INCOSE_PAGES:
        search.append({"title": p["title"], "href": p["file"],
                       "section": p["section_label"], "keywords": "", "snippet": p["lede"]})
        for b in p["blocks"]:
            if b[0] == "h2":
                search.append({"title": b[1], "href": "%s#%s" % (p["file"], slug(b[1])),
                               "section": p["title"], "keywords": "", "snippet": ""})

    data = {"brand": BRAND["name"], "groups": groups, "search": search}
    return "/* Auto-generated by tools/generate.py — edit the generator, not this file. */\nwindow.SITE = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"


# ---------------------------------------------------------------------------
# WRITE EVERYTHING
# ---------------------------------------------------------------------------

def write(path, content):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    print("wrote", path)


def main():
    write("index.html", home_page())

    # module pages with prev/next
    n = len(MODULES)
    for i, m in enumerate(MODULES):
        prev_link = (MODULES[i - 1]["title"], MODULES[i - 1]["file"]) if i > 0 else None
        next_link = (MODULES[i + 1]["title"], MODULES[i + 1]["file"]) if i < n - 1 else \
                    (SECTION_PAGES[0]["title"], SECTION_PAGES[0]["file"])
        write(m["file"], content_page(m, prev_link, next_link, "Modules"))

    for p in SECTION_PAGES:
        write(p["file"], content_page(p, None, None, p["section_label"]))

    # About INCOSE pages (linked prev/next to each other)
    a = len(ABOUT_INCOSE_PAGES)
    for i, p in enumerate(ABOUT_INCOSE_PAGES):
        prev_link = (ABOUT_INCOSE_PAGES[i - 1]["title"], ABOUT_INCOSE_PAGES[i - 1]["file"]) if i > 0 else None
        next_link = (ABOUT_INCOSE_PAGES[i + 1]["title"], ABOUT_INCOSE_PAGES[i + 1]["file"]) if i < a - 1 else None
        write(p["file"], content_page(p, prev_link, next_link, p["section_label"]))

    write("assets/site-data.js", build_site_data())
    print("\nDone. %d modules + %d section pages + %d About-INCOSE pages + homepage."
          % (n, len(SECTION_PAGES), a))


if __name__ == "__main__":
    main()
