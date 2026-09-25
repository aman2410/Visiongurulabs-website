import type { LucideIcon } from "lucide-react";
import {
  Code2, Brain, Layers, Smartphone, Globe, Users, UserPlus, Briefcase,
  ShieldCheck, Rocket, Stethoscope, Factory, Landmark, Building2, GraduationCap,
  Scale, Truck, ShoppingBag, Search, Bot, Zap, MessageSquare, Cpu, Sparkles, Network,
} from "lucide-react";

export const clients = [
  "Indian Army – MCMM Jabalpur",
  "Manganese Ore India Limited (MOIL)",
  "Defence Research and Development Organisation (DRDO)",
  "Indian Space Research Organisation (ISRO)",
  "Pharmaceuticals & Medical Devices Bureau of India (PMBI)",
  "NEC / NEC India",
  "Prospect Legal",
  "Freshlook",
  "RentHunter",
  "XCare",
  "Sneek",
  "Florish",
  "ShiraLi",
  "LOCK IN Motorsports",
  "TJTaxi",
  "GuestoApp",
  "Fickle",
  "Nexx Home",
  "Gadana",
  "Watch RX",
  "Starta",
  "Cyrus Photo Print",
  "ERP Project",
];

export type NavLink = { label: string; to: string };

export const navLinks: NavLink[] = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  { slug: "custom-software", title: "Custom Software Development", description: "Bespoke systems engineered around your operations — from internal platforms to customer-facing products.", icon: Code2 },
  { slug: "ai-consulting", title: "AI Solutions & Consulting", description: "Strategy, model selection, and production deployment of AI that actually moves business metrics.", icon: Brain },
  { slug: "saas", title: "SaaS Product Development", description: "End-to-end product build — architecture, UX, engineering, and go-to-market foundations.", icon: Layers },
  { slug: "mobile", title: "Mobile App Development", description: "Native and cross-platform apps built for performance, offline resilience, and app-store approval.", icon: Smartphone },
  { slug: "web", title: "Website Development", description: "High-performance marketing sites and web platforms with world-class UX and SEO.", icon: Globe },
  { slug: "staff-aug", title: "Staff Augmentation", description: "Senior engineers embedded with your team — no ramp-up tax, no middle-management drag.", icon: Users },
  { slug: "it-manpower", title: "IT Manpower Services", description: "Curated technology talent on-demand, across engineering, data, and operations.", icon: UserPlus },
  { slug: "recruitment", title: "Recruitment Solutions", description: "Executive and specialist search for CTOs, VPs of Engineering, and hard-to-hire IC roles.", icon: Briefcase },
  { slug: "support", title: "Maintenance & Support", description: "24/7 monitoring, incident response, and continuous improvement for mission-critical systems.", icon: ShieldCheck },
  { slug: "transformation", title: "Digital Transformation", description: "Board-level advisory to modernize legacy stacks and unlock new business models.", icon: Rocket },
];

export type Industry = { name: string; blurb: string; icon: LucideIcon };

export const industries: Industry[] = [
  { name: "Healthcare", blurb: "HIPAA-grade platforms, clinical AI, patient engagement.", icon: Stethoscope },
  { name: "Manufacturing", blurb: "IoT, predictive maintenance, factory intelligence.", icon: Factory },
  { name: "BFSI", blurb: "Core banking modernization, fraud AI, wealth platforms.", icon: Landmark },
  { name: "Real Estate", blurb: "PropTech CRMs, listing intelligence, tenant portals.", icon: Building2 },
  { name: "Education", blurb: "LMS platforms, adaptive learning, admissions AI.", icon: GraduationCap },
  { name: "Government", blurb: "Citizen services, secure workflows, digital identity.", icon: Scale },
  { name: "Logistics", blurb: "Route optimization, fleet telematics, TMS platforms.", icon: Truck },
  { name: "E-commerce", blurb: "Storefronts, catalog AI, checkout conversion.", icon: ShoppingBag },
  { name: "Recruitment", blurb: "ATS platforms, sourcing AI, candidate matching.", icon: Search },
];

