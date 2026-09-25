import nordicHero from "@/assets/case-studies/nordic-hero.jpg";
import nordicShot1 from "@/assets/case-studies/nordic-shot-1.jpg";
import nordicShot2 from "@/assets/case-studies/nordic-shot-2.jpg";
import harborHero from "@/assets/case-studies/harbor-hero.jpg";
import harborShot1 from "@/assets/case-studies/harbor-shot-1.jpg";
import harborShot2 from "@/assets/case-studies/harbor-shot-2.jpg";
import meridianHero from "@/assets/case-studies/meridian-hero.jpg";
import meridianShot1 from "@/assets/case-studies/meridian-shot-1.jpg";
import meridianShot2 from "@/assets/case-studies/meridian-shot-2.jpg";
import indianArmyLmsHero from "@/assets/case-studies/indian-army-lms-hero.jpg";
import indianArmyLmsArch from "@/assets/case-studies/indian-army-lms-arch.jpg";
import moilBillingHero from "@/assets/case-studies/moil-billing-hero.jpg";
import moilCghsArch from "@/assets/case-studies/moil-cghs-arch.jpg";
import isroDigefabHero from "@/assets/case-studies/isro-digefab-hero.jpg";
import isroDigefabArch from "@/assets/case-studies/isro-digefab-arch.jpg";
import drdoUwmHero from "@/assets/case-studies/drdo-uwm-hero.jpg";
import drdoUwmArch from "@/assets/case-studies/drdo-uwm-arch.jpg";

export type CaseImage = { src: string; alt: string; caption?: string };

export type ApproachStep = { number: string; title: string; body: string };

export type SolutionSection = { title: string; body: string; bullets?: string[]; image?: CaseImage };

export type ResultMetric = { value: number; prefix?: string; suffix?: string; label: string };

export type CaseStudy = {
  slug: string;
  /** Company / project name shown on cards. */
  client: string;
  /** Editorial H1 of the detail page. */
  title: string;
  industry: string;
  services: string[];
  /** Slugs from services-data used for internal linking. */
  serviceLinks: string[];
  technologies: string[];
  summary: string;
  duration: string;
  team: string;
  primaryOutcome: string;
  heroImage: CaseImage;
  /** Short card copy — kept for the homepage preview too. */
  problem: string;
  solution: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  challenge: { context: string; problem: string; problemPoints: string[]; whyItMattered: string };
  objectives: string[];
  approach: ApproachStep[];
  solutionSections: SolutionSection[];
  images: CaseImage[];
  architecture: { label: string; items: string[] }[];
  results: ResultMetric[];
  beforeAfter?: { before: string[]; after: string[] };
  businessImpact?: { title: string; body: string }[];
  testimonial?: { quote: string; name: string; role: string; company: string };
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string };
};

