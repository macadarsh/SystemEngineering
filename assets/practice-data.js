/* Auto-generated practice data — questions copied verbatim from the Systems Engineering Study Hub reference (ch1.js, ch2.js). */
window.PRACTICE = {
  "ch1": {
    "no": 1,
    "title": "Systems Engineering Foundations",
    "questions": [
      {
        "n": 1,
        "q": "Which statement best captures the INCOSE/ISO definition of systems engineering?",
        "options": [
          "A discipline focused primarily on the detailed design of hardware and software components.",
          "A project-management methodology dedicated to scheduling and budgeting large programs.",
          "A transdisciplinary and integrative approach to enable the successful realization, use, and retirement of engineered systems.",
          "A manufacturing quality-control technique aimed at eliminating production defects."
        ],
        "correct": 2,
        "explanation": "SE is defined as a transdisciplinary, integrative approach spanning realization, use, and retirement; the other options describe narrower disciplines."
      },
      {
        "n": 2,
        "q": "The Handbook states that the overall goal of all systems engineering activities is to:",
        "options": [
          "maximize the number of delivered capabilities.",
          "minimize life-cycle cost above every other consideration.",
          "manage risk, including the risk of not delivering what the acquirer needs.",
          "shorten the development schedule as much as possible."
        ],
        "correct": 2,
        "explanation": "All SE activities aim to manage risk (delivery, cost, schedule, unintended consequences); cost, schedule, and features are balanced, not maximized in isolation."
      },
      {
        "n": 3,
        "q": "“Emergence” is best described as:",
        "options": [
          "behavior or meaning exhibited by the whole that the individual parts do not exhibit.",
          "the gradual obsolescence of a system during the support stage.",
          "the late discovery of defects during integration.",
          "the act of moving a system into its operational environment."
        ],
        "correct": 0,
        "explanation": "A system exhibits behavior the constituents alone do not — that is emergence. The other options describe obsolescence, defect leakage, and transition."
      },
      {
        "n": 4,
        "q": "An “engineered system,” per INCOSE, is one that:",
        "options": [
          "is designed or adapted to interact with an anticipated operational environment to achieve intended purposes while complying with constraints.",
          "consists only of hardware and software elements.",
          "has been certified against an international standard.",
          "operates without any human involvement."
        ],
        "correct": 0,
        "explanation": "The definition centers on purposeful interaction with an anticipated environment under constraints; engineered systems may include people, services, information, processes, and natural elements."
      },
      {
        "n": 5,
        "q": "Systems thinking is best characterized as a perspective that:",
        "options": [
          "sharpens awareness of wholes and how the parts within them interrelate.",
          "prioritizes software over hardware concerns.",
          "decomposes a system into parts and studies each part in isolation.",
          "focuses on the financial return of an engineering investment."
        ],
        "correct": 0,
        "explanation": "Systems thinking emphasizes the whole and the interrelationships among parts — the opposite of pure reductionist decomposition."
      },
      {
        "n": 6,
        "q": "Which professional body publishes the Systems Engineering Handbook used for the ASEP exam, and what was its original name?",
        "options": [
          "IEEE, originally the Radio Engineers Institute.",
          "ISO, originally the International Federation of Standards.",
          "INCOSE, originally the National Council on Systems Engineering (NCOSE).",
          "PMI, originally the Project Management Society."
        ],
        "correct": 2,
        "explanation": "NCOSE was founded in 1990 and renamed INCOSE in 1995 as membership became international."
      },
      {
        "n": 7,
        "q": "The Handbook’s system life-cycle processes are aligned to which standard?",
        "options": [
          "ISO 9001:2015 Quality management systems.",
          "ISO/IEC/IEEE 15288:2023 System life cycle processes.",
          "ISO/IEC/IEEE 29148 Requirements engineering.",
          "ISO 31000 Risk management."
        ],
        "correct": 1,
        "explanation": "15288 defines the system life-cycle processes the Handbook elaborates; 29148 (requirements), 31000 (risk), and 9001 (quality) are supporting standards."
      },
      {
        "n": 8,
        "q": "SE heuristics are best understood as:",
        "options": [
          "mandatory process steps required by ISO/IEC/IEEE 15288.",
          "memorable rules of thumb that pass on accumulated professional wisdom.",
          "quantitative formulas for computing system reliability.",
          "contractual clauses that govern acquirer–supplier agreements."
        ],
        "correct": 1,
        "explanation": "Heuristics are experiential “rules of thumb” (popularized by Maier and Rechtin), useful where analytical methods reach their limits — not mandated steps or formulas."
      },
      {
        "n": 9,
        "q": "Why is the cost of correcting a defect generally lowest when the defect is found early in the life cycle?",
        "options": [
          "Early defects are always less severe than later defects.",
          "Stakeholders are unavailable to approve late changes.",
          "Verification is only performed in early stages.",
          "Rework propagates into more downstream artifacts as the life cycle progresses, increasing correction cost."
        ],
        "correct": 3,
        "explanation": "A defect left undetected becomes embedded in design, build, and integration, so the rework footprint — and cost — grows over time."
      },
      {
        "n": 10,
        "q": "The INCOSE SE Principles (2022) are best described as:",
        "options": [
          "a fixed checklist of deliverables required at each decision gate.",
          "a transcendent set of principles (with sub-principles) that guide the application of SE.",
          "the verification methods used during system realization.",
          "the tailoring rules for adapting processes to a project."
        ],
        "correct": 1,
        "explanation": "The principles are intended as a transcendent disciplinary basis (15 principles, 20 sub-principles) guiding SE practice — not gate deliverables or verification methods."
      },
      {
        "n": 11,
        "q": "Which of the following is a defining feature of an enabling system?",
        "options": [
          "It is always a software subsystem of the system of interest.",
          "It exchanges data with the system of interest during normal operation.",
          "It supports the system of interest during one or more life-cycle stages but is not part of it in operation.",
          "It is the highest-level system in the architectural hierarchy."
        ],
        "correct": 2,
        "explanation": "Enabling systems (e.g., production, test, training, disposal systems) provide life-cycle support and have their own life cycles; they are not operational constituents of the SoI."
      },
      {
        "n": 12,
        "q": "A system that the system of interest must exchange data and services with during operation is best termed:",
        "options": [
          "an enabling system.",
          "a retired system.",
          "a constituent system element.",
          "an interoperating (or interfacing) system."
        ],
        "correct": 3,
        "explanation": "Operational data/service exchange defines interoperating/interfacing systems; enabling systems instead provide life-cycle support and are not part of operation."
      },
      {
        "n": 13,
        "q": "The system environment (context) includes:",
        "options": [
          "only the physical operating conditions during the utilization stage.",
          "only the users who operate the system.",
          "the internal system elements that produce emergent behavior.",
          "external elements that interact with the system across the life cycle, including users and external systems."
        ],
        "correct": 3,
        "explanation": "The environment/context is broader than the operating environment: it spans external interacting elements (users, external systems) throughout the life cycle."
      },
      {
        "n": 14,
        "q": "Modes and states of a system are:",
        "options": [
          "interchangeable terms for the same concept.",
          "fundamental behavioral characteristics, where modes are operational configurations and states describe condition at a point in time.",
          "always defined only during the retirement stage.",
          "synonyms for functional and physical baselines."
        ],
        "correct": 1,
        "explanation": "Modes and states are distinct, fundamental behavioral characteristics; they are not synonyms, nor are they baselines."
      },
      {
        "n": 15,
        "q": "The boundary of the system of interest is significant because it:",
        "options": [
          "fixes the development budget for the project.",
          "establishes the order in which stages must occur.",
          "determines which life-cycle model must be used.",
          "separates the SoI from enabling, interoperating, and interfacing systems and the environment."
        ],
        "correct": 3,
        "explanation": "The boundary distinguishes what is inside the SoI from the surrounding systems and environment, helping account for the whole system context."
      },
      {
        "n": 16,
        "q": "When the system of interest is a constituent of a system of systems (SoS), an important implication is that:",
        "options": [
          "the SoI no longer has its own life cycle.",
          "decision gates are no longer required.",
          "the evolution of the SoS must be considered in the life cycle of the SoI, and each constituent has its own life cycle.",
          "verification is performed only at the SoS level."
        ],
        "correct": 2,
        "explanation": "Each constituent system retains its own life cycle, and SoS evolution influences the SoI life cycle; gates and element-level verification still apply."
      },
      {
        "n": 17,
        "q": "What are the six generic life-cycle stages in ISO/IEC/IEEE 15288:2023?",
        "options": [
          "Initiation, Planning, Execution, Monitoring, Closing, Disposal.",
          "Requirements, Design, Build, Test, Deploy, Maintain.",
          "Concept, Development, Production, Utilization, Support, Retirement.",
          "Concept, Design, Manufacturing, Operation, Maintenance, Decommission."
        ],
        "correct": 2,
        "explanation": "The exact generic-stage names are Concept, Development, Production, Utilization, Support, Retirement; the others mix project phases or non-standard terms."
      },
      {
        "n": 18,
        "q": "Which statement about life-cycle stages is correct?",
        "options": [
          "Stages must always be executed strictly in sequence.",
          "A stage can be entered only once.",
          "Stages may overlap, run concurrently, repeat, or be entered at various points as needed.",
          "Retirement always requires the entire system of interest to be retired at once."
        ],
        "correct": 2,
        "explanation": "Stages need not be sequential or singular; retirement can apply to a single element. Only the statement that stages may overlap, repeat, or run concurrently reflects the Handbook."
      },
      {
        "n": 19,
        "q": "During which stage is the engineering baseline — requirements, architecture, design, and plans for later stages — primarily produced?",
        "options": [
          "Development.",
          "Concept.",
          "Production.",
          "Utilization."
        ],
        "correct": 0,
        "explanation": "The Development stage produces the engineering baseline; Concept explores the problem/solution space, and Production realizes the system."
      },
      {
        "n": 20,
        "q": "The Concept stage primarily involves:",
        "options": [
          "recognizing a need and exploring the problem and solution spaces via trade studies and mission/business analysis.",
          "removing the system from operation.",
          "translating approved baselines into a realized system.",
          "providing logistics and maintenance support to users."
        ],
        "correct": 0,
        "explanation": "Concept begins with recognition of a need and explores problem/solution spaces; realization, disposal, and support belong to later stages."
      },
      {
        "n": 21,
        "q": "Which two stages typically proceed in parallel?",
        "options": [
          "Concept and Retirement.",
          "Development and Production.",
          "Production and Retirement.",
          "Utilization and Support."
        ],
        "correct": 3,
        "explanation": "Utilization (using the system) runs in parallel with Support (sustaining it); the system is supported while in use."
      },
      {
        "n": 22,
        "q": "An entry decision gate is intended primarily to confirm that:",
        "options": [
          "the entry criteria are met and the resources needed for the stage are available.",
          "the objectives of the just-completed stage were achieved.",
          "the system has been fully verified and validated.",
          "the system is ready for disposal."
        ],
        "correct": 0,
        "explanation": "Entry gates check readiness and resources to begin a stage; confirming completed objectives is the role of the exit gate."
      },
      {
        "n": 23,
        "q": "At a decision gate, which of the following is NOT one of the standard options?",
        "options": [
          "Begin the subsequent stage(s).",
          "Automatically tailor the organization’s quality management process.",
          "Continue the current stage, possibly after reformulation.",
          "Hold the project, or terminate it."
        ],
        "correct": 1,
        "explanation": "The gate options are begin next, continue, return to a prior stage, hold, or terminate — tailoring the QM process is not a decision-gate option."
      },
      {
        "n": 24,
        "q": "How do agile approaches typically treat decision points compared with traditional gates?",
        "options": [
          "They eliminate decision points entirely.",
          "They make them less frequent but far more formal.",
          "They make them more frequent, smaller in scope, and less formal.",
          "They schedule them strictly by calendar date regardless of risk."
        ],
        "correct": 2,
        "explanation": "Agile keeps the underlying intent but changes cadence: more frequent, smaller-scope, less-formal checkpoints, often avoiding the term “gate.”"
      },
      {
        "n": 25,
        "q": "Planning for the Retirement stage should occur:",
        "options": [
          "only after the Support stage has ended.",
          "exclusively at the first exit decision gate.",
          "during the Concept and Development stages, as part of system definition.",
          "only if regulators require end-of-life disposal."
        ],
        "correct": 2,
        "explanation": "Disposal/retirement is planned early (Concept/Development); deferring it has repeatedly caused costly problems."
      },
      {
        "n": 26,
        "q": "What is the difference between a technical review and an audit?",
        "options": [
          "A review assesses progress against technical requirements using agreed criteria; an audit is a detailed, evidence-based check against released configuration information.",
          "A review checks compliance of products to released configuration information; an audit assesses progress against technical requirements.",
          "There is no difference; the terms are interchangeable.",
          "A review is always informal, while an audit is always conducted by the acquirer."
        ],
        "correct": 0,
        "explanation": "Reviews assess technical progress against agreed criteria; audits are detailed evidence-based checks against released configuration information — the reversed description (review as compliance check, audit as progress assessment) is the trap."
      },
      {
        "n": 27,
        "q": "A Functional Configuration Audit (FCA) primarily verifies that:",
        "options": [
          "the as-built product matches its released product definition information.",
          "the product has achieved its specified functional and performance requirements.",
          "the project schedule is on track.",
          "the supplier has the right to deliver the product."
        ],
        "correct": 1,
        "explanation": "FCA confirms functional/performance requirements are met; verifying the as-built matches the product definition is the role of the Physical Configuration Audit (PCA)."
      },
      {
        "n": 28,
        "q": "Which baseline is typically established when system requirements are allocated to system elements (around PDR)?",
        "options": [
          "Allocated baseline.",
          "Functional baseline.",
          "Product baseline.",
          "Operational baseline."
        ],
        "correct": 0,
        "explanation": "Allocating requirements to elements forms the allocated baseline (around PDR); the functional baseline is system-level, and the product baseline is the as-built definition."
      },
      {
        "n": 29,
        "q": "Where should the technical reviews and audits to be performed on a project be captured?",
        "options": [
          "In the risk register only.",
          "In the Systems Engineering Management Plan (SEMP).",
          "In the configuration status accounting record only.",
          "In the supplier’s commercial proposal."
        ],
        "correct": 1,
        "explanation": "The SEMP captures the planned technical reviews and audits and they are reflected in the project schedule."
      },
      {
        "n": 30,
        "q": "The product baseline is finalized at which point in a representative sequential sequence?",
        "options": [
          "At the Physical Configuration Audit (PCA).",
          "At the Preliminary Design Review (PDR).",
          "At the System Requirements Review (SRR).",
          "At the Alternative Systems Review (ASR)."
        ],
        "correct": 0,
        "explanation": "The product (as-built) baseline begins around CDR and is finalized at PCA; SRR/ASR relate to the functional baseline and PDR to the allocated baseline."
      },
      {
        "n": 31,
        "q": "A good practice for technical reviews and audits is to:",
        "options": [
          "hold them strictly on fixed calendar dates regardless of readiness.",
          "establish clear entry and exit criteria for each review and audit.",
          "exclude subject-matter experts to keep them short.",
          "conduct each review only once, at the end of the program."
        ],
        "correct": 1,
        "explanation": "Clear entry/exit criteria (and risk/event-driven scheduling, SMEs, multiple instances) characterize good reviews — not fixed dates or single end-of-program events."
      },
      {
        "n": 32,
        "q": "Which life-cycle approach assumes the full requirement set is known at the start, plans a single iteration, and produces no multiple deployments?",
        "options": [
          "Evolutionary.",
          "Sequential.",
          "Incremental.",
          "Agile."
        ],
        "correct": 1,
        "explanation": "Sequential = full requirements, single iteration, no redeployment. Incremental also has full requirements but multiple iterations; evolutionary has partial requirements."
      },
      {
        "n": 33,
        "q": "The key distinguishing feature of an evolutionary approach is that:",
        "options": [
          "the full requirement set is fixed before development begins.",
          "only a single deployment ever occurs.",
          "the requirements are only partially known at the start and are refined over multiple cycles.",
          "no feedback from stakeholders is sought between cycles."
        ],
        "correct": 2,
        "explanation": "Evolutionary approaches start with partial requirements, refined across cycles with stakeholder feedback — unlike sequential/incremental, which start with full requirements."
      },
      {
        "n": 34,
        "q": "An incremental approach differs from a sequential approach primarily in that it:",
        "options": [
          "starts with only partial requirements.",
          "never produces a deployable product.",
          "delivers capability through multiple planned iterations rather than a single delivery.",
          "does not require a defined requirement set."
        ],
        "correct": 2,
        "explanation": "Incremental keeps a full requirement set (like sequential) but delivers through multiple iterations; partial requirements characterize the evolutionary approach."
      },
      {
        "n": 35,
        "q": "Which statement about the SE Vee model is correct?",
        "options": [
          "It is an agile life-cycle model that replaces sequential development.",
          "It depicts relationships among SE activities and is applicable in sequential, iterative, and evolutionary approaches.",
          "It applies only to software-intensive systems.",
          "Its right leg represents requirements decomposition."
        ],
        "correct": 1,
        "explanation": "The Vee depicts SE-activity relationships across approaches; its left leg is decomposition/definition and its right leg is integration, verification, and validation."
      },
      {
        "n": 36,
        "q": "The left leg of the Vee model is associated with:",
        "options": [
          "integration, verification, and validation.",
          "architecture decomposition and definition.",
          "transition into the operational environment.",
          "disposal planning."
        ],
        "correct": 1,
        "explanation": "The left (descending) leg is decomposition/definition; the right (ascending) leg is integration/V&V."
      },
      {
        "n": 37,
        "q": "The Incremental Commitment Spiral Model (ICSM) is best characterized as:",
        "options": [
          "a sequential model with a single risk review at the end.",
          "an incremental, risk-driven model where each spiral proceeds only if risks are acceptable.",
          "a model that ignores stakeholder commitment.",
          "a purely software coding methodology."
        ],
        "correct": 1,
        "explanation": "ICSM is incremental and risk-driven; stakeholders review risks and mitigation at commitment points before proceeding to the next spiral."
      },
      {
        "n": 38,
        "q": "Agile systems engineering is best described as:",
        "options": [
          "a specific prescriptive process (a “how”) such as Scrum.",
          "a principle-based approach (a “what”) for uncertain knowledge or dynamic environments, resting on incremental/evolutionary development.",
          "a model that fixes all requirements before development starts.",
          "an approach that eliminates the need for verification."
        ],
        "correct": 1,
        "explanation": "Agile SE is a principle-based “what,” not a specific “how”; Scrum/XP/DevOps are domain methods, and agile still relies on incremental/evolutionary development."
      },
      {
        "n": 39,
        "q": "Which is the most appropriate situation for choosing an evolutionary approach?",
        "options": [
          "A construction project with well-understood, stable requirements.",
          "A safety-critical product requiring strict, documented adherence to fixed specifications.",
          "A novel R&D effort or system of systems where final requirements are not yet fully known.",
          "A mass-manufactured product with a fixed feature set released once."
        ],
        "correct": 2,
        "explanation": "Evolutionary fits novel/uncertain efforts (R&D, SoS) where requirements emerge; stable or safety-critical, fully specified work suits sequential approaches."
      },
      {
        "n": 40,
        "q": "The waterfall model is an example of which approach, and where has it been used most successfully?",
        "options": [
          "Sequential; in manufacturing, construction, and safety-critical domains with strict documentation.",
          "Incremental; in consumer electronics.",
          "Evolutionary; in research and development.",
          "Agile; in software start-ups."
        ],
        "correct": 0,
        "explanation": "Waterfall is the archetypal sequential model, historically successful where design changes are costly and strict documented process is mandated (e.g., construction, safety-critical)."
      },
      {
        "n": 41,
        "q": "How many life-cycle process groups does ISO/IEC/IEEE 15288 define, and what are they?",
        "options": [
          "Three: Technical, Management, and Agreement.",
          "Four: Agreement, Organizational Project-Enabling, Technical Management, and Technical.",
          "Two: Technical and Non-technical.",
          "Five: Agreement, Organizational, Project, Technical, and Support."
        ],
        "correct": 1,
        "explanation": "15288 groups the 30 processes into four: Agreement; Organizational Project-Enabling; Technical Management; and Technical."
      },
      {
        "n": 42,
        "q": "Which of the following is a Technical Management process?",
        "options": [
          "Risk Management.",
          "Portfolio Management.",
          "Acquisition.",
          "Disposal."
        ],
        "correct": 0,
        "explanation": "Risk Management is Technical Management; Acquisition is Agreement, Portfolio Management is Organizational Project-Enabling, and Disposal is a Technical process."
      },
      {
        "n": 43,
        "q": "Which of the following is an Organizational Project-Enabling process?",
        "options": [
          "Configuration Management.",
          "Integration.",
          "Human Resource Management.",
          "Supply."
        ],
        "correct": 2,
        "explanation": "Human Resource Management is Organizational Project-Enabling; Configuration Management is Technical Management, Integration is Technical, and Supply is Agreement."
      },
      {
        "n": 44,
        "q": "In an IPO process diagram, “enablers” refer to:",
        "options": [
          "the plans and standards that govern process activities.",
          "the stakeholders who approve the outputs.",
          "the work products produced by the process.",
          "the resources such as tools, facilities, and personnel that support the activities."
        ],
        "correct": 3,
        "explanation": "Enablers are supporting resources (tools, facilities, services); the governing plans/standards are “controls,” and work products are outputs."
      },
      {
        "n": 45,
        "q": "Applying the same process at successively lower levels of the system architecture is called:",
        "options": [
          "concurrency.",
          "iteration.",
          "recursion.",
          "tailoring."
        ],
        "correct": 2,
        "explanation": "Recursion = applying a process down the hierarchy; iteration = repeating at the same level; concurrency = running in parallel."
      },
      {
        "n": 46,
        "q": "Repeating a process to refine its outputs at the same level of the architecture is called:",
        "options": [
          "iteration.",
          "recursion.",
          "concurrency.",
          "decomposition."
        ],
        "correct": 0,
        "explanation": "Iteration is repetition at the same level to refine; recursion moves to lower levels, and concurrency is parallel execution."
      },
      {
        "n": 47,
        "q": "The Acquisition and Supply processes belong to which process group?",
        "options": [
          "Agreement.",
          "Technical Management.",
          "Technical.",
          "Organizational Project-Enabling."
        ],
        "correct": 0,
        "explanation": "Acquisition and Supply are the two Agreement processes governing the acquirer–supplier relationship."
      },
      {
        "n": 48,
        "q": "From whose perspective is the Acquisition process performed?",
        "options": [
          "The supplier obtaining materials from sub-tier vendors.",
          "The configuration manager controlling baselines.",
          "The verification team confirming requirements.",
          "The acquirer obtaining a product or service."
        ],
        "correct": 3,
        "explanation": "Acquisition is the acquirer’s process to obtain a product/service; Supply is the supplier’s counterpart process."
      },
      {
        "n": 49,
        "q": "Which Organizational Project-Enabling process authorizes a project and provides its resources?",
        "options": [
          "Project Planning.",
          "Quality Management.",
          "Life Cycle Model Management.",
          "Portfolio Management."
        ],
        "correct": 3,
        "explanation": "Portfolio Management authorizes projects and provides resources; Project Planning (Technical Management) then plans the work within that authorization."
      },
      {
        "n": 50,
        "q": "The purpose of the Quality Management process (Organizational Project-Enabling) is to:",
        "options": [
          "ensure the organization’s quality management process is applied to a specific project.",
          "establish and maintain organization-level quality policies, objectives, and procedures.",
          "verify that a system meets its specified requirements.",
          "control configuration items and baselines."
        ],
        "correct": 1,
        "explanation": "Quality Management operates at the organization level (policies/objectives); applying that process to a project is the role of Quality Assurance (Technical Management)."
      },
      {
        "n": 51,
        "q": "Life Cycle Model Management, Infrastructure Management, and Knowledge Management are all examples of:",
        "options": [
          "Technical processes.",
          "Agreement processes.",
          "Organizational Project-Enabling processes.",
          "Technical Management processes."
        ],
        "correct": 2,
        "explanation": "All three are Organizational Project-Enabling processes (along with Portfolio, Human Resource, and Quality Management)."
      },
      {
        "n": 52,
        "q": "The primary planning artifact produced by the Project Planning process is the:",
        "options": [
          "Systems Engineering Management Plan (SEMP), also called the SEP.",
          "risk register.",
          "configuration status accounting report.",
          "verification report."
        ],
        "correct": 0,
        "explanation": "Project Planning produces the SEMP/SEP, which identifies activities, events, work packages, resources, and references other plans."
      },
      {
        "n": 53,
        "q": "In the relationship between project management (PM) and systems engineering (SE) during Project Assessment and Control:",
        "options": [
          "SE is accountable for overall project results and PM for the technical activities.",
          "Both are accountable only for cost performance.",
          "PM and SE have no overlapping responsibilities.",
          "PM is accountable for overall project results and SE for the achievement of the technical activities."
        ],
        "correct": 3,
        "explanation": "PM is accountable for the overall project; SE is accountable for the technical effort — the distractor that reverses these roles is the trap."
      },
      {
        "n": 54,
        "q": "A Work Breakdown Structure (WBS) is best described as a product of:",
        "options": [
          "the Agreement processes only.",
          "the Verification process only.",
          "the Disposal process.",
          "the intersection of SE and project management activities during planning."
        ],
        "correct": 3,
        "explanation": "Creating the WBS (and FBS/PBS/OBS/CBS) is an activity where SE and project management intersect during planning."
      },
      {
        "n": 55,
        "q": "The Decision Management process exists to:",
        "options": [
          "record changes to configuration items.",
          "remove a system from operation.",
          "elicit stakeholder needs.",
          "provide a structured framework for selecting among alternatives to obtain the best value."
        ],
        "correct": 3,
        "explanation": "Decision Management provides structured selection among alternatives (e.g., trade studies) for best value; the other options describe CM, stakeholder needs, and disposal."
      },
      {
        "n": 56,
        "q": "When developing objectives and measures for a trade study, the team should base measures on:",
        "options": [
          "means objectives (the “how”).",
          "fundamental objectives (the “why/what”).",
          "the supplier’s preferences.",
          "the configuration baseline only."
        ],
        "correct": 1,
        "explanation": "Measures should derive from fundamental objectives (why/what), not means objectives (how), so alternatives are scored on what truly matters."
      },
      {
        "n": 57,
        "q": "Good trade-study practice, after identifying the alternative with the highest total value, is to:",
        "options": [
          "immediately declare success and stop the analysis.",
          "further analyze the data to find opportunities to modify design choices, unlock value, and reduce risk.",
          "discard all other alternatives without documentation.",
          "hand the decision entirely to the supplier."
        ],
        "correct": 1,
        "explanation": "Stopping at the top-scoring alternative is poor practice; mining the data for sensitivities, untapped value, and risk reduction is recommended."
      },
      {
        "n": 58,
        "q": "The measurement of risk has which two components?",
        "options": [
          "Cost and schedule.",
          "Probability and profit.",
          "Likelihood of occurrence and consequence (severity) if it occurs.",
          "Frequency and duration."
        ],
        "correct": 2,
        "explanation": "Risk combines the likelihood an event occurs with the consequence if it does — the basis of the likelihood/consequence matrix."
      },
      {
        "n": 59,
        "q": "Which list correctly states the four basic risk treatment approaches?",
        "options": [
          "Identify, Analyze, Treat, Monitor.",
          "Detect, Correct, Prevent, Improve.",
          "Plan, Do, Check, Act.",
          "Acceptance, Avoidance, Control (mitigation), and Transference."
        ],
        "correct": 3,
        "explanation": "The four treatment approaches are Acceptance, Avoidance, Control/Mitigation, and Transference; “Identify/Analyze/Treat/Monitor” are process activities, not treatments."
      },
      {
        "n": 60,
        "q": "Reducing a risk by expending budget or other resources to lower its likelihood and/or consequence over time is called:",
        "options": [
          "control (mitigation).",
          "avoidance.",
          "acceptance.",
          "transference."
        ],
        "correct": 0,
        "explanation": "Control/mitigation spends resources to reduce likelihood/consequence; avoidance eliminates the risk (e.g., via redesign), and transference shifts it to another party."
      },
      {
        "n": 61,
        "q": "Handling a risk by changing requirements or redesigning so the risk no longer applies is an example of:",
        "options": [
          "acceptance.",
          "avoidance.",
          "transference.",
          "control."
        ],
        "correct": 1,
        "explanation": "Eliminating the risk through requirement change or redesign is avoidance; control reduces (but retains) the risk, and transference moves it to another party."
      },
      {
        "n": 62,
        "q": "“Opportunity” in INCOSE risk/opportunity management is best described as:",
        "options": [
          "a risk that has already occurred.",
          "a mandatory contractual milestone.",
          "a defect found during verification.",
          "the potential for realizing wanted, positive consequences of an event, managed concurrently with risk."
        ],
        "correct": 3,
        "explanation": "Opportunity is the positive counterpart to risk (same matrix structure, desirable consequence), managed concurrently with risk."
      },
      {
        "n": 63,
        "q": "Which set correctly lists the four risk categories the Handbook depicts as interacting?",
        "options": [
          "Internal, external, known, unknown.",
          "Strategic, operational, financial, and reputational.",
          "Safety, security, privacy, and quality.",
          "Technical, cost, schedule, and programmatic."
        ],
        "correct": 3,
        "explanation": "The Handbook shows technical, cost, schedule, and programmatic risks interacting; the other groupings are not the four it uses."
      },
      {
        "n": 64,
        "q": "The primary output that records identified risks, their likelihood, consequence, and treatment status is the:",
        "options": [
          "configuration status account.",
          "measurement plan.",
          "verification report.",
          "risk register (risk profile)."
        ],
        "correct": 3,
        "explanation": "The risk register/profile records risks with likelihood, consequence, thresholds, priority, and treatment status."
      },
      {
        "n": 65,
        "q": "Which standard provides over 30 risk assessment techniques such as FMEA, FTA, and SWOT analysis?",
        "options": [
          "IEC 31010.",
          "ISO 9001.",
          "ISO/IEC/IEEE 29148.",
          "ISO/IEC/IEEE 42010."
        ],
        "correct": 0,
        "explanation": "IEC 31010 catalogs risk assessment techniques (FMEA, FTA, Monte Carlo, SWOT, etc.); 29148 is requirements, 42010 is architecture description."
      },
      {
        "n": 66,
        "q": "Which set correctly lists the four functions of the Configuration Management process?",
        "options": [
          "Inspection, analysis, demonstration, and test.",
          "Planning, monitoring, controlling, and closing.",
          "Identification, change control, status accounting, and configuration audit.",
          "Elicitation, definition, allocation, and traceability."
        ],
        "correct": 2,
        "explanation": "CM comprises configuration identification, change control/management, status accounting, and configuration audit; the other lists describe project, verification, and requirements activities."
      },
      {
        "n": 67,
        "q": "A Physical Configuration Audit (PCA) verifies that:",
        "options": [
          "the product’s functional and performance requirements have been met.",
          "stakeholder needs are satisfied in the operational environment.",
          "the project budget is within limits.",
          "the as-built product conforms to its released product definition information."
        ],
        "correct": 3,
        "explanation": "PCA confirms the as-built matches the released product definition; meeting functional/performance requirements is the FCA, and operational suitability is validation."
      },
      {
        "n": 68,
        "q": "Establishing and maintaining baselines is primarily the responsibility of which process?",
        "options": [
          "Information Management.",
          "Measurement.",
          "Quality Assurance.",
          "Configuration Management."
        ],
        "correct": 3,
        "explanation": "CM establishes and maintains configuration items and baselines; requirements management hands artifacts to CM for baselining."
      },
      {
        "n": 69,
        "q": "In an evolutionary approach where multiple versions may be operated and supported simultaneously, what becomes especially essential?",
        "options": [
          "A single, never-changing requirement baseline.",
          "Avoiding any stakeholder feedback.",
          "Elimination of all decision gates.",
          "Well-functioning configuration control."
        ],
        "correct": 3,
        "explanation": "Multiple concurrent versions make robust configuration control essential to avoid confusion over which capability belongs to which version."
      },
      {
        "n": 70,
        "q": "Configuration status accounting principally provides:",
        "options": [
          "the legal terms of the acquirer–supplier agreement.",
          "the verification methods for each requirement.",
          "recorded information on the status and history of configuration items and changes.",
          "the organization’s quality policy."
        ],
        "correct": 2,
        "explanation": "Status accounting records the status/history of configuration items and changes, supporting metrics and reconciliation (e.g., as-designed vs as-built)."
      },
      {
        "n": 71,
        "q": "The purpose of the Information Management process is to:",
        "options": [
          "generate, obtain, transform, retain, retrieve, disseminate, and dispose of information for designated stakeholders.",
          "select among design alternatives for best value.",
          "identify and treat project risks.",
          "verify that artifacts meet specified requirements."
        ],
        "correct": 0,
        "explanation": "Information Management handles the full life cycle of information for stakeholders; the other options describe Decision Management, Risk Management, and Verification."
      },
      {
        "n": 72,
        "q": "Information managed under Information Management should be:",
        "options": [
          "informal and undocumented to remain flexible.",
          "unambiguous, complete, verifiable, consistent, traceable, and presentable.",
          "limited strictly to contractual information.",
          "available only after the system is retired."
        ],
        "correct": 1,
        "explanation": "Information must be unambiguous, complete, verifiable, consistent, traceable, and presentable, and provided to the right parties at the right time."
      },
      {
        "n": 73,
        "q": "Measures of Effectiveness (MOEs) are best described as:",
        "options": [
          "design-level parameters tracked against a tolerance band over time.",
          "the supplier’s internal cost-control metrics.",
          "the acquirer’s key indicators of mission success, stated from the user viewpoint and independent of any particular solution.",
          "the minimum critical performance parameters with thresholds and objectives."
        ],
        "correct": 2,
        "explanation": "MOEs are acquirer-viewpoint, solution-independent success indicators; the tolerance-band measure is a TPM, and the threshold/objective “critical few” are KPPs."
      },
      {
        "n": 74,
        "q": "Technical Performance Measures (TPMs) are primarily used to:",
        "options": [
          "state operational success criteria independent of the solution.",
          "record the legal agreement between acquirer and supplier.",
          "define the acquirer’s mission needs.",
          "assess design progress, show compliance to performance requirements, and track technical risk over time."
        ],
        "correct": 3,
        "explanation": "TPMs track design progress and technical risk against a tolerance band; MOEs are solution-independent mission criteria."
      },
      {
        "n": 75,
        "q": "Key Performance Parameters (KPPs) are characterized by the fact that they:",
        "options": [
          "are a full listing of all system requirements.",
          "are measured exclusively during disposal.",
          "are derived only after the system is built.",
          "represent the critical few parameters, each with a threshold and an objective value, defined by the acquirer."
        ],
        "correct": 3,
        "explanation": "KPPs are the minimum critical drivers of operational performance, each with a threshold and objective, set by the acquirer when concepts/requirements are defined."
      },
      {
        "n": 76,
        "q": "In the product-measure hierarchy, MOPs are used to:",
        "options": [
          "elicit stakeholder needs.",
          "define the acquirer’s mission-level success criteria.",
          "record configuration item status.",
          "assess whether the system meets the design/performance requirements necessary to satisfy the MOEs."
        ],
        "correct": 3,
        "explanation": "MOPs sit below MOEs and assess whether the design performance needed to satisfy the MOEs is achieved; they are derived from/provide insight for MOEs."
      },
      {
        "n": 77,
        "q": "Selection of TPMs should be limited to:",
        "options": [
          "critical technical thresholds or parameters that, if not met, put the project at cost, schedule, or performance risk.",
          "every requirement in the specification.",
          "parameters chosen by the supplier for convenience.",
          "measures collected only after delivery."
        ],
        "correct": 0,
        "explanation": "TPMs are deliberately limited to critical parameters whose shortfall threatens cost, schedule, or performance — they are not a full requirements list."
      },
      {
        "n": 78,
        "q": "A “leading indicator” differs from a typical measure in that it:",
        "options": [
          "reports only historical status after performance is realized.",
          "uses trend information to predict future performance before it is realized.",
          "is collected exclusively during the retirement stage.",
          "applies only to financial parameters."
        ],
        "correct": 1,
        "explanation": "Leading indicators are forward-looking, using trends to forecast outcomes and enable proactive action — unlike lagging status measures."
      },
      {
        "n": 79,
        "q": "The Handbook emphasizes that measurement adds value only when:",
        "options": [
          "the largest possible number of measures is collected.",
          "measures are kept confidential from the project team.",
          "the results are provided to decision makers and lead to action.",
          "measurement replaces risk management."
        ],
        "correct": 2,
        "explanation": "Measurement by itself does not improve anything; value comes when results inform decisions and action is taken."
      },
      {
        "n": 80,
        "q": "The purpose of the Quality Assurance process is to:",
        "options": [
          "establish the organization’s overarching quality policies and objectives.",
          "verify that a realized system meets its specified requirements.",
          "help ensure the effective application of the organization’s Quality Management process to the project.",
          "validate that the system satisfies stakeholder needs."
        ],
        "correct": 2,
        "explanation": "QA (Technical Management) ensures the organization’s QM process is effectively applied to the project; setting org-level policy is QM, and meeting requirements/needs is verification/validation."
      },
      {
        "n": 81,
        "q": "Quality Assurance and Quality Management differ chiefly in that:",
        "options": [
          "QA is a Technical Management (project-level) process while QM is an Organizational (enterprise-level) process.",
          "QA is organization-level and QM is project-level.",
          "they are the same process under two names.",
          "QA applies only to software and QM only to hardware."
        ],
        "correct": 0,
        "explanation": "QA operates at the project level (Technical Management); QM operates at the organization level (Organizational Project-Enabling) — the distractor that reverses these levels is the trap."
      },
      {
        "n": 82,
        "q": "Quality Assurance is best understood as activities that aim to:",
        "options": [
          "detect defects only after delivery to the customer.",
          "provide adequate confidence that a product/process conforms to requirements/methodology, with built-in quality that prevents defects.",
          "set the price of the delivered system.",
          "select the system architecture."
        ],
        "correct": 1,
        "explanation": "QA provides confidence of conformance and emphasizes built-in, preventive quality — not post-delivery defect detection, pricing, or architecture selection."
      },
      {
        "n": 83,
        "q": "Which requirement-statement characteristic means the statement can be interpreted in only one way by all intended stakeholders?",
        "options": [
          "Unambiguous.",
          "Singular.",
          "Complete.",
          "Verifiable."
        ],
        "correct": 0,
        "explanation": "Unambiguous = a single interpretation by all stakeholders. Singular = one capability per statement; complete = sufficiently described; verifiable = realization can be confirmed."
      },
      {
        "n": 84,
        "q": "A requirement that states only a single capability, characteristic, constraint, or quality factor is said to be:",
        "options": [
          "conforming.",
          "necessary.",
          "feasible.",
          "singular."
        ],
        "correct": 3,
        "explanation": "Singular = exactly one capability/characteristic per statement; necessary, feasible, and conforming address need, realizability, and style-guide compliance respectively."
      },
      {
        "n": 85,
        "q": "The characteristic “verifiable” means a requirement is:",
        "options": [
          "traceable to a parent requirement.",
          "the accurate representation of a higher-level requirement.",
          "structured and worded so that its realization can be confirmed to the approving authority’s satisfaction.",
          "compliant with an approved style guide."
        ],
        "correct": 2,
        "explanation": "Verifiable concerns being able to confirm realization; correct = accurate representation of the source; conforming = style-guide compliance; traceability is a separate attribute."
      },
      {
        "n": 86,
        "q": "Which is a characteristic of a requirement SET (as opposed to an individual statement)?",
        "options": [
          "Consistent.",
          "Singular.",
          "Unambiguous.",
          "Conforming."
        ],
        "correct": 0,
        "explanation": "Consistent (no conflicts/overlaps, uniform terms) is a set characteristic; singular, unambiguous, and conforming are statement characteristics."
      },
      {
        "n": 87,
        "q": "How do stakeholder requirements differ from system requirements?",
        "options": [
          "Stakeholder requirements express what stakeholders need from their perspective; system requirements are the technical perspective the SoI must meet.",
          "Stakeholder requirements are the technical “must meet” view; system requirements are the stakeholders’ view.",
          "They are identical and used interchangeably.",
          "System requirements always precede stakeholder requirements in time."
        ],
        "correct": 0,
        "explanation": "Stakeholder requirements are from the stakeholders’ perspective; system requirements are the more detailed technical view derived from them — the reversed description is the trap."
      },
      {
        "n": 88,
        "q": "The set of system requirements allocated across the system hierarchy forms the:",
        "options": [
          "functional baseline.",
          "allocated baseline.",
          "product baseline.",
          "operational baseline."
        ],
        "correct": 1,
        "explanation": "Allocating system requirements down the hierarchy forms the allocated baseline; the functional baseline is the system-level set, and the product baseline is as-built."
      },
      {
        "n": 89,
        "q": "Requirements management, per ISO/IEC/IEEE 29148, principally encompasses tasks that:",
        "options": [
          "select the architecture for the system.",
          "record and maintain evolving requirements and their context, establish traceability, and control change.",
          "physically build the system elements.",
          "dispose of the system at end of life."
        ],
        "correct": 1,
        "explanation": "Requirements management records/maintains requirements and context, establishes traceability, controls change, and feeds artifacts to CM for baselining."
      },
      {
        "n": 90,
        "q": "Why is it recommended that even stakeholder needs follow the rules for quality requirements?",
        "options": [
          "Because better-formed needs reduce ambiguity when transforming needs into requirements.",
          "Because it is contractually mandated by ISO 9001.",
          "Because needs must be verified by test.",
          "Because needs become the product baseline."
        ],
        "correct": 0,
        "explanation": "Well-formed needs reduce ambiguity in transformation into requirements; needs are not the product baseline and are not necessarily test-verified."
      },
      {
        "n": 91,
        "q": "The System Architecture Definition process primarily:",
        "options": [
          "realizes system elements by building, buying, or reusing.",
          "records the status of configuration items.",
          "removes the system from operation.",
          "defines the high-level structure, concepts, and properties of the system using views and viewpoints."
        ],
        "correct": 3,
        "explanation": "Architecture Definition establishes the high-level structure/properties via views and viewpoints; realizing elements is Implementation, and disposal/status are other processes."
      },
      {
        "n": 92,
        "q": "A make/buy/reuse decision for a system element is most directly associated with which process?",
        "options": [
          "Acquisition.",
          "Validation.",
          "Disposal.",
          "Design Definition (informing Implementation)."
        ],
        "correct": 3,
        "explanation": "Design Definition provides the detail enabling make/buy/reuse decisions realized in Implementation; validation, disposal, and acquisition are unrelated to this choice."
      },
      {
        "n": 93,
        "q": "An N-squared (N²) diagram is most commonly used to support which activity?",
        "options": [
          "Recording lessons learned.",
          "Computing life-cycle cost.",
          "Scheduling decision gates.",
          "Identifying and managing interfaces during integration."
        ],
        "correct": 3,
        "explanation": "The N² diagram captures interfaces between elements, supporting integration and interface management."
      },
      {
        "n": 94,
        "q": "Verification provides objective evidence that an artifact:",
        "options": [
          "satisfies stakeholder needs in the intended operational environment.",
          "fulfils its specified requirements and characteristics (“built right”).",
          "is the most cost-effective solution available.",
          "has been approved by the portfolio manager."
        ],
        "correct": 1,
        "explanation": "Verification = “built right” (meets specified requirements). Satisfying stakeholder needs in the operational environment is validation."
      },
      {
        "n": 95,
        "q": "Validation provides objective evidence that the system:",
        "options": [
          "meets its specified requirements regardless of operational use.",
          "conforms to its released product definition information.",
          "achieves its intended use in the intended operational environment by the intended users (“right thing built”).",
          "has the lowest possible life-cycle cost."
        ],
        "correct": 2,
        "explanation": "Validation = “right thing built” (meets needs/intended use); meeting specified requirements is verification, and conformance to product definition is the PCA."
      },
      {
        "n": 96,
        "q": "Which set lists the four basic verification (and validation) methods?",
        "options": [
          "Review, walkthrough, audit, and inspection.",
          "Inspection, analysis, demonstration, and test.",
          "Plan, perform, manage, and report.",
          "Identify, allocate, trace, and verify."
        ],
        "correct": 1,
        "explanation": "The four methods are inspection, analysis (incl. modeling & simulation), demonstration, and test; the other lists are review types or process activities."
      },
      {
        "n": 97,
        "q": "A verification method that uses analytical data or simulation under defined conditions to show theoretical compliance — used when realistic testing is not cost-effective — is:",
        "options": [
          "inspection.",
          "demonstration.",
          "analysis.",
          "test."
        ],
        "correct": 2,
        "explanation": "Analysis (including modeling/simulation) shows theoretical compliance where testing to realistic conditions is impractical; it may also use “similarity.”"
      },
      {
        "n": 98,
        "q": "A qualitative exhibition of functional performance accomplished with no or minimal instrumentation is the verification method called:",
        "options": [
          "test.",
          "analysis.",
          "demonstration.",
          "inspection."
        ],
        "correct": 2,
        "explanation": "Demonstration is qualitative with minimal instrumentation; test is quantitative under controlled conditions, and analysis uses analytical data/simulation."
      },
      {
        "n": 99,
        "q": "Which verification method quantitatively verifies operability or performance under controlled conditions, often using special instrumentation?",
        "options": [
          "Test.",
          "Demonstration.",
          "Inspection.",
          "Analysis."
        ],
        "correct": 0,
        "explanation": "Test obtains accurate quantitative data under controlled real or simulated conditions; demonstration is qualitative and inspection relies on examination/observation."
      },
      {
        "n": 100,
        "q": "During system realization, verification and integration generally proceed such that:",
        "options": [
          "each element is verified before being integrated into the next higher level, with discrepancies corrected first.",
          "the whole system is integrated first and verified only once at the top level.",
          "validation is completed before any verification begins.",
          "elements are integrated regardless of verification status to save schedule."
        ],
        "correct": 0,
        "explanation": "Elements are verified at each level and any discrepancies corrected before integration into the next higher level — verification is recursive and precedes upward integration."
      }
    ]
  },
  "ch2": {
    "no": 2,
    "title": "System Life Cycle Concepts, Models & Processes",
    "questions": [
      {
        "n": 1,
        "q": "What is the primary rationale for breaking a system life cycle into stages?",
        "options": [
          "To guarantee that the system is delivered within a fixed budget and schedule",
          "To ensure each stage is executed sequentially and never overlaps with another",
          "To allow risk-managed decisions to be made at key points, with progress gated by decision gates",
          "To assign full responsibility for each stage to a single organization"
        ],
        "correct": 2,
        "explanation": "Sec 2.1: the critical feature is that progress is gated by specific decision points (decision gates); stages allow decisions at key points and need not be sequential."
      },
      {
        "n": 2,
        "q": "Which statement about life cycle stages is TRUE per ISO/IEC/IEEE 15288:2023?",
        "options": [
          "Stages can overlap, occur concurrently, and be entered as many times as needed",
          "Each stage may be entered only once during the life cycle",
          "Stages must be executed strictly sequentially and singularly",
          "Retirement always requires the entire SoI to be retired at the same time"
        ],
        "correct": 0,
        "explanation": "Sec 2.1.1: stages can be entered multiple times, are often not sequential, can occur concurrently or overlap; retirement can apply to any system element."
      },
      {
        "n": 3,
        "q": "The Concept stage of the life cycle begins with:",
        "options": [
          "Approval to translate the development baselines into an actual system",
          "Transition of the system into its operational environment",
          "Recognition of a need for a new or modified mission or business capability",
          "Provisioning of support for the system's utilization"
        ],
        "correct": 2,
        "explanation": "Sec 2.1.2: the concept stage begins with recognition of a need for a new or modified mission/business capability and can include exploratory research."
      },
      {
        "n": 4,
        "q": "During which stage is the engineering baseline (system requirements, architecture, design, documentation, and plans for subsequent stages) primarily matured?",
        "options": [
          "Concept stage",
          "Production stage",
          "Development stage",
          "Utilization stage"
        ],
        "correct": 2,
        "explanation": "Sec 2.1.2: the development stage matures concepts and stakeholder needs into an engineering baseline that can be produced, utilized, and supported."
      },
      {
        "n": 5,
        "q": "The Production stage begins with:",
        "options": [
          "Approval to translate the development-stage baselines into an actual system",
          "Recognition of a capability gap or new opportunity",
          "The establishment of the functional baseline",
          "A decision that the system has reached the end of its useful life"
        ],
        "correct": 0,
        "explanation": "Sec 2.1.2: production begins with approval to translate the development-stage baselines into an actual system (or approved parts of the SoI)."
      },
      {
        "n": 6,
        "q": "Which stage generally lasts much longer than the others and is where product modifications are often introduced to remedy deficiencies, enhance capabilities, or extend life?",
        "options": [
          "Development",
          "Production",
          "Retirement",
          "Utilization"
        ],
        "correct": 3,
        "explanation": "Sec 2.1.2: the utilization stage is generally much longer than the others; modifications are introduced throughout it."
      },
      {
        "n": 7,
        "q": "The Support stage ends when:",
        "options": [
          "The system is first transitioned to use",
          "A decision is made that the system is at end of useful life or should no longer be supported",
          "The initial product baseline is approved",
          "The functional baseline is established at SRR"
        ],
        "correct": 1,
        "explanation": "Sec 2.1.2: the support stage ends when a decision is made that the system is at end of useful life or should no longer be supported."
      },
      {
        "n": 8,
        "q": "When should planning for retirement of the system be performed?",
        "options": [
          "Only after the support stage has ended",
          "Only when disposal laws explicitly require it",
          "As part of system definition during the concept and development stages",
          "Exclusively during the production stage"
        ],
        "correct": 2,
        "explanation": "Sec 2.1.2: planning for retirement is part of system definition during the concept and development stages; failing to do so has repeated, costly consequences."
      },
      {
        "n": 9,
        "q": "What best describes the relationship between the utilization stage and the support stage?",
        "options": [
          "The support stage always fully precedes the utilization stage",
          "They proceed in parallel",
          "The support stage replaces the utilization stage once the system is fielded",
          "They are mutually exclusive and cannot occur at the same time"
        ],
        "correct": 1,
        "explanation": "Sec 2.1.2: the utilization stage proceeds in parallel with the support stage."
      },
      {
        "n": 10,
        "q": "Which statement about enabling systems is correct?",
        "options": [
          "They have no life cycle of their own",
          "They are always part of the SoI's product baseline",
          "They are only relevant during the disposal stage",
          "They have their own life cycles that must be integrated with that of the SoI"
        ],
        "correct": 3,
        "explanation": "Sec 2.1.1: enabling systems have their own life cycles that must be integrated with the SoI's; their maturity/availability must be considered across the life cycle."
      },
      {
        "n": 11,
        "q": "Why is the Concept stage considered a particularly critical part of the life cycle?",
        "options": [
          "It is always the most expensive stage in absolute cost",
          "It is the stage in which the system is physically produced",
          "It is the only stage that requires configuration management",
          "Decisions made during it shape, with increasing difficulty to change, the possibilities for all remaining stages"
        ],
        "correct": 3,
        "explanation": "Sec 2.1.2: concept-stage decisions shape, with increasing difficulty to change, the possibilities for all remaining stages."
      },
      {
        "n": 12,
        "q": "Which is NOT a typical output of the Concept stage?",
        "options": [
          "Preliminary concept artifacts such as the OpsCon and Support Concept",
          "Feasibility assessments such as models, simulations, and prototypes",
          "A fully qualified, production-ready system ready for installation and transition",
          "Preliminary architecture solutions and stakeholder requirements"
        ],
        "correct": 2,
        "explanation": "Sec 2.1.2: a qualified, production-ready system is an output of the Production stage, not the Concept stage."
      },
      {
        "n": 13,
        "q": "A decision gate is best described as:",
        "options": [
          "A fixed calendar date by which a stage must end",
          "A configuration item placed under formal change control",
          "A risk-managing decision point that gates progress and is clearly visible",
          "A technical review conducted only by the acquirer organization"
        ],
        "correct": 2,
        "explanation": "Sec 2.1.3: decision gates are risk-managing decision points at the beginning/end of stages that make progress clearly visible."
      },
      {
        "n": 14,
        "q": "The entry decision gate for a stage is intended primarily to ensure that:",
        "options": [
          "The objectives of the stage have already been achieved",
          "The product baseline has been finalized",
          "The entry criteria are met and the resources needed for the stage are available",
          "The system has been validated by its intended users"
        ],
        "correct": 2,
        "explanation": "Sec 2.1.1: the entry decision gate ensures entry criteria are met and the resources needed for the stage are available."
      },
      {
        "n": 15,
        "q": "Which of the following is NOT one of the options available at a decision gate?",
        "options": [
          "Permanently waive all future reviews and decision gates",
          "Begin the subsequent stage or stages",
          "Continue this stage, possibly after some reformulation",
          "Hold the project activity or terminate the project"
        ],
        "correct": 0,
        "explanation": "Sec 2.1.3: gate options are begin next stage(s), continue (possibly reformulated), go to/restart a preceding stage, hold, or terminate."
      },
      {
        "n": 16,
        "q": "The exit decision gate for a stage is intended primarily to ensure that:",
        "options": [
          "Resources for the next stage have been fully budgeted",
          "The acquirer has signed the contract",
          "The objectives of the stage have been achieved and the risk of going forward is acceptable",
          "A supplier has been selected for the next stage"
        ],
        "correct": 2,
        "explanation": "Sec 2.1.1: the exit decision gate ensures stage objectives have been achieved and forward risk is acceptable."
      },
      {
        "n": 17,
        "q": "Compared with traditional milestones, decision points in agile development tend to be:",
        "options": [
          "Less frequent, larger in scope, and more formal",
          "More frequent, smaller in scope, and less formal",
          "Identical in cadence and formality",
          "Eliminated entirely from the life cycle"
        ],
        "correct": 1,
        "explanation": "Sec 2.1.3: frequent stakeholder interaction in agile changes the frequency (more), scope (smaller), and formality (less formal) of decision gates."
      },
      {
        "n": 18,
        "q": "Balancing the formality and frequency of decision gates is described in the handbook as:",
        "options": [
          "A purely administrative concern with little practical impact",
          "Solely the responsibility of the configuration manager",
          "A critical success factor for all SE process areas",
          "Unnecessary when an incremental life cycle is used"
        ],
        "correct": 2,
        "explanation": "Sec 2.1.3: balancing the formality and frequency of decision gates is a critical success factor for all SE process areas."
      },
      {
        "n": 19,
        "q": "Upon successful completion of a decision gate, approved artifacts are:",
        "options": [
          "Discarded once the next stage begins",
          "Returned to the supplier for mandatory rework",
          "Exempted from any further change control",
          "Placed under configuration management along with the decisions, rationale, and assumptions"
        ],
        "correct": 3,
        "explanation": "Sec 2.1.3: approved artifacts are placed under configuration management along with the decisions, rationale, and assumptions."
      },
      {
        "n": 20,
        "q": "Per ISO/IEC 24748-8 / IEEE 15288.2, a technical review is:",
        "options": [
          "A detailed review of processes and inspection of products to confirm conformance to released configuration information",
          "An audit of the supplier's financial records and payment milestones",
          "A workshop whose sole purpose is to identify project risks",
          "A series of SE activities at logical transition points by which project progress is assessed against technical requirements using mutually agreed criteria"
        ],
        "correct": 3,
        "explanation": "Sec 2.1.4: a technical review assesses progress at logical transition points against technical requirements using a mutually agreed set of criteria."
      },
      {
        "n": 21,
        "q": "How does an audit differ from a technical review?",
        "options": [
          "An audit assesses progress at logical transition points using agreed criteria",
          "An audit is the negotiation of acceptance criteria for an agreement",
          "An audit is a detailed review of processes and product definition information, with inspection of products to confirm conformance to released configuration definition information",
          "An audit is a risk-identification workshop held before each stage"
        ],
        "correct": 2,
        "explanation": "Sec 2.1.4: an audit is a detailed review of processes/product definition info and inspection of products to confirm conformance to released configuration information."
      },
      {
        "n": 22,
        "q": "Good practice is for technical reviews to be conducted as:",
        "options": [
          "Risk-driven or event-driven, not schedule-driven",
          "Schedule-driven, held on a fixed date regardless of readiness",
          "Conducted only when the acquirer demands them",
          "Held only once, at the end of the entire life cycle"
        ],
        "correct": 0,
        "explanation": "Sec 2.1.4: reviews should be risk-driven (risk acceptable) or event-driven (entry criteria satisfied), not schedule-driven."
      },
      {
        "n": 23,
        "q": "The allocated baseline is normally established at which review?",
        "options": [
          "Preliminary Design Review (PDR)",
          "System Requirements Review (SRR)",
          "Critical Design Review (CDR)",
          "Physical Configuration Audit (PCA)"
        ],
        "correct": 0,
        "explanation": "Sec 2.1.4 / Fig 2.4: in a sequential model the allocated baseline is associated with PDR."
      },
      {
        "n": 24,
        "q": "The Critical Design Review (CDR) is most closely associated with establishing the:",
        "options": [
          "Functional baseline",
          "Allocated baseline",
          "(Initial) product baseline",
          "As-deployed baseline"
        ],
        "correct": 2,
        "explanation": "Sec 2.1.4 / Fig 2.4: CDR is associated with the initial product baseline."
      },
      {
        "n": 25,
        "q": "A Physical Configuration Audit (PCA) primarily:",
        "options": [
          "Confirms functional characteristics meet requirements through testing",
          "Establishes the functional baseline at the start of development",
          "Verifies the as-built product configuration against its product (design) definition information",
          "Selects the supplier for the production stage"
        ],
        "correct": 2,
        "explanation": "Sec 2.1.4: auditing validates that the as-built product conforms to its product configuration/design definition information; the PCA is a physical configuration audit."
      },
      {
        "n": 26,
        "q": "A Functional Configuration Audit (FCA) is conducted to:",
        "options": [
          "Verify that the as-built configuration matches the released drawings",
          "Confirm that an item has achieved the functional and performance requirements defined in its configuration documentation",
          "Approve the acquisition strategy and request for supply",
          "Establish the allocated baseline at PDR"
        ],
        "correct": 1,
        "explanation": "Sec 2.1.4: the FCA verifies that functional/performance requirements have been achieved by the product."
      },
      {
        "n": 27,
        "q": "Which of the following is a recommended good practice for technical reviews and audits?",
        "options": [
          "Skip entry and exit criteria to save preparation time",
          "Exclude subject matter experts and independent reviewers to reduce cost",
          "Establish clear entry and exit criteria for each review and audit",
          "Hold each review on a fixed calendar date regardless of readiness"
        ],
        "correct": 2,
        "explanation": "Sec 2.1.4: establishing clear entry and exit criteria for each review and audit is a listed good practice."
      },
      {
        "n": 28,
        "q": "The mapping of reviews/audits to baselines shown in Figure 2.4 applies most directly to which life cycle model approach?",
        "options": [
          "Evolutionary",
          "Agile",
          "Sequential",
          "Spiral only"
        ],
        "correct": 2,
        "explanation": "Sec 2.1.4: Fig 2.4 depicts the typical baselines for a sequential life cycle model; the depiction varies significantly for incremental models."
      },
      {
        "n": 29,
        "q": "The three life cycle model approach groups identified in the handbook are:",
        "options": [
          "Sequential, incremental, and evolutionary",
          "Waterfall, Vee, and Spiral",
          "Predictive, adaptive, and hybrid",
          "Concept, development, and production"
        ],
        "correct": 0,
        "explanation": "Sec 2.2: the three approaches are sequential, incremental, and evolutionary (Table 2.2, Fig 2.5)."
      },
      {
        "n": 30,
        "q": "Per Table 2.2, which approach has a FULL requirement set at start, a SINGLE planned iteration, and NO multiple deployments?",
        "options": [
          "Incremental",
          "Evolutionary",
          "Agile",
          "Sequential"
        ],
        "correct": 3,
        "explanation": "Table 2.2: Sequential = full requirements at start, single iteration, no multiple deployments."
      },
      {
        "n": 31,
        "q": "Per Table 2.2, the evolutionary approach is characterized by:",
        "options": [
          "Full requirements at start and a single iteration",
          "Full requirements at start and multiple iterations",
          "A partial requirement set at start and a single deployment",
          "A partial requirement set at start, multiple iterations, and typically multiple deployments"
        ],
        "correct": 3,
        "explanation": "Table 2.2: Evolutionary = partial requirements at start, multiple iterations, typically multiple deployments."
      },
      {
        "n": 32,
        "q": "Per Table 2.2, the incremental approach is characterized by:",
        "options": [
          "A partial requirement set at start and a single deployment",
          "A full requirement set at start, multiple planned iterations, and potential multiple deployments",
          "No planned iterations and a single delivery",
          "Requirements that are fully unknown at the start"
        ],
        "correct": 1,
        "explanation": "Table 2.2: Incremental = full requirements at start, multiple iterations, potential multiple deployments."
      },
      {
        "n": 33,
        "q": "The SE Vee model is an example of which approach, and what does it emphasize?",
        "options": [
          "Evolutionary; continuous code deployment",
          "Sequential; associating each definition (left side) activity with a corresponding integration/verification (right side) activity",
          "Incremental; spiral-based risk reduction",
          "Agile; daily stand-up coordination"
        ],
        "correct": 1,
        "explanation": "Sec 2.2.1: the Vee is a sequential approach associating each development/definition stage with a corresponding test/verification stage."
      },
      {
        "n": 34,
        "q": "In the Vee model, the left side and right side are commonly called:",
        "options": [
          "Production and disposal",
          "System definition (left) and system realization (right)",
          "Acquisition and supply",
          "Concept and retirement"
        ],
        "correct": 1,
        "explanation": "Sec 2.2.1: the left side of the Vee is system definition and the bottom/right side is system realization."
      },
      {
        "n": 35,
        "q": "The waterfall model (Royce, 1970) has historically been used most successfully in:",
        "options": [
          "Novel R&D efforts with unknown requirements",
          "Minimum viable product (MVP) market-entry efforts",
          "Continuous-delivery software pipelines",
          "Manufacturing/construction industries and safety-critical certification contexts"
        ],
        "correct": 3,
        "explanation": "Sec 2.2.1: the waterfall has been used successfully in manufacturing/construction and where safety/security certification mandates documented plans."
      },
      {
        "n": 36,
        "q": "A key strength attributed to sequential life cycle models is:",
        "options": [
          "Maximum flexibility when requirements are unknown",
          "Continuous deployment of partial capabilities",
          "The elimination of formal documentation",
          "Predictability, stability, repeatability, and high assurance"
        ],
        "correct": 3,
        "explanation": "Sec 2.2.1: the strengths of sequential models are predictability, stability, repeatability, and high assurance."
      },
      {
        "n": 37,
        "q": "In the Incremental Commitment Spiral Model (ICSM), each increment:",
        "options": [
          "Defers all requirements definition until the final spiral",
          "Is a single sequential pass with feedback loops only",
          "Ignores risk in favor of fixed schedule milestones",
          "Addresses requirements and solutions concurrently, with risk-based stakeholder commitment to proceed"
        ],
        "correct": 3,
        "explanation": "Sec 2.2.2: in the ICSM each increment addresses requirements and solutions concurrently; stakeholders proceed if risks are acceptable and covered by mitigation plans."
      },
      {
        "n": 38,
        "q": "An evolutionary approach is MOST appropriate when:",
        "options": [
          "The full set of required capabilities is known and stable at the start",
          "The final system requirements are unknown or only partially known (e.g., novel systems, R&D)",
          "Only a single delivery is permitted by contract",
          "No stakeholder feedback is available during development"
        ],
        "correct": 1,
        "explanation": "Sec 2.2.3: an evolutionary approach provides adaptability/flexibility when final requirements are unknown or only partially known."
      },
      {
        "n": 39,
        "q": "DevOps is described as a type of which approach, characterized by which three key principles?",
        "options": [
          "Sequential; documentation, traceability, and verification",
          "Incremental; cost, schedule, and performance balance",
          "Evolutionary; shared ownership, workflow automation, and rapid feedback",
          "Sequential; predictability, stability, and repeatability"
        ],
        "correct": 2,
        "explanation": "Sec 2.2.3: DevOps is an evolutionary approach characterized by shared ownership, workflow automation, and rapid feedback."
      },
      {
        "n": 40,
        "q": "DevSecOps differs from DevOps primarily by:",
        "options": [
          "Removing the operations function from the workflow",
          "Integrating security practices into DevOps, with each delivery team empowered to pick appropriate security means",
          "Mandating a single final delivery instead of continuous delivery",
          "Replacing continuous integration with waterfall phases"
        ],
        "correct": 1,
        "explanation": "Sec 2.2.3: DevSecOps integrates security practices into DevOps; each delivery team is responsible and empowered to choose security means."
      },
      {
        "n": 41,
        "q": "ISO/IEC/IEEE 15288:2023 organizes the system life cycle processes into how many process groups?",
        "options": [
          "Four",
          "Three",
          "Six",
          "Fourteen"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.1: ISO/IEC/IEEE 15288 identifies four process groups."
      },
      {
        "n": 42,
        "q": "The four process groups defined in ISO/IEC/IEEE 15288 are:",
        "options": [
          "Acquisition; Supply; Development; Disposal",
          "Concept; Development; Production; Retirement",
          "Initiating; Planning; Executing; Closing",
          "Agreement; Organizational Project-Enabling; Technical Management; Technical"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.1: the four groups are Agreement, Organizational Project-Enabling, Technical Management, and Technical Processes."
      },
      {
        "n": 43,
        "q": "How many Technical Processes are defined in ISO/IEC/IEEE 15288?",
        "options": [
          "14",
          "8",
          "6",
          "2"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.5: there are 14 Technical Processes."
      },
      {
        "n": 44,
        "q": "How is a 'process' defined in the handbook?",
        "options": [
          "A document produced during a life cycle stage",
          "A decision point between two life cycle stages",
          "A configuration item placed under formal change control",
          "A series of activities and tasks performed to achieve one or more outcomes for a stated purpose"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.1: a process is a series of activities and tasks performed to achieve one or more outcomes for a stated purpose."
      },
      {
        "n": 45,
        "q": "'Concurrency' applied to the life cycle processes means:",
        "options": [
          "Parallel application of two or more processes at a given level in the system hierarchy",
          "Repeated application of the process set at successive levels of the hierarchy",
          "Repeated interaction between two processes at a single level",
          "Sequential, linear application of processes at a single level"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.1.2: concurrency is the parallel application of two or more processes at a given level in the system hierarchy."
      },
      {
        "n": 46,
        "q": "'Recursion' applied to the life cycle processes means:",
        "options": [
          "Repeated application of the set of life cycle processes, tailored as appropriate, at successive levels in the system hierarchy",
          "Parallel application of two or more processes at one level",
          "Repeated interaction between two processes at a single level",
          "A single one-time application of a process"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.1.2: recursion is the repeated application of the process set at successive levels of the hierarchy."
      },
      {
        "n": 47,
        "q": "'Iteration' applied to the life cycle processes means:",
        "options": [
          "Application of the process set at successively lower levels of the hierarchy",
          "Parallel execution of independent processes that share no information",
          "Repeated application of and interaction between two or more processes at a given level in the system hierarchy",
          "A single pass down and up the Vee"
        ],
        "correct": 2,
        "explanation": "Sec 2.3.1.2: iteration is the repeated application of and interaction between two or more processes at a given level."
      },
      {
        "n": 48,
        "q": "During recursive application of the processes, the outputs at one level:",
        "options": [
          "Are discarded before work begins at the next level",
          "Become inputs for the next successive level (below for definition, above for realization)",
          "Become controls that govern the organization",
          "Are converted into enablers only"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.1.2: outputs at one level become inputs for the next level — below for system definition, above for system realization."
      },
      {
        "n": 49,
        "q": "In the SE process model, which items govern all processes and therefore are NOT repeated on each IPO diagram?",
        "options": [
          "Controls and enablers",
          "Inputs and outputs",
          "Activities and tasks",
          "Stakeholders and suppliers"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.1.1 / Fig 2.11: controls and enablers govern all processes and are not repeated on each IPO diagram."
      },
      {
        "n": 50,
        "q": "Which of the following is an example of a 'control' rather than an 'enabler'?",
        "options": [
          "Applicable laws and regulations",
          "Risk register",
          "Configuration management system",
          "Quality management system"
        ],
        "correct": 0,
        "explanation": "Fig 2.11: controls include laws/regulations, standards, agreements, policies, project direction/constraints; enablers include org processes, the QMS/KMS, registers, and infrastructure."
      },
      {
        "n": 51,
        "q": "The Agreement Processes consist of which two processes?",
        "options": [
          "Project Planning and Project Control",
          "Verification and Validation",
          "Concept and Development",
          "Acquisition and Supply"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.2: the two Agreement Processes are Acquisition and Supply."
      },
      {
        "n": 52,
        "q": "The purpose of the Acquisition process is to:",
        "options": [
          "Provide an acquirer with a product or service that meets agreed requirements",
          "Manage system and system element configurations over the life cycle",
          "Initiate and sustain projects to meet the strategic objectives of the organization",
          "Obtain a product or service in accordance with the acquirer's requirements"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.2.1 [6.1.1.1]: the Acquisition process obtains a product or service in accordance with the acquirer's requirements."
      },
      {
        "n": 53,
        "q": "The purpose of the Supply process is to:",
        "options": [
          "Provide an acquirer with a product or service that meets agreed requirements",
          "Obtain a product or service in accordance with the acquirer's requirements",
          "Define the stakeholder needs and requirements for a system",
          "Sustain the capability of the system to provide a service"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.2.2 [6.1.2.1]: the Supply process provides an acquirer with a product or service that meets agreed requirements."
      },
      {
        "n": 54,
        "q": "Acceptance criteria for an agreement are:",
        "options": [
          "Defined unilaterally by the supplier after delivery",
          "Set solely by the acquirer's legal team after acceptance",
          "Irrelevant for informal agreements",
          "Negotiated during the Agreement Processes and protect both acquirer and supplier"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.2: acceptance criteria are negotiated during the Agreement Processes and protect both parties."
      },
      {
        "n": 55,
        "q": "With respect to acquirer/supplier roles, an organization can be:",
        "options": [
          "Only an acquirer or only a supplier, never both",
          "An acquirer only when a formal contract exists",
          "A supplier only for mass-produced commercial products",
          "Both a supplier (to its end customer) and an acquirer (to its own sub-suppliers) for a given system"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.2: an organization can be both supplier (to the end customer) and acquirer (to its own suppliers) for the same system."
      },
      {
        "n": 56,
        "q": "Closing of an agreement is managed through which process?",
        "options": [
          "The Configuration Management process",
          "The Quality Assurance process",
          "The Portfolio Management process, when the project is closed",
          "The Disposal process"
        ],
        "correct": 2,
        "explanation": "Sec 2.3.2.1/2.3.2.2: the agreement is closed through the Portfolio Management process when the project is closed."
      },
      {
        "n": 57,
        "q": "In the Agreement Processes, the SE practitioner's role is typically to:",
        "options": [
          "Lead all contract negotiations as the primary authority",
          "Sign the contract on behalf of the organization",
          "Support project management with impact assessments, trade studies, risk assessments, and other technical input",
          "Replace the project manager during negotiation"
        ],
        "correct": 2,
        "explanation": "Sec 2.3.2: the SE practitioner supports PM with impact assessments, trade studies, and risk assessments; they are a relevant contributor."
      },
      {
        "n": 58,
        "q": "Which is the correct count and membership of the Organizational Project-Enabling Processes?",
        "options": [
          "Eight: Project Planning, Project Assessment and Control, Decision Management, Risk Management, Configuration Management, Information Management, Measurement, Quality Assurance",
          "Two: Acquisition and Supply",
          "Fourteen: the Technical Processes",
          "Six: Life Cycle Model Management, Infrastructure Management, Portfolio Management, Human Resource Management, Quality Management, Knowledge Management"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.3: there are six Organizational Project-Enabling Processes (the listed set)."
      },
      {
        "n": 59,
        "q": "The purpose of the Portfolio Management process is to:",
        "options": [
          "Provide the infrastructure and services to projects",
          "Maintain the competencies of the organization's human resources",
          "Assure that products and services meet quality objectives",
          "Initiate and sustain necessary, sufficient, and suitable projects to meet the strategic objectives of the organization"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.3.3 [6.2.3.1]: Portfolio Management initiates and sustains necessary, sufficient, and suitable projects to meet strategic objectives."
      },
      {
        "n": 60,
        "q": "Which process defines, maintains, and ensures availability of policies, life cycle processes, models, and procedures for use by the organization?",
        "options": [
          "Infrastructure Management",
          "Life Cycle Model Management",
          "Knowledge Management",
          "Quality Management"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.3.1 [6.2.1.1]: Life Cycle Model Management defines/maintains/ensures availability of policies, processes, models, and procedures."
      },
      {
        "n": 61,
        "q": "The purpose of the Quality Management process is to:",
        "options": [
          "Assure that products, services, and QM implementations meet organizational and project quality objectives and achieve customer satisfaction",
          "Help ensure the effective application of the organization's QM process to a specific project",
          "Collect, analyze, and report objective measurement data",
          "Manage system and system element configurations"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.3.5 [6.2.5.1]: QM assures products/services/QM implementations meet quality objectives and achieve customer satisfaction. (Note: QA, a Technical Management process, applies QM to a project.)"
      },
      {
        "n": 62,
        "q": "Which process creates the capability and assets that enable the organization to exploit opportunities to re-apply existing knowledge?",
        "options": [
          "Knowledge Management",
          "Human Resource Management",
          "Infrastructure Management",
          "Portfolio Management"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.3.6 [6.2.6.1]: Knowledge Management creates capability/assets to re-apply existing knowledge."
      },
      {
        "n": 63,
        "q": "The Human Resource Management process exists primarily to:",
        "options": [
          "Provide physical facilities and IT systems to projects",
          "Provide the organization with necessary human resources and maintain their competencies consistent with strategic needs",
          "Authorize and evaluate the portfolio of projects",
          "Manage configuration baselines across the life cycle"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.3.4 [6.2.4.1]: HRM provides necessary human resources and maintains competencies consistent with strategic needs."
      },
      {
        "n": 64,
        "q": "The Infrastructure Management process exists to:",
        "options": [
          "Define the stakeholder needs and requirements",
          "Identify, analyze, treat, and monitor risks",
          "Provide objective evidence that the realized system meets its requirements",
          "Provide the infrastructure and services to projects to support organization and project objectives throughout the life cycle"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.3.2 [6.2.2.1]: Infrastructure Management provides infrastructure and services to projects throughout the life cycle."
      },
      {
        "n": 65,
        "q": "What best distinguishes the Organizational Project-Enabling Processes from the Technical Management Processes?",
        "options": [
          "They are applied only by supplier organizations",
          "They are concerned at a strategic level with providing resources and establishing the environment in which projects are conducted",
          "They are performed only during the disposal stage",
          "They directly produce the system architecture and design"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.3: these processes provide resources and organizational support and establish the environment in which projects are conducted."
      },
      {
        "n": 66,
        "q": "The eight Technical Management Processes include all of the following EXCEPT:",
        "options": [
          "Project Planning",
          "System Architecture Definition",
          "Risk Management",
          "Measurement"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.4: System Architecture Definition is a Technical Process, not a Technical Management Process."
      },
      {
        "n": 67,
        "q": "The purpose of the Project Planning process is to:",
        "options": [
          "Assess whether plans are feasible and direct project execution",
          "Provide a structured, analytical framework for decisions",
          "Manage configurations over the life cycle",
          "Produce and coordinate effective and workable plans"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.4.1 [6.3.1.1]: Project Planning produces and coordinates effective and workable plans."
      },
      {
        "n": 68,
        "q": "Which process assesses whether plans are aligned and feasible, determines project/technical/process status, and directs execution?",
        "options": [
          "Project Planning",
          "Decision Management",
          "Project Assessment and Control",
          "Quality Assurance"
        ],
        "correct": 2,
        "explanation": "Sec 2.3.4.2 [6.3.2.1]: Project Assessment and Control assesses alignment/feasibility and directs execution to satisfy objectives."
      },
      {
        "n": 69,
        "q": "The purpose of the Decision Management process is to:",
        "options": [
          "Provide a structured, analytical framework for objectively identifying, characterizing, and evaluating alternatives and selecting the most beneficial course of action",
          "Identify, analyze, treat, and monitor risks continually",
          "Collect, analyze, and report objective measurement data",
          "Manage system and system element configurations"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.4.3 [6.3.3.1]: Decision Management provides a structured analytical framework to evaluate alternatives and select the most beneficial course of action."
      },
      {
        "n": 70,
        "q": "The purpose of the Risk Management process per ISO/IEC/IEEE 15288 is to:",
        "options": [
          "Provide a structured framework for objectively evaluating decision alternatives",
          "Generate, retain, and dispose of information for stakeholders",
          "Identify, analyze, treat, and monitor the risks continually",
          "Manage system configurations over the life cycle"
        ],
        "correct": 2,
        "explanation": "Sec 2.3.4.4 [6.3.4.1]: Risk Management identifies, analyzes, treats, and monitors risks continually."
      },
      {
        "n": 71,
        "q": "The four basic risk treatment (handling) approaches are:",
        "options": [
          "Identify, analyze, plan, and monitor",
          "Acceptance, avoidance, control (mitigation), and transference",
          "Inspection, analysis, demonstration, and test",
          "Plan, do, check, and act"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.4.4: the four basic risk treatments are acceptance, avoidance, control (mitigation), and transference."
      },
      {
        "n": 72,
        "q": "The 'level of risk' displayed in a consequence/likelihood matrix depends upon:",
        "options": [
          "Consequence severity only",
          "Both the likelihood of occurrence and the severity of the consequence",
          "Likelihood of occurrence only",
          "Schedule slippage only"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.4.4 / Fig 2.28: the measurement of risk has two components — likelihood and undesirable consequence."
      },
      {
        "n": 73,
        "q": "Figure 2.30 identifies the typical interactions among which four risk categories?",
        "options": [
          "Internal, external, known, and unknown",
          "Safety, security, privacy, and usability",
          "Acceptance, avoidance, control, and transference",
          "Technical, cost, schedule, and programmatic"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.4.4 / Fig 2.30: the four risk categories are technical, cost, schedule, and programmatic."
      },
      {
        "n": 74,
        "q": "A recommended pattern for writing a clear risk statement is:",
        "options": [
          "'If <situation>, then <consequence>, for <stakeholder>'",
          "'The system shall <function> within <performance>'",
          "'Given <input>, when <event>, then <output>'",
          "'As a <user>, I want <feature> so that <benefit>'"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.4.4: a good practice is the 'if <situation>, then <consequence>, for <stakeholder>' pattern."
      },
      {
        "n": 75,
        "q": "The purpose of the Configuration Management process is to:",
        "options": [
          "Provide objective evidence of requirement fulfillment",
          "Sustain the capability of the system to provide a service",
          "Manage system and system element configurations over their life cycle",
          "Generate and select system architecture alternatives"
        ],
        "correct": 2,
        "explanation": "Sec 2.3.4.5 [6.3.5.1]: CM manages system and system element configurations over their life cycle."
      },
      {
        "n": 76,
        "q": "Beyond 'prepare for CM,' the core configuration management activities are:",
        "options": [
          "Inspection, analysis, demonstration, and test",
          "Plan, assess, and control",
          "Configuration identification, configuration change management, configuration status accounting, and configuration verification and audit",
          "Acquire, supply, deliver, and retire"
        ],
        "correct": 2,
        "explanation": "Sec 2.3.4.5: CM activities are identification, change management, status accounting, and verification and audit."
      },
      {
        "n": 77,
        "q": "Disposition (approval/disapproval) of changes and variances in CM is typically performed by:",
        "options": [
          "Change boards (e.g., a Configuration Control Board)",
          "The validation approval authority",
          "The disposal readiness review board",
          "The acquirer's marketing function"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.4.5: disposition of changes/variances is often performed by change boards such as a CCB or CRB."
      },
      {
        "n": 78,
        "q": "Which CM activity communicates and maintains the status of controlled items, events, and data (e.g., reconciling As-Designed with As-Built data)?",
        "options": [
          "Configuration identification",
          "Configuration change management",
          "Configuration verification and audit",
          "Configuration status accounting"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.4.5: configuration status accounting communicates/maintains the status of controlled items, events, and data."
      },
      {
        "n": 79,
        "q": "The purpose of the Measurement process is to:",
        "options": [
          "Identify, analyze, treat, and monitor risks",
          "Collect, analyze, and report objective data and information to support effective management and address information needs",
          "Manage knowledge assets so they can be re-applied",
          "Realize a specified system element"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.4.7 [6.3.7.1]: Measurement collects, analyzes, and reports objective data to support management and address information needs."
      },
      {
        "n": 80,
        "q": "Which statement correctly distinguishes the product-oriented measures?",
        "options": [
          "MOEs are stated from the acquirer's viewpoint and are independent of any particular solution, while TPMs track design progress and technical risk",
          "MOEs are solution-specific design parameters defined by the supplier",
          "MOPs are the acquirer's overall operational success criteria",
          "TPMs are a complete listing of all system requirements"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.4.7: MOEs are acquirer-viewpoint, solution-independent success criteria; TPMs assess design progress and track technical risk and are not a full list of requirements."
      },
      {
        "n": 81,
        "q": "A 'leading indicator' is best described as a measure that:",
        "options": [
          "Reports only historical status after performance has been realized",
          "Counts the number of defects discovered during testing",
          "Is predictive of future system performance before the performance is realized, using trend information for forward-looking analysis",
          "Is identical to a Technical Performance Measure (TPM)"
        ],
        "correct": 2,
        "explanation": "Sec 2.3.4.7: a leading indicator is predictive of future performance before it is realized, using trends for forward-looking (predictive) analysis."
      },
      {
        "n": 82,
        "q": "The purpose of the Quality Assurance process is to:",
        "options": [
          "Assure that products and services meet quality objectives and achieve customer satisfaction",
          "Help ensure the effective application of the organization's Quality Management process to the project",
          "Manage system and system element configurations",
          "Identify and treat risks that exceed their threshold"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.4.8 [6.3.8.1]: QA helps ensure the effective application of the organization's QM process to the project. (QM is organizational; QA is project-level.)"
      },
      {
        "n": 83,
        "q": "The purpose of the Information Management process is to:",
        "options": [
          "Generate, obtain, confirm, transform, retain, retrieve, disseminate, and dispose of information to designated stakeholders",
          "Manage system and system element configurations",
          "Collect, analyze, and report objective measurement data",
          "Provide the infrastructure and services to projects"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.4.6 [6.3.6.1]: Information Management generates, obtains, confirms, transforms, retains, retrieves, disseminates, and disposes of information to designated stakeholders."
      },
      {
        "n": 84,
        "q": "The purpose of the Business or Mission Analysis process is to:",
        "options": [
          "Define the stakeholder needs and requirements for a system",
          "Transform stakeholder requirements into system requirements",
          "Generate and select system architecture alternatives",
          "Define the overall strategic problem or opportunity, characterize the solution space, and determine potential solution class(es)"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.5.1 [6.4.1.1]: BMA defines the strategic problem/opportunity, characterizes the solution space, and determines potential solution classes."
      },
      {
        "n": 85,
        "q": "Which document describes, from a user-oriented perspective, the way the system will be used during operations in its operational environment by its intended users?",
        "options": [
          "The Concept of Operations (ConOps) at the enterprise level",
          "The Operational Concept (OpsCon)",
          "The Statement of Work (SOW)",
          "The Systems Engineering Management Plan (SEMP)"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.5.1: the OpsCon describes how the system will be used during operations from a user-oriented perspective; the ConOps is at the enterprise/organization level."
      },
      {
        "n": 86,
        "q": "The purpose of the Stakeholder Needs and Requirements Definition process is to:",
        "options": [
          "Define the strategic problem and candidate solution classes",
          "Provide objective evidence that the system fulfills its requirements",
          "Synthesize system elements into a realized system",
          "Define the stakeholder needs and requirements for a system that can provide the capabilities needed by users and other stakeholders in a defined environment"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.5.2 [6.4.2.1]: this process defines the stakeholder needs and requirements for a system."
      },
      {
        "n": 87,
        "q": "The purpose of the System Requirements Definition process is to:",
        "options": [
          "Define the business or mission need",
          "Generate system architecture alternatives",
          "Realize a specified system element",
          "Transform the stakeholder, user-oriented view of desired capabilities into a technical view of a solution that meets the operational needs of the user"
        ],
        "correct": 3,
        "explanation": "Sec 2.3.5.3 [6.4.3.1]: this process transforms the user-oriented view into a technical view of a solution meeting the user's operational needs."
      },
      {
        "n": 88,
        "q": "'Allocation, derivation, and flow-down' of system requirements refers to working:",
        "options": [
          "Top-down — allocating requirements to elements and deriving requirements for the next lower level",
          "Strictly bottom-up via compliance analysis (flow-up)",
          "Only horizontally within a single hierarchy level",
          "Only during the disposal stage"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.5.3: allocation, derivation, and flow-down is the top-down direction (the bottom-up direction is compliance analysis/flow-up)."
      },
      {
        "n": 89,
        "q": "Which is one of the nine characteristics of an INDIVIDUAL requirement statement (Table 2.7)?",
        "options": [
          "Comprehensible",
          "Consistent",
          "Singular",
          "Able to be validated"
        ],
        "correct": 2,
        "explanation": "Table 2.7: Singular is a requirement-statement characteristic. Comprehensible, Consistent, and Able to be validated are requirement-SET characteristics (Table 2.8)."
      },
      {
        "n": 90,
        "q": "Which characteristic applies to a requirement SET (Table 2.8) rather than to an individual requirement statement?",
        "options": [
          "Unambiguous",
          "Consistent",
          "Conforming",
          "Singular"
        ],
        "correct": 1,
        "explanation": "Table 2.8: Consistent is a requirement-SET characteristic. Unambiguous, Conforming, and Singular are individual-statement characteristics (Table 2.7)."
      },
      {
        "n": 91,
        "q": "The 'Verifiable' characteristic of a requirement statement means that the requirement:",
        "options": [
          "Is needed to satisfy a life cycle concept, need, source, or parent requirement",
          "Is structured and worded such that its realization can be verified to the approving authority's satisfaction",
          "States only a single capability, characteristic, constraint, or quality factor",
          "Conforms to an approved standard pattern and style guide"
        ],
        "correct": 1,
        "explanation": "Table 2.7: Verifiable means the statement is worded so its realization can be verified to the approving authority's satisfaction. (The other options define Necessary, Singular, and Conforming.)"
      },
      {
        "n": 92,
        "q": "The purpose of the System Architecture Definition process is to:",
        "options": [
          "Provide sufficient detailed data to realize the solution",
          "Generate system architecture alternatives, select one or more that address stakeholder concerns and system requirements, and express this in consistent views and models",
          "Synthesize a set of system elements into a realized system",
          "End the existence of a system element for a specified intended use"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.5.4 [6.4.4.1]: this process generates and selects architecture alternatives and expresses them in consistent views and models."
      },
      {
        "n": 93,
        "q": "The purpose of the Design Definition process is to:",
        "options": [
          "Generate and select system architecture alternatives",
          "Define the stakeholder needs and requirements",
          "Provide sufficient detailed data and information about the system and its elements to realize the solution in accordance with the system requirements and architecture",
          "Validate the system in its operational environment"
        ],
        "correct": 2,
        "explanation": "Sec 2.3.5.5 [6.4.5.1]: Design Definition provides detailed data/information to realize the solution per the requirements and architecture."
      },
      {
        "n": 94,
        "q": "The purpose of the System Analysis process is to:",
        "options": [
          "Provide a rigorous basis of data and information for technical understanding to aid decision-making and technical assessments across the life cycle",
          "Obtain a product or service in accordance with the acquirer's requirements",
          "Sustain the capability of the system to provide a service",
          "Install the system into its operational environment"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.5.6 [6.4.6.1]: System Analysis provides a rigorous basis of data/information for technical understanding to aid decisions and assessments."
      },
      {
        "n": 95,
        "q": "Verification provides objective evidence that an entity ____, while validation provides objective evidence that ____.",
        "options": [
          "fulfills stakeholder needs; meets its specified requirements",
          "was 'built right' (meets its specified requirements); the 'right' entity was built (meets stakeholder needs/intended use)",
          "is fit for disposal; is fit for production",
          "is cost-effective; is schedule-compliant"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.5.9/2.3.5.11: verification = built right (meets specified requirements); validation = the right thing built (meets stakeholder needs and intended use)."
      },
      {
        "n": 96,
        "q": "The four basic verification methods are:",
        "options": [
          "Acceptance, avoidance, control, and transference",
          "Inspection, analysis, demonstration, and test",
          "Identification, change management, status accounting, and audit",
          "Plan, perform, manage, and report"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.5.9: the four basic verification methods are inspection, analysis, demonstration, and test."
      },
      {
        "n": 97,
        "q": "Which verification method uses analytical data or simulations under defined conditions to show theoretical compliance, and is used where testing to realistic conditions is not cost-effective?",
        "options": [
          "Inspection",
          "Analysis",
          "Demonstration",
          "Test"
        ],
        "correct": 1,
        "explanation": "Sec 2.3.5.9: Analysis (including modeling/simulation) uses analytical data/simulations to show theoretical compliance, including by similarity."
      },
      {
        "n": 98,
        "q": "The purpose of the Transition process is to:",
        "options": [
          "Establish a capability for a system to provide services specified by stakeholder requirements in the operational environment",
          "Synthesize a set of system elements into a realized system",
          "Provide objective evidence that the system fulfills its specified requirements",
          "End the existence of a system element for a specified intended use"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.5.10 [6.4.10.1]: Transition establishes a capability for the system to provide services in the operational environment (it installs the SoI into its operational/maintenance environment)."
      },
      {
        "n": 99,
        "q": "Which sequence correctly orders these Technical Processes per ISO/IEC/IEEE 15288 as a system moves from realization through use to end-of-life?",
        "options": [
          "Integration, Verification, Transition, Validation, Operation, Maintenance, Disposal",
          "Disposal, Operation, Maintenance, Integration",
          "Operation, Integration, Disposal, Verification, Maintenance",
          "Validation, Integration, Disposal, Operation, Maintenance"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.5: the order is Implementation, Integration, Verification, Transition, Validation, Operation, Maintenance, Disposal."
      },
      {
        "n": 100,
        "q": "The Integration process is built on the notion of an 'aggregate,' which is:",
        "options": [
          "A set of several system elements together with their physical and functional interfaces, characterized by a configuration",
          "A single atomic system element that cannot be decomposed further",
          "The complete validated system in its operational environment",
          "A risk register entry combining several related risks"
        ],
        "correct": 0,
        "explanation": "Sec 2.3.5.8: an aggregate is made up of several system elements and their physical and functional interfaces, characterized by a configuration; verification actions are applied to each aggregate."
      }
    ]
  },
  "ch3": {
    "no": 3,
    "title": "Life Cycle Analyses and Methods",
    "questions": [
      {
        "n": 1,
        "q": "How does ISO/IEC/IEEE 15288 (2023) define a quality characteristic (QC)?",
        "options": [
          "A measurable defect rate observed during production and acceptance testing",
          "An inherent characteristic of a product, process, or system related to a requirement",
          "A contractual performance guarantee negotiated between acquirer and supplier",
          "A functional capability that the system must deliver to satisfy its mission"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.1: a QC is an inherent characteristic of a product, process, or system related to a requirement; QCs are how stakeholders judge quality."
      },
      {
        "n": 2,
        "q": "In previous editions of the handbook, the QC approaches were known by which name?",
        "options": [
          "Non-functional engineering, also referred to as quality assurance engineering",
          "Through-life systems management and sustainment planning",
          "Design verification and quality control engineering",
          "Specialty engineering (the engineering specialties)"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.1: QC approaches were previously called specialty engineering; they are also known as Design for X (DFX) and through-life considerations, and informally as the -ilities."
      },
      {
        "n": 3,
        "q": "QC approaches are also informally known as the '-ilities' because they:",
        "options": [
          "Are deliberately written as optional 'nice to have' goals that need not trace to requirements",
          "Apply only during the utilization and support stages, once the system has been fielded to users",
          "Often (but not always) end in 'ility', such as reliability, maintainability, and availability",
          "Are quantified exclusively through reliability-block-diagram and fault-tree analysis techniques"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.1: the QCs are informally called the -ilities because many, though not all, end in 'ility'."
      },
      {
        "n": 4,
        "q": "Most QC approaches generate non-functional requirements, but which approaches may ALSO generate functional requirements?",
        "options": [
          "Affordability, logistics, and producibility",
          "Interoperability, sustainability, and agility",
          "Safety, security, and resilience",
          "Maintainability, availability, and reliability"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.1: QC approaches often generate non-functional requirements; some such as safety, security, and resilience may also generate functional requirements."
      },
      {
        "n": 5,
        "q": "Why does the handbook present the QC approaches in alphabetical order?",
        "options": [
          "To avoid giving more weight or importance to one approach over another",
          "Because that is the sequence in which they are applied across the life cycle",
          "To match the alphabetical structure of ISO/IEC/IEEE 15288",
          "Because alphabetical order reflects their relative cost to implement"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.1: the approaches are covered in alphabetical order by name to avoid giving more weight to one over another."
      },
      {
        "n": 6,
        "q": "Which QC approach owns the representative characteristics 'Compatibility, Connectivity, Interoperability'?",
        "options": [
          "Logistics Engineering",
          "Agility Engineering",
          "System Security Engineering",
          "Interoperability Analysis"
        ],
        "correct": 3,
        "explanation": "Table 3.1: Interoperability Analysis ensures the system interacts effectively with other systems; its QCs are compatibility, connectivity, and interoperability."
      },
      {
        "n": 7,
        "q": "INCOSE defines system affordability as the balance of system performance, cost, and schedule constraints over the system life while:",
        "options": [
          "Guaranteeing the lowest life cycle cost among all of the candidate solutions evaluated in the trade study",
          "Minimizing the acquisition cost below a fixed contractual ceiling agreed with the acquirer",
          "Maximizing the number of delivered capabilities at the first operational release of the system",
          "Satisfying mission needs in concert with strategic investment and organizational needs"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.2: affordability is the balance of performance, cost, and schedule over the life while satisfying mission needs in concert with strategic investment and organizational needs."
      },
      {
        "n": 8,
        "q": "Cost-effectiveness (CE) is defined as a measure relating:",
        "options": [
          "Initial cost to sustainment cost over the life cycle",
          "Delivered capability to the maximum allowable budget",
          "Benefits expressed in money to costs expressed in money",
          "Achieved system effectiveness (numerator) to cost (denominator)"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.2: CE = system effectiveness / (initial cost + sustainment cost); reliability and maintainability are major factors because they drive sustainment cost."
      },
      {
        "n": 9,
        "q": "How does cost-effectiveness analysis (CEA) differ from cost-benefit analysis (CBA)?",
        "options": [
          "CEA applies only to military systems, whereas CBA applies only to commercial systems",
          "CEA measures results in performance terms, whereas CBA uses monetary measures of outcomes",
          "CEA ignores sustainment cost, whereas CBA includes the full life cycle cost",
          "CEA is qualitative, whereas CBA is always based on parametric cost models"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.2: the cost measurement is similar, but CEA expresses results in performance terms while CBA uses monetary measures of outcomes, allowing benefits and costs to be compared in money."
      },
      {
        "n": 10,
        "q": "Which statement about Life Cycle Cost (LCC) is correct?",
        "options": [
          "LCC should not be equated with Total Cost of Ownership (TCO) or Whole Life Cost, which may only include post-acquisition costs",
          "LCC deliberately excludes retirement and disposal costs because the salvage value can never be predicted reliably in advance",
          "LCC is the single definitive, fixed cost proposal that is submitted and becomes contractually binding for the project",
          "LCC is identical to Total Cost of Ownership and Whole Life Cost in essentially every application domain"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.2: LCC is the total cost across the life; it should not be equated with TCO, TOC, or WLC, which may only include costs once the system is acquired, and LCC estimates are not the definitive cost proposal."
      },
      {
        "n": 11,
        "q": "In an LCC analysis, which cost element could be either positive or negative?",
        "options": [
          "Concept costs",
          "Development costs",
          "Production costs",
          "Retirement costs"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.2: retirement costs include an estimate of trade-in or salvage value and could be positive or negative, and should account for environmental disposal impacts."
      },
      {
        "n": 12,
        "q": "Which LCC estimating method uses mathematical algorithms based on historical data, with tools such as COSYSMO and COCOMO?",
        "options": [
          "Analogy",
          "Parametric (algorithmic)",
          "Delphi technique",
          "Design-to-Cost (DTC)"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.2: the parametric/algorithmic method computes cost as a function of cost factors from historical data; examples include COSYSMO (SE effort) and COCOMO (software effort)."
      },
      {
        "n": 13,
        "q": "The LCC estimating method that builds estimates iteratively from multiple domain experts using surveys with feedback each round is:",
        "options": [
          "The Delphi technique",
          "Expert judgment",
          "Analogy",
          "Bottom up"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.2: the Delphi technique is a structured approach that builds estimates iteratively from multiple experts using surveys, providing group-statistics feedback each round for revision."
      },
      {
        "n": 14,
        "q": "In the RAM acronym, the three interrelated quality characteristics are:",
        "options": [
          "Reliability, Affordability, and Manufacturability",
          "Reliability, Availability, and Maintainability",
          "Robustness, Availability, and Maintainability",
          "Reliability, Adaptability, and Modularity"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.8: RAM (sometimes RMA) stands for Reliability, Availability, and Maintainability; these QCs are completely interrelated and strongly tied to logistics and supportability."
      },
      {
        "n": 15,
        "q": "From a user or acquirer viewpoint, which of the three RAM characteristics is often seen as the most important?",
        "options": [
          "Reliability",
          "Maintainability",
          "Availability",
          "All three are weighted equally by definition"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.8: depending on the industry, availability is often seen as most important to a user/acquirer because availability loss translates directly to mission or production loss."
      },
      {
        "n": 16,
        "q": "Reliability is formally defined as the ability of a system to perform as designed, without failure, in an operational environment, for a:",
        "options": [
          "Stated number of operating cycles only",
          "Stated period of time",
          "Guaranteed minimum mission distance",
          "Period equal to the system's warranty"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.8: reliability is the ability of a system to perform as designed, without failure, in an operational environment, for a stated period of time."
      },
      {
        "n": 17,
        "q": "Reliability engineering's four objectives, in priority order, begin with which objective?",
        "options": [
          "Apply engineering knowledge to prevent or reduce the likelihood/frequency of failures",
          "Identify and correct the underlying causes of the failures that occur despite prevention efforts",
          "Determine practical ways of coping with failures that occur when their causes are not corrected",
          "Apply analytical methods for estimating the likely reliability of new and unproven designs"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.8: the priority order is (1) prevent/reduce failures, (2) correct causes of failures that occur, (3) cope with failures, (4) estimate reliability of new designs; proactive prevention is most cost-effective."
      },
      {
        "n": 18,
        "q": "The modern 'design for reliability' philosophy shifts the focus from:",
        "options": [
          "Hardware reliability concerns toward software reliability concerns almost exclusively today",
          "Qualitative reliability requirements toward purely quantitative MTBF targets verified by test",
          "A reactive 'test-analyze-fix' approach to a proactive approach of designing reliability into the system",
          "Inherent availability targets toward operational availability targets late in the support stage"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.8: design for reliability shifts from reactive test-analyze-fix to proactively designing reliability in, emphasizing early identification of failure modes."
      },
      {
        "n": 19,
        "q": "Why does the handbook caution against using MTBF as a reliability requirement?",
        "options": [
          "MTBF can only be measured accurately after the system has been retired and all field data collected",
          "MTBF is identical to Mean Time To Repair and is therefore a redundant maintainability metric",
          "MTBF is frequently misused as an indicator of 'expected life,' which is incorrect",
          "MTBF applies exclusively to software components and never to mechanical or electronic hardware"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.8: misuse of MTBF leads to a 'numbers game'; MTBF is often wrongly used as 'expected life.' Other metrics (success probability at a time, failure-free period) are recommended."
      },
      {
        "n": 20,
        "q": "Which definition of availability is based ONLY on the inherent reliability and maintainability of the system, assuming an ideal support environment?",
        "options": [
          "Achieved availability (Aa)",
          "Inherent availability (Ai)",
          "Operational availability (Ao)",
          "Service-level availability"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.8: inherent availability (Ai) is based only on inherent reliability and maintainability, assumes an ideal support environment, and excludes preventive maintenance, logistics delay, and administrative delay."
      },
      {
        "n": 21,
        "q": "Achieved availability (Aa) differs from inherent availability (Ai) in that Aa:",
        "options": [
          "Includes logistics and administrative delay time but deliberately excludes preventive maintenance",
          "Includes administrative delay yet still assumes a perfectly ideal, fully-resourced support setup",
          "Excludes both preventive and corrective maintenance to isolate the inherent design contribution",
          "Includes preventive (scheduled) maintenance but still excludes logistics and administrative delay"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.8: achieved availability (Aa) adds preventive maintenance to Ai, while still excluding logistics delay time and administrative delay time."
      },
      {
        "n": 22,
        "q": "Operational availability (Ao) is distinguished from the other availability types because it:",
        "options": [
          "Assumes an actual operational environment and therefore includes logistics and administrative delay times",
          "Is measured only during factory acceptance testing, before the system has been fielded to its operators",
          "Excludes preventive maintenance entirely so as to isolate the inherent design performance",
          "Considers only the reliability of the system and deliberately disregards its maintainability"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.8: operational availability (Ao) assumes the actual operational environment and therefore also includes logistics delay time and administrative delay time."
      },
      {
        "n": 23,
        "q": "What is the key distinction between maintainability and maintenance?",
        "options": [
          "Maintainability is always unscheduled and corrective, whereas maintenance is always scheduled and preventive by definition",
          "Maintainability applies only to the hardware elements of a system, while maintenance applies only to the software",
          "Maintainability is measured solely by MTBF, while maintenance is measured solely by delay time",
          "Maintainability is the inherent, designed-in ability to be restored; maintenance is the resulting series of actions taken"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.8: maintainability is the ability to be maintained (built into the design); maintenance is the series of actions to restore or retain the system. Maintainability must be inherent, while maintenance is the result of design."
      },
      {
        "n": 24,
        "q": "Maintenance accomplished, as a result of failure, to restore a system to a specified level of performance is called:",
        "options": [
          "Corrective maintenance",
          "Preventive maintenance",
          "Predictive maintenance",
          "System upgrade"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.8: corrective maintenance is unscheduled maintenance accomplished as a result of failure to restore the system; preventive is scheduled, predictive is condition-based."
      },
      {
        "n": 25,
        "q": "The most widely used maintainability metric, which measures the elapsed time to perform a maintenance activity, is:",
        "options": [
          "Mean Time Between Failure (MTBF)",
          "Mean Time To Failure (MTTF)",
          "Mean logistics delay time",
          "Mean Time To Repair (MTTR)"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.8: MTTR is the most widely used maintainability metric; it includes failure detection/isolation, disassembly, repair, reassembly, and testing, and maintenance times tend to be lognormally distributed."
      },
      {
        "n": 26,
        "q": "Resilience engineering is defined as an approach that:",
        "options": [
          "Eliminates all single points of failure in the architecture",
          "Restores a system to its original configuration after any disruption",
          "Provides required capability when facing adversity",
          "Maximizes availability under nominal operating conditions"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.9: resilience is the ability to provide required capability when facing adversity; it typically subsumes survivability."
      },
      {
        "n": 27,
        "q": "The three fundamental objectives (Layer 1 of the taxonomy) of resilience are:",
        "options": [
          "Anticipate, prepare, and respond",
          "Avoid, withstand, and recover",
          "Prevent, detect, and correct",
          "Robustness, tolerance, and redundancy"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.9: Layer 1 fundamental objectives are avoid (reduce exposure), withstand (resist degradation), and recover (replenish lost capability); means objectives form Layer 2."
      },
      {
        "n": 28,
        "q": "A key emphasis of resilience in SE is that it focuses on:",
        "options": [
          "Preserving the original system architecture and composition completely unchanged above every other consideration",
          "Hardening every individual component against the single worst-case threat identified during the design phase",
          "Providing the required capability, not necessarily maintaining the architecture or composition of the system",
          "Recovering capability only after the system has already fully degraded and lost its mission function"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.9: resilience focuses on providing the required capability, not on maintaining the architecture; both continuity and adaptability are valid means."
      },
      {
        "n": 29,
        "q": "In the context of engineered systems, which two scope considerations does the handbook recommend INCLUDING in resilience, beyond merely recovering after degradation?",
        "options": [
          "Insuring and transferring risk",
          "Auditing and certifying the system",
          "Avoiding and withstanding adversity",
          "Decommissioning and disposing of the system"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.9: in non-engineering contexts resilience is often limited to recovery, but for engineered systems it is recommended that avoiding and withstanding adversity also be in scope."
      },
      {
        "n": 30,
        "q": "The system-state transition category in which a system maintains its level of capability is called:",
        "options": [
          "Tolerance",
          "Robustness",
          "Recovery",
          "Continuity"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.9: the robustness category covers transitions where the system maintains capability; tolerance covers moving to a lower capability; recovery covers returning to a higher capability."
      },
      {
        "n": 31,
        "q": "Passing from a higher level of capability to a lower (e.g., degraded) level falls into which resilience transition category?",
        "options": [
          "Robustness",
          "Recovery",
          "Disaggregation",
          "Tolerance"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.9: the tolerance category includes passing from any higher level of capability to a lower level; recovery is the reverse, and robustness maintains the level."
      },
      {
        "n": 32,
        "q": "Resilience requirements are often best expressed in the form of a:",
        "options": [
          "Reliability block diagram",
          "Failure mode and effects analysis worksheet",
          "Single MTBF target value",
          "Resilience scenario in the ConOps or OpsCon"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.9: resilience requirements often take the form of a resilience scenario, of which there can be many threads in the ConOps/OpsCon, capturing capability, adversity, stress, timeframe, and resilience targets."
      },
      {
        "n": 33,
        "q": "Resilience, safety, security, sustainability/disposability, and availability are collectively referred to as the:",
        "options": [
          "Functional QC areas",
          "Through-life cost areas",
          "Loss-driven areas",
          "Human-centered QC areas"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.9 / 3.1.13: these QCs all focus on potential losses and are called loss-driven areas; they share assets, losses, adversities, and techniques and should work closely together."
      },
      {
        "n": 34,
        "q": "A central principle of system safety engineering is that engineered systems:",
        "options": [
          "Can be made completely 100% safe given sufficiently rigorous verification and validation",
          "Are demonstrably safe for as long as no accidents have yet been reported during operation",
          "Become acceptably safe automatically once they comply with a single applicable regulation",
          "Have safety risks and are never 100% safe; hazards are reduced to an acceptable level of risk"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.11: the goal is to reduce/mitigate hazards to an acceptable level of risk; no system is 100% safe, and absence of accidents does not prove safety (there may be near misses or unused hazardous functionality)."
      },
      {
        "n": 35,
        "q": "Safety is best described as:",
        "options": [
          "The simple sum of the safety and reliability of the individual system elements",
          "An emergent property of the engineered system in its real operational environment",
          "A static property fixed at the completion of design",
          "A purely procedural matter handled entirely by operators"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.11: safety is an emergent property of the system in its operational environment; it is not the sum of element-level safety/reliability and is affected by interactions, use, maintenance, and management."
      },
      {
        "n": 36,
        "q": "The acronym ALARP, a common bar for 'acceptably safe' in safety-critical civilian systems, stands for:",
        "options": [
          "As Low As Reasonably Permitted",
          "As Low As Reasonably Practicable",
          "Assured Level of Acceptable Residual Probability",
          "Always Limit All Risks to a Prescribed level"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.11: ALARP ('as low as reasonably practicable') is the typical bar for complicated, safety-critical civilian systems such as railway signaling or passenger aircraft."
      },
      {
        "n": 37,
        "q": "When managing hazards, which option is the MOST preferred?",
        "options": [
          "Eliminating the potential hazard through a design change",
          "Reducing the likelihood of the hazard through a design mitigation",
          "Adding operational controls and limitations",
          "Providing warnings via labeling and training"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.11: when possible, design changes to eliminate hazards are preferred; next are design mitigations to reduce likelihood; only then operational controls, warnings, and training."
      },
      {
        "n": 38,
        "q": "An unmitigated hazardous situation that occurs but does not result in harm is called a:",
        "options": [
          "Latent failure",
          "Residual risk",
          "Near miss",
          "Mishap"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.11: a near miss is when an unmitigated hazardous situation occurs but causes no harm; near misses are critical feedback on the operational safety level, and their treatment reflects safety culture."
      },
      {
        "n": 39,
        "q": "How do regulators typically assess safety risk?",
        "options": [
          "By counting only the number of reportable accidents that have already occurred with the system",
          "In terms of both the likelihood of hazards leading to harm and the severity of the resulting harm",
          "By measuring the system's mean time between failures (MTBF) against a fixed regulatory threshold",
          "Solely by the severity of the worst credible outcome, independent of how likely it is to occur"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.11: regulators typically assess safety risk in terms of both the likelihood of hazards occurring and leading to harm, and the severity of the resulting harm."
      },
      {
        "n": 40,
        "q": "Which statement about hazards and accidents is correct?",
        "options": [
          "Every accident is invariably the result of a single, independent causal factor that can be isolated and removed in design",
          "A hazardous situation can occur without any system element failure (e.g., a design error or misaligned mental models)",
          "A hazard always requires at least one physical component to fail before any harm to people becomes possible",
          "Once a hazard has been mitigated in the design it can never recur during operation or maintenance"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.11: most accidents are multi-causal, and a hazardous situation can occur without an element failure, due to design/implementation errors or misalignment between the mental models of designers, operators, and maintainers."
      },
      {
        "n": 41,
        "q": "What sustains safety throughout a system's life, beyond good design?",
        "options": [
          "A tailored safety management system and an effective safety culture",
          "Relying entirely on operators and maintainers never making any mistakes during operation",
          "A one-time safety certification granted at the very start of operations and never revisited",
          "Eliminating all in-service monitoring once the system has been fielded to its users"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.11: a safety management system (tailored by country/industry) plus a strong safety culture, suitably qualified people, and ongoing monitoring sustain safety; in-service systems need careful monitoring as assumptions, use, and environments evolve."
      },
      {
        "n": 42,
        "q": "System Security Engineering (SSE) is an approach that identifies, protects from, detects, responds to, and recovers from:",
        "options": [
          "Only external denial-of-service attacks, theft, and power interruptions from outside the system",
          "Reliability failures and degradation caused by ordinary component wear-out over the service life",
          "Schedule slips and budget overruns encountered during the acquisition and development effort",
          "Anomalous and disruptive events, including those in a cyber-contested environment"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.12: SSE ensures a system can function under anomalous and disruptive events from misuse and malice, across the life cycle, including cyber-contested environments."
      },
      {
        "n": 43,
        "q": "Cybersecurity generally refers to protecting which three properties of information assets?",
        "options": [
          "Confidentiality, integrity, and availability",
          "Reliability, maintainability, and supportability",
          "Authenticity, anonymity, and accountability",
          "Safety, security, and survivability"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.12: cybersecurity generally refers to the confidentiality, integrity, and availability of information assets; security management adds controls such as policies and procedures."
      },
      {
        "n": 44,
        "q": "In the handbook, 'trustworthiness' is a concept that includes:",
        "options": [
          "Only confidentiality and integrity",
          "Only physical security and access control",
          "Affordability, producibility, and supportability",
          "Privacy, reliability, resilience, safety, and security"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.12: trustworthiness includes privacy, reliability, resilience, safety, and security, making an entity worthy of being trusted to fulfill its critical requirements (NIST 800-160 Vol. 2)."
      },
      {
        "n": 45,
        "q": "According to the handbook, the best way to integrate cybersecurity into systems is:",
        "options": [
          "As a separate, isolated activity performed only after the whole system has been built and tested",
          "By outsourcing it entirely to an external penetration-testing vendor at the end of the project",
          "Only during the verification and validation stages, once the design has been completely frozen",
          "Through the systems engineering process, addressing security at each life cycle stage"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.12: NIST 800-160 Vol. 1 and 2 (based on ISO/IEC/IEEE 15288 and this handbook) determine that the best way to integrate security is through the SE process, making it part of the overall solution rather than separate."
      },
      {
        "n": 46,
        "q": "Physical security primarily protects a system from:",
        "options": [
          "Unauthorized access, misuse, or damage caused by physical actions such as theft, vandalism, and intrusion",
          "Software vulnerabilities exploited remotely over a network by an intelligent and adaptive cyber adversary",
          "Loss of confidentiality of data transmitted between system elements over its communication channels",
          "Component failures and gradual degradation caused by wear-out, aging, and environmental conditions"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.12: physical security protects against physical actions and events (theft, vandalism, intrusion) using layered controls such as surveillance, deterrents, barriers, locks, and access control."
      },
      {
        "n": 47,
        "q": "Human Systems Integration (HSI) is defined as an approach that:",
        "options": [
          "Replaces human operators with automation wherever feasible",
          "Integrates technology, organizations, and people effectively",
          "Optimizes only the user interface and ergonomics of the system",
          "Ensures the system interacts effectively with other systems"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.4 / Table 3.1: HSI integrates technology, organizations, and people effectively across the whole life cycle."
      },
      {
        "n": 48,
        "q": "The 'TOP model' at the heart of HSI refers to:",
        "options": [
          "Tasks, Operators, and Procedures applied across the whole system life cycle",
          "Technology, Organization, and People within an environment",
          "Tools, Outputs, and Performance measured during operational test and evaluation",
          "Training, Operations, and Planning carried out by the in-service support team"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.4: HSI emerges from the overlap of the TOP model (technology, organization, people) within an environment, the HSI perspectives, and the contributing disciplines."
      },
      {
        "n": 49,
        "q": "HSI adopts which kind of system perspective?",
        "options": [
          "A purely organizational perspective focused only on the management structures and reporting lines",
          "A purely technical perspective focused exclusively on the hardware and software of the system",
          "A perspective that deliberately excludes non-cooperative, adversarial, or malicious people",
          "A sociotechnical perspective in which all systems include both humans and machines"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.4: HSI adopts a sociotechnical perspective treating systems as organizations of humans and machines; to optimize the system, all elements must be considered within SE activities."
      },
      {
        "n": 50,
        "q": "HSI is delivered chiefly through which major process, supported by human-in-the-loop activities?",
        "options": [
          "Failure Mode and Effects Analysis (FMEA)",
          "Level of Repair Analysis (LORA)",
          "Human-Centered Design (HCD)",
          "Architecture Tradeoff Analysis Method (ATAM)"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.4: HSI is supported through Human-Centered Design (HCD) as a major process, involving prototypes, scenario-based design, modeling, and human-in-the-loop (HITL) activities."
      },
      {
        "n": 51,
        "q": "Interoperability may be achieved by two principal means, which can also be combined:",
        "options": [
          "Centralizing all control within a single master system, or else eliminating all external interfaces entirely",
          "Increasing the redundancy of every component, or adding manual fallback procedures for the operators",
          "Agreeing on one or more published standards, and/or defining and implementing a custom interface",
          "Encrypting all data exchanged in transit, or fully air-gapping the systems from one another"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.5: interoperability is achieved by adopting published standards (open 'plug and play') and/or defining a custom interface when a standard does not exist or is unsuitable."
      },
      {
        "n": 52,
        "q": "Why is interoperability a key enabler for a System of Systems (SoS)?",
        "options": [
          "It removes any need to define or manage the interfaces between the constituent systems of the system of systems",
          "It allows the elements of a large, complex system to work together as a single entity toward a shared purpose",
          "It guarantees that every constituent system uses identical hardware, software, and data exchange formats",
          "It eliminates the social, political, and organizational factors that usually complicate SoS integration"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.5: interoperability is a key enabler for an SoS because it allows the elements of a large and complex system to work together as a single entity toward a shared purpose."
      },
      {
        "n": 53,
        "q": "Logistics engineering (product-support engineering) is concerned with the support resources to sustain operation and maintenance, and also with:",
        "options": [
          "Engineering the inherent supportability of the design",
          "Maximizing production throughput on the factory floor",
          "Defining the system's functional architecture",
          "Performing the safety hazard analysis for the SoI"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.6: logistics engineering identifies, acquires, and provisions support resources AND engineers the inherent supportability of the design, addressed from a life cycle perspective."
      },
      {
        "n": 54,
        "q": "In supportability analysis, preventive maintenance tasks are primarily identified using which technique?",
        "options": [
          "Reliability-Centered Maintenance (RCM)",
          "Failure Mode, Effects and Criticality Analysis (FMECA)",
          "Level of Repair Analysis (LORA)",
          "Fault Tree Analysis (FTA)"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.6: corrective maintenance tasks are primarily identified using FMECA, while preventive maintenance tasks are identified using RCM (Reliability-Centered Maintenance)."
      },
      {
        "n": 55,
        "q": "The system Level of Repair Analysis (LORA) is used, in conjunction with the support concept, to determine:",
        "options": [
          "The mean time to repair and restore each individual system element after it has failed",
          "The most appropriate location for executing support/maintenance tasks",
          "The number and type of spare parts to stock at each depot and forward support location",
          "The inherent availability achieved by the fielded system in its operational environment"
        ],
        "correct": 1,
        "explanation": "Sec 3.1.6: the LORA, with the support concept, helps determine the most appropriate location for executing support tasks (e.g., 'repair vs. replace' and where)."
      },
      {
        "n": 56,
        "q": "Manufacturability/producibility analysis is an approach that enables production in a:",
        "options": [
          "Responsible and cost-effective manner",
          "Fully automated and human-free manner",
          "Single, non-repeatable prototype run",
          "Manner that maximizes the number of unique parts"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.7 / Table 3.1: manufacturability/producibility analysis enables production in a responsible and cost-effective manner; it is an integral part of the SE process."
      },
      {
        "n": 57,
        "q": "A notable insight about production enabling systems is that:",
        "options": [
          "They can sometimes cost more than the system being produced",
          "They are always cheaper than the system being produced",
          "They are never required for low-volume systems",
          "They are identical across all production volumes"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.7: a SE approach to production is needed because the production enabling systems can sometimes cost more than the system being produced (Maier and Rechtin, 2009)."
      },
      {
        "n": 58,
        "q": "Sustainability engineering is an approach that supports the:",
        "options": [
          "Linear take-make-dispose economy",
          "Lowest possible acquisition cost",
          "Circular economy over the system's life",
          "Fastest possible production cycle time"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.10 / Table 3.1: sustainability engineering supports the circular economy over the life, based on sharing, reusing, repairing, and recycling to extend product life and minimize waste."
      },
      {
        "n": 59,
        "q": "Within environmental impact analysis, 'design for disassembly' is important because it:",
        "options": [
          "Eliminates any need to plan for the retirement and disposal stage of the overall system life cycle later on",
          "Reduces the number of fasteners purely in order to lower the unit production cost of the system",
          "Speeds up final assembly on the production line and thereby shortens the manufacturing cycle time",
          "Lets material be reused, remanufactured, or recycled by minimizing destructive separation of system elements"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.10: design for disassembly minimizes destructive separation of elements so material can be reused, remanufactured, or recycled, maximizing residual value after useful life."
      },
      {
        "n": 60,
        "q": "Which standard series is cited as an excellent resource for analyzing and assessing environmental impacts?",
        "options": [
          "The ISO 9000 series of quality management standards",
          "The NIST SP 800-160 security series",
          "The ISO 14000 series of environmental management standards",
          "The ISO/IEC/IEEE 42010 architecture series"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.10: the ISO 14000 series of environmental management standards is an excellent resource; environmental regulations should be addressed in the earliest requirements activities."
      },
      {
        "n": 61,
        "q": "The four metrics of 'effective response' that characterize agility are:",
        "options": [
          "Fast, cheap, simple, and reliable",
          "Modular, scalable, reusable, and testable",
          "Robust, tolerant, recoverable, and survivable",
          "Timely, affordable, predictable, and comprehensive"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.3: effective response (the manifestation of agility) has four metrics: timely, affordable, predictable, and comprehensive."
      },
      {
        "n": 62,
        "q": "Sustained agility is enabled principally by:",
        "options": [
          "A single monolithic, tightly-integrated architecture optimised for peak nominal performance",
          "Maximising the coupling and interdependence between modules to improve raw system throughput",
          "An architectural pattern of loosely-coupled, plug-and-play modularity with supporting design principles",
          "Eliminating all standards and rules so that system configurations remain entirely unconstrained"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.3: agility is enabled by a drag-and-drop, plug-and-play, loosely-coupled modular architecture (like Lego), with reusable, reconfigurable, and scalable design principles."
      },
      {
        "n": 63,
        "q": "In an agile architecture, the role of the 'passive infrastructure' is to:",
        "options": [
          "Provide just-enough rules and standards that enable and constrain plug-and-play connectivity between modules",
          "Perform the internal functional methods of each encapsulated module within the overall system architecture",
          "Assign the designated responsibilities for assembling new system configurations on demand when needed",
          "Continuously monitor, evaluate, and anticipate changes occurring in the operational environment"
        ],
        "correct": 0,
        "explanation": "Sec 3.1.3: the passive infrastructure provides drag-and-drop connectivity, balancing requisite variety and parsimony — just enough standards to enable connectivity without over-constraining configurations."
      },
      {
        "n": 64,
        "q": "Loss-Driven Systems Engineering (LDSE) is best described as:",
        "options": [
          "A method for eliminating all losses and waste from a system's total life cycle cost over its life",
          "A capability-driven methodology focused only on delivering the desired functions and features",
          "A standard for formally documenting verification and validation results across the life cycle",
          "The value-adding unification of the QCs that address potential losses in developing and using systems"
        ],
        "correct": 3,
        "explanation": "Sec 3.1.13: LDSE unifies the loss-driven QCs (resilience, safety, security, sustainability/disposability, availability), which are otherwise often considered in isolation, to leverage their commonality."
      },
      {
        "n": 65,
        "q": "To leverage commonality among the loss-driven QCs, the handbook recommends that SE practitioners:",
        "options": [
          "Assign each loss-driven QC to a separate, fully independent team that works with no coordination between them",
          "Address each of the loss-driven QCs only after the system has been fielded and is already in service",
          "Make architectural and design decisions holistically across the loss-driven areas and integrate their risks",
          "Prioritize availability above all and largely ignore the other loss-driven quality characteristics"
        ],
        "correct": 2,
        "explanation": "Sec 3.1.13: practitioners should elicit loss-driven requirements as an integrated part of requirements, make architecture/design decisions holistically across loss-driven areas, and integrate their risks into one risk-management activity."
      },
      {
        "n": 66,
        "q": "The essential artifact of Modeling, Analysis, and Simulation (MA&S) is:",
        "options": [
          "A validated, full-scale physical prototype of the final system used for acceptance testing",
          "A complete and unambiguous set of natural-language stakeholder and system requirements",
          "An explicit model — an idealized representation of one or more aspects of the as-is or to-be SoI",
          "A signed interface control document placed under formal configuration management control"
        ],
        "correct": 2,
        "explanation": "Sec 3.2.1: the essential artifact of MA&S is an explicit model, an idealized representation of one or more aspects of the as-is or to-be system of interest."
      },
      {
        "n": 67,
        "q": "How does the handbook distinguish modeling, analysis, and simulation?",
        "options": [
          "Modeling creates/refines models; analysis is systematic reproducible examination; simulation uses a model to predict behavior",
          "Analysis uses only physical models, simulation always uses natural-language descriptions, and modeling uses spreadsheets",
          "They are essentially interchangeable terms that all describe the same underlying engineering activity",
          "Modeling predicts behaviour, simulation creates the models, and analysis builds the physical prototypes"
        ],
        "correct": 0,
        "explanation": "Sec 3.2.1: modeling is the conception/creation/refinement of models; analysis is systematic, reproducible examination to gain insight; simulation uses a model to predict and study behavior."
      },
      {
        "n": 68,
        "q": "In this handbook's terminology, an examination involving a PHYSICAL model is always called a:",
        "options": [
          "Simulation",
          "Analysis",
          "Test",
          "Surrogate run"
        ],
        "correct": 2,
        "explanation": "Sec 3.2.1: in this section, simulation always involves a digital model, and any examination involving a physical model is always a test."
      },
      {
        "n": 69,
        "q": "A 'formal model' is distinguished from an informal model because it is:",
        "options": [
          "Always graphical rather than textual, and therefore readable only by specialist modelling tools",
          "Created only with general office tools such as word processors, spreadsheets, and diagram editors",
          "Expressed in a machine-readable language with explicitly defined semantics and one way of interpretation",
          "Understood casually by humans through convention, without any formally defined semantics or rules"
        ],
        "correct": 2,
        "explanation": "Sec 3.2.1: a formal model is expressed in a machine-readable language with explicitly defined semantics (one interpretation); informal models use casual conventions without formal semantics."
      },
      {
        "n": 70,
        "q": "Formal models can be further classified as logical, geometric, surrogate, or:",
        "options": [
          "Physical (full-scale hardware)",
          "Quantitative (mathematical)",
          "Informal (free-text sketches)",
          "Mixed (physical plus digital)"
        ],
        "correct": 1,
        "explanation": "Sec 3.2.1: formal models are classified as logical (descriptive/conceptual), quantitative (mathematical), geometric, or surrogate models."
      },
      {
        "n": 71,
        "q": "A 'surrogate model' is best described as:",
        "options": [
          "A reduced model derived from a higher-fidelity model that adequately represents essential aspects with far less computation",
          "A physical mockup used mainly for checking the form, fit, and human-system interface during early development testing",
          "An informal sketch or diagram used to communicate a concept to non-engineering project stakeholders",
          "A black-box model that hides its intellectual property behind a publicly accessible external interface"
        ],
        "correct": 0,
        "explanation": "Sec 3.2.1: a surrogate model is a reduced model derived from a higher-fidelity model via a data-driven transformation, enabling large numbers of experiments with far less computation."
      },
      {
        "n": 72,
        "q": "In MBSE multidisciplinary coordination, the integrated system model acts as the:",
        "options": [
          "Optional backup of the document-centric specifications that remain the real source of truth",
          "'Authoritative source of truth,' with disciplines connected through a hub-and-spokes pattern",
          "Final verification report demonstrating that the system satisfies all of its requirements",
          "Replacement for every discipline-specific engineering model used by the project disciplines"
        ],
        "correct": 1,
        "explanation": "Sec 3.2.1: the trend is an integrated system model as the authoritative source of truth, with a hub-and-spokes pattern where the system-model repository is the hub linking all disciplines."
      },
      {
        "n": 73,
        "q": "To protect intellectual property when organizations collaborate, a model that hides its internals while still exposing an external interface for simulation is called a:",
        "options": [
          "White box (transparent box) model",
          "Surrogate model",
          "Mixed model",
          "Black box (opaque box) model"
        ],
        "correct": 3,
        "explanation": "Sec 3.2.1: black-box (opaque) models hide/obfuscate IP while providing an accessible external interface; white-box (transparent) models provide full visibility of their internals."
      },
      {
        "n": 74,
        "q": "A key principle of prototyping is that a prototype is:",
        "options": [
          "Intended to enhance learning and should be set aside once that purpose is achieved",
          "The polished first draft of the production entity, later refined directly into the final delivered product",
          "A complete and accurate representation that always becomes the delivered operational system",
          "An artifact used only after the system has already entered the production stage of its life"
        ],
        "correct": 0,
        "explanation": "Sec 3.2.2: prototypes enhance learning and are not the 'first draft' of production entities; they should be set aside when their purpose is achieved, as the production entity may behave differently."
      },
      {
        "n": 75,
        "q": "Rapid prototyping is best characterized as:",
        "options": [
          "A complete, high-fidelity representation of the entire system that is built and used for final system acceptance testing by the acquirer",
          "A traditional partial prototype that is used to verify only the most critical elements of the system design",
          "A purely document-based model of the system requirements that has no physical or executable elements",
          "A fast way to get performance data and evaluate concepts, quickly assembled from existing physical, graphical, or mathematical elements"
        ],
        "correct": 3,
        "explanation": "Sec 3.2.2: rapid prototyping is an easy, fast way to get performance data and evaluate concepts, assembled from existing elements (e.g., 3-D printing, simulation shells); used for form, fit, interface, operations, producibility."
      },
      {
        "n": 76,
        "q": "In traditional prototyping, a prototype used to verify only the critical elements of the system is a:",
        "options": [
          "Full prototype",
          "Partial prototype",
          "Rapid prototype",
          "Surrogate prototype"
        ],
        "correct": 1,
        "explanation": "Sec 3.2.2: traditional prototyping has two variants — a partial prototype verifies critical elements, while a full prototype is a complete representation of the system."
      },
      {
        "n": 77,
        "q": "Bidirectional traceability is defined as the ability to trace an item to another while:",
        "options": [
          "Automatically establishing a reverse link back to the initial item",
          "Tracing items only from higher-level requirements down to lower-level requirements",
          "Linking items together only within a single life cycle stage or process",
          "Recording the history and location of the item only after it has been delivered"
        ],
        "correct": 0,
        "explanation": "Sec 3.2.3: bidirectional traceability automatically establishes a reverse link, so once an item is linked to its source/destination, the reverse link is created; SE tools facilitate two-way links."
      },
      {
        "n": 78,
        "q": "Vertical traceability is most often referred to in the context of:",
        "options": [
          "Elements at the same architectural level, usually described as peer-to-peer relationships",
          "Links connecting artifacts generated across the different stages of the system life cycle",
          "Organizational or architectural levels (e.g., parent/child relationships across levels)",
          "The recorded history and physical location of a delivered product after it has been fielded"
        ],
        "correct": 2,
        "explanation": "Sec 3.2.3: vertical traceability is across organization/architectural levels (Level n, n+1, …) and is referred to as parent/child relationships."
      },
      {
        "n": 79,
        "q": "Horizontal traceability involves traceability across:",
        "options": [
          "Levels of the system architecture only, usually called parent and child relationships",
          "A single requirement and its one corresponding verification artifact, and nothing more",
          "Elements at a given level (peer relationships) and across the life cycle stages/processes",
          "The configuration baselines of one individual component as it changes over time"
        ],
        "correct": 2,
        "explanation": "Sec 3.2.3: horizontal traceability is across elements of a given level (peer relationships) and links items generated in one life cycle stage/process to those in others."
      },
      {
        "n": 80,
        "q": "Traceability is facilitated through the appropriate application of which process, which assigns unique identifiers that are never reused?",
        "options": [
          "The Risk Management process and its associated risk register",
          "The Configuration Management (CM) process",
          "The Decision Management process and its trade studies",
          "The Project Planning and Assessment process"
        ],
        "correct": 1,
        "explanation": "Sec 3.2.3: traceability is facilitated by the CM process; the product/system identifier is a unique identifier that, once issued, should never be reused."
      },
      {
        "n": 81,
        "q": "Traceability is a crucial component of the 'digital thread' because it enables:",
        "options": [
          "Connecting models, digital twins, and physical assets so a requirement traces to specific configurations and back",
          "Eliminating the need for the Configuration Management process by storing all of the system data in one master model",
          "Replacing the verification and validation activities entirely with automated model consistency checks",
          "Automatically generating all of the system's stakeholder and system requirements from the design models"
        ],
        "correct": 0,
        "explanation": "Sec 3.2.3: traceability connects the digital thread, letting a requirement be traced through functional and physical representations to specific configurations — and in reverse when a physical element changes."
      },
      {
        "n": 82,
        "q": "In an N-squared (N²) diagram, the system elements are placed:",
        "options": [
          "On the diagonal from upper left to lower right, with off-diagonal squares representing potential interactions",
          "In random positions within the matrix, since the placement of elements there carries no particular meaning at all",
          "In the off-diagonal squares, with the interactions between the elements placed along the main diagonal",
          "In a single column down the left side, with all of the interactions listed in the columns to the right"
        ],
        "correct": 0,
        "explanation": "Sec 3.2.4: in an N² diagram, the elements are placed on the diagonal (upper-left to lower-right) and off-diagonal squares represent potential interactions; a blank square means no interaction."
      },
      {
        "n": 83,
        "q": "In a standard N² diagram, interactions between elements flow in which direction?",
        "options": [
          "Counterclockwise (inputs horizontal, outputs vertical)",
          "Top to bottom only",
          "Clockwise (outputs horizontal, inputs vertical)",
          "Diagonally from corner to corner"
        ],
        "correct": 2,
        "explanation": "Sec 3.2.4: in an N² diagram interactions flow clockwise, with outputs horizontal and inputs vertical; an item passed from element A to B is placed in the appropriate off-diagonal square."
      },
      {
        "n": 84,
        "q": "How does the Design Structure Matrix (DSM) typically differ from the N² diagram?",
        "options": [
          "The DSM uses inputs on the horizontal rows and outputs on the vertical columns, so interactions flow counterclockwise",
          "The DSM shows only the external inputs and outputs of the system, never the internal interactions between its elements",
          "The DSM places the system elements in the off-diagonal cells rather than along the main diagonal of the matrix",
          "The DSM cannot be expanded or decomposed into lower-level diagrams as the system architecture matures over time"
        ],
        "correct": 0,
        "explanation": "Sec 3.2.4: the DSM is similar in appearance to the N² diagram but uses inputs on rows and outputs on columns, so interactions flow counterclockwise."
      },
      {
        "n": 85,
        "q": "A coupling matrix (a type of N² diagram) is used during integration primarily to:",
        "options": [
          "Document the safety hazards and the mitigations that are associated with each interface in the whole architecture",
          "Compute the reliability and the predicted failure rate of each interface between the system elements",
          "Assign quantitative cost estimates to each of the system elements and their associated interfaces",
          "Group system elements into aggregates and minimize the number of interfaces to be verified between aggregates"
        ],
        "correct": 3,
        "explanation": "Sec 3.2.4: coupling matrices define aggregates and integration order; reorganizing the matrix groups elements into aggregates and minimizes the interfaces verified between aggregates, aiding fault detection."
      },
      {
        "n": 86,
        "q": "During requirements and architecture definition, interface management focuses on:",
        "options": [
          "Selecting the physical media, such as cables, data buses, Wi-Fi, or Bluetooth, used at each interface boundary",
          "Defining and agreeing on WHAT is involved in the interactions, not on HOW those interactions are realized",
          "Implementing and then testing the realized interfaces between the integrated system elements",
          "Deferring all of the interface work until the system integration and verification stages begin"
        ],
        "correct": 1,
        "explanation": "Sec 3.2.4: the focus during System Requirements and Architecture Definition is on the characteristics of WHAT is involved in the interactions; HOW they are realized (the media) is addressed later by Design Definition."
      },
      {
        "n": 87,
        "q": "Interface definitions are commonly recorded in a configuration-controlled artifact known as a(n):",
        "options": [
          "Systems Engineering Management Plan (SEMP)",
          "Failure Mode and Effects Analysis (FMEA)",
          "Work Breakdown Structure (WBS)",
          "Interface Control Document (ICD)"
        ],
        "correct": 3,
        "explanation": "Sec 3.2.4: interface definitions are recorded in interface control artifacts such as the Interface Control Document (ICD), IDD, IAD, or Data Dictionary, placed under configuration control; an Interface Control Working Group often manages them."
      },
      {
        "n": 88,
        "q": "ISO/IEC/IEEE 42010 (2022) defines an architecture description framework as a set of:",
        "options": [
          "Tools and software libraries used for automatically generating system code directly from the architecture description",
          "Mandatory requirements that every architecture in the organization is obligated to satisfy and comply with",
          "Test cases and procedures used to verify a completed architecture against its specified requirements",
          "Conventions, principles, and practices for the description of architectures within a domain or community of stakeholders"
        ],
        "correct": 3,
        "explanation": "Sec 3.2.5: ISO/IEC/IEEE 42010 defines an architecture description framework as conventions, principles, and practices for describing architectures within a domain or community of stakeholders."
      },
      {
        "n": 89,
        "q": "Most architecture frameworks are organized to provide one or more ___ that cover stakeholder concerns.",
        "options": [
          "Prototypes",
          "Baselines",
          "Viewpoints",
          "Work packages"
        ],
        "correct": 2,
        "explanation": "Sec 3.2.5: most architecture frameworks (e.g., NAF, UAF, DoDAF) are organized around one or more viewpoints to cover target domains and stakeholders' concerns, yielding views."
      },
      {
        "n": 90,
        "q": "Which of the following is an example of an architecture framework used in the defense domain?",
        "options": [
          "COSYSMO (Constructive Systems Engineering Cost Model)",
          "DoDAF (Department of Defense Architecture Framework)",
          "ATAM (Architecture Tradeoff Analysis Method)",
          "ISO 14000 (environmental management standards)"
        ],
        "correct": 1,
        "explanation": "Sec 3.2.5: defense-domain frameworks include DoDAF, NAF, and UAF; TOGAF is used in the IT domain. COSYSMO is a cost model, ATAM is an evaluation method, and ISO 14000 is environmental."
      },
      {
        "n": 91,
        "q": "ATAM and MFESA are methods that support which architecture activity?",
        "options": [
          "Architecture enablement",
          "Architecture evaluation",
          "Architecture governance",
          "Architecture description"
        ],
        "correct": 1,
        "explanation": "Sec 3.2.5: per ISO/IEC/IEEE 42030, evaluation determines the extent to which architectures meet objectives; methods include ATAM (Architecture Tradeoff Analysis Method) and MFESA."
      },
      {
        "n": 92,
        "q": "Per Sowa and Zachman, how many levels of architecture framework should be established to keep products and systems consistent with enterprise strategy?",
        "options": [
          "Two levels — an enterprise framework and a product framework",
          "One unified framework for the whole organization",
          "Three levels — strategic, tactical, and operational",
          "A separate framework for every project, with no enterprise level"
        ],
        "correct": 0,
        "explanation": "Sec 3.2.5: per Sowa and Zachman (Fig. 3.16), two levels of architecture framework — enterprise and product — should be established to ensure consistency of products and systems with enterprise strategy."
      },
      {
        "n": 93,
        "q": "In systems engineering, patterns are best described as:",
        "options": [
          "One-size-fits-all templates that have no variable aspects and cannot be parameterized",
          "Strictly informal artifacts that, by definition, can never be captured as formal models",
          "Reusable design solutions that apply only within the software engineering discipline",
          "Recurrences — repeated regularities observed across time, space, or other dimensions"
        ],
        "correct": 3,
        "explanation": "Sec 3.2.6: patterns are recurrences — repeated regularities — with both fixed (recurring) and variable (parameterized) aspects; they may be informal or formal."
      },
      {
        "n": 94,
        "q": "An S*Pattern is best described as:",
        "options": [
          "A purely informal prose description of a recurring design problem together with a suggested solution approach",
          "A one-time, single-use model that is created for one project and that cannot be reused anywhere else",
          "A full-scale physical prototype that represents one member of a system family for verification testing",
          "A reusable S*Model of a family of systems, configurable to represent multiple applications or configurations"
        ],
        "correct": 3,
        "explanation": "Sec 3.2.6: S*Patterns are reusable S*Models of families of systems, often domain-specific, configurable to represent multiple applications, market segments, or other configurations."
      },
      {
        "n": 95,
        "q": "Design Thinking is presented in the handbook as a complementary approach to:",
        "options": [
          "Configuration management",
          "Reliability engineering",
          "Systems thinking",
          "Cost estimation"
        ],
        "correct": 2,
        "explanation": "Sec 3.2.7: Design Thinking is a complementary approach to Systems Thinking, exploring human needs, the reasoning by which design concepts are devised, the systems realized, their specialization, and their value."
      },
      {
        "n": 96,
        "q": "A characteristic technique of a Design Thinking process is the use of:",
        "options": [
          "Successive divergent and convergent phases of design synthesis and analysis",
          "A single linear pass straight from requirements to design with no iteration or feedback at all",
          "Reliance solely on quantitative parametric cost and performance models of the system",
          "Deliberately avoiding stakeholder involvement in order to prevent any introduced bias"
        ],
        "correct": 0,
        "explanation": "Sec 3.2.7: a Design Thinking process uses context analysis, problem framing, and ideation, with successive divergent and convergent phases of synthesis and analysis with respect to stakeholder value."
      },
      {
        "n": 97,
        "q": "Biomimicry is defined as a practice that:",
        "options": [
          "A practice that applies only to materials science and never to architectures, behaviours, or processes",
          "Learns from and mimics the strategies found in nature to solve human design challenges",
          "A practice that replaces engineered systems entirely with naturally occurring living systems",
          "A practice that studies only living natural systems and excludes all non-living natural systems"
        ],
        "correct": 1,
        "explanation": "Sec 3.2.8: biomimicry 'learns from and mimics the strategies found in nature to solve human design challenges'; natural systems include both living and non-living (anything not human-made)."
      },
      {
        "n": 98,
        "q": "A correct early step in the systematic process for developing nature-inspired (biomimetic) solutions is to:",
        "options": [
          "Immediately select a single final natural system to copy faithfully, before any of the system's requirements have been defined",
          "Define requirements in terms of abstract functions or goals, then search for natural systems that satisfy those functions",
          "Transfer a chosen natural strategy directly to the SoI before abstracting it from its biological context",
          "Evaluate the environmental impact of the resulting solution only after the system has been retired"
        ],
        "correct": 1,
        "explanation": "Sec 3.2.8: the process begins by being open to alternatives and defining requirements as abstract functions/goals with metrics, then searching for natural systems that satisfy the function before selecting, abstracting, and transferring the strategy."
      },
      {
        "n": 99,
        "q": "MA&S enables early V&V primarily because it allows issues to be caught:",
        "options": [
          "Early in the life cycle, when mitigation is affordable and change of scope is still feasible",
          "Only during the production and utilization stages, once the design has been fully baselined",
          "After the full-scale physical prototype has been built and completely tested in the field",
          "Exclusively at the final system verification review, just before the system is transitioned"
        ],
        "correct": 0,
        "explanation": "Sec 3.2.1: early V&V with digital models lets stakeholders see implications of preferences and catches issues early, when mitigation is affordable and scope change is feasible, avoiding later cost/schedule overruns."
      },
      {
        "n": 100,
        "q": "Which pairing of a quality characteristic with its representative QC is correct per Table 3.1?",
        "options": [
          "Logistics Engineering — Manufacturability, Producibility",
          "System Safety Engineering — Cybersecurity, Trustworthiness",
          "Resilience Engineering — Resilience, Robustness, Survivability",
          "Affordability Analysis — Adaptability, Flexibility, Scalability"
        ],
        "correct": 2,
        "explanation": "Table 3.1: Resilience Engineering owns Resilience, Robustness, and Survivability. Logistics owns Supportability; Safety owns Safety; Security owns Cybersecurity/IA/Physical Security/Trustworthiness; Agility owns adaptability/flexibility/scalability."
      }
    ]
  }
};