export type ProcessStep = { number: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discover", body: "We map your business goals, constraints, and technology landscape before writing a single line of code." },
  { number: "02", title: "Blueprint", body: "Architecture, roadmap, and success metrics — the strategic scaffolding that de-risks every downstream decision." },
  { number: "03", title: "Build", body: "Senior engineers ship in small, testable increments. You see progress weekly, not quarterly." },
  { number: "04", title: "Scale", body: "Observability, optimization, and continuous improvement so the system compounds in value over time." },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  stack: string[];
  metrics: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "nordic-health-cloud",
    client: "Nordic Health Cloud",
    industry: "Healthcare",
    problem: "A 40-clinic network was drowning in fragmented EHR data and manual patient triage.",
    solution: "We rebuilt their intake platform with an AI triage layer and unified analytics across clinics.",
    stack: ["Next-gen React", "FHIR", "LLM Orchestration", "Azure"],
    metrics: [
      { label: "Triage time", value: "-68%" },
      { label: "Clinician hours saved / week", value: "1,200" },
      { label: "Patient NPS", value: "+34" },
    ],
  },
  {
    slug: "harbor-bank-fraud",
    client: "Harbor Bank",
    industry: "BFSI",
    problem: "Card fraud losses were growing 22% YoY and rules-based systems couldn't keep up.",
    solution: "Deployed a real-time ML scoring pipeline with human-in-the-loop review tooling.",
    stack: ["Python", "Kafka", "Feature Store", "GraphQL"],
    metrics: [
      { label: "Fraud loss", value: "-54%" },
      { label: "False positives", value: "-71%" },
      { label: "Decision latency", value: "42ms" },
    ],
  },
  {
    slug: "meridian-logistics",
    client: "Meridian Logistics",
    industry: "Logistics",
    problem: "Manual dispatch across 8,000 daily shipments capped growth and burned operators out.",
    solution: "Built an autonomous routing engine and dispatcher copilot on top of their existing TMS.",
    stack: ["Rust services", "OR-Tools", "React", "PostgreSQL"],
    metrics: [
      { label: "On-time delivery", value: "+19%" },
      { label: "Miles per route", value: "-12%" },
      { label: "Dispatcher throughput", value: "3.4x" },
    ],
  },
];

export type AiCapability = { title: string; body: string; icon: LucideIcon };

export const aiCapabilities: AiCapability[] = [
  { title: "AI Agents", body: "Autonomous workflows that plan, act, and hand off — beyond simple prompts.", icon: Bot },
  { title: "Automation", body: "Intelligent process automation across sales, ops, and support.", icon: Zap },
  { title: "Chatbots", body: "Domain-tuned conversational interfaces with real business context.", icon: MessageSquare },
  { title: "Custom AI Applications", body: "Full-stack products built AI-native from the first commit.", icon: Cpu },
  { title: "Generative AI", body: "Text, image, and multimodal generation wrapped in enterprise controls.", icon: Sparkles },
  { title: "LLM Solutions", body: "RAG, fine-tuning, and evaluation pipelines you can trust in production.", icon: Network },
];

export type TeamMember = {
  role: string;
  name: string;
  bio: string;
  gradient: string;
  initials: string;
  image: string;
  imagePosition?: string;
};

export const team: TeamMember[] = [
  {
    role: "Product Guru",
    name: "A. Menon",
    bio: "20 years shipping category-defining products for Fortune 500 and Series-A alike.",
    gradient: "from-brand-navy to-brand-sky",
    initials: "AM",
    image: "/team/a-menon.jpg",
    imagePosition: "center 20%",
  },
  {
    role: "Engineering Guru",
    name: "R. Iyer",
    bio: "Distributed systems veteran. Ex-principal engineer at two hyperscalers.",
    gradient: "from-brand-navy-deep to-brand-navy",
    initials: "RI",
    image: "/team/r-iyer.jpg",
    imagePosition: "center 25%",
  },
  {
    role: "AI Guru",
    name: "S. Kapoor",
    bio: "PhD in ML. Deploys AI where the ROI is measurable, not theatrical.",
    gradient: "from-brand-sky to-brand-navy",
    initials: "SK",
    image: "/team/s-kapoor.jpg",
    imagePosition: "center 15%",
  },
  {
    role: "Growth Guru",
    name: "L. Fernandes",
    bio: "Bridges engineering and go-to-market so products don't ship into silence.",
    gradient: "from-brand-red to-brand-navy",
    initials: "LF",
    image: "/team/l-fernandes.jpg",
    imagePosition: "center 15%",
  },
];

