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
    ("Practice", "practice-questions.html", ""),
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

MODULES = [
    {
        "file": "chapter-1.html",
        "title": "Chapter 1",
        "lede": "Systems Engineering Introduction — what SE is, why it matters, its core systems concepts, its foundations, and its roots in systems thinking. Based on the INCOSE Systems Engineering Handbook, 5th Edition (2023), Chapter 1.",
        "recap": [
            ("h3", "What is systems engineering?"),
            ("p", "Systems engineering (SE) is a transdisciplinary and integrative approach to enabling the successful realization, use, and eventual retirement of engineered systems. It draws on systems principles and concepts together with scientific, technological, and management methods. Rather than going deep into a single discipline, SE keeps the whole system in view and makes sure the parts work together to achieve the objectives of the whole."),
            ("p", "SE takes a holistic, balanced, life-cycle perspective. Its responsibility is to deliver systems that are <em>fit for purpose</em> — that accomplish their intended purpose, stay resilient in real-world operation, and avoid or minimise unintended actions, side effects, and consequences."),
            ("h4", "What SE focuses on"),
            ("ul", [
                "Establishing and balancing stakeholder goals, needs, operational concepts, and required functionality — starting early in development.",
                "Choosing an appropriate life-cycle model, process approach, and governance for the level of complexity, uncertainty, and change.",
                "Generating and evaluating alternative solution concepts and architectures.",
                "Baselining and modelling requirements and the selected architecture at each stage.",
                "Performing design synthesis and system verification and validation.",
                "Considering both the problem and solution domains, including the enabling systems and services the solution depends on."]),
            ("note", "The thread running through it all", "Every SE activity exists to manage risk — the risk of not delivering what is needed, of late delivery, of excess cost, and of negative unintended consequences. A useful measure of SE's value is how much it reduces that risk."),
            ("h4", "What is a system?"),
            ("p", "A system is an arrangement of parts or elements that together exhibit behaviour or meaning that the individual parts do not. The idea traces to Ludwig von Bertalanffy, who described a system as a whole made of interacting parts. A complete system includes everything needed for self-sufficient use in its environment: equipment, facilities, software, documentation, services, and people."),
            ("p", "An <strong>engineered system</strong> is one deliberately designed or adapted to interact with an anticipated operational environment to achieve one or more intended purposes within applicable constraints. Its elements may include people, products, services, information, processes, and natural elements."),
            ("h4", "Where SE came from"),
            ("p", "Aspects of SE have featured in large technical undertakings throughout history, but it was formalised as an engineering discipline only in the early-to-mid twentieth century. The term ‘systems engineering’ dates to Bell Telephone Laboratories in the early 1940s; multidisciplinary teams such as British air-defence analysis in the 1930s and the RAND Corporation (founded 1946) helped shape the field."),
            ("h3", "Why is systems engineering important?"),
            ("p", "The systems we build keep becoming more complex and interconnected, and complexity is where projects fail — usually at interfaces, in unstated assumptions, or through requirements that never matched the real need. SE is the discipline that manages this complexity so that the whole succeeds, not just the parts."),
            ("p", "Done well, SE reduces risk and improves cost and schedule outcomes: clear, complete, correctly allocated requirements lead to fewer and smaller changes later. Its value shows up across sectors — commercial, defence and government, non-profit, and research — by making development more effective and efficient and by strengthening the capacity to innovate."),
            ("h3", "Systems concepts"),
            ("p", "A handful of concepts give the SE practitioner a framework for reasoning about any system and its context."),
            ("h4", "System boundary and the system of interest (SoI)"),
            ("p", "The <strong>system of interest (SoI)</strong> is the system under consideration. The <strong>system boundary</strong> is the line of demarcation that defines what belongs to the SoI and what does not. Everything outside it that interacts with or supports the system is the environment or context — including users and external systems across the whole life cycle, not only during operation."),
            ("h4", "Black-box and white-box views"),
            ("p", "A <strong>black-box</strong> (opaque) view describes a system only by its external attributes — what it does as seen from outside. A <strong>white-box</strong> (transparent) view adds the internal attributes and structure — how it is built. Practitioners use both, and must understand how the two relate."),
            ("h4", "Emergence"),
            ("p", "Emergence is the phenomenon where the whole exhibits properties that are meaningful only for the whole, not for any single element. Emergent properties arise from interactions among the elements and with the environment, and they can be desirable (reinforcement) or undesirable (interference, resonance). Safety and resilience are classic emergent properties. Because they appear only when parts interact, a major aim of architecture is to reinforce good emergence and prevent bad emergence."),
            ("h4", "Interfacing, interoperating, and enabling systems"),
            ("p", "External systems relate to the SoI in different ways. <strong>Interfacing</strong> systems share a boundary and exchange something across it. <strong>Interoperating</strong> systems work together with the SoI toward a shared purpose. <strong>Enabling</strong> systems provide services the SoI needs during one or more life-cycle stages (for example test facilities or production systems) — and may not exist yet, so their timely availability is itself a risk to plan for."),
            ("h4", "Hierarchy, states, and modes"),
            ("p", "Systems are often organised hierarchically — systems contain subsystems, which contain components — although in highly complex systems a clean hierarchy may not exist. A system is in a <strong>state</strong> when its attributes hold steady for a meaningful period; <strong>modes</strong> are defined sets of behaviour the system is designed to operate in. States and modes are fundamental ways of describing system behaviour."),
            ("h4", "Complexity"),
            ("p", "Complexity arises when a system has many interacting parts whose collective behaviour is hard to predict from the parts alone. It is a central reason SE exists, and it shapes which life-cycle models, methods, and organisational structures are appropriate."),
            ("h3", "Systems engineering foundations"),
            ("p", "Beneath the processes, SE rests on foundations that explain how practitioners should think and act."),
            ("h4", "Uncertainty"),
            ("p", "Engineering decisions are made with incomplete knowledge. Recognising and managing uncertainty — about needs, environments, technologies, and outcomes — is intrinsic to good SE and feeds directly into risk management."),
            ("h4", "Cognitive bias"),
            ("p", "Practitioners are human, and predictable thinking errors — anchoring, optimism, confirmation bias, and others — can distort judgement and decisions. Awareness of cognitive bias helps teams make better, more deliberate choices."),
            ("h4", "Systems engineering principles"),
            ("p", "INCOSE has articulated a set of SE principles (with sub-principles) capturing the discipline's enduring basis — for example, that SE spans the entire system life cycle, that complex systems are engineered by complex organisations, that SE integrates engineering and scientific disciplines, and that SE rests on a middle-range set of theories (systems, physical, mathematical, and sociological). These principles guide the choice of life-cycle model, the implementation of processes, and how teams are organised."),
            ("h4", "Systems engineering heuristics"),
            ("p", "Heuristics are short, natural-language ‘rules of thumb’ that pass on a profession's accumulated wisdom. They are especially useful for complex, ill-structured problems where detailed analysis is impractical. A well-known example: don't assume the original statement of the problem is the right one — failing to reach mutual understanding with stakeholders early is a fundamental cause of failure."),
            ("h3", "System science and systems thinking"),
            ("p", "SE is informed by <strong>systems science</strong> — a transdisciplinary effort to find patterns and general theories that hold across all kinds of systems, whether physical, natural, engineered, or social. It uses both reductionist explanation (understanding a clock by its mechanism) and holistic explanation (understanding why clocks exist and how they operate in their environment over a life cycle). Foundational strands include von Bertalanffy's General System Theory, Wiener's Cybernetics, and Complexity Theory."),
            ("p", "<strong>Systems thinking</strong> is the practical mindset that makes SE work — a way of looking at a situation in terms of wholes and how their parts interrelate. One useful formulation, DSRP, holds that systems thinking rests on making <em>Distinctions</em>, recognising <em>Systems</em> of parts and wholes, seeing <em>Relationships</em>, and taking <em>Perspectives</em>."),
            ("p", "Good practice balances being <em>systematic</em> (faithfully applying SE processes) with being <em>systemic</em> (applying systems thinking to drive those processes). Where a single method falls short, practitioners draw on many systems methodologies — system dynamics, the viable system model, soft systems methodology, and others — choosing and combining them according to the problem. Using approaches in informed combination this way is called Critical Systems Thinking."),
            ("tip", "Source", "This recap summarises, in our own words for learning, the INCOSE Systems Engineering Handbook, 5th Edition (2023), Chapter 1, ‘Systems Engineering Introduction.’ Consult the handbook for the authoritative text."),
        ],
        "core": None,
        "detail": None,
    },
    {
        "file": "chapter-2.html",
        "title": "Chapter 2",
        "lede": "System Life Cycle Concepts, Models, and Processes — life-cycle stages and decision gates, the sequential / incremental / evolutionary model families, and the four ISO/IEC/IEEE 15288 process groups. Based on the INCOSE Systems Engineering Handbook, 5th Edition (2023), Chapter 2.",
        "recap": [
            ("h3", "Life-cycle terms and concepts"),
            ("p", "The purpose of systems engineering is to realise a system successfully while balancing competing stakeholder objectives. A practical way to manage that is to break the whole effort into transformational <strong>stages</strong>, checking at the end of each stage whether the system characteristics are satisfied, the risk is acceptable, and the system is ready to move on. Progress between stages is gated by explicit decision points called <strong>decision gates</strong>. By analogy with the stages a living thing passes through, this whole set of stages is the <strong>system life cycle</strong>."),
            ("h4", "Life-cycle characteristics"),
            ("p", "Stages are not necessarily sequential or one-off. They can be entered as many times as needed, can overlap, and often run concurrently. Major system elements, enabling systems, and the constituents of a system-of-systems each have their own life cycles, which must be integrated so that a coherent system of interest is delivered and used over time. Stages typically have entry and exit gates: entry gates check that the criteria are met and resources are available; exit gates check that the stage's objectives are achieved and the risk of proceeding is acceptable."),
            ("h4", "Typical life-cycle stages"),
            ("p", "A commonly used set of stages (from ISO/IEC/IEEE 15288) spans the conception through retirement of the system:"),
            ("ul", [
                "<strong>Concept</strong> — explore needs, feasibility, and candidate solution concepts.",
                "<strong>Development</strong> — define requirements and architecture, then design and build the system.",
                "<strong>Production</strong> — manufacture or construct the system and its elements.",
                "<strong>Utilization</strong> — operate the system to deliver its intended service.",
                "<strong>Support</strong> — provide the logistics, maintenance, and services that sustain operation.",
                "<strong>Retirement</strong> — withdraw and dispose of the system or its elements."]),
            ("p", "Different industries use different names for these stages (commercial, defence, and space sectors each have their own labels), and the relative time spent in each varies enormously — a product might reach the field in a couple of years and then stay in use for decades."),
            ("h4", "Decision gates"),
            ("p", "A decision gate is a risk-managing checkpoint, usually at the start and end of a stage, often run as a project milestone or review. Its goals are to confirm that system maturity is on track, that deliverables still satisfy the business case, that resources are sufficient, that open issues are addressed, and that the risk of going forward is acceptable."),
            ("p", "At each gate the typical options are: begin the next stage; continue the current stage (perhaps after rework); return to an earlier stage; hold the project; or terminate it. Approval should rest on evidence of meeting the agreed criteria. Balancing the formality and frequency of gates is a critical success factor — a superficial review or a skipped gate tends to cause costly problems later. Agile approaches still make these decisions, but at a more frequent, smaller-scope, and less formal cadence."),
            ("h4", "Technical reviews and audits"),
            ("p", "A <strong>technical review</strong> assesses a project's progress against its technical requirements at logical transition points, using agreed criteria. An <strong>audit</strong> is a detailed check that products and their definition information actually conform to requirements and to the released configuration. Both are planned in the project's Systems Engineering Management Plan (SEMP) and may form part of decision gates."),
            ("p", "Representative reviews and audits include the System Requirements Review (SRR), Preliminary Design Review (PDR), Critical Design Review (CDR), Test Readiness Review (TRR), System Verification Review (SVR), Production Readiness Review (PRR), and the Functional and Physical Configuration Audits (FCA / PCA). The exact set is tailored to the project and the life-cycle model in use."),
            ("h3", "Life-cycle model approaches"),
            ("p", "A life-cycle <em>model</em> is the framework within which stages and their transitions are planned and carried out. Models are commonly grouped into three families, distinguished by how much of the requirements are known at the start, how many iterations are planned, and whether there are multiple deployments:"),
            ("raw", """
<table>
  <thead><tr><th>Approach</th><th>Requirements set at start</th><th>Planned iterations</th><th>Multiple deployments</th></tr></thead>
  <tbody>
    <tr><td><strong>Sequential</strong></td><td>Full</td><td>Single</td><td>No</td></tr>
    <tr><td><strong>Incremental</strong></td><td>Full</td><td>Multiple</td><td>Potential</td></tr>
    <tr><td><strong>Evolutionary</strong></td><td>Partial</td><td>Multiple</td><td>Typically</td></tr>
  </tbody>
</table>
"""),
            ("h4", "Sequential methods"),
            ("p", "Sequential models flow through linear stages, each depending on the deliverables of the previous one (with feedback), ending in a single delivery. Their strengths are predictability, stability, repeatability, and high assurance, which suits large coordinated teams and safety- or security-critical products. The classic example is the <strong>waterfall</strong> model; the <strong>SE Vee model</strong> is another, associating each definition stage on the left with a corresponding test stage on the right. The left of the Vee evolves the baseline from stakeholder requirements to system requirements to architecture to element definitions; the right integrates, verifies, and validates the elements back up. Even within the Vee, the processes are applied concurrently, iteratively, and recursively at each level of the hierarchy."),
            ("h4", "Incremental methods"),
            ("p", "Incremental approaches deliver an initial capability and then add to it through successive deliveries, aiming for rapid value and responsiveness. The full set of capabilities is usually known up front, but development is split into increments to absorb technical risk and insert newer technology. A steady cadence between increments helps planning. The Incremental Commitment Spiral Model (ICSM) is one example, addressing requirements and solutions concurrently and proceeding to the next spiral only when the risks are acceptable."),
            ("h4", "Evolutionary methods"),
            ("p", "When the final requirements are unknown or only partly known — common in novel systems, R&amp;D, and systems-of-systems — an evolutionary approach provides adaptability. Cycles are planned regularly, each producing a deployable version, and the requirements are progressively refined cycle by cycle. <strong>Agile</strong> methods are a widely used type of evolutionary development."),
            ("note", "Choosing an approach", "There is no universal best model. Selection depends on factors such as environment stability, risk, novelty and complexity, integrity needs (safety, security, privacy), available budget and enabling systems, and required conformance to standards. Organisations should keep asking which approach, or combination, fits the situation."),
            ("h3", "System life-cycle processes"),
            ("p", "A <strong>process</strong> is a series of activities and tasks performed to achieve outcomes for a stated purpose. ISO/IEC/IEEE 15288 (2023) provides a common framework of system life-cycle processes, organised into four groups. They are not meant to be run once in a straight line — they are applied <strong>concurrently, iteratively, and recursively</strong> throughout the life cycle."),
            ("h4", "Concurrency, iteration, and recursion"),
            ("ul", [
                "<strong>Concurrency</strong> — running two or more processes in parallel at the same level of the hierarchy (for example, risk management and measurement running continuously together).",
                "<strong>Iteration</strong> — repeatedly applying and cycling between processes at a level to absorb new decisions and understanding (for example, between system requirements and architecture definition).",
                "<strong>Recursion</strong> — reapplying the same set of processes, tailored, at each successive level of the hierarchy, where the outputs at one level become inputs to the next."]),
            ("h4", "Agreement processes"),
            ("p", "Establish an agreement between two parties for the acquisition or supply of systems, elements, products, or services. They comprise the <strong>Acquisition</strong> and <strong>Supply</strong> processes. SE practitioners contribute impact assessments, trade studies, and risk assessments to support these agreements."),
            ("h4", "Organizational project-enabling processes"),
            ("p", "Provide the organisational environment and resources that projects need. They comprise <strong>Life Cycle Model Management, Infrastructure Management, Portfolio Management, Human Resource Management, Quality Management,</strong> and <strong>Knowledge Management</strong>."),
            ("h4", "Technical management processes"),
            ("p", "Plan, assess, and control the technical effort. They comprise <strong>Project Planning, Project Assessment and Control, Decision Management, Risk Management, Configuration Management, Information Management, Measurement,</strong> and <strong>Quality Assurance</strong>."),
            ("h4", "Technical processes"),
            ("p", "Turn needs into a realised, operated, and eventually retired system. They comprise <strong>Business or Mission Analysis, Stakeholder Needs and Requirements Definition, System Requirements Definition, System Architecture Definition, Design Definition, System Analysis, Implementation, Integration, Verification, Transition, Validation, Operation, Maintenance,</strong> and <strong>Disposal</strong>."),
            ("p", "In the handbook, each process is described with a consistent structure — purpose, description, inputs/outputs, activities, and common approaches — and illustrated with an input–process–output (IPO) diagram."),
            ("tip", "Source", "This recap summarises, in our own words for learning, the INCOSE Systems Engineering Handbook, 5th Edition (2023), Chapter 2, ‘System Life Cycle Concepts, Models, and Processes,’ which draws on ISO/IEC/IEEE 15288 and 24748. Consult the handbook for the authoritative text."),
        ],
        "core": None,
        "detail": None,
    },
    {
        "file": "chapter-3.html", "title": "Chapter 3",
        "lede": "This chapter is awaiting content.",
        "recap": None, "core": None, "detail": None,
    },
    {
        "file": "chapter-4.html", "title": "Chapter 4",
        "lede": "This chapter is awaiting content.",
        "recap": None, "core": None, "detail": None,
    },
    {
        "file": "chapter-5.html", "title": "Chapter 5",
        "lede": "This chapter is awaiting content.",
        "recap": None, "core": None, "detail": None,
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
    {
        "file": "podcast.html",
        "title": "Podcast",
        "section_label": "Podcast",
        "lede": "Audio discussions and episodes on systems engineering — coming soon.",
        "blocks": [
            ("note", "Coming soon", "This is where podcast episodes and notes will live. Add episode titles, summaries, audio links, and key takeaways here as you publish them."),
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
CHAPTER_SECTIONS = [
    ("Quick Recap", "recap", "A fast, high-level summary of the chapter — the key points at a glance."),
    ("Core Concepts", "core", "The essential ideas explained with more depth, structure, and examples."),
    ("Detailed Review", "detail", "A thorough, section-by-section walk through the chapter material."),
]


def is_chapter(page):
    return any(k in page for k in ("recap", "core", "detail"))


def chapter_body(ch):
    parts = []
    for title, key, blurb in CHAPTER_SECTIONS:
        parts.append('<h2 class="chsec" id="%s">%s</h2>' % (slug(title), title))
        blocks = ch.get(key)
        if blocks:
            html_blocks, _ = render_blocks(blocks)
            parts.append(html_blocks)
        else:
            parts.append('<div class="note"><div class="note__label">Coming soon</div>'
                         '<div>%s This section is being developed and will be added next.</div></div>' % blurb)
    return "\n".join(parts)


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
    if is_chapter(page):
        body = chapter_body(page)
    else:
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
        ("\U0001F4DA", "Chapters", "Five chapters. Chapter 1 introduces systems engineering; the rest are coming soon.", MODULES[0]["file"], "Browse chapters"),
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
        "podcast.html",                                # Podcast
        "what-is-incose.html", "incose-exams.html",    # About INCOSE
    ]
    resources_items = [res_item(f) for f in resources_order]

    groups = [
        {"title": "Resources", "items": resources_items},
        {"title": "Chapters", "items": module_items},
    ]

    search = []
    # module-level + heading-level entries
    for i, m in enumerate(MODULES, 1):
        ch_blocks = []
        for key in ("recap", "core", "detail"):
            if m.get(key):
                ch_blocks += m[key]
        heads = [b[1] for b in ch_blocks if b[0] in ("h3", "h4")]
        search.append({"title": m["title"], "href": m["file"],
                       "section": "Chapter %d" % i, "keywords": " ".join(heads), "snippet": m["lede"]})
        for b in ch_blocks:
            if b[0] == "h3":
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
        next_link = (MODULES[i + 1]["title"], MODULES[i + 1]["file"]) if i < n - 1 else None
        write(m["file"], content_page(m, prev_link, next_link, "Chapters"))

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