const baseApproach: ApproachStep[] = [
  { number: "01", title: "Discovery", body: "Workshops with operators and stakeholders to map real workflows, data sources, and the constraints nobody documents." },
  { number: "02", title: "Architecture", body: "Target-state system design, integration contracts, and a migration path that avoids a big-bang cutover." },
  { number: "03", title: "Product Design", body: "Interface flows validated with the people who use the system daily, not only the people who buy it." },
  { number: "04", title: "Development", body: "Two-week increments with a working build at the end of each, reviewed against the agreed success metrics." },
  { number: "05", title: "Testing", body: "Automated regression, load testing, and a security review before anything touches production data." },
  { number: "06", title: "Deployment", body: "Phased rollout with monitoring, alerting, and rollback paths in place from the first cohort." },
  { number: "07", title: "Optimization", body: "Post-launch telemetry drives a continuous improvement backlog tied to business outcomes." },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "indian-army-lms",
    client: "Indian Army Related Organization",
    title: "Mission-Critical LMS & Institutional Training Management System",
    industry: "Defense & Sovereign Institutions",
    services: ["Enterprise Architecture", "Custom Software", "Cloud & On-Prem Infrastructure"],
    serviceLinks: ["custom-software", "cloud-devops", "transformation"],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Hierarchical RBAC", "Air-Gapped Infrastructure", "Docker"],
    summary: "Enterprise-grade Learning Management System (LMS) managing training, personnel, courses, batches, examinations, and administrative reporting in a structured military environment.",
    duration: "Phased Multi-Release Deployment",
    team: "6 — Principal Systems Architect, 3 Full-Stack Engineers, 1 UX/Systems Designer, 1 QA/Security Lead",
    primaryOutcome: "Modular, zero-rewrite architecture adaptable to evolving military command protocols",
    heroImage: {
      src: indianArmyLmsHero,
      alt: "Institutional military Learning Management System dashboard showing training batches, assessments, and personnel records",
    },
    problem: "Structured institutional military training required strict hierarchical approvals, examination integrity, and personnel tracking across slow-evolving command confirmations.",
    solution: "Delivered an enterprise institutional LMS with modular data models, multi-tier RBAC, document management vaults, and extensible batch workflows.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Air-Gapped RBAC"],
    metrics: [
      { label: "Administrative Roles", value: "Multi-Tier" },
      { label: "Course Batches", value: "Unified" },
      { label: "System Auditing", value: "100% Traceable" },
    ],
    challenge: {
      context:
        "We are developing an enterprise-grade Learning Management System (LMS) for an Indian Army-related institutional organization to manage training, learning, personnel, courses, assessments, documentation, and reporting in a structured institutional environment.",
      problem:
        "The system operates under multi-role administrative hierarchies where confirmations and requirements from the client side evolve incrementally over extended timelines. Traditional rigid LMS platforms fail when schemas or institutional protocols shift, risking costly system rewrites.",
      problemPoints: [
        "Complex military user hierarchies requiring fine-grained, role-based access control (RBAC)",
        "Disparate tracking across personnel records, course batches, exam schedules, and completion certificates",
        "Strict defense security, auditability, data integrity, and air-gapped on-premise operational mandates",
        "Slow, incremental requirement iterations from institutional stakeholders requiring flexible, rewrite-proof architecture",
      ],
      whyItMattered:
        "Institutional training readiness is mission-critical. Disjointed records or brittle software delay curriculum rollout, compromise assessment integrity, and impede administrative oversight.",
    },
    objectives: [
      "Support multi-tier user and personnel management with granular Role-Based Access Control (RBAC)",
      "Orchestrate course catalogs, training batches, enrollment, and attendance tracking",
      "Implement a secure learning material and document management repository",
      "Deliver examination engines supporting tests, marks/results, and official completion certificates",
      "Engineer a modular, highly adaptable architecture that accommodates evolving client specifications without rewrites",
      "Provide executive dashboards, administrative approvals, search/filtering, and verifiable audit logging",
    ],
    approach: [
      { number: "01", title: "Institutional Workflow Mapping", body: "Detailed field analysis mapping military user hierarchies, training commands, cadet progressions, and administrative signoff chains." },
      { number: "02", title: "Modular Domain Architecture", body: "Architecting decoupled domain services (Personnel, Courses, Batches, Exams, Approvals) so data models and UI screens can evolve without rewrites." },
      { number: "03", title: "Hierarchical RBAC & Security", body: "Enforcing fine-grained role-based permissions and immutable audit logging meeting air-gapped defense standards." },
      { number: "04", title: "Incremental Feature Releases", body: "Two-week release cycles providing functional software modules for stakeholder review, adapting iteratively to command feedback." },
      { number: "05", title: "Examination & Assessment Vault", body: "Building secure question banks, automated grading engines, attendance logs, and verifiable digital certificate generators." },
      { number: "06", title: "Air-Gapped Sovereign Deployment", body: "Deploying on self-hosted, air-gapped local infrastructure with local databases, zero external internet dependencies, and hardened Docker runtimes." },
      { number: "07", title: "Handover & Protocol Expansion", body: "Delivering operational documentation, administrator tooling, and modular hooks for future institutional training modules." },
    ],
    solutionSections: [
      {
        title: "Hierarchical Role-Based Access & Personnel Management",
        body: "Engineered a military-grade administrative hierarchy supporting granular permissions from commanding officers to instructional staff and trainees. Every action, approval, and record mutation is immutably logged for institutional auditability.",
        bullets: [
          "Multi-tier RBAC aligned with military administrative chains of command",
          "Comprehensive personnel service profiles and training history tracking",
          "Automated enrollment into assigned training batches and courses",
        ],
      },
      {
        title: "End-to-End Course, Batch & Examination Lifecycle",
        body: "Orchestrates the entire institutional education pipeline—from curriculum document vaults and batch schedules to exam proctoring, marks tabulations, and official completion records.",
        bullets: [
          "Dynamic question banks with randomized assessments and automated evaluation",
          "Daily attendance logging, session participation, and performance trend analytics",
          "Tamper-proof digital certificates and administrative signoff workflows",
        ],
      },
      {
        title: "Modular, Evolution-Resilient Architecture",
        body: "Because institutional requirements evolve incrementally over time, the system features a domain-driven modular design. Workflows, schemas, and UI views can be extended without breaking existing modules or requiring large-scale rewrites.",
        bullets: [
          "Pluggable service modules for courses, assessments, and approvals",
          "Decoupled data models that absorb schema refinements cleanly",
          "Full data export, multi-criteria filtering, and sovereign on-premise execution",
        ],
      },
    ],
    images: [
      { src: indianArmyLmsHero, alt: "Indian Army Institutional LMS Training Command Dashboard", caption: "Training Command Personnel & Batch Management Dashboard" },
      { src: indianArmyLmsArch, alt: "Institutional military LMS 5-tier modular architecture diagram", caption: "Modular 5-tier domain architecture resilient to protocol changes" },
    ],
    architecture: [
      { label: "Frontend", items: ["React 18", "TypeScript", "Tailwind CSS", "Modular UI Components", "Offline-Ready Cache"] },
      { label: "Backend", items: ["Node.js", "Express", "Domain-Driven Service Layer", "Hierarchical RBAC Engine"] },
      { label: "Database", items: ["PostgreSQL", "Role-Based Schemas", "Immutable Audit Logging", "Encrypted Vaults"] },
      { label: "Infrastructure", items: ["Air-Gapped On-Premise Servers", "Docker Containerization", "Zero-Internet Sovereign Network"] },
      { label: "Compliance", items: ["Military Audit Standards", "Role Separation", "Tamper-Evident Logs"] },
    ],
    results: [
      { value: 100, suffix: "%", label: "Immutable audit log coverage across all actions" },
      { value: 0, label: "Large-scale rewrites during evolving protocol updates" },
      { value: 10, prefix: "+", label: "Administrative user roles and hierarchical tiers" },
    ],
    beforeAfter: {
      before: [
        "Disjointed paper and spreadsheet records across training commands",
        "Rigid legacy software requiring complete rewrites when protocols changed",
        "Manual calculation of examination results and delayed certification",
        "Limited audit trail for administrative approvals and personnel movements",
      ],
      after: [
        "Unified institutional LMS managing personnel, batches, courses, and marks",
        "Modular architecture that absorbs requirement updates without code rewrites",
        "Automated grading, instant performance records, and verifiable certificates",
        "Complete, tamper-evident audit logging for every command action",
      ],
    },
    businessImpact: [
      {
        title: "Operational Training Readiness",
        body: "Centralizes training records across battalions, enabling command leadership to evaluate operational readiness and course completion rates instantly.",
      },
      {
        title: "Future-Proof Software Investment",
        body: "By designing for slow-evolving institutional confirmations, the organization avoided vendor lock-in and catastrophic rebuild cycles as requirements mature.",
      },
    ],
    testimonial: {
      quote: "The modular architecture delivered by VisionGuru Labs has allowed our training command to expand curriculums, assessments, and approval workflows smoothly as institutional protocols evolve.",
      name: "Command Project Lead",
      role: "Institutional Training Directorate",
      company: "Defense Institutional Organization",
    },
    faqs: [
      {
        q: "How does the architecture accommodate slowly evolving client requirements without rewrites?",
        a: "The system is built on Domain-Driven Design (DDD) with decoupled modules for Personnel, Courses, Batches, Assessments, and Approvals. Each module exposes clear contracts, allowing schema fields and UI workflows to expand without affecting adjacent subsystems.",
      },
      {
        q: "Can this LMS run on an air-gapped network with zero internet access?",
        a: "Yes. All application services, databases, dependencies, and font/icon assets are packaged inside self-contained Docker containers optimized for air-gapped on-premise military server racks.",
      },
      {
        q: "How does the system handle military hierarchy and role-based permissions?",
        a: "The platform implements a multi-tier RBAC system mapping directly to institutional military hierarchies, with strict data isolation ensuring officers, instructors, and cadets access only their authorized operational scope.",
      },
    ],
    seo: {
      title: "Indian Army LMS | Mission-Critical Institutional Training System | VisionGuru Labs",
      description: "How VisionGuru Labs engineered an enterprise-grade Learning Management System (LMS) for an Indian Army institutional organization with hierarchical RBAC, batch tracking, and modular architecture.",
    },
  },
  {
    slug: "moil-ai-medical-billing",
    client: "MOIL Limited",
    title: "AI-Powered Medical Billing & CGHS Rate Adjudication Engine",
    industry: "Healthcare & Public Sector (PSU)",
    services: ["AI & ML", "Custom Software", "Digital Transformation"],
    serviceLinks: ["ai-consulting", "custom-software", "transformation"],
    technologies: ["Python", "FastAPI", "React", "Document AI / OCR", "CGHS Rule Engine", "Explainable AI (XAI)", "PostgreSQL", "On-Premise Private Cloud"],
    summary: "AI-assisted healthcare billing and claim adjudication POC system for MOIL (Manganese Ore India Limited), automating medical bill OCR, CGHS rate list compliance, and fraud discrepancy detection.",
    duration: "16 weeks (POC & Rule Engine)",
    team: "6 — Lead AI/ML Architect, Document AI Specialist, Healthcare Rule Engineer, Full-Stack Engineer, UX Designer, Systems Auditor",
    primaryOutcome: "Claim auditing turnaround cut from weeks to minutes with 100% CGHS rate compliance and explainable AI",
    heroImage: {
      src: moilBillingHero,
      alt: "MOIL AI Medical Billing OCR and CGHS rate comparison adjudication interface",
    },
    problem: "Manual verification of voluminous hospital invoices against Central Government Health Scheme (CGHS) rate books caused multi-week claim backlogs and financial leakage.",
    solution: "Engineered an on-premise Document AI pipeline that ingests multi-format hospital bills, maps items to CGHS codes, detects overbilling, and provides explainable human-in-the-loop adjudication.",
    stack: ["Python", "Document AI / OCR", "CGHS Rule Engine", "Explainable AI", "React", "FastAPI"],
    metrics: [
      { label: "Turnaround Time", value: "Minutes vs Weeks" },
      { label: "CGHS Compliance", value: "100%" },
      { label: "Data Privacy", value: "100% On-Premise" },
    ],
    challenge: {
      context:
        "MOIL (Manganese Ore India Limited) is a Miniratna state-owned manganese ore mining company headquartered in Nagpur, India. The company manages medical reimbursements and healthcare claims for thousands of employees, dependents, and retirees across empaneled hospitals.",
      problem:
        "Medical bills arrive in fragmented formats—scanned invoices, discharge summaries, handwritten pharmacy slips, and diagnostic reports. Billing officers had to manually cross-reference thousands of line items against official Central Government Health Scheme (CGHS) rate schedules, checking NABH/non-NABH ceilings, ICU caps, and non-reimbursable consumables.",
      problemPoints: [
        "Voluminous medical bills processed manually with multiple weeks of reimbursement delay",
        "Frequent financial leakage from hospital overbilling, duplicate charges, unapproved tests, and unauthorized consumables",
        "Non-standard procedure descriptions and handwritten medicines hindering straightforward rate matching",
        "Strict PSU audit scrutiny requiring verifiable legal and regulatory justifications for every deduction",
        "Sovereign data security requirements prohibiting sensitive employee health records from leaking to public cloud APIs",
      ],
      whyItMattered:
        "Delays penalized retired and active employees awaiting reimbursement, while undetected overbilling caused significant annual financial losses for the public enterprise.",
    },
    objectives: [
      "Accept and ingest multi-format medical documentation (PDF, scans, pharmacy receipts, discharge summaries)",
      "Extract structured line-item data (patient, hospital, dates, procedures, investigations, charges) via Document AI / OCR",
      "Normalize non-standard handwritten or typed descriptions to standardized CGHS procedure codes",
      "Build a deterministic CGHS Rate List rule engine covering NABH/non-NABH tariffs, room rents, ICU caps, and surgical packages",
      "Detect overbilling, duplicate items, and unauthorized charges with full decision explainability",
      "Empower MOIL auditors with an interactive Human-in-the-Loop review workspace and automated audit reporting",
      "Ensure 100% on-premise deployment guaranteeing sensitive health data never leaves MOIL's sovereign boundary",
    ],
    approach: [
      { number: "01", title: "Medical Bill Document Ingestion", body: "Built ingestion pipelines accepting PDFs, scans, camera captures, and lab slips with automated de-skewing, noise reduction, and orientation correction." },
      { number: "02", title: "OCR & Document Information Extraction", body: "Applied spatial Document AI and OCR to extract key-value pairs (patient name, hospital, dates) and tabular itemized charges with high precision." },
      { number: "03", title: "Procedure & Drug Normalization", body: "Engineered fuzzy matching and semantic embeddings to translate non-standard hospital descriptions into standardized CGHS clinical codes." },
      { number: "04", title: "CGHS Rate List Rule Engine", body: "Encoded the official CGHS rate catalog into an algorithmic rule engine applying NABH/non-NABH rates, ICU caps, and consumable exclusions." },
      { number: "05", title: "Discrepancy Detection & Adjudication", body: "Engineered algorithms flagging overbilling, unbundling, duplicate test entries, and non-reimbursable consumables with clear variance calculations." },
      { number: "06", title: "Explainable AI (XAI) & Auditor Review", body: "Designed a side-by-side verification interface showing original document snippets, matched rules, and confidence scores for human signoff." },
      { number: "07", title: "On-Premise Deployment & Hardening", body: "Packaged the entire AI pipeline for private local server deployment, ensuring full compliance with PSU health data privacy mandates." },
    ],
    solutionSections: [
      {
        title: "Multi-Format Ingestion & Document AI Extraction",
        body: "Ingests scanned invoices, discharge summaries, and receipts. The Document AI engine accurately identifies document boundaries, extracts patient/employee IDs, itemizes billed treatments and medicines, and converts messy paper trails into structured digital records.",
        bullets: [
          "High-accuracy OCR for structured, semi-structured, and typed bills",
          "Automated extraction of hospital empanelment status, admission dates, and doctor consultations",
          "Multi-page invoice stitching and line-item bounding box coordinates",
        ],
      },
      {
        title: "Central Government Health Scheme (CGHS) Rate Engine",
        body: "Automates the complex verification of hospital charges against official CGHS rate schedules. The engine intelligently determines applicable tariffs based on hospital NABH accreditation, room type limits, package pricing, and government ceiling caps.",
        bullets: [
          "Dynamic NABH vs non-NABH tariff calculation across 1,800+ CGHS procedures",
          "Automated detection of non-reimbursable consumables and unapproved diagnostic tests",
          "Accurate eligible reimbursement computation with clear deduction breakdowns",
        ],
      },
      {
        title: "Explainable AI (XAI) & Human-in-the-Loop Auditor Workspace",
        body: "Rather than an opaque 'black-box' output, the system provides transparent reasoning for every flagged discrepancy. Auditors can inspect the exact cropped image snippet, the matched CGHS code, the applicable rate ceiling, and override or approve with one click.",
        bullets: [
          "Side-by-side document image preview with interactive bounding boxes",
          "Confidence score and rule-trigger rationale displayed for every deduction",
          "Auditable PDF report generation with itemized settlement justifications",
        ],
      },
      {
        title: "On-Premise Sovereign Privacy Architecture",
        body: "Engineered specifically for Public Sector Undertakings where employee medical and financial data must remain on-premise. The entire AI inference stack, OCR engine, and database run on MOIL's internal infrastructure without cloud leakage.",
        bullets: [
          "Self-hosted local AI inference with zero external cloud dependencies",
          "Comprehensive immutable audit logs of auditor reviews and approvals",
          "Role-based security protecting sensitive personal health information (PHI)",
        ],
      },
    ],
    images: [
      { src: moilBillingHero, alt: "MOIL AI Medical Claim Adjudication & CGHS Comparison Interface", caption: "Explainable AI medical claim audit and CGHS rate list verification portal" },
      { src: moilCghsArch, alt: "5-Stage End-to-End AI Medical Billing & CGHS Adjudication Workflow", caption: "5-stage claim ingestion, normalization, CGHS adjudication and auditor signoff pipeline" },
    ],
    architecture: [
      { label: "Document AI", items: ["OCR & Layout Analysis", "Bounding Box Spatial Parser", "Image Pre-processing"] },
      { label: "Rule Engine", items: ["Python FastAPI", "CGHS Master Tariff Catalog", "Semantic Code Normalization"] },
      { label: "Auditor UI", items: ["React 18", "TypeScript", "Side-by-Side PDF Viewer", "Explainable Decision Cards"] },
      { label: "Database", items: ["PostgreSQL", "Encrypted Claims Vault", "Immutable Audit Logging"] },
      { label: "Deployment", items: ["On-Premise Private Server", "Docker Containerization", "Zero-Cloud Sovereign Boundary"] },
    ],
    results: [
      { value: 95, suffix: "%", label: "Reduction in claim audit turnaround time" },
      { value: 100, suffix: "%", label: "Compliance with CGHS healthcare reimbursement norms" },
      { value: 0, label: "Sensitive health data leaked outside MOIL perimeter" },
    ],
    beforeAfter: {
      before: [
        "3 to 4 weeks of manual paper verification per hospitalization claim batch",
        "Frequent financial leakage from undetected hospital overbilling and unapproved tests",
        "Manual CGHS rate book flipping prone to human fatigue and calculation errors",
        "Disputes over deductions due to lack of transparent, explainable audit breakdowns",
      ],
      after: [
        "Automated claim auditing completed in minutes instead of weeks",
        "Instant discrepancy detection for overbilling, duplicates, and non-reimbursable items",
        "Algorithmic CGHS rate application covering NABH tariffs and room rent caps",
        "Clear, explainable reasoning for every adjustment with human-in-the-loop signoff",
      ],
    },
    businessImpact: [
      {
        title: "Dramatic Turnaround Acceleration",
        body: "Reimbursement processing time collapsed from nearly a month to under an hour, significantly boosting employee and retiree satisfaction across MOIL units.",
      },
      {
        title: "Zero Financial Leakage",
        body: "Automated verification against official CGHS rate caps protects MOIL from systemic hospital overcharges, saving millions in unjustified healthcare expenditures.",
      },
    ],
    testimonial: {
      quote: "The AI Medical Billing POC has demonstrated how automated CGHS rate validation and Document AI can eliminate claim backlogs while ensuring complete transparency and zero leakage.",
      name: "Healthcare Operations Lead",
      role: "Medical Reimbursement Administration",
      company: "MOIL Limited",
    },
    faqs: [
      {
        q: "How does the system handle handwritten or poorly scanned medical bills?",
        a: "The ingestion pipeline uses computer vision pre-processing (deskew, contrast enhancement, noise removal) and multi-engine OCR trained on medical typography. When OCR confidence on handwritten text falls below a threshold, the system flags the specific field for human auditor verification.",
      },
      {
        q: "Can MOIL billing officers override or adjust AI recommendations?",
        a: "Yes. The system is fundamentally designed around Human-in-the-Loop (HITL) review. Officers can inspect the AI's reasoning, edit adjudicated amounts, add custom notes, and approve or reject claims before final disbursement.",
      },
      {
        q: "How are changes in the official CGHS Rate List managed?",
        a: "The CGHS Rate Engine uses a versioned tariff catalog. When the Ministry of Health publishes updated rate circulars or NABH revisions, administrators upload the new tariff schedule without requiring any code changes.",
      },
      {
        q: "Is any employee healthcare data sent to external cloud APIs?",
        a: "No. The entire system is engineered for sovereign on-premise deployment. All OCR models, rate databases, and audit logs execute within MOIL's internal data center or private virtual cloud.",
      },
    ],
    seo: {
      title: "MOIL AI Medical Billing | CGHS Claim Adjudication Engine | VisionGuru Labs",
      description: "How VisionGuru Labs engineered an on-premise AI medical claim auditing and CGHS rate engine for MOIL (Manganese Ore India Limited) to eliminate overbilling and accelerate claim turnaround.",
    },
  },
  {
    slug: "isro-digefab-automation",
    client: "Indian Space Research Organisation (ISRO)",
    title: "DIGEFAB: End-to-End PCB Fabrication & Cleanroom Process Automation",
    industry: "Space Technology / Manufacturing Automation",
    services: ["Manufacturing Process Automation", "Industrial IoT & MES", "Custom Software", "Workflow Automation"],
    serviceLinks: ["custom-software", "transformation", "cloud-devops"],
    technologies: ["React", "TypeScript", "Python", "FastAPI", "Industrial IoT / SCADA", "PostgreSQL", "Automated Optical Inspection (AOI)", "Zero-Defect Quality Gates", "Cleanroom MES"],
    summary: "Technology-driven workflow automation platform for Printed Circuit Board (PCB) fabrication in ISRO's specialized space-grade manufacturing and cleanroom engineering environment.",
    duration: "Phased Aerospace Engineering Deployment",
    team: "7 — Principal Systems Architect, Industrial Automation Engineer, 2 Full-Stack Engineers, Embedded IoT Specialist, QA Lead, Aerospace Domain Advisor",
    primaryOutcome: "100% automated traceability and zero-defect quality gate enforcement across multi-layer space-grade PCB fabrication cycles",
    heroImage: {
      src: isroDigefabHero,
      alt: "ISRO DIGEFAB PCB fabrication console, SMT workflows, AOI camera, yield charts, cleanroom telemetry",
    },
    problem: "Space-grade PCB fabrication requires micrometer-precision tolerances, strict cleanroom traceability, and zero-defect yields across complex multi-step chemical, mechanical, and surface-mount processes.",
    solution: "Engineered DIGEFAB: a centralized manufacturing process automation suite integrating Gerber design validation, chemical etching, CNC micro-drilling, SMT placement, and real-time AOI quality gates.",
    stack: ["Python", "FastAPI", "React", "Industrial IoT / MES", "PostgreSQL", "AOI Computer Vision"],
    metrics: [
      { label: "Quality Gates", value: "100% Automated" },
      { label: "Traceability", value: "Micron-Level" },
      { label: "Cleanroom Yield", value: "Zero-Defect Standard" },
    ],
    challenge: {
      context:
        "The Indian Space Research Organisation (ISRO) develops high-reliability launch vehicles, satellite payloads, avionics packages, and onboard guidance systems. Within its specialized engineering and manufacturing facilities, Printed Circuit Boards (PCBs) must meet stringent aerospace-grade reliability standards where failure in orbit is not an option.",
      problem:
        "The DIGEFAB initiative addresses the automation of multi-stage fabrication workflows for high-density, multi-layer PCBs. Previously, cleanroom operations relied on fragmented machine consoles, physical routing travelers, and manual calibration logs across etching baths, CNC micro-drilling lines, and surface-mount pick-and-place systems.",
      problemPoints: [
        "Stringent zero-defect tolerances where microscopic chemical over-etching or plating voids compromise flight avionics",
        "Disparate machine communication protocols across laser photolithography, CNC drilling, electroplating, and SMT assembly",
        "Manual tracking of physical job cards and chemical bath logs introducing operational latency and audit gaps",
        "Need for continuous synchronization between cleanroom environmental sensors (particulate counts, relative humidity, thermal chambers) and batch serials",
        "Sovereign defense and space-grade security requiring isolated, on-premise execution with zero external network dependencies",
      ],
      whyItMattered:
        "Satellite and launch vehicle electronics operate in extreme radiation and thermal shock conditions with zero post-launch serviceability. Process automation and complete serialized manufacturing traceability are foundational to mission assurance.",
    },
    objectives: [
      "Automate the end-to-end PCB fabrication lifecycle from Gerber/ODB++ design ingestion to space-grade qualification",
      "Bridge cleanroom machine telemetry across chemical etching, micro-drilling, multilayer lamination, and SMT placement",
      "Implement Automated Optical Inspection (AOI) quality gates with computer vision defect classification",
      "Deliver real-time operator consoles and engineering dashboards for yield monitoring, tool wear, and bath replenishment",
      "Establish 100% serialized component and panel traceability across all manufacturing cells",
      "Deploy entirely within ISRO's air-gapped secure on-premise infrastructure",
    ],
    approach: [
      { number: "01", title: "Cleanroom Process Mapping", body: "Detailed field analysis of aerospace PCB fabrication stages, IPC-A-610 Class 3 / Space Addendum requirements, and cleanroom machine interfaces." },
      { number: "02", title: "Industrial MES Architecture", body: "Designing a modular Manufacturing Execution System (MES) with decoupled services for job routing, recipe dispatching, telemetry ingestion, and quality gating." },
      { number: "03", title: "Machine Telemetry & IoT Integration", body: "Interfacing with CNC micro-drills, laser imaging systems, chemical bath controllers, and pick-and-place lines via industrial protocols." },
      { number: "04", title: "Automated Quality Gates", body: "Configuring strict automated pass/fail verification stages preventing any PCB panel with micro-voids, impedance deviations, or solder bridging from progressing." },
      { number: "05", title: "Cleanroom Operator Consoles", body: "Building responsive, high-contrast touchscreen interfaces optimized for cleanroom gowning conditions with real-time operational alerts." },
      { number: "06", title: "Air-Gapped Sovereign Deployment", body: "Deploying on dedicated on-premise server clusters with local database redundancy, role-based access control, and zero external internet access." },
      { number: "07", title: "Aerospace Verification & Handover", body: "Running test batches against space-grade test coupons, verifying thermal cycling logs, and providing operator training documentation." },
    ],
    solutionSections: [
      {
        title: "Integrated Process Automation & Recipe Orchestration",
        body: "DIGEFAB unifies previously disconnected cleanroom machines into a continuous, automated fabrication pipeline. Gerber and ODB++ design packages are ingested, checked for design-for-manufacturability (DFM) rules, and dispatched directly as machine instructions to laser plotters, micro-drills, and SMT placers.",
        bullets: [
          "Automated DFM rule checking and CAM package dispatching across fabrication stages",
          "Digital job travelers replacing physical paper cards with instant electronic tracking",
          "Automated bath replenishment alerts and tool wear tracking for micro-drills",
        ],
      },
      {
        title: "Automated Optical Inspection (AOI) & Real-Time Telemetry",
        body: "Integrated computer vision quality gates inspect PCB traces, vias, and solder fillets at micrometer resolution. Real-time telemetry streams from cleanroom temperature, humidity, and chemical bath monitors ensure environmental compliance during critical curing and etching phases.",
        bullets: [
          "High-resolution AOI camera feeds catching solder bridges, voids, and trace necking early",
          "Timescale telemetry logging cleanroom environmental metrics against panel serial numbers",
          "Instantaneous operator alerts halting out-of-spec chemical or thermal cycles",
        ],
      },
      {
        title: "Space-Grade Serialization & Verifiable Audit Vault",
        body: "Every individual PCB panel is assigned an indelible 2D DataMatrix code tracked across every fabrication cell. Complete process histories—including machine parameters, operator IDs, inspection imagery, and thermal logs—are committed to an immutable audit database.",
        bullets: [
          "End-to-end serialized genealogy from raw laminate substrate to finished flight board",
          "Single-click generation of aerospace compliance dossiers and test coupon certificates",
          "Role-based authorization ensuring only certified cleanroom operators sign off on critical milestones",
        ],
      },
    ],
    images: [
      { src: isroDigefabHero, alt: "ISRO DIGEFAB Cleanroom PCB Fabrication Console and Telemetry", caption: "DIGEFAB Centralized Process Automation & PCB Fabrication Dashboard" },
      { src: isroDigefabArch, alt: "ISRO DIGEFAB 5-tier aerospace manufacturing software architecture diagram", caption: "5-Tier Industrial Automation Architecture: Ingestion, Control, Telemetry & Quality Gates" },
    ],
    architecture: [
      { label: "Frontend", items: ["React 18", "TypeScript", "Tailwind CSS", "High-Contrast Cleanroom UI", "Real-Time WebSockets"] },
      { label: "Backend", items: ["Python FastAPI", "Node.js", "Industrial Telemetry Engine", "Automated Rule Processor"] },
      { label: "Machine Interop", items: ["Industrial IoT / Modbus", "OPC-UA", "Gerber / ODB++ Parsers", "AOI Vision Feeds"] },
      { label: "Database & Storage", items: ["PostgreSQL (TimescaleDB)", "Redis Event Bus", "Encrypted Serialization Vault", "Immutable Run Records"] },
      { label: "Security & Compliance", items: ["Air-Gapped ISRO Deployment", "Zero Cloud Dependencies", "Multi-Tier Role Access", "Space-Grade Verification"] },
    ],
    results: [
      { value: 100, suffix: "%", label: "Automated serialized traceability from raw laminate to final flight board" },
      { value: 45, prefix: "-", suffix: "%", label: "Fabrication cycle time reduction through automated quality gating" },
      { value: 0, label: "Unlogged process variances across cleanroom manufacturing cells" },
    ],
    beforeAfter: {
      before: [
        "Manual recipe configuration and paper logs across separate PCB manufacturing machines",
        "Delayed detection of chemical etching variations or micro-drill runout until post-assembly",
        "Siloed inspection records requiring hours of manual collation for aerospace qualification audits",
        "Fragmented visibility into cleanroom environmental conditions during critical lamination steps",
      ],
      after: [
        "Unified DIGEFAB automated workflow orchestrating panels seamlessly across all fabrication stages",
        "Real-time telemetry and automated optical inspection catching deviations at the earliest possible stage",
        "Instant single-click aerospace compliance dossiers with serialized batch histories",
        "Synchronized cleanroom sensor logging tied directly to panel production runs",
      ],
    },
    businessImpact: [
      {
        title: "Avionics Manufacturing Velocity",
        body: "Automating routine routing, machine setup, and inspection gating significantly reduces lead times for prototype and production avionics boards.",
      },
      {
        title: "Zero-Defect Spaceflight Assurance",
        body: "Micron-level quality enforcement and comprehensive sensor logging provide immutable proof of space qualification before flight integration.",
      },
    ],
    testimonial: {
      quote: "DIGEFAB modernizes our cleanroom manufacturing workflows, bringing automated precision, automated inspection gates, and instantaneous traceability to space-grade PCB fabrication.",
      name: "Engineering Group Director",
      role: "Manufacturing & Avionics Technology Directorate",
      company: "Indian Space Research Organisation (ISRO)",
    },
    faqs: [
      {
        q: "What types of PCBs does the DIGEFAB automation platform support?",
        a: "DIGEFAB supports high-density interconnect (HDI), multi-layer rigid, flex, and rigid-flex Printed Circuit Boards engineered for spaceflight and avionics environments.",
      },
      {
        q: "How does DIGEFAB integrate with legacy cleanroom machinery?",
        a: "The architecture employs standardized industrial protocols (OPC-UA, Modbus, custom serial parsers) wrapped in hardened micro-daemons that interface with both modern CNC equipment and established cleanroom controllers.",
      },
      {
        q: "Is any manufacturing or telemetry data transmitted outside the facility?",
        a: "No. The entire system is architected for strict air-gapped on-premise execution inside ISRO's protected network perimeter, with zero external internet dependencies.",
      },
    ],
    seo: {
      title: "ISRO DIGEFAB | Space-Grade PCB Fabrication & Process Automation | VisionGuru Labs",
      description: "How VisionGuru Labs engineered DIGEFAB: Manufacturing process automation, cleanroom telemetry, and zero-defect quality gates for space-grade PCB fabrication at ISRO.",
    },
  },
  {
    slug: "drdo-unified-workflow-management",
    client: "Defence Research and Development Organisation (DRDO)",
    title: "UWM: Unified Workflow Management & Remote Operations Infrastructure",
    industry: "Defence / Government",
    services: ["Workflow Management", "Remote Troubleshooting", "Software Lifecycle Management", "Cybersecurity & Remote Operations"],
    serviceLinks: ["custom-software", "cloud-devops", "transformation"],
    technologies: ["Go", "React", "TypeScript", "gRPC", "mTLS Cryptography", "Remote Management Agent", "PostgreSQL", "Air-Gapped Tactical Networks"],
    summary: "Unified Workflow Management (UWM) platform providing secure remote troubleshooting, software lifecycle management (remote install/uninstall), and operational workflow orchestration across defense networks.",
    duration: "Phased Defense Lifecycle Deployment",
    team: "6 — Principal Systems Architect, Cybersecurity Specialist, 2 Backend Systems Engineers (Go), Full-Stack UI Engineer, QA & Compliance Lead",
    primaryOutcome: "Cryptographically verified remote troubleshooting and zero-residue software lifecycle automation across secured defense endpoints",
    heroImage: {
      src: drdoUwmHero,
      alt: "DRDO UWM tactical command console, remote troubleshooting, verified software installation/uninstallation pipeline",
    },
    problem: "Managing software lifecycles, diagnosing terminal anomalies, and executing remote remediation across distributed, air-gapped defense nodes without compromising perimeter security.",
    solution: "Engineered UWM: a hardened remote operations and workflow engine enabling secure diagnostics, dual-custody software installation/uninstallation, and real-time operational telemetry.",
    stack: ["Go", "React", "TypeScript", "mTLS", "gRPC", "PostgreSQL", "Hardened Daemon"],
    metrics: [
      { label: "Remote Operations", value: "Cryptographically Signed" },
      { label: "Software Lifecycle", value: "Dual-Custody" },
      { label: "Remediation Time", value: "< 2 Minutes" },
    ],
    challenge: {
      context:
        "The Defence Research and Development Organisation (DRDO) develops and maintains strategic defense systems, specialized laboratories, testing ranges, and command communication nodes across India. Ensuring continuous operational readiness of software and computing assets across these facilities is essential for national security.",
      problem:
        "Defense nodes often operate in restricted, air-gapped, or low-bandwidth environments. Performing routine diagnostics, patching, deploying mission software, or completely decommissioning obsolete tools historically required physical technician presence or ad-hoc scripts lacking cryptographic verification, dual-custody authorizations, or centralized auditability.",
      problemPoints: [
        "Strict defense security demanding zero internet connectivity, mutual TLS (mTLS), and hardware-bound cryptographic identities",
        "Need for rapid remote troubleshooting (process inspection, memory telemetry, live service diagnostics) without introducing attack surfaces",
        "Complex software lifecycle management requiring cryptographically signed packages, atomic installations, and zero-residue clean uninstallation",
        "Dual-custody operational workflows requiring commanding officer cryptographic authorization before destructive or critical changes occur",
        "High resilience over intermittent, low-bandwidth, or high-latency tactical communication links",
      ],
      whyItMattered:
        "Operational defense readiness requires endpoints to be continuously healthy, secure, and properly provisioned with verified software payloads without risking insider threats, security lapses, or operational downtime.",
    },
    objectives: [
      "Build a centralized Unified Workflow Management console for mission node monitoring and administration",
      "Deliver low-latency remote troubleshooting tools (process monitoring, live telemetry, service recovery)",
      "Implement cryptographically verified remote software installation with atomic rollback mechanisms",
      "Provide certified remote software uninstallation ensuring zero residual binaries, config keys, or file artifacts",
      "Enforce multi-tier military command hierarchies with dual-custody approvals and tamper-evident audit trails",
      "Operate with extreme efficiency over restricted, high-latency, air-gapped defense networks",
    ],
    approach: [
      { number: "01", title: "Operational Security Profiling", body: "Threat modeling defense nodes, RBAC authorization matrices, and cryptographic key distribution constraints." },
      { number: "02", title: "Hardened Node Agent Design", body: "Building a lightweight, memory-safe Go daemon with minimal CPU/RAM footprint and strict privilege separation." },
      { number: "03", title: "Cryptographic Pipeline", body: "Implementing mTLS, Ed25519 payload signing, and dual-custody authorization tokens for remote actions." },
      { number: "04", title: "Troubleshooting Engine", body: "Engineering interactive remote diagnostics, structured log streams, process inspections, and service recovery routines." },
      { number: "05", title: "Lifecycle Packaging & Purging", body: "Developing verified package builders, rollback-capable installers, and zero-residue uninstallation routines." },
      { number: "06", title: "Defense Workflow Console", body: "Creating a high-density, mission-grade web console with real-time fleet health topology and workflow builders." },
      { number: "07", title: "Field Validation & Air-Gap Hardening", body: "Stress-testing under packet drop, bandwidth limits, and simulated adversarial intrusion scenarios." },
    ],
    solutionSections: [
      {
        title: "Unified Workflow Orchestration & Mission Node Fleet Control",
        body: "UWM provides commanding officers and systems administrators with a single-pane-of-glass dashboard displaying the real-time operational status of all registered defense nodes. Custom multi-step workflows automate routine maintenance, health checks, and state synchronizations.",
        bullets: [
          "Real-time fleet health monitoring with instant heartbeat telemetry",
          "Automated workflow scheduling with step-by-step execution gating",
          "Dynamic node tagging based on facility, security tier, and mission assignment",
        ],
      },
      {
        title: "Hardened Remote Troubleshooting & Live Diagnostics",
        body: "When a tactical terminal encounters anomalies, engineers can securely inspect system states, tail live logs, query process trees, and restart unresponsive services without needing an insecure remote desktop or telnet session.",
        bullets: [
          "Secure mTLS-encrypted diagnostic tunnels with zero persistent open ports",
          "Live memory, CPU, and disk I/O metrics streaming with negligible overhead",
          "Interactive diagnostic commands with full keystroke and command auditing",
        ],
      },
      {
        title: "Dual-Custody Software Installation & Zero-Residue Removal",
        body: "Deploying or decommissioning software packages requires digital signatures and dual-custody authorization. Installations are atomic with instant rollback if verification checks fail. Remote uninstallation executes certified scrubbing routines ensuring no temporary files, configurations, or binaries remain on the host.",
        bullets: [
          "Ed25519 cryptographic signature verification prior to package execution",
          "Dual-custody approval requiring two authorized officers to sign off on deployments",
          "Certified uninstallation scrubbing file systems, registry/daemons, and temporary caches",
        ],
      },
    ],
    images: [
      { src: drdoUwmHero, alt: "DRDO UWM Tactical Operations Console and Workflow Manager", caption: "UWM Tactical Command Console: Fleet Diagnostics & Remote Management" },
      { src: drdoUwmArch, alt: "DRDO UWM 5-tier defence workflow management and air-gapped node architecture diagram", caption: "5-Tier Defence Operations Architecture: Dual-Custody, Encrypted Channel & Node Daemons" },
    ],
    architecture: [
      { label: "Control Console", items: ["React 18", "TypeScript", "Tailwind CSS", "High-Density Tactical UI", "WebSockets"] },
      { label: "Orchestration Server", items: ["Go (Golang)", "gRPC / Protobuf", "Workflow Engine", "Dual-Custody Approval Bus"] },
      { label: "Endpoint Agent", items: ["Lightweight Go Daemon", "Memory-Safe Sandbox", "Atomic Rollback Engine", "Systemd / Init Integration"] },
      { label: "Security & Crypto", items: ["mTLS Certificate Authority", "Ed25519 Package Signing", "Encrypted Payload Vault", "Dual-Key Approval"] },
      { label: "Network & Infrastructure", items: ["Air-Gapped Defense Networks", "Bandwidth-Optimized Binary Protocols", "Zero Cloud Reliance"] },
    ],
    results: [
      { value: 100, suffix: "%", label: "Cryptographic signature and audit verification for every remote action" },
      { value: 90, prefix: "-", suffix: "%", label: "Reduction in physical on-site maintenance dispatches for software updates" },
      { value: 0, label: "Residual file, registry, or config artifacts after remote uninstallation" },
    ],
    beforeAfter: {
      before: [
        "Manual on-site technician dispatches to update or troubleshoot air-gapped defense endpoints",
        "Ad-hoc deployment scripts without centralized signature verification or rollback safeguards",
        "Incomplete software uninstalls leaving orphaned files, libraries, or configuration residue",
        "Fragmented audit records making forensic tracking of node modifications difficult",
      ],
      after: [
        "Unified remote operations console with real-time fleet telemetry and health indicators",
        "Automated remote installation with atomic verification, dual-custody signoff, and instant rollbacks",
        "Certified zero-residue uninstallation completely scrubbing binaries, logs, and artifacts",
        "Immutable, cryptographically verifiable command logs capturing every workflow execution",
      ],
    },
    businessImpact: [
      {
        title: "Operational Mission Readiness",
        body: "Minimizes downtime across defense command posts by enabling rapid diagnosis and remediation of endpoint issues in minutes rather than days.",
      },
      {
        title: "Zero-Trust Perimeter Protection",
        body: "Eliminates vulnerable ad-hoc remote access tools, enforcing dual-custody cryptographic controls and immutable audit trails across all administrative actions.",
      },
    ],
    testimonial: {
      quote: "UWM provides unprecedented operational control over our distributed nodes, combining robust remote troubleshooting with uncompromising cryptographic security.",
      name: "Joint Technical Director",
      role: "Command & Information Systems Laboratory",
      company: "Defence Research and Development Organisation (DRDO)",
    },
    faqs: [
      {
        q: "How does UWM execute remote troubleshooting without compromising defense security?",
        a: "The node agent establishes outbound, mTLS-encrypted sessions using ephemeral tokens. No listening ports are exposed on the node, and every diagnostic command is cryptographically authenticated and logged.",
      },
      {
        q: "What ensures that remote uninstallation leaves zero residual artifacts?",
        a: "UWM's uninstallation engine performs cryptographic package manifest comparison, verifying that every installed binary, dependency, daemon configuration, and temporary file is purged with zero residue.",
      },
      {
        q: "Can UWM operate over low-bandwidth tactical satellite or radio links?",
        a: "Yes. The communication layer uses binary protobuf over gRPC with delta-compression, allowing telemetry, troubleshooting commands, and package manifests to transmit efficiently over constrained links.",
      },
    ],
    seo: {
      title: "DRDO UWM | Unified Workflow Management & Remote Operations | VisionGuru Labs",
      description: "How VisionGuru Labs engineered DRDO UWM: Remote troubleshooting, cryptographically signed software installation/uninstallation, and workflow management for defense networks.",
    },
  },
  {
    slug: "nordic-health-cloud",
    client: "Nordic Health Cloud",
    title: "Transforming Patient Intake With AI",
    industry: "Healthcare",
    services: ["AI & ML", "Custom Software", "Digital Transformation"],
    serviceLinks: ["ai-consulting", "custom-software", "transformation"],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "FHIR", "LLM Orchestration", "Azure"],
    summary: "AI-powered patient intake and triage platform for a 40-clinic healthcare network.",
    duration: "22 weeks",
    team: "8 — product lead, 2 designers, 4 engineers, 1 ML engineer",
    primaryOutcome: "68% faster triage across 40 clinics",
    heroImage: {
      src: nordicHero,
      alt: "AI-powered patient intake dashboard showing triage queues, clinic load, and patient flow analytics",
    },
    problem: "A 40-clinic network was drowning in fragmented EHR data and manual patient triage.",
    solution: "We rebuilt their intake platform with an AI triage layer and unified analytics across clinics.",
    stack: ["React", "FHIR", "LLM Orchestration", "Azure"],
    metrics: [
      { label: "Triage time", value: "-68%" },
      { label: "Clinician hours saved / week", value: "1,200" },
      { label: "Patient NPS", value: "+34" },
    ],
    challenge: {
      context:
        "Nordic Health Cloud operates a network of 40 outpatient clinics sharing one brand but three different record systems inherited through acquisitions.",
      problem:
        "Every new patient was triaged manually from paper-equivalent intake forms, with clinicians re-keying data that already existed elsewhere in the network.",
      problemPoints: [
        "Three record systems with no shared patient identity",
        "Intake questionnaires captured on paper and re-typed by staff",
        "No network-wide view of clinic load or waiting times",
        "Urgent cases surfaced late because prioritisation was manual",
      ],
      whyItMattered:
        "Slow triage pushed urgent patients further down the queue, inflated clinician overtime, and made capacity planning across the network guesswork rather than data.",
    },
    objectives: [
      "Cut median triage time by at least half",
      "Give clinicians one patient record across all 40 clinics",
      "Automate intake data capture end to end",
      "Surface urgent cases within minutes of submission",
      "Build a platform that scales to new clinics without rework",
    ],
    approach: baseApproach,
    solutionSections: [
      {
        title: "AI-Powered Triage",
        body: "An LLM-backed triage layer reads structured intake answers and free-text descriptions, assigns an urgency band, and explains its reasoning so a clinician can accept or override in one click.",
        bullets: ["Urgency banding with confidence scores", "Human-in-the-loop override with audit trail", "Continuous evaluation against clinician decisions"],
      },
      {
        title: "Unified Clinical Dashboard",
        body: "A single queue view across all 40 clinics replaces three disconnected systems, with patient identity resolved through a FHIR-based record layer.",
        bullets: ["Cross-clinic patient identity resolution", "Live queue and capacity view", "Role-based access with full audit logging"],
      },
      {
        title: "Workflow Automation",
        body: "Intake forms feed the record system directly. Routing, reminders, and escalations run automatically instead of relying on staff to chase.",
      },
      {
        title: "Analytics",
        body: "Operations leads get waiting-time, throughput, and capacity analytics per clinic and per specialty, refreshed continuously rather than compiled monthly.",
      },
    ],
    images: [
      { src: nordicShot1, alt: "Patient intake workflow diagram showing routing between clinics and specialties", caption: "Intake routing model" },
      { src: nordicShot2, alt: "Mobile clinician application screens for reviewing triage decisions on the move", caption: "Clinician mobile companion" },
    ],
    architecture: [
      { label: "Frontend", items: ["React", "TypeScript", "Vite"] },
      { label: "Backend", items: ["Node.js", "REST + event workers"] },
      { label: "Database", items: ["PostgreSQL", "FHIR record layer"] },
      { label: "AI", items: ["LLM orchestration", "Evaluation harness", "Human-in-the-loop review"] },
      { label: "Cloud", items: ["Azure", "Managed identity", "Private networking"] },
      { label: "Integrations", items: ["Three legacy EHR systems", "SMS/email notifications", "SSO directory"] },
    ],
    results: [
      { value: 68, suffix: "%", label: "Reduction in triage time" },
      { value: 1200, label: "Clinician hours saved per week" },
      { value: 34, prefix: "+", label: "Increase in patient NPS" },
    ],
    beforeAfter: {
      before: ["Manual paper intake", "Three fragmented record systems", "Urgent cases spotted late", "Monthly capacity reports"],
      after: ["Digital intake with AI triage", "One unified patient record", "Urgency flagged within minutes", "Live network analytics"],
    },
    businessImpact: [
      { title: "Operational efficiency", body: "Reclaimed clinician time was redirected to appointments rather than administration." },
      { title: "Patient experience", body: "Shorter waits and clearer communication lifted measured patient satisfaction across the network." },
      { title: "Scalability", body: "New clinics onboard onto the shared platform instead of adding another record silo." },
    ],
    testimonial: {
      quote: "Triage used to be the bottleneck of our whole network. Now it runs quietly in the background and our clinicians spend their time with patients.",
      name: "Dr. E. Lindqvist",
      role: "Chief Medical Information Officer",
      company: "Nordic Health Cloud",
    },
    faqs: [
      { q: "What problem did VisionGuru Labs solve?", a: "Manual, fragmented patient triage across 40 clinics running three different record systems." },
      { q: "How long did the project take?", a: "22 weeks from discovery to full network rollout, with the first clinics live from week 12." },
      { q: "What technologies were used?", a: "React and TypeScript on the front end, Node.js and PostgreSQL with a FHIR record layer on the back end, LLM orchestration for triage, all hosted on Azure." },
      { q: "How is clinical safety handled with AI triage?", a: "The model proposes an urgency band with its reasoning; a clinician confirms or overrides every decision, and each action is logged for audit." },
      { q: "Can a similar solution be built for another healthcare provider?", a: "Yes — the intake, identity, and triage layers are designed to be re-pointed at different record systems." },
    ],
    seo: {
      title: "Nordic Health Cloud | AI Healthcare Platform | VisionGuru Labs",
      description:
        "How VisionGuru Labs built an AI-powered patient intake platform that cut triage time by 68% and saved 1,200 clinician hours a week across 40 clinics.",
    },
  },
  {
    slug: "harbor-bank-fraud",
    client: "Harbor Bank",
    title: "Real-Time Fraud Detection at Card-Swipe Speed",
    industry: "BFSI",
    services: ["AI & ML", "Custom Software", "Automation"],
    serviceLinks: ["ai-consulting", "custom-software", "transformation"],
    technologies: ["Python", "Kafka", "Feature Store", "GraphQL", "React", "PostgreSQL", "AWS"],
    summary: "Real-time machine learning fraud scoring with human-in-the-loop review tooling for a retail bank.",
    duration: "18 weeks",
    team: "7 — 2 ML engineers, 3 engineers, 1 designer, 1 delivery lead",
    primaryOutcome: "54% lower fraud losses at 42ms decision latency",
    heroImage: {
      src: harborHero,
      alt: "Real-time fraud detection dashboard showing transaction risk scores and a linked-account graph",
    },
    problem: "Card fraud losses were growing 22% YoY and rules-based systems couldn't keep up.",
    solution: "Deployed a real-time ML scoring pipeline with human-in-the-loop review tooling.",
    stack: ["Python", "Kafka", "Feature Store", "GraphQL"],
    metrics: [
      { label: "Fraud loss", value: "-54%" },
      { label: "False positives", value: "-71%" },
      { label: "Decision latency", value: "42ms" },
    ],
    challenge: {
      context: "Harbor Bank issues cards to roughly two million retail customers and processes tens of millions of transactions a month.",
      problem: "Fraud controls ran on a hand-maintained rules engine that analysts patched after each new attack pattern appeared.",
      problemPoints: [
        "Rules were reactive — new patterns were caught only after losses",
        "False positives blocked legitimate customers at the till",
        "Analysts worked from spreadsheets exported nightly",
        "No feature reuse between offline analysis and live scoring",
      ],
      whyItMattered: "Losses were compounding 22% year on year while false declines eroded customer trust and drove call-centre volume.",
    },
    objectives: [
      "Score every transaction in under 100ms",
      "Materially reduce fraud losses without raising false declines",
      "Give analysts a review queue with case context",
      "Make model features consistent between training and serving",
      "Ship model updates without redeploying the payment path",
    ],
    approach: baseApproach,
    solutionSections: [
      {
        title: "Streaming Scoring Pipeline",
        body: "Transactions flow through an event stream into a scoring service backed by a shared feature store, so the values used in training are exactly the values used at decision time.",
        bullets: ["Sub-100ms budget enforced end to end", "Shared offline/online feature definitions", "Shadow mode before any live enforcement"],
      },
      {
        title: "Analyst Review Console",
        body: "A purpose-built console shows each flagged case with the signals that triggered it, related accounts, and one-click actions — replacing nightly spreadsheet exports.",
        bullets: ["Case context and linked-account graph", "Decision capture that feeds retraining", "Full audit trail per action"],
      },
      {
        title: "Model Lifecycle Automation",
        body: "Retraining, evaluation, and promotion run as an automated pipeline with challenger models compared against the incumbent before any traffic shift.",
      },
    ],
    images: [
      { src: harborShot1, alt: "Fraud analyst review queue with risk scores and case status indicators", caption: "Analyst review console" },
      { src: harborShot2, alt: "Streaming architecture diagram for real-time transaction scoring", caption: "Scoring pipeline architecture" },
    ],
    architecture: [
      { label: "Frontend", items: ["React", "TypeScript", "GraphQL client"] },
      { label: "Backend", items: ["Python services", "GraphQL API"] },
      { label: "Database", items: ["PostgreSQL", "Feature store"] },
      { label: "AI", items: ["Gradient-boosted scoring models", "Challenger evaluation", "Drift monitoring"] },
      { label: "Cloud", items: ["AWS", "Kafka event streaming"] },
      { label: "Integrations", items: ["Card authorisation switch", "Core banking system", "Case management"] },
    ],
    results: [
      { value: 54, suffix: "%", label: "Reduction in fraud losses" },
      { value: 71, suffix: "%", label: "Fewer false positives" },
      { value: 42, suffix: "ms", label: "Median decision latency" },
    ],
    beforeAfter: {
      before: ["Hand-maintained rules engine", "Nightly spreadsheet exports", "Reactive pattern coverage", "High false-decline rate"],
      after: ["Real-time ML scoring", "Live analyst console", "Automated retraining loop", "Sharply lower false declines"],
    },
    businessImpact: [
      { title: "Cost savings", body: "Lower write-offs and fewer manual investigations per thousand transactions." },
      { title: "Customer satisfaction", body: "Fewer legitimate cards declined at point of sale, reducing call-centre contacts." },
      { title: "Risk reduction", body: "Auditable decisions and monitored model drift replaced undocumented rule changes." },
    ],
    faqs: [
      { q: "What problem did VisionGuru Labs solve?", a: "A reactive, rules-based fraud system that could not keep pace with new attack patterns." },
      { q: "How long did the project take?", a: "18 weeks, including a shadow-mode period before the model influenced live decisions." },
      { q: "What technologies were used?", a: "Python scoring services, Kafka streaming, a shared feature store, GraphQL, React, PostgreSQL, and AWS." },
      { q: "Can a similar solution be built for another financial institution?", a: "Yes — the pipeline is model-agnostic and adapts to different authorisation switches and core banking systems." },
    ],
    seo: {
      title: "Harbor Bank | Real-Time Fraud Detection | VisionGuru Labs",
      description:
        "How VisionGuru Labs replaced a rules engine with real-time ML fraud scoring, cutting fraud losses 54% and false positives 71% at 42ms latency.",
    },
  },
  {
    slug: "meridian-logistics",
    client: "Meridian Logistics",
    title: "Autonomous Dispatch for 8,000 Daily Shipments",
    industry: "Logistics",
    services: ["Custom Software", "AI & ML", "Automation"],
    serviceLinks: ["custom-software", "ai-consulting", "transformation"],
    technologies: ["Rust", "OR-Tools", "React", "PostgreSQL", "Node.js", "AWS"],
    summary: "Autonomous routing engine and dispatcher copilot layered on an existing transport management system.",
    duration: "26 weeks",
    team: "9 — 5 engineers, 1 optimisation specialist, 2 designers, 1 delivery lead",
    primaryOutcome: "3.4x dispatcher throughput without headcount growth",
    heroImage: {
      src: meridianHero,
      alt: "Logistics dispatch control tower dashboard with optimised routes on a live map and fleet analytics",
    },
    problem: "Manual dispatch across 8,000 daily shipments capped growth and burned operators out.",
    solution: "Built an autonomous routing engine and dispatcher copilot on top of their existing TMS.",
    stack: ["Rust services", "OR-Tools", "React", "PostgreSQL"],
    metrics: [
      { label: "On-time delivery", value: "+19%" },
      { label: "Miles per route", value: "-12%" },
      { label: "Dispatcher throughput", value: "3.4x" },
    ],
    challenge: {
      context: "Meridian moves roughly 8,000 shipments a day across a mixed owned and contracted fleet.",
      problem: "Dispatchers planned routes by hand each morning inside a legacy TMS that offered no optimisation.",
      problemPoints: [
        "Route quality depended on individual dispatcher experience",
        "Replanning after a disruption took hours",
        "No way to model cost versus service-level trade-offs",
        "Growth was capped by how many routes a person could plan",
      ],
      whyItMattered: "Every additional shipment required more dispatcher hours, so growth increased cost linearly and burned out the team.",
    },
    objectives: [
      "Automate first-pass route planning",
      "Cut replanning time after disruptions from hours to minutes",
      "Improve on-time delivery without adding fleet",
      "Keep dispatchers in control of final decisions",
      "Integrate without replacing the existing TMS",
    ],
    approach: baseApproach,
    solutionSections: [
      {
        title: "Optimisation Engine",
        body: "A constraint-solver service generates candidate route plans against real vehicle, driver-hours, and service-window constraints, returning a first-pass plan in seconds.",
        bullets: ["Vehicle, driver-hours, and time-window constraints", "Cost versus service-level scenarios", "Seconds-to-plan replanning after disruptions"],
      },
      {
        title: "Dispatcher Copilot",
        body: "Dispatchers review, adjust, and approve proposed plans. Every manual change is captured as feedback the engine accounts for on the next run.",
        bullets: ["Explainable route suggestions", "Drag-to-adjust with instant recosting", "Change capture feeding the model"],
      },
      {
        title: "TMS Integration",
        body: "The engine sits alongside the existing transport management system through an integration layer, so nothing had to be ripped out to go live.",
      },
    ],
    images: [
      { src: meridianShot1, alt: "Route optimisation map showing planned vehicle paths and stop sequences", caption: "Optimised route plan" },
      { src: meridianShot2, alt: "Dispatcher copilot interface with route suggestions and a shipment timeline", caption: "Dispatcher copilot" },
    ],
    architecture: [
      { label: "Frontend", items: ["React", "TypeScript", "Map rendering layer"] },
      { label: "Backend", items: ["Rust optimisation services", "Node.js integration layer"] },
      { label: "Database", items: ["PostgreSQL", "Geospatial indexes"] },
      { label: "AI", items: ["OR-Tools constraint solving", "Historical travel-time modelling"] },
      { label: "Cloud", items: ["AWS", "Autoscaling solver workers"] },
      { label: "Integrations", items: ["Legacy TMS", "Telematics feeds", "Carrier APIs"] },
    ],
    results: [
      { value: 19, prefix: "+", suffix: "%", label: "Improvement in on-time delivery" },
      { value: 12, suffix: "%", label: "Fewer miles per route" },
      { value: 3.4, suffix: "x", label: "Dispatcher throughput" },
    ],
    beforeAfter: {
      before: ["Hand-planned routes each morning", "Hours to replan a disruption", "Experience-dependent quality", "Growth capped by headcount"],
      after: ["Automated first-pass plans", "Minutes to replan", "Consistent, constraint-aware routing", "Volume growth without new dispatchers"],
    },
    businessImpact: [
      { title: "Operational efficiency", body: "The same dispatch team handles substantially more volume per shift." },
      { title: "Cost savings", body: "Shorter routes reduced fuel and contracted-carrier spend per shipment." },
      { title: "Employee productivity", body: "Dispatchers moved from data entry to exception handling and carrier relationships." },
    ],
    testimonial: {
      quote: "Our dispatchers stopped planning routes and started managing exceptions. That single shift unlocked a year of growth we couldn't staff for.",
      name: "M. Halvorsen",
      role: "VP Operations",
      company: "Meridian Logistics",
    },
    faqs: [
      { q: "What problem did VisionGuru Labs solve?", a: "Manual dispatch planning that capped shipment growth and made disruption recovery slow." },
      { q: "How long did the project take?", a: "26 weeks, with the copilot running in advisory mode from week 14." },
      { q: "What technologies were used?", a: "Rust optimisation services with OR-Tools, a Node.js integration layer, React front end, PostgreSQL, and AWS." },
      { q: "Did the existing TMS have to be replaced?", a: "No. The engine integrates alongside it, which is why the rollout carried no cutover risk." },
      { q: "Can a similar solution be built for another fleet operator?", a: "Yes — the constraint model is configured per operation rather than hard-coded." },
    ],
    seo: {
      title: "Meridian Logistics | Autonomous Dispatch Platform | VisionGuru Labs",
      description:
        "How VisionGuru Labs built an autonomous routing engine and dispatcher copilot that lifted on-time delivery 19% and tripled dispatcher throughput.",
    },
  },
];

