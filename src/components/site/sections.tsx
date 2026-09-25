import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Check, X, Quote, ChevronLeft, ChevronRight, Sparkles,
  Play, Pause, Zap, ShieldCheck, Cpu, Bot, MessageSquare, Network,
  Layers, ArrowUpRight, Filter, Building2, CheckCircle2, Lock, TrendingUp,
  GraduationCap, Scale, FileText, FileCheck, Orbit, Workflow, Wrench,
  DownloadCloud, Trash2,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { HeroFlow } from "./HeroFlow";
import { CaseStudyCard } from "./CaseStudyCard";
import {
  services, industries, processSteps, aiCapabilities, team,
  insights, testimonials, stats, comparison, getInsightImage,
} from "@/lib/site-data";
import { allCaseStudies } from "@/lib/case-studies-data";
import { clientLogos } from "@/lib/client-logos";
import heroBg from "@/assets/hero-network.jpg";
import aiBg from "@/assets/ai-backdrop.jpg";
import indianArmyShield from "@/assets/clients/indian-army-shield.png";
import moilLogo from "@/assets/clients/moil-crest.png";
import isroLogo from "@/assets/clients/isro-space-research.svg";
import drdoLogo from "@/assets/clients/drdo-emblem.png";

export function ClientsStrip() {
  const [isPaused, setIsPaused] = useState(false);

  const row = (dup: boolean) => (
    <div
      className={`flex shrink-0 animate-marquee items-center gap-6 pr-6 md:gap-8 md:pr-8 ${isPaused ? "marquee-paused" : ""}`}
      aria-hidden={dup || undefined}
    >
      {clientLogos.map((client) => {
        const content = (
          <img
            src={client.logo}
            alt={dup ? "" : `${client.name} logo`}
            loading="lazy"
            decoding="async"
            width={260}
            height={64}
            className="h-10 md:h-12 w-auto shrink-0 opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 object-contain"
          />
        );

        const allUrls = client.urls && client.urls.length > 0 ? client.urls : (client.url ? [client.url] : []);
        const primaryUrl = allUrls[0];
        const titleText = allUrls.length > 1
          ? `${client.name} - Open websites (${allUrls.map(u => u.replace(/^https?:\/\//, '').replace(/\/$/, '')).join(' & ')})`
          : `${client.name} - Visit Website`;

        return primaryUrl ? (
          <a
            key={dup ? `${client.name}-dup` : client.name}
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={titleText}
            onClick={(e) => {
              if (allUrls.length > 1) {
                for (let i = 1; i < allUrls.length; i++) {
                  window.open(allUrls[i], "_blank", "noopener,noreferrer");
                }
              }
            }}
            className="flex items-center justify-center shrink-0 h-16 md:h-20 px-6 rounded-2xl bg-white border border-border/80 shadow-2xs hover:border-brand-navy/40 hover:shadow-xs transition-all duration-300 group cursor-pointer"
          >
            {content}
          </a>
        ) : (
          <div
            key={dup ? `${client.name}-dup` : client.name}
            className="flex items-center justify-center shrink-0 h-16 md:h-20 px-6 rounded-2xl bg-white border border-border/80 shadow-2xs hover:border-brand-navy/40 hover:shadow-xs transition-all duration-300 group cursor-default"
          >
            {content}
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="py-16 lg:py-24 border-y border-border bg-paper overflow-hidden relative">
      <div className="container-x">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-3.5 py-1 text-xs font-semibold text-brand-navy shadow-2xs mb-4">
            <ShieldCheck className="h-4 w-4 text-brand-red" />
            <span>National Defense, Aerospace & Sovereign Enterprise Trust</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink text-balance">
            Battle-tested where failure is <span className="text-brand-red">never an option</span>.
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate text-balance leading-relaxed">
            From India’s armed forces and space agency to premier defense research and sovereign public enterprises, our team brings hands-on engineering pedigree to high-stakes, mission-critical initiatives.
          </p>
        </div>

        {/* Team Scale Experience Highlight Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-2xl bg-gradient-to-r from-brand-navy/[0.05] via-white to-brand-red/[0.04] border-2 border-brand-navy/15 p-4 sm:p-5 shadow-2xs flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <Sparkles className="h-5 w-5 text-amber-300" />
            </div>
            <div className="text-center sm:text-left flex-1 min-w-0">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center justify-center sm:justify-start gap-2">
                <span>Enterprise & Sovereign Systems Pedigree</span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="text-sm md:text-base font-semibold text-ink mt-1 leading-snug">
                Our team is experienced in delivering large-scale, high-reliability engineering solutions for sovereign institutions: from <span className="text-brand-red font-bold">Indian Army</span> training platforms and <span className="text-brand-navy font-bold">ISRO</span> space-grade PCB automation to <span className="text-brand-navy font-bold">DRDO</span> tactical remote operations and <span className="text-brand-navy font-bold">MOIL</span> AI claims adjudication.
              </p>
            </div>
          </div>
        </div>

        {/* Flagship Spotlight Cards: Indian Army, ISRO, DRDO & MOIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {/* Card 1: Indian Army */}
          <div className="relative rounded-2xl border-2 border-brand-navy/20 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-navy/40 flex flex-col justify-between h-full group">
            <div>
              <div className="flex items-start gap-5">
                <div className="h-20 w-20 md:h-24 md:w-24 shrink-0 rounded-2xl bg-paper border border-border/80 flex items-center justify-center p-2.5 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={indianArmyShield}
                    alt="Indian Army Insignia"
                    className="h-full w-auto object-contain drop-shadow-xs"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-red-50 text-brand-red border border-red-200/70 px-2.5 py-0.5 text-[11px] font-bold tracking-wide uppercase">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-red" />
                    <span>National Armed Forces</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight mt-1.5">
                    Indian Army
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-slate tracking-wide uppercase mt-0.5">
                    Institutional LMS & Training Management System
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs md:text-sm text-slate leading-relaxed">
                Developing an enterprise-grade Learning Management System (LMS) for an Indian Army-related institutional organization. Manages personnel, training batches, courses, examinations, attendance, and administrative approvals with multi-tier RBAC and a modular architecture built to evolve without rewrites.
              </p>

              <div className="my-5 border-t border-border/70" />

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-ink mb-2.5">
                  Core Workflows & Capabilities:
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <GraduationCap className="h-3.5 w-3.5 text-brand-navy" /> Training Batches & Personnel
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-red" /> Hierarchical Military RBAC
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <FileCheck className="h-3.5 w-3.5 text-emerald-600" /> Assessments & Results Tracking
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <Layers className="h-3.5 w-3.5 text-brand-sky" /> Modular Adaptable Architecture
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <Link
                to="/case-studies/$slug"
                params={{ slug: "indian-army-lms" }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-red transition-colors group/link"
              >
                <span>Explore Project Breakdown & Architecture</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1 text-brand-red" />
              </Link>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-ink">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>100% Audited · Air-Gapped Ready</span>
              </div>
            </div>
          </div>

          {/* Card 2: ISRO (Indian Space Research Organisation) */}
          <div className="relative rounded-2xl border-2 border-brand-navy/20 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-navy/40 flex flex-col justify-between h-full group">
            <div>
              <div className="flex items-start gap-5">
                <div className="h-20 w-20 md:h-24 md:w-24 shrink-0 rounded-2xl bg-paper border border-border/80 flex items-center justify-center p-2.5 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={isroLogo}
                    alt="ISRO Logo"
                    className="h-full w-auto object-contain drop-shadow-xs"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 text-amber-700 border border-amber-200/70 px-2.5 py-0.5 text-[11px] font-bold tracking-wide uppercase">
                    <Orbit className="h-3.5 w-3.5 text-amber-600" />
                    <span>Government · Space Technology</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight mt-1.5">
                    ISRO
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-slate tracking-wide uppercase mt-0.5">
                    DIGEFAB · Space-Grade PCB Fabrication Automation
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs md:text-sm text-slate leading-relaxed">
                Technology-driven process automation for Printed Circuit Board (PCB) fabrication within ISRO's specialized space-grade cleanroom environment. Automates multi-stage fabrication workflows, CAM/Gerber validation, chemical etching, CNC micro-drilling, SMT placement, and real-time Automated Optical Inspection (AOI) quality gates.
              </p>

              <div className="my-5 border-t border-border/70" />

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-ink mb-2.5">
                  Core Workflows & Capabilities:
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <Cpu className="h-3.5 w-3.5 text-brand-navy" /> Manufacturing Process Automation
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <Layers className="h-3.5 w-3.5 text-amber-600" /> PCB Fabrication Lifecycle
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <Workflow className="h-3.5 w-3.5 text-emerald-600" /> Cleanroom Workflow Automation
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-sky" /> Space-Grade Quality Gates
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <Link
                to="/case-studies/$slug"
                params={{ slug: "isro-digefab-automation" }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-red transition-colors group/link"
              >
                <span>Explore Project Breakdown & Architecture</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1 text-brand-red" />
              </Link>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-ink">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Air-Gapped Ready · Zero-Defect Standard</span>
              </div>
            </div>
          </div>

          {/* Card 3: DRDO (Defence Research and Development Organisation) */}
          <div className="relative rounded-2xl border-2 border-brand-navy/20 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-navy/40 flex flex-col justify-between h-full group">
            <div>
              <div className="flex items-start gap-5">
                <div className="h-20 w-20 md:h-24 md:w-24 shrink-0 rounded-2xl bg-paper border border-border/80 flex items-center justify-center p-2.5 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={drdoLogo}
                    alt="DRDO Emblem"
                    className="h-full w-auto object-contain drop-shadow-xs"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 text-brand-navy border border-blue-200/70 px-2.5 py-0.5 text-[11px] font-bold tracking-wide uppercase">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-navy" />
                    <span>Government · Defence Research</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight mt-1.5">
                    DRDO
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-slate tracking-wide uppercase mt-0.5">
                    UWM · Unified Workflow & Remote Operations
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs md:text-sm text-slate leading-relaxed">
                Unified Workflow Management (UWM) engineered for tactical defense infrastructure and secure nodes. Delivers end-to-end operational capabilities including encrypted remote troubleshooting, cryptographically signed remote software installation, certified zero-residue uninstallation, and dual-custody workflow orchestration.
              </p>

              <div className="my-5 border-t border-border/70" />

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-ink mb-2.5">
                  Core Workflows & Capabilities:
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <Workflow className="h-3.5 w-3.5 text-brand-navy" /> Workflow Management
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <Wrench className="h-3.5 w-3.5 text-brand-red" /> Remote Troubleshooting
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <DownloadCloud className="h-3.5 w-3.5 text-emerald-600" /> Remote Software Installation
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <Trash2 className="h-3.5 w-3.5 text-amber-600" /> Zero-Residue Uninstallation
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <Link
                to="/case-studies/$slug"
                params={{ slug: "drdo-unified-workflow-management" }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-red transition-colors group/link"
              >
                <span>Explore Project Breakdown & Architecture</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1 text-brand-red" />
              </Link>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-ink">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Dual-Custody · mTLS Encrypted</span>
              </div>
            </div>
          </div>

          {/* Card 4: MOIL Limited */}
          <div className="relative rounded-2xl border-2 border-brand-navy/20 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-navy/40 flex flex-col justify-between h-full group">
            <div>
              <div className="flex items-start gap-5">
                <div className="h-20 w-20 md:h-24 md:w-24 shrink-0 rounded-2xl bg-paper border border-border/80 flex items-center justify-center p-2.5 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={moilLogo}
                    alt="MOIL Logo"
                    className="h-full w-auto object-contain drop-shadow-xs"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 text-brand-navy border border-blue-200/70 px-2.5 py-0.5 text-[11px] font-bold tracking-wide uppercase">
                    <Building2 className="h-3.5 w-3.5 text-brand-navy" />
                    <span>Miniratna PSU · Ministry of Steel</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight mt-1.5">
                    MOIL Limited
                  </h3>
                  <p className="text-xs md:text-sm font-bold text-brand-navy tracking-wide uppercase mt-0.5">
                    A Government of India Enterprise
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs md:text-sm text-slate leading-relaxed">
                AI-assisted healthcare billing and claim adjudication POC system for MOIL (Manganese Ore India Limited). Ingests multi-format medical bills, extracts line items via Document AI / OCR, normalizes medical terminology against official CGHS Rate Lists, detects overbilling, and provides explainable AI adjudication.
              </p>

              <div className="my-5 border-t border-border/70" />

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-ink mb-2.5">
                  Core Workflows & Capabilities:
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <FileText className="h-3.5 w-3.5 text-brand-navy" /> Document AI & Bill Ingestion
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <Scale className="h-3.5 w-3.5 text-brand-red" /> CGHS Rate-List Rule Engine
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> Discrepancy & Overbilling Audit
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy border border-border/80">
                    <Lock className="h-3.5 w-3.5 text-brand-sky" /> Explainable AI & On-Premise Privacy
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <Link
                to="/case-studies/$slug"
                params={{ slug: "moil-ai-medical-billing" }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-red transition-colors group/link"
              >
                <span>Explore Project Breakdown & Architecture</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1 text-brand-red" />
              </Link>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-ink">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Turnaround: Weeks to Minutes · 100% CGHS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Subheader & Controls */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border/70">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
              Trusted Across Defense, Space, Healthcare & High-Growth Startups
            </span>
            <p className="text-xs text-muted-ink mt-0.5">
              Over 20+ specialized engagements delivered with senior-level architectural rigor
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-white px-3.5 py-1 text-xs font-medium text-slate hover:bg-paper hover:text-ink transition-colors shadow-2xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-navy self-start sm:self-auto"
            aria-label={isPaused ? "Resume client logo carousel" : "Pause client logo carousel"}
          >
            {isPaused ? <Play className="h-3 w-3 text-brand-red" /> : <Pause className="h-3 w-3 text-brand-navy" />}
            <span>{isPaused ? "Play" : "Pause"}</span>
          </button>
        </div>
      </div>

      {/* Enlarged High-Visibility Continuous Marquee Stream */}
      <div className="marquee-container relative flex overflow-hidden">
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
                <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-semibold border-0 h-12 px-6 shadow-sm transition-transform active:scale-95 hover:scale-[1.02]">
                  <Link to="/contact">Talk to a Guru <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="glass-dark" className="h-12 px-6 font-semibold transition-transform active:scale-95 hover:scale-[1.02]">
                  <Link to="/case-studies">View our work <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
              </div>

              {/* UI/UX Pro Max Heuristic: Executive Value Proof Strip */}
              <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-brand-sky shadow-inner">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-paper">0 Ramp-Up Tax</div>
                    <div className="text-[11px] text-paper/60">Day-1 velocity execution</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-brand-red shadow-inner">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-paper">100% Senior Bench</div>
                    <div className="text-[11px] text-paper/60">Only veteran practitioners</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-emerald-400 shadow-inner">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-paper">Production in 90 Days</div>
                    <div className="text-[11px] text-paper/60">From roadmap to scale</div>
                  </div>
                </div>
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
            <Link to="/services" className="text-brand-navy font-semibold red-underline inline-flex items-center gap-1.5">
              <span>View all 10 services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* UI/UX Pro Max: Apple-Style Asymmetric Bento Box Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Bento Featured Hero Card: AI Solutions & Autonomous Systems (Spans 2 cols) */}
          <div className="md:col-span-2 lg:col-span-2">
            <Reveal delay={0.04}>
              <div className="bento-glow group h-full rounded-3xl border border-border/80 bg-background p-8 sm:p-10 shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-paper shadow-sm">
                      <Cpu className="h-6 w-6 text-brand-sky" />
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-red/25 bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">
                      <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
                      Flagship Practice
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                    AI Solutions & Autonomous Systems
                  </h3>
                  <p className="mt-3 text-slate text-base leading-relaxed max-w-2xl">
                    Strategy, model adaptation, and production deployment of AI that directly drives business metrics. From multi-agent orchestration and domain-tuned RAG pipelines to enterprise-grade evaluation and guardrails.
                  </p>

                  {/* Visual Architecture Flow Chip Strip */}
                  <div className="mt-6 p-4 rounded-2xl bg-paper border border-border/70">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-muted-ink mb-2">Production AI Pipeline Architecture</div>
                    <div className="flex items-center gap-2 flex-wrap text-xs font-semibold text-slate">
                      <span className="px-2.5 py-1 rounded-lg bg-white border border-border shadow-2xs">Data & Docs</span>
                      <span className="text-brand-sky">→</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white border border-border shadow-2xs">Vector & Hybrid RAG</span>
                      <span className="text-brand-sky">→</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white border border-border shadow-2xs">Agentic Tool-Calling</span>
                      <span className="text-brand-sky">→</span>
                      <span className="px-2.5 py-1 rounded-lg bg-brand-navy text-white shadow-2xs">Live Guardrails</span>
                    </div>
                  </div>

                  {/* Capability Chips */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Autonomous Agents", "Enterprise RAG", "Fine-Tuning", "Computer Vision", "Guardrails & Eval"].map((tag) => (
                      <span key={tag} className="text-xs font-medium rounded-full bg-brand-navy/5 text-brand-navy px-3 py-1 border border-brand-navy/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                  <Link to="/services/ai-consulting" className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-red transition-colors">
                    Explore AI Practice <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-xs text-muted-ink font-medium">SOC2 & Enterprise Ready</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bento Card 2: Custom Software Engineering */}
          <div className="lg:col-span-1">
            <Reveal delay={0.08}>
              <div className="bento-glow group h-full rounded-3xl border border-border/80 bg-background p-8 shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-paper transition-colors mb-5">
                    <Layers className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-sky block mb-1">Core Engineering</span>
                  <h3 className="text-xl font-extrabold text-ink">Custom Software Development</h3>
                  <p className="mt-2 text-sm text-slate leading-relaxed">
                    Bespoke systems engineered around your mission-critical operations — from high-throughput internal platforms to distributed APIs.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Distributed Systems", "Event-Driven", "Zero-Downtime"].map((t) => (
                      <span key={t} className="text-[11px] font-medium rounded-md bg-slate-100 text-slate-700 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/services/custom-software" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-red transition-colors">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Bento Card 3: SaaS Product Development */}
          <div className="lg:col-span-1">
            <Reveal delay={0.12}>
              <div className="bento-glow group h-full rounded-3xl border border-border/80 bg-background p-8 shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-paper transition-colors mb-5">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-red block mb-1">0-to-1 Product</span>
                  <h3 className="text-xl font-extrabold text-ink">SaaS Product Development</h3>
                  <p className="mt-2 text-sm text-slate leading-relaxed">
                    End-to-end product builds — scalable multi-tenant architecture, intuitive UX, resilient billing, and frictionless onboarding.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Multi-Tenant", "Stripe / Auth", "Rapid MVP"].map((t) => (
                      <span key={t} className="text-[11px] font-medium rounded-md bg-slate-100 text-slate-700 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/services/saas" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-red transition-colors">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Bento Card 4: Digital Transformation & Cloud */}
          <div className="lg:col-span-1">
            <Reveal delay={0.16}>
              <div className="bento-glow group h-full rounded-3xl border border-border/80 bg-background p-8 shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-paper transition-colors mb-5">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">Modernization</span>
                  <h3 className="text-xl font-extrabold text-ink">Digital Transformation</h3>
                  <p className="mt-2 text-sm text-slate leading-relaxed">
                    Senior advisory and engineering to modernize legacy stacks, migrate to cloud-native platforms, and eliminate technical debt.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Cloud-Native", "Legacy Refactor", "FinOps"].map((t) => (
                      <span key={t} className="text-[11px] font-medium rounded-md bg-slate-100 text-slate-700 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/services/transformation" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-red transition-colors">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Bento Card 5: Staff Augmentation & Dedicated Pods */}
          <div className="lg:col-span-1">
            <Reveal delay={0.20}>
              <div className="bento-glow group h-full rounded-3xl border border-border/80 bg-background p-8 shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-paper transition-colors mb-5">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-navy block mb-1">Senior Bench</span>
                  <h3 className="text-xl font-extrabold text-ink">Staff Augmentation & Pods</h3>
                  <p className="mt-2 text-sm text-slate leading-relaxed">
                    Senior software engineers, AI researchers, and solution architects embedded into your sprints with zero onboarding friction.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Zero Ramp-Up", "Embedded Pods", "Senior ICs"].map((t) => (
                      <span key={t} className="text-[11px] font-medium rounded-md bg-slate-100 text-slate-700 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/services/staff-aug" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-red transition-colors">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Footer info bar for remaining capabilities */}
        <Reveal delay={0.25}>
          <div className="mt-10 p-6 rounded-2xl bg-background border border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate text-center sm:text-left">
              Also providing <span className="font-semibold text-ink">IT Manpower Services</span>, <span className="font-semibold text-ink">Executive Technical Search</span>, and <span className="font-semibold text-ink">24/7 Mission-Critical SLA Support</span>.
            </p>
            <Button asChild variant="outline" size="sm" className="rounded-xl shrink-0 font-semibold border-border hover:border-brand-navy text-brand-navy">
              <Link to="/services">Explore full catalog →</Link>
            </Button>
          </div>
        </Reveal>
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
    <section id="why-us" className="relative py-24 lg:py-32 bg-paper border-b border-border/40 overflow-hidden">
      <div className="container-x relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-brand-orange/10 text-brand-orange border border-brand-orange/20 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            Comparative Benchmark
          </div>
          <h2 className="text-3xl md:text-5xl text-ink font-bold tracking-tight text-balance max-w-3xl leading-[1.15]">
            Not another agency.{" "}
            <span className="text-brand-navy">A partner engineered for outcomes.</span>
          </h2>
          <p className="mt-4 text-slate text-base md:text-lg max-w-2xl leading-relaxed">
            See how our outcome-first engineering model compares directly with conventional agencies.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 mb-3 flex items-center justify-between text-xs text-muted-ink lg:hidden">
            <span className="inline-flex items-center gap-1 font-medium">
              <span>← Swipe horizontally to compare →</span>
            </span>
            <span className="font-semibold text-brand-navy">Outcome Model</span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="overflow-x-auto relative">
              <div className="min-w-[680px]">
                {/* 3 Columns Header Bar with Balanced Vertical Rhythm */}
                <div className="grid grid-cols-[1.1fr_1.3fr_1.5fr] border-b border-slate-200/80 items-stretch bg-slate-50/60">
                  {/* Column 1: Dimension */}
                  <div className="p-6 md:p-7 flex flex-col justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
                      01 // Evaluation Matrix
                    </span>
                    <span className="text-base md:text-lg font-bold text-slate-800 tracking-tight mt-4">
                      Core Dimension
                    </span>
                  </div>

                  {/* Column 2: Traditional Agencies */}
                  <div className="p-6 md:p-7 border-l border-slate-200/70 flex flex-col justify-between bg-slate-50/30">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
                      Industry Baseline
                    </span>
                    <span className="text-base md:text-lg font-bold text-slate-600 tracking-tight mt-4">
                      Traditional Agencies
                    </span>
                  </div>

                  {/* Column 3: VisionGuru Labs - Sophisticated Warm Architectural Highlight */}
                  <div className="p-6 md:p-7 bg-brand-orange/[0.06] border-l-2 border-brand-orange/70 relative flex flex-col justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-brand-orange text-white shadow-xs">
                        The Outcome Standard
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-orange font-semibold">
                        ROI Engineered
                      </span>
                    </div>
                    <span className="text-base md:text-lg font-extrabold text-brand-navy-deep tracking-tight mt-4">
                      VisionGuru Labs
                    </span>
                  </div>
                </div>

                {/* Rows */}
                {comparison.map((row, i) => (
                  <div
                    key={row.dimension}
                    className={`group grid grid-cols-[1.1fr_1.3fr_1.5fr] items-stretch ${
                      i > 0 ? "border-t border-slate-100" : ""
                    }`}
                  >
                    {/* Dimension Value with Swiss Index */}
                    <div className="p-5 md:p-6 text-sm sm:text-base flex items-center gap-3 bg-white group-hover:bg-slate-50/70 transition-colors">
                      <span className="text-xs font-mono text-slate-400 font-medium select-none">0{i + 1}</span>
                      <span className="font-semibold text-slate-900">{row.dimension}</span>
                    </div>

                    {/* Traditional Agency Value - Refined, Honest Baseline */}
                    <div className="p-5 md:p-6 border-l border-slate-100 bg-slate-50/20 group-hover:bg-slate-50/60 text-sm sm:text-base flex items-center gap-3 transition-colors">
                      <span className="text-slate-400 text-sm select-none font-mono">—</span>
                      <span className="font-normal text-slate-600">{row.agency}</span>
                    </div>

                    {/* VisionGuru Labs Value - Warm Elevated Architectural Cell */}
                    <div className="p-5 md:p-6 bg-brand-orange/[0.035] group-hover:bg-brand-orange/[0.06] border-l-2 border-brand-orange/70 text-sm sm:text-base flex items-center gap-3 transition-colors">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-xs">
                        <Check className="h-3 w-3 stroke-[2.5]" />
                      </span>
                      <span className="font-bold text-brand-navy-deep tracking-tight">{row.us}</span>
                    </div>
                  </div>
                ))}

                {/* Executive Benchmark Summary Footer */}
                <div className="p-4 sm:p-5 bg-slate-50/90 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brand-orange shrink-0" />
                    <span className="font-semibold text-slate-700">The VisionGuru Standard:</span>
                    <span>Direct senior engineering access · Outcome-guaranteed delivery milestones</span>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Engineered for Tangible ROI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CaseStudiesPreview() {
  const featured = allCaseStudies.slice(0, 3);

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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <CaseStudyCard caseStudy={c} />
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
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-sky/30 bg-brand-sky/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-sky mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Next-Gen AI Systems
          </div>
          <h2 className="text-3xl md:text-5xl text-paper text-balance max-w-3xl">
            Moving AI from demo theater to <span className="text-brand-sky">enterprise production</span>.
          </h2>
          <p className="mt-4 text-paper/70 max-w-2xl text-base md:text-lg">
            We engineer autonomous multi-agent systems, high-accuracy RAG architectures, and fine-tuned models with the governance and auditability that enterprise scale demands.
          </p>
        </Reveal>

        {/* UI/UX Pro Max: AI-Native Bento Showcase */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Bento Featured Card: Autonomous Multi-Agent Workflows (Spans 2 cols) */}
          <div className="md:col-span-2 lg:col-span-2">
            <Reveal delay={0.05}>
              <div className="bento-glow-dark group h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 sm:p-10 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sky/15 text-brand-sky border border-brand-sky/30 shadow-inner">
                      <Bot className="h-6 w-6" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Agentic Systems
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-paper tracking-tight">
                    Autonomous Multi-Agent Orchestration
                  </h3>
                  <p className="mt-3 text-paper/75 text-base leading-relaxed max-w-2xl">
                    Autonomous agentic workflows that break down complex objectives, formulate execution plans, execute targeted API/database tool calls, and self-correct with human oversight.
                  </p>

                  {/* Visual Agent Loop Strip */}
                  <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-brand-sky/80 mb-2">Agent Execution Lifecycle</div>
                    <div className="flex items-center gap-2 flex-wrap text-xs font-medium text-paper/90">
                      <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">Task Decomposition</span>
                      <span className="text-brand-sky">→</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">Tool Selection</span>
                      <span className="text-brand-sky">→</span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">Sandbox Evaluation</span>
                      <span className="text-brand-sky">→</span>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Verified Execution</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["ReAct Framework", "State Persistence", "Tool-Calling APIs", "Human-in-the-Loop", "Guardrails"].map((tag) => (
                      <span key={tag} className="text-xs font-medium rounded-full bg-white/5 text-paper/90 px-3 py-1 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <Link to="/services/ai-consulting" className="inline-flex items-center gap-2 text-sm font-bold text-brand-sky hover:text-white transition-colors">
                    Explore Agentic Frameworks <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-xs text-paper/50">Zero Latency Overhead</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bento Card 2: Production RAG & Semantic Retrieval */}
          <div className="lg:col-span-1">
            <Reveal delay={0.1}>
              <div className="bento-glow-dark group h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-sky border border-white/10 mb-5">
                    <Network className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-sky block mb-1">Knowledge Systems</span>
                  <h3 className="text-xl font-extrabold text-paper">Enterprise RAG & Hybrid Search</h3>
                  <p className="mt-2 text-sm text-paper/70 leading-relaxed">
                    Hybrid dense vector + sparse BM25 retrieval, automated chunking, cross-encoder reranking, and citation-grounded outputs with zero hallucinations.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Hybrid Search", "Vector Embeddings", "Zero Hallucination"].map((t) => (
                      <span key={t} className="text-[11px] font-medium rounded-md bg-white/5 text-paper/80 border border-white/10 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/services/ai-consulting" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-sky hover:text-white transition-colors">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Bento Card 3: Custom Fine-Tuning */}
          <div className="lg:col-span-1">
            <Reveal delay={0.15}>
              <div className="bento-glow-dark group h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-sky border border-white/10 mb-5">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">Proprietary Models</span>
                  <h3 className="text-xl font-extrabold text-paper">Model Tuning & Distillation</h3>
                  <p className="mt-2 text-sm text-paper/70 leading-relaxed">
                    Domain adaptation of open-weights models (Llama, Mistral, Qwen) using parameter-efficient LoRA/QLoRA for specialized business reasoning.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["LoRA / QLoRA", "Private On-Prem", "Data Privacy"].map((t) => (
                      <span key={t} className="text-[11px] font-medium rounded-md bg-white/5 text-paper/80 border border-white/10 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/services/ai-consulting" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-sky hover:text-white transition-colors">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Bento Card 4: Enterprise Copilots */}
          <div className="lg:col-span-1">
            <Reveal delay={0.2}>
              <div className="bento-glow-dark group h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-sky border border-white/10 mb-5">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-sky block mb-1">Conversational</span>
                  <h3 className="text-xl font-extrabold text-paper">Enterprise Copilots & Chat</h3>
                  <p className="mt-2 text-sm text-paper/70 leading-relaxed">
                    Domain-tuned conversational assistants integrated with ERP, CRM, databases, and collaboration apps with rigorous audit trails.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["ERP / CRM Sync", "Role-Based Access", "Omnichannel"].map((t) => (
                      <span key={t} className="text-[11px] font-medium rounded-md bg-white/5 text-paper/80 border border-white/10 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/services/ai-consulting" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-sky hover:text-white transition-colors">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Bento Card 5: Intelligent Process Automation */}
          <div className="lg:col-span-1">
            <Reveal delay={0.25}>
              <div className="bento-glow-dark group h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-sky border border-white/10 mb-5">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">Operations</span>
                  <h3 className="text-xl font-extrabold text-paper">Intelligent Process Automation</h3>
                  <p className="mt-2 text-sm text-paper/70 leading-relaxed">
                    Multimodal document processing, automated exception handling, and straight-through routing that eliminates repetitive manual tasks.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Document OCR", "Straight-Through", "80% Time Saved"].map((t) => (
                      <span key={t} className="text-[11px] font-medium rounded-md bg-white/5 text-paper/80 border border-white/10 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/services/ai-consulting" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-sky hover:text-white transition-colors">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const memberDomains: Record<string, { category: string; tags: string[] }> = {
  "A. Menon": {
    category: "Product & Strategy",
    tags: ["Product Strategy", "0-to-1 Roadmaps", "UX Architecture"],
  },
  "R. Iyer": {
    category: "Engineering & Architecture",
    tags: ["Distributed Systems", "Cloud-Native", "Zero-Downtime"],
  },
  "S. Kapoor": {
    category: "AI & Machine Learning",
    tags: ["LLM Tuning", "Autonomous Agents", "Enterprise RAG"],
  },
  "L. Fernandes": {
    category: "Product & Strategy",
    tags: ["GTM Engineering", "B2B Expansion", "Enterprise ROI"],
  },
};

export function TeamGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & Machine Learning", "Engineering & Architecture", "Product & Strategy"];

  const filteredTeam = team.filter((m) => {
    if (activeCategory === "All") return true;
    return memberDomains[m.name]?.category === activeCategory;
  });

  return (
    <section id="team-section" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Team</span>
            <h2 className="mt-4 text-3xl md:text-5xl text-ink text-balance">Meet the Gurus.</h2>
            <p className="mt-4 text-slate max-w-2xl text-base md:text-lg">A senior bench of product, engineering, AI, and growth operators.</p>
          </Reveal>

          {/* Interactive Category Filter Pills */}
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 flex-wrap" role="tablist" aria-label="Team domain filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-brand-navy text-white shadow-xs"
                      : "bg-paper text-slate hover:bg-slate-200/70 border border-border/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((m, i) => {
              const meta = memberDomains[m.name];
              return (
                <motion.div
                  key={m.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="bento-glow group rounded-3xl border border-border/80 bg-background overflow-hidden hover:shadow-xl hover:border-brand-navy/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                    <div className="aspect-[4/5] relative overflow-hidden bg-slate-900">
                      <img
                        src={m.image}
                        alt={`${m.name} — ${m.role}`}
                        style={{ objectPosition: m.imagePosition || "center 20%" }}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent opacity-80 group-hover:opacity-65 transition-opacity" />
                      <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider bg-white/95 text-brand-navy shadow-sm backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {m.role}
                      </span>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-2xl font-extrabold text-white tracking-tight">{m.name}</div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <p className="text-sm text-slate leading-relaxed">{m.bio}</p>

                      {meta && (
                        <div className="mt-5 pt-4 border-t border-border/70">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-ink mb-2">Key Specializations</div>
                          <div className="flex flex-wrap gap-1.5">
                            {meta.tags.map((tag) => (
                              <span key={tag} className="text-[10px] font-semibold rounded-md bg-brand-navy/5 text-brand-navy px-2 py-0.5 border border-brand-navy/10">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
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
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="h-11 w-11 rounded-full border border-border bg-background hover:bg-paper flex items-center justify-center cursor-pointer transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-navy shadow-2xs"
          >
            <ChevronLeft className="h-5 w-5 text-slate-700" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className="py-3 px-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-navy rounded-full"
              >
                <span className={`block h-1.5 rounded-full transition-all duration-300 ${idx === i ? "w-8 bg-brand-red" : "w-4 bg-slate-300 hover:bg-slate-400"}`} />
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="h-11 w-11 rounded-full border border-border bg-background hover:bg-paper flex items-center justify-center cursor-pointer transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-navy shadow-2xs"
          >
            <ChevronRight className="h-5 w-5 text-slate-700" />
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
              <Button asChild size="lg" variant="glass-dark" className="h-12 px-6 font-semibold transition-transform active:scale-95">
                <Link to="/contact">Contact us <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
