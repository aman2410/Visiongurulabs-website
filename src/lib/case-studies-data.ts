import nordicHero from "@/assets/case-studies/nordic-hero.jpg";
import nordicShot1 from "@/assets/case-studies/nordic-shot-1.jpg";
import nordicShot2 from "@/assets/case-studies/nordic-shot-2.jpg";
import harborHero from "@/assets/case-studies/harbor-hero.jpg";
import harborShot1 from "@/assets/case-studies/harbor-shot-1.jpg";
import harborShot2 from "@/assets/case-studies/harbor-shot-2.jpg";
import meridianHero from "@/assets/case-studies/meridian-hero.jpg";
import meridianShot1 from "@/assets/case-studies/meridian-shot-1.jpg";
import meridianShot2 from "@/assets/case-studies/meridian-shot-2.jpg";

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