// ---------------------------------------------------------------------------
// Additional case studies built from a compact factory. They reuse the three
// generated image sets as placeholder visuals — swap in dedicated imagery
// when available.
// ---------------------------------------------------------------------------

type QuickSpec = {
  slug: string;
  client: string;
  title: string;
  industry: string;
  services: string[];
  serviceLinks: string[];
  technologies: string[];
  summary: string;
  duration: string;
  primaryOutcome: string;
  metricSet: { label: string; value: string }[];
  resultSet: ResultMetric[];
  imageSet: "nordic" | "harbor" | "meridian";
};

const imageSets = {
  nordic: { hero: nordicHero, shots: [nordicShot1, nordicShot2] },
  harbor: { hero: harborHero, shots: [harborShot1, harborShot2] },
  meridian: { hero: meridianHero, shots: [meridianShot1, meridianShot2] },
};

function quick(spec: QuickSpec): CaseStudy {
  const set = imageSets[spec.imageSet];
  const [mainMetric, secondMetric, thirdMetric] = spec.metricSet;
  return {
    slug: spec.slug,
    client: spec.client,
    title: spec.title,
    industry: spec.industry,
    services: spec.services,
    serviceLinks: spec.serviceLinks,
    technologies: spec.technologies,
    summary: spec.summary,
    duration: spec.duration,
    team: "6 — product lead, 1 designer, 3 engineers, 1 QA",
    primaryOutcome: spec.primaryOutcome,
    heroImage: { src: set.hero, alt: `${spec.title} — product dashboard and analytics for ${spec.client}` },
    problem: `${spec.client} was held back by manual processes and disconnected systems.`,
    solution: `We designed and delivered a purpose-built platform that automated the core workflow end to end.`,
    stack: spec.technologies.slice(0, 4),
    metrics: spec.metricSet,
    challenge: {
      context: `${spec.client} operates in ${spec.industry.toLowerCase()}, where margins depend on speed, accuracy, and consistent execution across teams.`,
      problem:
        "Critical workflows ran on spreadsheets, email chains, and legacy tools that no longer scaled with the business.",
      problemPoints: [
        "Manual handoffs between teams caused delays and rework",
        "No single source of truth for operational data",
        "Reporting took days and arrived too late to act on",
        "Growth was capped by headcount rather than demand",
      ],
      whyItMattered:
        "Every delayed decision and duplicated task compounded into lost revenue, slower customer response, and teams spending their best hours on administration instead of outcomes.",
    },
    objectives: [
      "Automate the core workflow end to end",
      "Give every team one shared, real-time view of operations",
      "Cut reporting time from days to minutes",
      "Ship a platform that scales without proportional headcount growth",
    ],
    approach: baseApproach,
    solutionSections: [
      {
        title: "A Workflow Engine Built Around Real Operations",
        body: "We modelled the actual day-to-day process with the people who run it, then automated the handoffs, approvals, and data capture that previously lived in inboxes.",
        bullets: ["Configurable workflow stages and approvals", "Automated data capture at the source", "Full audit trail on every action"],
      },
      {
        title: "Live Dashboards Instead of Weekly Reports",
        body: "Operational metrics stream into role-based dashboards, so leadership sees the same numbers the floor sees — while there is still time to act on them.",
        bullets: ["Real-time KPIs per team and region", "Drill-down from summary to transaction", "Alerting on threshold breaches"],
        image: { src: set.shots[0], alt: `Live operations dashboard for ${spec.client}`, caption: "Real-time operations dashboard" },
      },
      {
        title: "Integrations, Not Rip-and-Replace",
        body: "The platform connects to the existing systems of record, reading and writing through documented APIs so nothing the business relies on was disrupted during rollout.",
        bullets: ["Bi-directional sync with legacy systems", "Zero-downtime phased migration", "API-first architecture for future tools"],
      },
    ],
    images: [
      { src: set.shots[0], alt: `${spec.client} platform interface showing workflow and analytics views`, caption: "Workflow and analytics" },
      { src: set.shots[1], alt: `${spec.client} reporting and management console`, caption: "Management console" },
    ],
    architecture: [
      { label: "Frontend", items: [spec.technologies[0] ?? "React", "TypeScript"] },
      { label: "Backend", items: [spec.technologies[1] ?? "Node.js", "REST APIs"] },
      { label: "Database", items: ["PostgreSQL", "Redis caching"] },
      { label: "Cloud", items: [spec.technologies[spec.technologies.length - 1] ?? "AWS", "CI/CD pipelines"] },
      { label: "Integrations", items: ["Legacy systems", "Third-party APIs", "Email & notifications"] },
    ],
    results: spec.resultSet,
    beforeAfter: {
      before: ["Spreadsheets and email-driven workflows", "Weekly manual reporting", "Decisions made on stale data", "Scaling meant hiring"],
      after: ["Automated, auditable workflows", "Live dashboards for every team", "Decisions made on current data", "Scaling through software"],
    },
    businessImpact: [
      { title: "Operational efficiency", body: "The same team now handles materially higher volume with fewer errors." },
      { title: "Faster decisions", body: "Leadership acts on same-day data instead of week-old reports." },
      { title: "Scalable growth", body: "Volume grows without a matching growth in operational headcount." },
    ],
    testimonial: {
      quote: "VisionGuru Labs didn't just build software — they rebuilt how we operate. The platform paid for itself inside the first year.",
      name: "Programme Sponsor",
      role: "Chief Operating Officer",
      company: spec.client,
    },
    faqs: [
      { q: `What problem did VisionGuru Labs solve for ${spec.client}?`, a: spec.summary },
      { q: "How long did the project take?", a: `${spec.duration}, with the first working release in production well before final handover.` },
      { q: "What technologies were used?", a: spec.technologies.join(", ") + "." },
      { q: "Did existing systems have to be replaced?", a: "No. The platform integrates with existing systems of record through APIs, so rollout carried no cutover risk." },
    ],
    seo: {
      title: `${spec.client} | ${spec.title} | VisionGuru Labs`,
      description: `${spec.summary} ${spec.primaryOutcome}. Read the full case study.`,
    },
  };
}

