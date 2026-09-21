import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, X, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { HeroFlow } from "./HeroFlow";
import {
  services, industries, processSteps, caseStudies, aiCapabilities, team,
  insights, testimonials, stats, comparison, getInsightImage,
} from "@/lib/site-data";
import { clientLogos } from "@/lib/client-logos";
import heroBg from "@/assets/hero-network.jpg";
import aiBg from "@/assets/ai-backdrop.jpg";

export function ClientsStrip() {
  const row = (dup: boolean) => (
    <div
      className="flex shrink-0 animate-marquee items-center gap-12 pr-12"
      aria-hidden={dup || undefined}
    >
      {clientLogos.map((client) => (
        <img
          key={dup ? `${client.name}-dup` : client.name}
          src={client.logo}
          alt={dup ? "" : `${client.name} logo`}
          loading="lazy"
          decoding="async"
          width={260}
          height={64}
          className="h-12 w-auto shrink-0 opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
        />
      ))}
    </div>
  );

  return (
    <section className="py-12 border-y border-border bg-paper overflow-hidden">
      <div className="container-x mb-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-ink">
          Trusted by visionary teams
        </span>
      </div>
      <div className="relative flex overflow-hidden">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}


export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 surface-dark">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-navy-deep to-transparent" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-paper/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                Strategy · Engineering · AI
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl text-paper text-balance">
                Building the future requires more than <span className="text-brand-sky">developers</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-paper/70 max-w-xl text-balance">
                We help businesses navigate technology, AI, and digital transformation through strategy, engineering, and innovation.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-semibold border-0 h-12 px-6 shadow-sm">
                  <Link to="/contact">Talk to a Guru <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6 border-white/25 bg-white/5 text-paper hover:bg-white/10 hover:text-paper">
                  <Link to="/case-studies">View our work</Link>
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <HeroFlow />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-border bg-paper">
      <div className="container-x py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm text-muted-ink">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutBlock() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">About</span>
          <h2 className="mt-4 text-3xl md:text-5xl text-ink text-balance">
            More than developers. We are technology guides.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5 text-slate text-lg leading-relaxed">
            <p>
              VisionGuru Labs helps businesses make smarter technology decisions and build scalable digital products.
              We combine board-level strategy with senior engineering — no ramp-up tax, no middle-management drag.
            </p>
            <p>
              From startups shaping category-defining products to enterprises modernizing decades-old stacks, we operate
              as long-term partners, not vendors on a ticket queue.
            </p>
            <div className="pt-2">
              <Link to="/about" className="inline-flex items-center gap-2 text-brand-navy font-semibold red-underline">
                Read our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32 bg-paper">
      <div className="container-x">
        <div className="flex items-end justify-between gap-8 mb-12 flex-wrap">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Services</span>
              <h2 className="mt-4 text-3xl md:text-4xl text-ink text-balance max-w-2xl">
                What we build, ship, and stand behind.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/services" className="text-brand-navy font-semibold red-underline">All services →</Link>
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 0.04}>
                <div className="group h-full rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-paper transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate leading-relaxed">{s.description}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-navy">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProcessTimeline() {
  return (
    <section className="py-24 lg:py-32 surface-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-mesh)" }} />
      <div className="container-x relative">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky">Process</span>
          <h2 className="mt-4 text-3xl md:text-5xl text-paper text-balance max-w-2xl">
            Our path to innovation.
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-brand-sky/50 to-transparent" />
          <div className="grid gap-10 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-brand-navy border border-white/20 flex items-center justify-center text-brand-sky font-extrabold text-sm relative z-10">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-paper">{step.title}</h3>
                  <p className="mt-2 text-sm text-paper/70 leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustriesGrid() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Industries</span>
          <h2 className="mt-4 text-3xl md:text-4xl text-ink text-balance max-w-2xl">
            Deep context across the sectors we serve.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.name} delay={i * 0.03}>
                <div className="group flex items-start gap-4 rounded-xl border border-border bg-background p-6 hover:border-brand-navy/30 hover:bg-brand-navy/[0.02] transition-colors">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-sky/10 text-brand-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-ink">{ind.name}</h3>
                    <p className="mt-1 text-sm text-slate">{ind.blurb}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-paper overflow-hidden">
      {/* Dynamic ambient radial lighting to draw immediate attention */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] max-w-full h-[450px] bg-gradient-to-tr from-brand-sky/20 via-brand-navy/15 to-brand-red/10 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-brand-red/10 text-brand-red border border-brand-red/25 mb-4 shadow-xs">
            Why VisionGuru
          </div>
          <h2 className="text-3xl md:text-5xl text-ink font-bold tracking-tight text-balance max-w-3xl leading-tight">
            Not another agency.{" "}
            <span className="bg-gradient-to-r from-brand-navy via-brand-sky to-brand-navy bg-clip-text text-transparent">
              A partner engineered for outcomes.
            </span>
          </h2>
          <p className="mt-4 text-slate text-base md:text-lg max-w-2xl">
            See how our outcome-first engineering model compares directly with conventional agencies.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border-2 border-slate-200/90 bg-background shadow-[0_25px_60px_-15px_rgba(0,61,96,0.18)]">
            <div className="overflow-x-auto">
              <div className="min-w-[660px]">
                {/* 3 Columns Header Bar */}
                <div className="grid grid-cols-[1.1fr_1.3fr_1.5fr] border-b border-border items-stretch">
                  {/* Column 1: Dimension */}
                  <div className="p-6 bg-slate-50/90 flex flex-col justify-end">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-muted-ink">Comparison</span>
                    <span className="text-base font-extrabold text-slate-800 mt-1">Dimension</span>
                  </div>

                  {/* Column 2: Traditional Agencies */}
                  <div className="p-6 bg-slate-50/40 border-l border-border flex flex-col justify-end">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">The Conventional Way</span>
                    <span className="text-base font-bold text-slate-600 mt-1">Traditional Agencies</span>
                  </div>

                  {/* Column 3: VisionGuru Labs - High-End Monolithic Hero Header */}
                  <div className="p-6 bg-brand-navy-deep text-white border-l border-brand-navy-deep relative overflow-hidden flex flex-col justify-between shadow-2xl">
                    {/* Glowing top accent border - pure warm radiant amber-orange */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red/30 via-brand-red to-amber-300/40" />
                    {/* Ambient subtle light sweep */}
                    <div
                      className="absolute -right-8 -top-8 w-32 h-32 bg-brand-red/25 rounded-full blur-xl pointer-events-none"
                      aria-hidden="true"
                    />
                    <div className="relative flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-red text-white shadow-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        Engineered Model
                      </span>
                      <span className="text-[11px] font-medium text-white/75 tracking-wide">Our Standard</span>
                    </div>
                    <span className="relative text-lg md:text-xl font-extrabold text-white tracking-tight">
                      VisionGuru Labs
                    </span>
                  </div>
                </div>

                {/* Rows */}
                {comparison.map((row, i) => (
                  <div
                    key={row.dimension}
                    className={`group grid grid-cols-[1.1fr_1.3fr_1.5fr] items-stretch ${
                      i > 0 ? "border-t border-border" : ""
                    }`}
                  >
                    {/* Dimension Value */}
                    <div className="p-5 md:p-6 font-semibold text-ink text-sm sm:text-base flex items-center bg-white group-hover:bg-slate-50/90 transition-colors">
                      {row.dimension}
                    </div>

                    {/* Traditional Agency Value */}
                    <div className="p-5 md:p-6 text-slate-500 border-l border-border bg-slate-50/40 group-hover:bg-slate-100/60 text-sm sm:text-base flex items-center gap-3 transition-colors">
                      <X className="h-4 w-4 shrink-0 text-slate-400 stroke-[2]" />
                      <span className="font-normal text-slate-600">{row.agency}</span>
                    </div>

                    {/* VisionGuru Labs Value - Monolithic Deep Navy Cell */}
                    <div className="p-5 md:p-6 bg-brand-navy-deep group-hover:bg-[#002f4a] text-white border-l border-brand-navy-deep/80 text-sm sm:text-base flex items-center gap-3 border-t border-white/5 relative transition-colors">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-red/20 text-brand-red border border-brand-red/30 shadow-xs">
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      </div>
                      <span className="font-bold text-white tracking-tight">{row.us}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CaseStudiesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="flex items-end justify-between gap-8 flex-wrap mb-12">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Case Studies</span>
              <h2 className="mt-4 text-3xl md:text-4xl text-ink text-balance max-w-2xl">
                Real systems. Measurable outcomes.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/case-studies" className="text-brand-navy font-semibold red-underline">See all →</Link>
          </Reveal>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <article className="h-full flex flex-col rounded-2xl border border-border bg-background overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <div className="h-40 bg-gradient-to-br from-brand-navy via-brand-navy-deep to-ink relative">
                  <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)", opacity: 0.6 }} />
                  <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider text-brand-sky">{c.industry}</span>
                  <span className="absolute bottom-4 left-4 text-paper font-extrabold text-lg">{c.client}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-slate"><span className="font-semibold text-ink">Problem: </span>{c.problem}</p>
                  <p className="mt-3 text-sm text-slate"><span className="font-semibold text-ink">Solution: </span>{c.solution}</p>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="rounded-lg bg-paper p-3">
                        <div className="text-lg font-extrabold text-brand-navy">{m.value}</div>
                        <div className="text-[10px] uppercase tracking-wide text-muted-ink leading-tight mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {c.stack.map((t) => (
                      <span key={t} className="text-[11px] rounded-full bg-brand-navy/5 text-brand-navy px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AISection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden surface-dark">
      <img src={aiBg} alt="" aria-hidden width={1920} height={1080} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-deep/80 via-brand-navy/60 to-brand-navy-deep" />
      <div className="container-x relative">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky">Artificial Intelligence</span>
          <h2 className="mt-4 text-3xl md:text-5xl text-paper text-balance max-w-2xl">
            Your guide to the AI era.
          </h2>
          <p className="mt-4 text-paper/70 max-w-2xl">
            We move AI from demo to production — with the governance, evaluation, and engineering rigor that enterprise deployments demand.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aiCapabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Reveal key={cap.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 hover:bg-white/[0.06] transition-colors">
                  <Icon className="h-6 w-6 text-brand-sky" />
                  <h3 className="mt-4 text-lg font-extrabold text-paper">{cap.title}</h3>
                  <p className="mt-2 text-sm text-paper/70">{cap.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TeamGrid() {
  return (
    <section id="team-section" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Team</span>
          <h2 className="mt-4 text-3xl md:text-5xl text-ink text-balance">Meet the Gurus.</h2>
          <p className="mt-4 text-slate max-w-2xl">A senior bench of product, engineering, AI, and growth operators.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="group rounded-2xl border border-border bg-background overflow-hidden hover:shadow-[var(--shadow-elegant)] hover:border-brand-navy/30 transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[4/5] relative overflow-hidden bg-slate-900">
                  <img
                    src={m.image}
                    alt={`${m.name} — ${m.role}`}
                    style={{ objectPosition: m.imagePosition || "center 20%" }}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />
                  <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider bg-white/95 text-brand-navy shadow-sm backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {m.role}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-2xl font-extrabold text-white tracking-tight">{m.name}</div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-slate leading-relaxed">{m.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InsightsGrid() {
  const featured = insights.slice(0, 6);

  return (
    <section id="insights-section" className="py-24 lg:py-32 bg-paper">
      <div className="container-x">
        <div className="flex items-end justify-between gap-8 flex-wrap mb-12">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Insights</span>
              <h2 className="mt-4 text-3xl md:text-4xl text-ink text-balance max-w-2xl">Field notes from the frontlines.</h2>
              <p className="mt-2 text-slate text-sm sm:text-base max-w-xl">
                Real-world perspectives on AI deployment, resilient software architecture, and technology leadership.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/insights" className="text-brand-navy font-semibold red-underline inline-flex items-center gap-1.5">
              <span>All posts</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.06}>
              <article className="group h-full flex flex-col rounded-2xl border border-border bg-background overflow-hidden hover:shadow-[var(--shadow-elegant)] hover:border-brand-navy/30 transition-all duration-300">
                {/* Relevant Article Photo */}
                <Link to="/insights/$slug" params={{ slug: post.slug }} className="block relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={getInsightImage(post)}
                    alt={post.heroAlt || post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider bg-white/95 text-brand-navy shadow-sm backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {post.category}
                  </span>
                  <span className="absolute bottom-3 right-3 text-xs font-medium text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    {post.readTime} read
                  </span>
                </Link>

                {/* Article Info & Read Button */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-ink group-hover:text-brand-navy transition-colors line-clamp-2 leading-snug">
                      <Link to="/insights/$slug" params={{ slug: post.slug }} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2.5 text-sm text-slate line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Dedicated Button to Go to Post */}
                  <div className="mt-6 pt-4 border-t border-border/80">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full justify-between rounded-xl bg-slate-50 hover:bg-brand-navy text-brand-navy hover:text-white border-slate-200 hover:border-brand-navy font-semibold transition-all duration-200 group/btn shadow-2xs"
                    >
                      <Link to="/insights/$slug" params={{ slug: post.slug }}>
                        <span>Read article</span>
                        <ArrowRight className="h-4 w-4 text-brand-sky group-hover/btn:text-white transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-full px-8 py-6 font-bold text-brand-navy border-2 border-brand-navy/20 hover:bg-brand-navy hover:text-white transition-all shadow-sm"
          >
            <Link to="/insights">
              <span>View all {insights.length} articles</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsCarousel() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((prev) => (prev + d + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32">
      <div className="container-x max-w-4xl">
        <Reveal>
          <div className="text-center">
            <Quote className="mx-auto h-8 w-8 text-brand-red" />
          </div>
        </Reveal>

        <div className="mt-8 relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-extrabold text-ink text-balance leading-snug">
                “{t.quote}”
              </p>
              <footer className="mt-8 text-sm text-slate">
                <span className="font-semibold text-ink">{t.author}</span> · {t.role}, {t.company}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button aria-label="Previous testimonial" onClick={() => go(-1)} className="h-11 w-11 rounded-full border border-border hover:bg-paper flex items-center justify-center">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-brand-red" : "w-4 bg-border"}`}
              />
            ))}
          </div>
          <button aria-label="Next testimonial" onClick={() => go(1)} className="h-11 w-11 rounded-full border border-border hover:bg-paper flex items-center justify-center">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl surface-dark p-10 md:p-16">
          <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-mesh)" }} />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-red/20 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl text-paper text-balance">Ready to build the future?</h2>
              <p className="mt-4 text-paper/70">
                Let's discuss how technology can accelerate your business.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-semibold border-0 h-12 px-6 shadow-md">
                <Link to="/contact">Book a discovery call <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 border-white/25 bg-white/5 text-paper hover:bg-white/10 hover:text-paper">
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
