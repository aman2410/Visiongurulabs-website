import { services, type Service } from "./site-data";

export type SubService = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export type ServiceDetail = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  tagline: string;
  intro: string;
  overview: string[];
  outcomes: { label: string; value: string }[];
  capabilities: string[];
  stack: string[];
  subServices: SubService[];
  faqs: { q: string; a: string }[];
  related: string[];
  gradient: string;
};

const gradients = [
  "from-brand-navy to-brand-sky",
  "from-brand-sky to-brand-navy",
  "from-brand-navy via-brand-sky to-brand-navy",
];

function sub(slug: string, title: string, description: string, bullets: string[], faqs: { q: string; a: string }[]): SubService {
  return { slug, title, description, bullets, faqs };
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "custom-software",
    seoTitle: "Custom Software Development Services",
    seoDescription:
      "Custom software development for enterprise workflows, internal platforms, and customer-facing products — architected, built, and supported by senior engineers.",
    keywords: ["custom software development", "enterprise software", "bespoke software company", "software product engineering"],
    tagline: "Software shaped around your operations, not a template",
    intro:
      "Custom software development is the design and engineering of systems built specifically for one organisation's workflows, data model, and compliance needs — instead of bending the business to fit off-the-shelf tooling.",
    overview: [
      "We start with the operational map: who does what, where the data lives, and which handoffs leak time or revenue. Only then do we design the system.",
      "Delivery runs in two-week increments with a working build at the end of each. You review real software, not slide decks, and change direction while it is still cheap.",
    ],
    outcomes: [
      { label: "Faster release cadence", value: "4x" },
      { label: "Manual hours removed", value: "60%" },
      { label: "Production defect rate", value: "-72%" },
    ],
    capabilities: [
      "Domain-driven architecture and system design",
      "Legacy modernisation and phased migration",
      "API platforms, integrations, and event pipelines",
      "Security reviews, audit trails, and role-based access",
      "Automated testing, CI/CD, and observability from day one",
    ],
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Go", "AWS", "Kubernetes"],
    subServices: [
      sub("enterprise-application-development", "Enterprise Application Development",
        "Line-of-business platforms that replace spreadsheets, shadow IT, and brittle legacy tools.",
        ["Workflow and approvals engines", "Role-based access and audit logging", "Reporting and export pipelines", "SSO and directory integration"],
        [{ q: "How long does an enterprise build take?", a: "A production-ready first release typically lands in 12 to 16 weeks, with usable increments from week four." }]),
      sub("legacy-modernisation", "Legacy System Modernisation",
        "Strangle-pattern migration off aging stacks with zero big-bang cutover risk.",
        ["Codebase and data audit", "Incremental strangler-fig migration", "Data migration and reconciliation", "Parallel-run validation"],
        [{ q: "Do we have to rewrite everything at once?", a: "No. We route traffic module by module so the old and new systems run side by side until the last route is migrated." }]),
      sub("api-and-integration-development", "API & Integration Development",
        "Clean, documented APIs and integrations that make your systems talk without glue-code sprawl.",
        ["REST and GraphQL API design", "Third-party and ERP integrations", "Webhook and event architecture", "Rate limiting, versioning, and docs"],
        [{ q: "Can you integrate with our ERP?", a: "Yes — we regularly integrate SAP, Dynamics, NetSuite, and bespoke internal systems through APIs, files, or message queues." }]),
    ],
    faqs: [
      { q: "What does custom software development cost?", a: "Most engagements start between a focused discovery sprint and a full build. Scope, integrations, and compliance requirements drive the range — we price after a discovery, not before." },
      { q: "Who owns the code?", a: "You do. Full IP transfer, repositories in your organisation, and documentation handed over at every milestone." },
      { q: "Can you work with our in-house team?", a: "Yes. We frequently pair with internal engineers, and we can hand over completely once the platform is stable." },
    ],
    related: ["saas", "web", "support"],
    gradient: gradients[0],
  },
  {
    slug: "ai-consulting",
    seoTitle: "AI Consulting & Solutions Development",
    seoDescription:
      "AI consulting, LLM application development, and machine learning deployment that moves real business metrics — from use-case selection to production monitoring.",
    keywords: ["ai consulting services", "llm application development", "machine learning consulting", "generative ai development"],
    tagline: "AI that survives contact with production",
    intro:
      "AI consulting is the work of choosing which problems are genuinely worth solving with machine learning, then engineering those solutions to run reliably, safely, and affordably in production.",
    overview: [
      "Most AI projects fail on selection, not modelling. We score candidate use cases on data readiness, measurable value, and failure tolerance before committing a sprint.",
      "Everything we ship carries evaluation harnesses, cost telemetry, and human-in-the-loop fallbacks so quality is measured continuously rather than assumed.",
    ],
    outcomes: [
      { label: "Support deflection", value: "48%" },
      { label: "Inference cost cut", value: "-65%" },
      { label: "Time-to-pilot", value: "6 wks" },
    ],
    capabilities: [
      "AI opportunity assessment and roadmap",
      "RAG architecture over private knowledge bases",
      "Model evaluation, benchmarking, and guardrails",
      "Fine-tuning and prompt engineering pipelines",
      "MLOps, monitoring, and cost governance",
    ],
    stack: ["Python", "LangGraph", "pgvector", "OpenAI", "Anthropic", "Hugging Face", "Modal"],
    subServices: [
      sub("generative-ai-development", "Generative AI Development",
        "LLM-powered assistants, copilots, and content systems grounded in your own data.",
        ["Retrieval-augmented generation", "Tool-calling and agent workflows", "Evaluation and hallucination guardrails", "Streaming UX and citation surfaces"],
        [{ q: "How do you stop hallucinations?", a: "Retrieval grounding, strict tool contracts, refusal behaviour on low-confidence retrieval, and an automated eval suite run on every prompt change." }]),
      sub("machine-learning-engineering", "Machine Learning Engineering",
        "Forecasting, classification, and recommendation models taken from notebook to production service.",
        ["Feature pipelines and data contracts", "Model training and validation", "Drift detection and retraining", "Batch and real-time serving"],
        [{ q: "How much data do we need?", a: "It depends on the task; for many tabular problems a few thousand well-labelled rows outperform a large but noisy dataset." }]),
      sub("ai-strategy-consulting", "AI Strategy & Readiness",
        "Board-level clarity on where AI creates advantage — and where it burns budget.",
        ["Use-case scoring workshops", "Data readiness audit", "Build-vs-buy analysis", "Governance and risk framework"],
        [{ q: "Is this just a workshop?", a: "It ends with a prioritised roadmap, cost model, and an executable pilot brief your team can start immediately." }]),
    ],
    faqs: [
      { q: "Which AI models do you use?", a: "We stay model-agnostic and route per task, benchmarking hosted and open-weight options on your data before committing." },
      { q: "Will our data be used to train public models?", a: "No. We deploy with zero-retention configurations or self-hosted models when data sensitivity requires it." },
      { q: "How quickly can we see value?", a: "A scoped pilot with measurable results typically runs six to eight weeks from kickoff." },
    ],
    related: ["custom-software", "saas", "transformation"],
    gradient: gradients[1],
  },
  {
    slug: "saas",
    seoTitle: "SaaS Product Development Services",
    seoDescription:
      "End-to-end SaaS product development — multi-tenant architecture, billing, onboarding, and analytics engineered for scale from the first release.",
    keywords: ["saas product development", "multi-tenant architecture", "saas mvp development", "b2b saas engineering"],
    tagline: "From product thesis to paying customers",
    intro:
      "SaaS product development covers the architecture, UX, engineering, and commercial plumbing required to run software as a subscription business — multi-tenancy, billing, onboarding, and usage analytics included.",
    overview: [
      "We design the tenancy and billing model first, because both are painful to retrofit once real customers are on the platform.",
      "The first release targets a narrow, high-intent segment; instrumentation tells you what to build next instead of the loudest stakeholder.",
    ],
    outcomes: [
      { label: "Time to first paying user", value: "14 wks" },
      { label: "Trial-to-paid lift", value: "+37%" },
      { label: "Infra cost per tenant", value: "-41%" },
    ],
    capabilities: [
      "Multi-tenant data isolation and RLS",
      "Subscription billing, metering, and dunning",
      "Self-serve onboarding and activation flows",
      "Admin consoles and customer support tooling",
      "Product analytics and experimentation",
    ],
    stack: ["React", "TypeScript", "PostgreSQL", "Stripe", "Redis", "Terraform"],
    subServices: [
      sub("saas-mvp-development", "SaaS MVP Development",
        "A commercially credible first version narrow enough to ship and sharp enough to sell.",
        ["Scope triage against revenue", "Core workflow build", "Billing and auth foundations", "Launch instrumentation"],
        [{ q: "What belongs in an MVP?", a: "Only the workflow a customer will pay for, plus the auth, billing, and support tooling required to charge them safely." }]),
      sub("multi-tenant-architecture", "Multi-Tenant Architecture",
        "Isolation, scaling, and per-tenant configurability designed before the first enterprise deal.",
        ["Row-level or schema isolation", "Per-tenant configuration and theming", "Noisy-neighbour protection", "Enterprise SSO and provisioning"],
        [{ q: "Row-level or database-per-tenant?", a: "Row-level security for most B2B products; dedicated databases only when a regulatory or scale requirement demands it." }]),
      sub("subscription-billing-integration", "Subscription & Billing Engineering",
        "Plans, usage metering, proration, and revenue reporting that finance actually trusts.",
        ["Plan and entitlement modelling", "Usage metering pipelines", "Invoicing, tax, and dunning", "Revenue and churn reporting"],
        [{ q: "Can you support usage-based pricing?", a: "Yes — metered events, aggregation windows, and entitlement enforcement are standard parts of the build." }]),
    ],
    faqs: [
      { q: "Do you help after launch?", a: "Yes. Most SaaS clients continue with an iteration retainer covering feature delivery, reliability, and cost tuning." },
      { q: "Can you take over an existing SaaS codebase?", a: "Frequently. We begin with an architecture and risk audit, then stabilise before adding features." },
      { q: "How do you handle compliance?", a: "We build audit logging, data residency, and access controls into the platform so SOC 2 or ISO evidence is a byproduct, not a scramble." },
    ],
    related: ["custom-software", "mobile", "ai-consulting"],
    gradient: gradients[2],
  },
  {
    slug: "mobile",
    seoTitle: "Mobile App Development Services",
    seoDescription:
      "Android, iOS, and cross-platform mobile app development built for performance, offline resilience, and first-attempt app store approval.",
    keywords: ["mobile app development", "android app development", "ios app development", "react native development"],
    tagline: "Apps that stay fast on a three-year-old device",
    intro:
      "Mobile app development is the design, engineering, and release management of software for Android and iOS — including offline behaviour, device permissions, store compliance, and post-launch update cadence.",
    overview: [
      "We choose native or cross-platform per product, not per fashion. Heavy device integration goes native; shared business logic goes cross-platform.",
      "Offline-first data sync, crash telemetry, and staged rollouts are part of the first release, not a follow-up project.",
    ],
    outcomes: [
      { label: "Cold start time", value: "<1.2s" },
      { label: "Crash-free sessions", value: "99.8%" },
      { label: "First-submission approval", value: "100%" },
    ],
    capabilities: [
      "Native Android (Kotlin) and iOS (Swift) engineering",
      "Cross-platform delivery with React Native",
      "Offline-first sync and conflict resolution",
      "Push notifications and deep linking",
      "Store submission, phased rollout, and release ops",
    ],
    stack: ["Kotlin", "Swift", "React Native", "Firebase", "SQLite", "Fastlane"],
    subServices: [
      sub("android-app-development", "Android App Development",
        "Kotlin-first Android apps tuned for the fragmented device and OS landscape your users actually carry.",
        ["Jetpack Compose interfaces", "Background work and WorkManager", "Play Store compliance and rollout", "Low-end device performance tuning"],
        [{ q: "Which Android versions do you support?", a: "We typically target the current API level with backwards support to Android 9, covering the overwhelming majority of active devices." }]),
      sub("ios-app-development", "iOS App Development",
        "Swift and SwiftUI apps that meet Apple's review bar the first time.",
        ["SwiftUI and UIKit interfaces", "App Store review readiness", "Privacy manifest and ATT handling", "TestFlight beta programmes"],
        [{ q: "How long does App Store review take?", a: "Usually 24 to 48 hours. We pre-audit privacy disclosures and metadata so rejections are rare." }]),
      sub("cross-platform-app-development", "Cross-Platform App Development",
        "One codebase, two stores — without the sluggish, obviously-hybrid feel.",
        ["React Native architecture", "Native module bridging", "Shared design system", "Over-the-air update pipeline"],
        [{ q: "Is cross-platform always cheaper?", a: "Usually, but not when the app depends heavily on device hardware or platform-specific UX. We assess before recommending." }]),
    ],
    faqs: [
      { q: "Do you publish to the stores for us?", a: "Yes — we manage signing, store listings, phased rollout, and the review process under your developer accounts." },
      { q: "Can you take over an existing app?", a: "Yes, starting with a code and release-pipeline audit before shipping changes." },
      { q: "Do you build the backend too?", a: "We do. Most mobile engagements include the API and data layer the app depends on." },
    ],
    related: ["saas", "custom-software", "support"],
    gradient: gradients[0],
  },
  {
    slug: "web",
    seoTitle: "Website & Web Platform Development",
    seoDescription:
      "High-performance website development — marketing sites, portals, and web platforms engineered for Core Web Vitals, accessibility, and organic search.",
    keywords: ["website development company", "web platform development", "core web vitals optimisation", "headless cms website"],
    tagline: "Fast, findable, and built to convert",
    intro:
      "Website development here means engineered web properties — server-rendered, accessible, measurable, and structured so search engines and answer engines can both read and cite them.",
    overview: [
      "Every page ships with semantic markup, structured data, and a metadata contract, because retrofitting SEO into a finished site is always more expensive.",
      "Performance budgets are enforced in CI. If a change pushes Core Web Vitals past threshold, the build tells us before users do.",
    ],
    outcomes: [
      { label: "Lighthouse performance", value: "98+" },
      { label: "Organic sessions", value: "+120%" },
      { label: "Largest Contentful Paint", value: "<1.5s" },
    ],
    capabilities: [
      "Server-side rendering and static generation",
      "Technical SEO, schema.org, and answer-engine optimisation",
      "Headless CMS integration and editor workflows",
      "WCAG 2.2 AA accessibility",
      "Analytics, CRO, and experimentation setup",
    ],
    stack: ["React", "TanStack Start", "Tailwind CSS", "Headless CMS", "Cloudflare", "Vercel"],
    subServices: [
      sub("corporate-website-development", "Corporate Website Development",
        "Brand-grade marketing sites with editorial control and no performance debt.",
        ["Design system and component library", "CMS-driven page building", "Multi-language and regional variants", "Lead capture and CRM handoff"],
        [{ q: "Can our marketing team edit pages?", a: "Yes — content models are built for non-technical editors with live preview before publish." }]),
      sub("ecommerce-development", "E-commerce Development",
        "Storefronts and checkouts optimised for conversion rate, not just catalogue size.",
        ["Headless storefront architecture", "Checkout and payment integration", "Catalogue search and merchandising", "Performance and conversion tuning"],
        [{ q: "Which platforms do you work with?", a: "Headless Shopify and custom commerce stacks, chosen against your catalogue size and fulfilment complexity." }]),
      sub("seo-and-performance-optimisation", "SEO & Performance Optimisation",
        "Technical audits and remediation for sites that rank below their content quality.",
        ["Crawl, index, and log-file audit", "Structured data implementation", "Core Web Vitals remediation", "Internal linking architecture"],
        [{ q: "How fast do rankings improve?", a: "Technical fixes often show within weeks; content-driven gains typically compound over one to two quarters." }]),
    ],
    faqs: [
      { q: "Do you handle design as well as build?", a: "Yes, we run design and engineering together so what gets designed is what actually ships." },
      { q: "Will the site be accessible?", a: "We build to WCAG 2.2 AA and test with keyboard and screen-reader passes before launch." },
      { q: "Can you migrate our existing site?", a: "Yes, including redirect mapping so existing rankings and inbound links are preserved." },
    ],
    related: ["custom-software", "saas", "transformation"],
    gradient: gradients[1],
  },
  {
    slug: "staff-aug",
    seoTitle: "Staff Augmentation & Dedicated Engineering Teams",
    seoDescription:
      "Senior engineers embedded directly into your team — vetted, contributing within days, and accountable to your delivery process.",
    keywords: ["staff augmentation services", "dedicated development team", "hire senior developers", "offshore engineering team"],
    tagline: "Senior capacity without the hiring lag",
    intro:
      "Staff augmentation places vetted senior engineers inside your existing team and process — they attend your standups, work in your repositories, and are accountable to your delivery goals.",
    overview: [
      "Every engineer we place has shipped production systems at comparable scale. No junior substitutions after the interview.",
      "We size the engagement to a delivery outcome and review fit at 30 days, so a mismatch never becomes a quarter-long problem.",
    ],
    outcomes: [
      { label: "Time to first commit", value: "5 days" },
      { label: "Engagement retention", value: "94%" },
      { label: "Average engineer tenure", value: "9+ yrs" },
    ],
    capabilities: [
      "Individual senior specialists or full pods",
      "Overlapping time-zone coverage",
      "Your tooling, your process, your repos",
      "Knowledge transfer and documentation built in",
      "Flexible ramp-up and ramp-down",
    ],
    stack: ["React", "Node.js", "Python", "Go", "AWS", "Azure"],
    subServices: [
      sub("dedicated-development-teams", "Dedicated Development Teams",
        "A cross-functional pod owning a roadmap area end to end.",
        ["Engineers, QA, and delivery lead", "Shared sprint rituals", "Outcome-based reporting", "Scale up or down quarterly"],
        [{ q: "Who manages the team?", a: "You set priorities; we supply a delivery lead who handles day-to-day management and reporting." }]),
      sub("specialist-engineers-on-demand", "Specialist Engineers On-Demand",
        "Targeted senior expertise for a bottleneck you cannot hire for quickly.",
        ["Architecture and platform specialists", "Data and ML engineers", "DevOps and SRE", "Security engineers"],
        [{ q: "What is the minimum engagement?", a: "One month, though most specialist placements run three to six." }]),
      sub("team-scaling-and-transition", "Team Scaling & Transition",
        "Structured scale-up with a documented path to full in-house ownership.",
        ["Onboarding and runbook creation", "Pairing and knowledge transfer", "Hiring support for permanent backfill", "Clean handover checkpoints"],
        [{ q: "Can we hire your engineers permanently?", a: "Yes — conversion terms are agreed upfront rather than negotiated under pressure." }]),
    ],
    faqs: [
      { q: "How are engineers vetted?", a: "Multi-stage screening: system design, hands-on code review, and a reference check on recent production work." },
      { q: "Which time zones do you cover?", a: "We guarantee at least four hours of daily overlap with your core working hours." },
      { q: "What if an engineer is not the right fit?", a: "We replace at our cost within the first 30 days." },
    ],
    related: ["it-manpower", "recruitment", "custom-software"],
    gradient: gradients[2],
  },
  {
    slug: "it-manpower",
    seoTitle: "IT Manpower & Technology Resourcing Services",
    seoDescription:
      "On-demand IT manpower across engineering, data, QA, and operations — contract, contract-to-hire, and managed capacity with compliance handled.",
    keywords: ["it manpower services", "it staffing company", "contract it resources", "technology resourcing"],
    tagline: "Vetted technology talent, available when the plan changes",
    intro:
      "IT manpower services supply contracted technology professionals — engineers, analysts, QA, and operations staff — with sourcing, compliance, and payroll administration handled on your behalf.",
    overview: [
      "We maintain a bench across common enterprise stacks so typical roles are shortlisted within days rather than weeks.",
      "Contracting, statutory compliance, and payroll sit with us; you get capacity without expanding headcount administration.",
    ],
    outcomes: [
      { label: "Average shortlist time", value: "72 hrs" },
      { label: "Placement success", value: "91%" },
      { label: "Contract renewal rate", value: "88%" },
    ],
    capabilities: [
      "Contract and contract-to-hire resourcing",
      "Bulk and project-based mobilisation",
      "Background verification and compliance",
      "Payroll and statutory administration",
      "Performance reporting and replacement cover",
    ],
    stack: ["Engineering", "QA", "Data", "DevOps", "Support", "Project Management"],
    subServices: [
      sub("contract-staffing", "Contract Staffing",
        "Fixed-term technology professionals for defined project windows.",
        ["Role scoping and rate benchmarking", "Screened shortlists", "Contract and compliance handling", "Timesheet and invoicing management"],
        [{ q: "How short can a contract be?", a: "We place from one month, though three months upward gives the best cost-to-productivity ratio." }]),
      sub("contract-to-hire", "Contract-to-Hire",
        "Evaluate performance in real conditions before making a permanent offer.",
        ["Agreed conversion window and fee", "Performance review checkpoints", "Smooth payroll transition", "Replacement guarantee"],
        [{ q: "When can we convert?", a: "Typically after three to six months, on pre-agreed terms." }]),
      sub("managed-capacity", "Managed Capacity",
        "A managed group of resources delivered against an agreed service level.",
        ["Defined SLAs and coverage windows", "Supervisory layer included", "Utilisation and quality reporting", "Elastic scaling"],
        [{ q: "Who supervises the team?", a: "We provide a coordinator responsible for coverage, quality, and reporting against the SLA." }]),
    ],
    faqs: [
      { q: "Do you handle compliance and payroll?", a: "Yes — contracts, statutory obligations, and payroll administration are managed entirely by us." },
      { q: "Can you mobilise a large team quickly?", a: "Yes. Bulk mobilisation of ten or more resources typically runs three to four weeks end to end." },
      { q: "What if a resource underperforms?", a: "We provide replacement cover within the contracted notice window at no additional fee." },
    ],
    related: ["staff-aug", "recruitment", "support"],
    gradient: gradients[0],
  },
  {
    slug: "recruitment",
    seoTitle: "Technology Recruitment & Executive Search",
    seoDescription:
      "Executive and specialist technology recruitment — CTOs, VPs of Engineering, and hard-to-hire individual contributors, assessed by engineers.",
    keywords: ["technology recruitment agency", "cto executive search", "engineering leadership hiring", "specialist tech recruitment"],
    tagline: "Hiring assessed by people who can read the code",
    intro:
      "Technology recruitment is targeted search and assessment for engineering roles — leadership and specialist positions where a generalist agency screen cannot judge technical depth.",
    overview: [
      "Our screening is run by practising engineers, so shortlists are short and the interviews you run are with genuinely qualified people.",
      "We map the market rather than mine a database, which is why hard-to-fill roles close instead of drifting.",
    ],
    outcomes: [
      { label: "Average time to offer", value: "34 days" },
      { label: "Shortlist-to-hire ratio", value: "3:1" },
      { label: "12-month retention", value: "93%" },
    ],
    capabilities: [
      "Executive search for engineering leadership",
      "Specialist IC search across AI, data, and platform",
      "Structured technical assessment design",
      "Compensation benchmarking",
      "Employer positioning and candidate experience",
    ],
    stack: ["Engineering Leadership", "AI & Data", "Platform", "Security", "Product"],
    subServices: [
      sub("executive-search", "Executive Search",
        "CTO, VP Engineering, and Head of Data searches run as a mapped market process.",
        ["Role and success-profile definition", "Full market mapping", "Leadership assessment interviews", "Offer and onboarding support"],
        [{ q: "How long does a leadership search take?", a: "Typically eight to twelve weeks from brief to signed offer." }]),
      sub("specialist-tech-hiring", "Specialist Technical Hiring",
        "Niche individual contributors — ML engineers, SREs, security specialists.",
        ["Engineer-led technical screening", "Take-home and pairing design", "Calibrated scorecards", "Market rate guidance"],
        [{ q: "Do you screen technically?", a: "Yes, every candidate is screened by a senior engineer before they reach your shortlist." }]),
      sub("hiring-process-design", "Hiring Process Design",
        "Fix the interview loop that is losing you good candidates.",
        ["Loop audit and redesign", "Interviewer training", "Structured scorecards", "Candidate experience improvements"],
        [{ q: "Is this a one-off engagement?", a: "It can be, though most clients pair it with an initial search so the new process is proven in practice." }]),
    ],
    faqs: [
      { q: "What are your fees?", a: "Contingent and retained models are both available; retained search is recommended for leadership roles." },
      { q: "Do you offer a guarantee?", a: "Yes — a free replacement search if a placement leaves within the guarantee period." },
      { q: "Can you hire outside our region?", a: "Yes, including remote and cross-border hires with compliance guidance." },
    ],
    related: ["it-manpower", "staff-aug", "transformation"],
    gradient: gradients[1],
  },
  {
    slug: "support",
    seoTitle: "Application Maintenance & Support Services",
    seoDescription:
      "24/7 application maintenance and support — monitoring, incident response, security patching, and continuous improvement for mission-critical systems.",
    keywords: ["application maintenance and support", "24/7 managed support", "devops support services", "incident response services"],
    tagline: "Someone awake when your system is not",
    intro:
      "Application maintenance and support is the ongoing operation of live software — monitoring, incident response, patching, and incremental improvement under an agreed service level.",
    overview: [
      "We instrument before we take over, so alerts reflect user impact instead of noisy infrastructure metrics.",
      "Every incident produces a written post-mortem and a prevention task, which is why ticket volume falls over an engagement rather than plateauing.",
    ],
    outcomes: [
      { label: "Uptime achieved", value: "99.97%" },
      { label: "P1 response time", value: "<15 min" },
      { label: "Recurring incidents", value: "-68%" },
    ],
    capabilities: [
      "24/7 monitoring and on-call rotation",
      "Tiered SLAs with defined escalation",
      "Security patching and dependency upgrades",
      "Performance and cloud cost optimisation",
      "Backup, disaster recovery, and restore drills",
    ],
    stack: ["Datadog", "Grafana", "PagerDuty", "Terraform", "AWS", "Azure"],
    subServices: [
      sub("managed-application-support", "Managed Application Support",
        "Frontline and engineering support against a tiered SLA.",
        ["L1 to L3 support coverage", "Ticket triage and routing", "Root-cause analysis", "Monthly service reviews"],
        [{ q: "Do you support systems you did not build?", a: "Yes, following a handover audit and a stabilisation period." }]),
      sub("devops-and-cloud-operations", "DevOps & Cloud Operations",
        "Pipelines, infrastructure as code, and cloud spend kept under control.",
        ["CI/CD pipeline ownership", "Infrastructure as code", "Observability stack", "Cloud cost optimisation"],
        [{ q: "Can you reduce our cloud bill?", a: "Usually. Rightsizing, storage tiering, and commitment planning commonly cut 25 to 40 percent." }]),
      sub("security-patching-and-compliance", "Security Patching & Compliance",
        "Vulnerabilities closed on a schedule, with evidence for auditors.",
        ["Dependency and CVE monitoring", "Scheduled patch windows", "Penetration test remediation", "Audit evidence packs"],
        [{ q: "How quickly are critical CVEs patched?", a: "Critical vulnerabilities are patched within 24 hours under our standard SLA." }]),
    ],
    faqs: [
      { q: "What SLA tiers do you offer?", a: "Business-hours, extended, and 24/7 coverage, each with defined response and resolution targets." },
      { q: "Is support billed hourly?", a: "It is a fixed monthly retainer sized to system complexity, with a transparent overage rate." },
      { q: "Do you also add features?", a: "Yes — retainers include an improvement allocation alongside reactive support." },
    ],
    related: ["custom-software", "mobile", "it-manpower"],
    gradient: gradients[2],
  },
  {
    slug: "transformation",
    seoTitle: "Digital Transformation Consulting",
    seoDescription:
      "Digital transformation consulting — technology strategy, legacy modernisation, and operating model change delivered with measurable business outcomes.",
    keywords: ["digital transformation consulting", "technology strategy consulting", "cloud migration strategy", "operating model modernisation"],
    tagline: "Strategy that survives the delivery phase",
    intro:
      "Digital transformation consulting aligns technology, process, and operating model to a business objective — then sequences the change so value arrives before the budget runs out.",
    overview: [
      "We refuse multi-year programmes with no value until the end. Every roadmap we write has a benefit-realising milestone within one quarter.",
      "Because the same firm advises and builds, the strategy is written by people who will have to implement it.",
    ],
    outcomes: [
      { label: "Operating cost reduction", value: "-31%" },
      { label: "Release frequency", value: "12x" },
      { label: "First value milestone", value: "90 days" },
    ],
    capabilities: [
      "Technology strategy and target architecture",
      "Cloud migration planning and execution",
      "Process automation and workflow redesign",
      "Data platform and governance foundations",
      "Change management and capability building",
    ],
    stack: ["Cloud Strategy", "Data Platform", "Automation", "Architecture", "Change Enablement"],
    subServices: [
      sub("technology-strategy-consulting", "Technology Strategy & Roadmap",
        "A sequenced, costed plan tied to business outcomes rather than vendor roadmaps.",
        ["Current-state assessment", "Target architecture definition", "Investment case and sequencing", "Quarterly benefit milestones"],
        [{ q: "How long is a strategy engagement?", a: "Typically six to eight weeks, ending with a costed and sequenced roadmap." }]),
      sub("cloud-migration-services", "Cloud Migration",
        "Move workloads with a plan for cost, resilience, and the day after cutover.",
        ["Workload assessment and wave planning", "Landing zone and guardrails", "Migration execution", "Post-migration cost optimisation"],
        [{ q: "Lift-and-shift or re-architect?", a: "Usually both — lift the low-value workloads, re-architect only where cloud-native design pays for itself." }]),
      sub("process-automation", "Process Automation",
        "Remove the manual handoffs that quietly cap your throughput.",
        ["Process mining and mapping", "Workflow and approval automation", "Document and data extraction", "Exception handling design"],
        [{ q: "Is this the same as RPA?", a: "RPA is one tool. Where a proper API or workflow redesign is available, we use that instead of screen-scraping." }]),
    ],
    faqs: [
      { q: "Do you only advise, or also deliver?", a: "Both. Our engineering teams implement the roadmaps our consultants write." },
      { q: "How do you measure success?", a: "Against baselined business metrics agreed at kickoff — cost, cycle time, revenue, or risk." },
      { q: "Will this disrupt current operations?", a: "Change is phased with parallel running and rollback plans at each milestone." },
    ],
    related: ["ai-consulting", "custom-software", "web"],
    gradient: gradients[0],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getSubService(serviceSlug: string, subSlug: string) {
  const detail = getServiceDetail(serviceSlug);
  return detail?.subServices.find((s) => s.slug === subSlug);
}

export const serviceRoutes = serviceDetails.flatMap((d) => [
  `/services/${d.slug}`,
  ...d.subServices.map((s) => `/services/${d.slug}/${s.slug}`),
]);