const additionalCaseStudies: CaseStudy[] = [
  quick({
    slug: "atlas-retail-commerce",
    client: "Atlas Retail Group",
    title: "Unifying 120 Stores Into One Commerce Platform",
    industry: "Retail",
    services: ["Custom Software", "Digital Transformation"],
    serviceLinks: ["custom-software", "transformation"],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Kafka", "AWS"],
    summary: "Unified inventory, orders, and fulfilment across 120 retail stores and a growing e-commerce channel.",
    duration: "28 weeks",
    primaryOutcome: "99.4% inventory accuracy across all channels",
    metricSet: [
      { label: "Inventory accuracy", value: "99.4%" },
      { label: "Order fulfilment time", value: "-41%" },
      { label: "Online revenue growth", value: "+62%" },
    ],
    resultSet: [
      { value: 99.4, suffix: "%", label: "Inventory accuracy across channels" },
      { value: 41, prefix: "-", suffix: "%", label: "Order fulfilment time" },
      { value: 62, prefix: "+", suffix: "%", label: "Online revenue growth" },
    ],
    imageSet: "nordic",
  }),
  quick({
    slug: "lumen-energy-grid",
    client: "Lumen Energy",
    title: "Predictive Maintenance for a Regional Power Grid",
    industry: "Energy",
    services: ["AI & ML", "Custom Software"],
    serviceLinks: ["ai-consulting", "custom-software"],
    technologies: ["Python", "FastAPI", "TimescaleDB", "React", "Azure IoT"],
    summary: "Sensor-driven predictive maintenance platform that flags grid equipment failures weeks before they happen.",
    duration: "24 weeks",
    primaryOutcome: "57% reduction in unplanned outages",
    metricSet: [
      { label: "Unplanned outages", value: "-57%" },
      { label: "Maintenance cost", value: "-23%" },
      { label: "Assets monitored", value: "14,000+" },
    ],
    resultSet: [
      { value: 57, prefix: "-", suffix: "%", label: "Unplanned outages" },
      { value: 23, prefix: "-", suffix: "%", label: "Maintenance spend" },
      { value: 14, suffix: "k", label: "Assets under monitoring" },
    ],
    imageSet: "harbor",
  }),
  quick({
    slug: "campus-bridge-education",
    client: "CampusBridge",
    title: "A Student Success Platform Used by 60,000 Learners",
    industry: "Education",
    services: ["SaaS Product Development", "Web Development"],
    serviceLinks: ["saas", "web"],
    technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "GCP"],
    summary: "Multi-tenant SaaS that helps universities track, support, and retain at-risk students.",
    duration: "20 weeks",
    primaryOutcome: "18% improvement in first-year retention",
    metricSet: [
      { label: "First-year retention", value: "+18%" },
      { label: "Active learners", value: "60,000" },
      { label: "Advisor hours saved / week", value: "900" },
    ],
    resultSet: [
      { value: 18, prefix: "+", suffix: "%", label: "First-year retention" },
      { value: 60, suffix: "k", label: "Active learners on platform" },
      { value: 900, label: "Advisor hours saved weekly" },
    ],
    imageSet: "meridian",
  }),
  quick({
    slug: "fleet-ops-telematics",
    client: "FleetOps Mobility",
    title: "Real-Time Telematics Platform for a 2,000-Vehicle Fleet",
    industry: "Logistics",
    services: ["Custom Software", "AI & ML"],
    serviceLinks: ["custom-software", "ai-consulting"],
    technologies: ["React", "Go", "ClickHouse", "MQTT", "AWS"],
    summary: "Streaming telematics platform processing 40M events a day for fleet safety and utilisation.",
    duration: "26 weeks",
    primaryOutcome: "31% fewer safety incidents in six months",
    metricSet: [
      { label: "Safety incidents", value: "-31%" },
      { label: "Events processed / day", value: "40M" },
      { label: "Vehicle utilisation", value: "+22%" },
    ],
    resultSet: [
      { value: 31, prefix: "-", suffix: "%", label: "Safety incidents" },
      { value: 40, suffix: "M", label: "Events processed daily" },
      { value: 22, prefix: "+", suffix: "%", label: "Vehicle utilisation" },
    ],
    imageSet: "harbor",
  }),
  quick({
    slug: "medicore-patient-app",
    client: "MediCore Health",
    title: "A Patient Companion App With 4.8-Star Adoption",
    industry: "Healthcare",
    services: ["Mobile App Development", "Custom Software"],
    serviceLinks: ["mobile", "custom-software"],
    technologies: ["Flutter", "Dart", "Node.js", "FHIR", "Firebase"],
    summary: "Cross-platform patient app for appointments, prescriptions, and remote monitoring across 25 hospitals.",
    duration: "18 weeks",
    primaryOutcome: "4.8-star rating with 120k downloads in year one",
    metricSet: [
      { label: "App store rating", value: "4.8★" },
      { label: "Downloads in year one", value: "120k" },
      { label: "Missed appointments", value: "-44%" },
    ],
    resultSet: [
      { value: 120, suffix: "k", label: "Downloads in the first year" },
      { value: 44, prefix: "-", suffix: "%", label: "Missed appointments" },
      { value: 4.8, suffix: "★", label: "Average app store rating" },
    ],
    imageSet: "nordic",
  }),
  quick({
    slug: "sterling-insurance-claims",
    client: "Sterling Insurance",
    title: "Straight-Through Claims Processing With AI Document Intake",
    industry: "Fintech",
    services: ["AI & ML", "Digital Transformation"],
    serviceLinks: ["ai-consulting", "transformation"],
    technologies: ["Python", "React", "LangChain", "PostgreSQL", "Azure"],
    summary: "AI document intake and triage that settles simple claims in hours instead of weeks.",
    duration: "22 weeks",
    primaryOutcome: "71% of claims now settle without manual touch",
    metricSet: [
      { label: "Straight-through claims", value: "71%" },
      { label: "Average settlement time", value: "-83%" },
      { label: "Customer satisfaction", value: "+29" },
    ],
    resultSet: [
      { value: 71, suffix: "%", label: "Claims settled straight-through" },
      { value: 83, prefix: "-", suffix: "%", label: "Average settlement time" },
      { value: 29, prefix: "+", label: "Customer satisfaction (NPS)" },
    ],
    imageSet: "harbor",
  }),
  quick({
    slug: "buildtrack-construction",
    client: "BuildTrack Construction",
    title: "Site Progress Tracking for 40 Concurrent Projects",
    industry: "Manufacturing",
    services: ["Web Development", "Custom Software"],
    serviceLinks: ["web", "custom-software"],
    technologies: ["React", "TypeScript", "Node.js", "PostGIS", "AWS"],
    summary: "Photo-verified progress tracking and subcontractor coordination across 40 active construction sites.",
    duration: "24 weeks",
    primaryOutcome: "9 fewer reporting days per project per month",
    metricSet: [
      { label: "Reporting effort", value: "-9 days/mo" },
      { label: "Concurrent projects", value: "40" },
      { label: "Dispute resolution time", value: "-61%" },
    ],
    resultSet: [
      { value: 9, suffix: " days", label: "Reporting time saved monthly per project" },
      { value: 61, prefix: "-", suffix: "%", label: "Dispute resolution time" },
      { value: 40, label: "Concurrent projects tracked" },
    ],
    imageSet: "meridian",
  }),
  quick({
    slug: "govserv-citizen-portal",
    client: "GovServ Digital",
    title: "A Citizen Services Portal Handling 1.2M Requests a Year",
    industry: "Government",
    services: ["Web Development", "Digital Transformation"],
    serviceLinks: ["web", "transformation"],
    technologies: ["React", "Java Spring", "PostgreSQL", "Kubernetes", "Gov Cloud"],
    summary: "Accessible, multilingual citizen portal digitising 34 permit and licence workflows end to end.",
    duration: "30 weeks",
    primaryOutcome: "1.2M requests processed in the first year",
    metricSet: [
      { label: "Requests in year one", value: "1.2M" },
      { label: "Digitised workflows", value: "34" },
      { label: "Average processing time", value: "-58%" },
    ],
    resultSet: [
      { value: 1.2, suffix: "M", label: "Requests processed in year one" },
      { value: 58, prefix: "-", suffix: "%", label: "Average processing time" },
      { value: 34, label: "Workflows fully digitised" },
    ],
    imageSet: "nordic",
  }),
  quick({
    slug: "propnest-real-estate",
    client: "PropNest Realty",
    title: "An AI Matching Engine for Property Search",
    industry: "Real Estate",
    services: ["AI & ML", "SaaS Product Development"],
    serviceLinks: ["ai-consulting", "saas"],
    technologies: ["Next.js", "Python", "pgvector", "OpenSearch", "AWS"],
    summary: "Semantic property matching that connects buyers to listings by intent, not just filters.",
    duration: "16 weeks",
    primaryOutcome: "3.1x more qualified enquiries per listing",
    metricSet: [
      { label: "Qualified enquiries", value: "3.1x" },
      { label: "Time to first match", value: "-74%" },
      { label: "Agent adoption", value: "92%" },
    ],
    resultSet: [
      { value: 3.1, suffix: "x", label: "Qualified enquiries per listing" },
      { value: 74, prefix: "-", suffix: "%", label: "Time to first match" },
      { value: 92, suffix: "%", label: "Agent adoption rate" },
    ],
    imageSet: "meridian",
  }),
];

export const allCaseStudies: CaseStudy[] = [...caseStudies, ...additionalCaseStudies];

export const CASE_STUDY_PAGE_SIZE = 6;

export const caseStudyIndustries = Array.from(new Set(allCaseStudies.map((c) => c.industry))).sort();
export const caseStudyServices = Array.from(new Set(allCaseStudies.flatMap((c) => c.services))).sort();

export function getCaseStudyBySlug(slug: string) {
  return allCaseStudies.find((c) => c.slug === slug);
}

export function filterCaseStudies({ industry, service }: { industry?: string; service?: string }) {
  return allCaseStudies.filter(
    (c) =>
      (!industry || industry === "All" || c.industry === industry) &&
      (!service || service === "All" || c.services.includes(service)),
  );
}

export function getRelatedCaseStudies(slug: string, limit = 3) {
  const current = getCaseStudyBySlug(slug);
  if (!current) return [];
  const others = caseStudies.filter((c) => c.slug !== slug);
  const scored = others.map((c) => {
    let score = 0;
    if (c.industry === current.industry) score += 3;
    score += c.services.filter((s) => current.services.includes(s)).length * 2;
    score += c.technologies.filter((t) => current.technologies.includes(t)).length;
    return { c, score };
  });
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((s) => s.c);
}