export type BlogAuthor = { name: string; role: string; initials: string; gradient: string };

export type BlogBlock =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] };

export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  updatedAt?: string;
  author: BlogAuthor;
  tags: string[];
  heroAlt: string;
  gradient: string;
  image?: string;
  tldr: string[];
  body: BlogBlock[];
  faqs: { q: string; a: string }[];
};

export function getInsightImage(post: { slug: string; image?: string }): string {
  return post.image || `/insights/${post.slug}.jpg`;
}

const authorSK: BlogAuthor = { name: "S. Kapoor", role: "AI Guru, VisionGuru Labs", initials: "SK", gradient: "from-brand-sky to-brand-navy" };
const authorRI: BlogAuthor = { name: "R. Iyer", role: "Engineering Guru, VisionGuru Labs", initials: "RI", gradient: "from-brand-navy-deep to-brand-navy" };
const authorAM: BlogAuthor = { name: "A. Menon", role: "Product Guru, VisionGuru Labs", initials: "AM", gradient: "from-brand-navy to-brand-sky" };
const authorLF: BlogAuthor = { name: "L. Fernandes", role: "Growth Guru, VisionGuru Labs", initials: "LF", gradient: "from-brand-red to-brand-navy" };

export const insights: Insight[] = [
  {
    slug: "ai-adoption-curve",
    title: "The AI Adoption Curve Nobody Talks About",
    category: "AI",
    excerpt: "Why most enterprise AI programs stall between pilot and production — and the operating model that fixes it.",
    readTime: "6 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-07-18",
    author: authorSK,
    tags: ["Enterprise AI", "AI Strategy", "MLOps", "Digital Transformation"],
    heroAlt: "Abstract gradient visualization representing the AI adoption curve inside an enterprise.",
    gradient: "from-brand-sky/30 via-brand-navy/20 to-brand-red/20",
    tldr: [
      "70% of enterprise AI pilots never reach production because the operating model, not the model, is broken.",
      "The gap between pilot and production is owned by evaluation, data contracts, and change management — not GPUs.",
      "Ship a thin AI slice into one revenue-linked workflow before expanding across the org.",
      "Measure business outcomes weekly; ML metrics are lagging indicators of value.",
    ],
    body: [
      { type: "p", text: "The AI adoption curve is the pattern by which an enterprise moves from first prompt to production-grade AI systems that reliably influence revenue, cost, or risk. Most companies flatten out in the middle — a plateau of impressive demos and stalled deployments." },
      { type: "h2", id: "why-pilots-stall", text: "Why AI pilots stall" },
      { type: "p", text: "The bottleneck is almost never model quality. It is the connective tissue: ambiguous data ownership, missing evaluation harnesses, and the absence of a single accountable operator who owns the outcome end-to-end." },
      { type: "list", items: [
        "No golden dataset — teams argue about whether the model is 'good' without a shared bar.",
        "No production integration path — the pilot lives in a notebook while the workflow lives in a CRM.",
        "No change-management plan — the humans whose work the AI touches were not part of the design.",
      ] },
      { type: "quote", text: "A pilot that impresses the board and dies in Q3 is worse than no pilot at all — it teaches the org that AI does not ship.", cite: "S. Kapoor, AI Guru" },
      { type: "h2", id: "operating-model", text: "The operating model that ships" },
      { type: "p", text: "Treat AI like a product line, not a research program. A small, cross-functional squad — product, ML, platform, and a domain operator — owns one narrow, revenue-linked workflow from prompt to P&L. They ship weekly, evaluate weekly, and expand only after the first slice compounds." },
      { type: "h3", id: "evaluation-first", text: "Build evaluation before you build features" },
      { type: "p", text: "A golden set of 200 real examples with expected behavior is worth more than a bigger model. Evaluation gates every deploy, catches regressions, and gives the business a legible number to trust." },
      { type: "h2", id: "what-good-looks-like", text: "What good looks like at 12 months" },
      { type: "p", text: "One workflow in production with measurable dollar impact, a repeatable playbook, and a platform team confident enough to open the door to the next three use cases. That is the compounding curve." },
    ],
    faqs: [
      { q: "What percentage of enterprise AI projects fail to reach production?", a: "Industry surveys consistently place the number between 60% and 80%. The failure mode is almost always operational — evaluation, integration, and change management — not modeling capability." },
      { q: "How long should a first AI production deployment take?", a: "For a scoped, revenue-linked workflow, 8 to 12 weeks is a realistic target with a senior cross-functional squad. Anything longer usually signals scope creep or missing platform foundations." },
      { q: "Do we need to fine-tune our own model?", a: "Usually not for the first deployment. A well-evaluated RAG or prompt pipeline over a frontier model ships faster and gives you the evaluation harness you need before deciding whether fine-tuning earns its cost." },
    ],
  },
  {
    slug: "software-that-ages-well",
    title: "Building Software That Ages Well",
    category: "Software Development",
    excerpt: "The architectural decisions that separate three-year systems from thirty-year systems.",
    readTime: "8 min",
    publishedAt: "2026-05-28",
    author: authorRI,
    tags: ["Software Architecture", "Technical Debt", "Modular Monolith", "Longevity"],
    heroAlt: "Layered architecture diagram illustrating durable software design.",
    gradient: "from-brand-navy/30 via-brand-sky/10 to-brand-navy/20",
    tldr: [
      "Software longevity is a design choice, not an accident of the stack.",
      "Boring, well-boundaried modules outlive clever distributed systems.",
      "Interfaces age well; implementations do not. Invest in seams.",
      "Observability and testability are the two features every codebase should ship with on day one.",
    ],
    body: [
      { type: "p", text: "Software that ages well is code that a new engineer can safely change five years after the original author left. It is a product of restraint, boundaries, and a small set of unglamorous engineering habits." },
      { type: "h2", id: "boundaries", text: "Boundaries beat frameworks" },
      { type: "p", text: "Frameworks turn over every three years. Domain boundaries — the seams between billing, identity, and inventory — outlast every framework choice you will make. Design the seams first; pick the framework second." },
      { type: "h2", id: "boring-tech", text: "The boring stack wins" },
      { type: "list", items: [
        "PostgreSQL is still the right default for 95% of workloads.",
        "A modular monolith is easier to operate than five microservices you cannot yet staff.",
        "Server-rendered HTML with progressive enhancement outlives most SPA fashions.",
      ] },
      { type: "quote", text: "Every distributed system you deploy is a bet that your operational maturity will grow faster than the system's complexity. Most bets lose." },
      { type: "h2", id: "day-one-features", text: "Ship these on day one" },
      { type: "p", text: "Structured logs, request tracing, a test suite that runs in under two minutes, and a one-command local setup. These four investments compound for the entire life of the system." },
    ],
    faqs: [
      { q: "When should we split a monolith into microservices?", a: "When two teams need to deploy independently on different cadences and the coordination cost is measurably higher than the operational cost of a new service. Rarely before that." },
      { q: "How do we measure architectural quality?", a: "Change failure rate, mean time to restore, and time-to-first-commit for a new engineer. If those three are healthy, the architecture is doing its job." },
    ],
  },
  {
    slug: "founder-led-to-product-led",
    title: "From Founder-Led to Product-Led",
    category: "Startups",
    excerpt: "The instrumentation and rituals that let a startup scale beyond the founder's inbox.",
    readTime: "5 min",
    publishedAt: "2026-05-10",
    author: authorAM,
    tags: ["Startups", "Product-Led Growth", "Instrumentation", "Scaling"],
    heroAlt: "Diagram showing the transition from founder-led to product-led operations.",
    gradient: "from-brand-red/20 via-brand-navy/20 to-brand-sky/20",
    tldr: [
      "Founder-led motion breaks somewhere between $2M and $8M ARR.",
      "Instrumentation, a shared definition of activation, and a weekly ritual are the minimum viable product-led stack.",
      "The founder's job shifts from closing to designing the system that closes.",
    ],
    body: [
      { type: "p", text: "Product-led growth is the operating model in which the product itself acquires, activates, and expands users — with sales and marketing amplifying the loop rather than replacing it." },
      { type: "h2", id: "signals", text: "Signals it is time to shift" },
      { type: "list", items: [
        "Every deal still routes through the founder's calendar.",
        "Onboarding depends on a Loom the founder recorded at 2am.",
        "You cannot answer 'what does an activated user do in week one?' in one sentence.",
      ] },
      { type: "h2", id: "minimum-stack", text: "The minimum viable product-led stack" },
      { type: "p", text: "You do not need a Segment-Amplitude-Hex sprawl. You need one event stream, one activation definition, and one weekly meeting where the numbers get looked at with product and engineering in the room." },
    ],
    faqs: [
      { q: "Do we need a PLG motion if we sell to enterprises?", a: "Yes, increasingly. Enterprise buyers now expect self-serve trials and product-led evaluation even when the eventual contract is sales-assisted." },
      { q: "What is a reasonable activation rate?", a: "For B2B SaaS, 25% to 40% of signups reaching an activation event within seven days is a healthy band. Below 15% usually indicates an onboarding or ICP problem." },
    ],
  },
  {
    slug: "rag-is-not-a-strategy",
    title: "RAG Is Not a Product Strategy",
    category: "AI",
    excerpt: "Retrieval-augmented generation is a technique. Here's how to wrap it in something customers will actually pay for.",
    readTime: "7 min",
    publishedAt: "2026-04-22",
    author: authorSK,
    tags: ["RAG", "AI Products", "LLM", "Product Strategy"],
    heroAlt: "Illustration showing retrieval-augmented generation architecture inside a product.",
    gradient: "from-brand-sky/20 via-brand-navy/20 to-brand-red/10",
    tldr: [
      "RAG is plumbing. The product is the workflow it enables.",
      "Customers pay for outcomes, not for 'chat with your docs'.",
      "Grounding, citations, and evaluation matter more than embedding model choice.",
    ],
    body: [
      { type: "p", text: "Retrieval-augmented generation combines a retrieval step over your corpus with a generation step from an LLM. It is powerful — and it is not, by itself, a product." },
      { type: "h2", id: "why", text: "Why 'chat with your docs' plateaus" },
      { type: "p", text: "Every competitor ships the same demo. Differentiation lives one layer up: which decision does your product help the user make, what happens after the answer, and how does the system get better as usage grows." },
      { type: "h2", id: "what-to-build", text: "What to build on top of RAG" },
      { type: "list", items: [
        "Structured outputs that flow into a downstream workflow, not just a chat bubble.",
        "Human-in-the-loop review for high-stakes answers, with feedback captured as evaluation data.",
        "Domain-specific ranking and grounding rules that a generic embedder cannot learn.",
      ] },
    ],
    faqs: [
      { q: "Is RAG obsolete now that context windows are larger?", a: "No. Long contexts help but do not solve freshness, permissioning, or cost at scale. RAG remains the default architecture for grounded enterprise AI." },
      { q: "Which embedding model should we use?", a: "Start with the current best general-purpose model from a major provider, and only invest in fine-tuned embeddings once your evaluation harness shows a clear ceiling." },
    ],
  },
  {
    slug: "against-microservices-day-one",
    title: "The Case Against Microservices Day One",
    category: "Software Development",
    excerpt: "A pragmatic take on when a modular monolith beats a distributed system you can't yet operate.",
    readTime: "9 min",
    publishedAt: "2026-04-03",
    author: authorRI,
    tags: ["Microservices", "Modular Monolith", "Architecture", "Operations"],
    heroAlt: "Comparison diagram between modular monolith and microservices architectures.",
    gradient: "from-brand-navy/30 via-brand-navy-deep/20 to-brand-sky/10",
    tldr: [
      "Microservices trade a code-organization problem for a distributed-systems problem.",
      "Most teams under 30 engineers ship faster with a well-boundaried monolith.",
      "Split when independent deployability is a real bottleneck, not a hypothetical one.",
    ],
    body: [
      { type: "p", text: "A modular monolith is a single deployable unit organized around strong internal module boundaries. It gives you most of the architectural benefits of microservices without the operational tax." },
      { type: "h2", id: "operational-tax", text: "The operational tax of microservices" },
      { type: "list", items: [
        "You now own service discovery, distributed tracing, and inter-service auth.",
        "A single feature can span three deploys and two on-call rotations.",
        "Local dev requires docker-compose choreography no new hire will love.",
      ] },
    ],
    faqs: [
      { q: "When is day one right for microservices?", a: "When you have concrete, non-negotiable independent scaling or compliance boundaries — for example, a PCI-scoped payments service isolated from the rest of the platform." },
    ],
  },
  {
    slug: "hiring-senior-engineers",
    title: "Hiring Senior Engineers in a Noisy Market",
    category: "Hiring",
    excerpt: "Signal-heavy loops, take-homes that respect time, and the interview questions that actually predict performance.",
    readTime: "6 min",
    publishedAt: "2026-03-18",
    author: authorAM,
    tags: ["Hiring", "Engineering Leadership", "Interviewing"],
    heroAlt: "Interview flow diagram highlighting high-signal engineering hiring loops.",
    gradient: "from-brand-navy/20 via-brand-sky/10 to-brand-red/10",
    tldr: [
      "Optimize for signal per hour of the candidate's time, not per hour of yours.",
      "One deep technical discussion beats three shallow whiteboards.",
      "Ask candidates to critique real code — it filters faster than any puzzle.",
    ],
    body: [
      { type: "p", text: "Senior engineering hiring is a market for lemons. The best candidates have options and short patience for loops that feel like theater." },
      { type: "h2", id: "loop", text: "A loop that respects time" },
      { type: "list", items: [
        "A 45-minute screen with a hiring manager who can talk architecture.",
        "One take-home of 90 minutes maximum, or a paid 3-hour pairing session.",
        "A final deep-dive on a real system the candidate previously owned.",
      ] },
    ],
    faqs: [
      { q: "Are take-homes still acceptable?", a: "Yes, if they are strictly time-boxed, reflect real work, and the company also invests time — reviewing thoroughly and giving specific feedback." },
    ],
  },
  {
    slug: "llm-evaluation",
    title: "Evaluating LLM Outputs Without Losing Your Mind",
    category: "AI",
    excerpt: "A practical eval stack — from golden sets to LLM-as-judge — that scales with your product.",
    readTime: "8 min",
    publishedAt: "2026-03-02",
    author: authorSK,
    tags: ["LLM Evaluation", "AI Quality", "MLOps"],
    heroAlt: "Layered evaluation pipeline for LLM outputs.",
    gradient: "from-brand-sky/30 via-brand-navy/20 to-brand-navy-deep/20",
    tldr: [
      "Evaluation is the product surface that decides how fast you can safely ship.",
      "Golden sets, rubric-based LLM-as-judge, and production sampling form the three layers.",
      "Every regression should have an eval added within 24 hours.",
    ],
    body: [
      { type: "p", text: "LLM evaluation is the discipline of measuring generated output quality against expectations that a human reviewer would agree with." },
      { type: "h2", id: "layers", text: "The three layers" },
      { type: "list", items: [
        "Golden set: 100–500 curated examples with expected behavior, run on every deploy.",
        "LLM-as-judge: rubric-scored automated grading for coverage the golden set cannot reach.",
        "Production sampling: a small percentage of live traffic scored and reviewed weekly.",
      ] },
    ],
    faqs: [
      { q: "Can LLM-as-judge be trusted?", a: "For well-defined rubrics and comparative judgments, yes. For nuanced correctness in high-stakes domains, pair it with human review on a sampled subset." },
    ],
  },
  {
    slug: "design-systems-weekly",
    title: "Design Systems for Teams That Ship Weekly",
    category: "Design",
    excerpt: "How to keep a design system useful when the product surface changes faster than the tokens.",
    readTime: "5 min",
    publishedAt: "2026-02-14",
    author: authorAM,
    tags: ["Design Systems", "Frontend", "Product Design"],
    heroAlt: "Design token hierarchy visualization for a fast-shipping product team.",
    gradient: "from-brand-red/10 via-brand-navy/20 to-brand-sky/10",
    tldr: [
      "Tokens over components. Components over templates.",
      "The design system is a product with its own users — treat it accordingly.",
      "Ship the system in the same repo as the app until scale forces a split.",
    ],
    body: [
      { type: "p", text: "A design system that slows the product down has failed its brief. Speed is the point." },
      { type: "h2", id: "tokens", text: "Start with tokens, not components" },
      { type: "p", text: "Semantic tokens — color, spacing, radius, elevation — give designers and engineers a shared vocabulary before a single component is agreed on. Components can evolve; the tokens should not." },
    ],
    faqs: [
      { q: "When should the design system live in its own repo?", a: "Once three or more product surfaces consume it and versioning conflicts start showing up in code review. Not before." },
    ],
  },
  {
    slug: "cto-board-deck",
    title: "The Board Deck Every CTO Should Steal",
    category: "Leadership",
    excerpt: "Six slides that reframe engineering from a cost center into a compounding business asset.",
    readTime: "4 min",
    publishedAt: "2026-01-27",
    author: authorLF,
    tags: ["Engineering Leadership", "CTO", "Board Communication"],
    heroAlt: "Board presentation slides framing engineering as a business asset.",
    gradient: "from-brand-navy/30 via-brand-red/10 to-brand-sky/10",
    tldr: [
      "Boards fund what they can measure. Give them the numbers.",
      "Frame engineering in terms of throughput, reliability, leverage, and risk.",
      "Show the compounding curve, not the monthly burn.",
    ],
    body: [
      { type: "p", text: "Most CTO board updates get treated as a status report. The best ones read like a P&L for engineering." },
      { type: "h2", id: "six-slides", text: "The six slides" },
      { type: "list", items: [
        "Throughput: features shipped, cycle time, change failure rate.",
        "Reliability: uptime, incident count, mean time to restore.",
        "Leverage: features per engineer, AI-assisted output.",
        "Risk: top technical, security, and dependency risks with owners.",
        "Investment: what the last quarter's spend bought.",
        "Ask: what the next quarter needs and what it unlocks.",
      ] },
    ],
    faqs: [
      { q: "How often should a CTO present to the board?", a: "Quarterly is standard, with a shorter written update between meetings. Anything more frequent tends to compress into status noise." },
    ],
  },
  {
    slug: "kafka-postgres-boring-stack",
    title: "Kafka, Postgres, and the Boring Stack That Wins",
    category: "Software Development",
    excerpt: "Why the most durable data platforms in 2026 still look surprisingly conservative.",
    readTime: "10 min",
    publishedAt: "2026-01-08",
    author: authorRI,
    tags: ["Data Platform", "Postgres", "Kafka", "Boring Tech"],
    heroAlt: "Data platform architecture featuring Postgres and Kafka at its core.",
    gradient: "from-brand-navy-deep/30 via-brand-navy/20 to-brand-sky/10",
    tldr: [
      "The winning data platforms of 2026 are still Postgres, Kafka, and a small number of well-chosen tools.",
      "Novel databases usually solve a problem you do not yet have.",
      "Optimize for operability and hiring pool, not benchmark charts.",
    ],
    body: [
      { type: "p", text: "The 'boring stack' — Postgres for storage, Kafka for events, one search engine, one cache — covers 95% of production workloads with proven operational patterns." },
      { type: "h2", id: "why-boring", text: "Why boring wins" },
      { type: "list", items: [
        "Every engineer you hire has already used it.",
        "The failure modes are documented and searchable.",
        "The vendor ecosystem is mature — managed services, observability, backup, security.",
      ] },
    ],
    faqs: [
      { q: "When is a specialized database justified?", a: "When your workload's access pattern is fundamentally mismatched with Postgres — for example, sub-millisecond vector search at very high QPS — and you have engineers who have operated the alternative in production." },
    ],
  },
  {
    slug: "plg-regulated-industries",
    title: "Product-Led Growth in Regulated Industries",
    category: "Startups",
    excerpt: "Self-serve motion in healthcare and BFSI — the guardrails that make it possible.",
    readTime: "7 min",
    publishedAt: "2025-12-11",
    author: authorLF,
    tags: ["PLG", "Regulated Industries", "Healthcare", "BFSI"],
    heroAlt: "Self-serve product flow with compliance guardrails for regulated industries.",
    gradient: "from-brand-sky/20 via-brand-navy/20 to-brand-red/10",
    tldr: [
      "PLG in regulated industries is possible with tiered access and compliance gates.",
      "The trial surface is limited to non-PHI, non-PII scenarios; expansion unlocks full data.",
      "Compliance is a product feature, not a legal afterthought.",
    ],
    body: [
      { type: "p", text: "Regulated buyers still want to try before they buy. The trick is designing a trial surface that gives real value without violating the compliance boundary." },
      { type: "h2", id: "tiered", text: "Tiered access as a design pattern" },
      { type: "p", text: "The self-serve tier operates on synthetic or non-sensitive data. Real-data expansion routes through a lightweight compliance workflow — DPA, security review, role provisioning — but only after the product has already proven value." },
    ],
    faqs: [
      { q: "Is PLG viable for HIPAA-covered workflows?", a: "Yes, with a synthetic-data trial tier and a well-designed compliance onboarding for production access. Several healthcare SaaS companies now use this model successfully." },
    ],
  },
  {
    slug: "observability-is-design",
    title: "Observability Is a Design Problem",
    category: "Software Development",
    excerpt: "The best telemetry answers questions on-callers didn't know they'd ask. Here's how to design for that.",
    readTime: "6 min",
    publishedAt: "2025-11-22",
    author: authorRI,
    tags: ["Observability", "SRE", "Telemetry"],
    heroAlt: "Telemetry dashboard illustrating well-designed observability.",
    gradient: "from-brand-navy/30 via-brand-sky/10 to-brand-navy-deep/20",
    tldr: [
      "Observability is a product for on-call engineers under stress.",
      "High-cardinality attributes are worth more than more metrics.",
      "Design telemetry the same way you design UX: from the question backwards.",
    ],
    body: [
      { type: "p", text: "Observability is the ability to ask arbitrary questions about your production system without shipping new code. Good observability is a design outcome, not a tooling purchase." },
      { type: "h2", id: "cardinality", text: "Cardinality is the feature" },
      { type: "p", text: "Attributes like user_id, tenant_id, feature_flag, and request_id turn a metrics graph into a debugging surface. Invest in structured events over pre-aggregated metrics wherever the cost model allows." },
    ],
    faqs: [
      { q: "Metrics, logs, or traces — which one should we start with?", a: "Structured events with trace context. From those you can derive metrics, correlate logs, and reconstruct traces. Starting from any single pillar tends to lock you into its limits." },
    ],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((p) => p.slug === slug);
}

export function getRelatedInsights(slug: string, limit = 3): Insight[] {
  const current = getInsightBySlug(slug);
  if (!current) return insights.slice(0, limit);
  const scored = insights
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const sameCategory = p.category === current.category ? 2 : 0;
      const tagOverlap = p.tags.filter((t) => current.tags.includes(t)).length;
      return { post: p, score: sameCategory + tagOverlap };
    })
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.post);
}

export type Testimonial = { quote: string; author: string; role: string; company: string };

export const testimonials: Testimonial[] = [
  { quote: "VisionGuru didn't just deliver code. They reframed the problem, and the answer was better than anything we'd have specced ourselves.", author: "Priya Nair", role: "Chief Digital Officer", company: "Meridian Group" },
  { quote: "The senior engineers they embedded raised the bar for our internal team. Six months later we're still shipping at their cadence.", author: "David Chen", role: "VP Engineering", company: "Harbor Bank" },
  { quote: "They understood our clinical workflows before proposing a technical solution. That's rare.", author: "Dr. Anna Lindqvist", role: "CMO", company: "Nordic Health Cloud" },
];

export const stats = [
  { value: 12, suffix: "+", label: "Years in the field" },
  { value: 180, suffix: "+", label: "Projects delivered" },
  { value: 9, suffix: "", label: "Industries served" },
  { value: 40, suffix: "+", label: "Senior engineers" },
];

export const comparison = [
  { dimension: "Approach", agency: "Ticket-taker", us: "Strategic advisor" },
  { dimension: "AI capability", agency: "Buzzword layer", us: "Production-grade" },
  { dimension: "Team seniority", agency: "Junior-heavy", us: "Senior engineers" },
  { dimension: "Business context", agency: "Handed a brief", us: "Owns the outcome" },
  { dimension: "Relationship", agency: "Project by project", us: "Long-term partnership" },
];

export const SITE_URL = "https://visiongurulabs.com";
