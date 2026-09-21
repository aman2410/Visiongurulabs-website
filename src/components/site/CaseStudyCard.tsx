import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies-data";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  className?: string;
}

export function CaseStudyCard({ caseStudy: c, className = "" }: CaseStudyCardProps) {
  return (
    <article
      className={`group h-full flex flex-col overflow-hidden rounded-3xl border border-border bg-background hover:shadow-[var(--shadow-elegant)] transition-shadow ${className}`}
    >
      <Link
        to="/case-studies/$slug"
        params={{ slug: c.slug }}
        className="block aspect-[16/10] overflow-hidden bg-brand-navy/5 relative"
      >
        <img
          src={c.heroImage.src}
          alt={c.heroImage.alt}
          loading="lazy"
          decoding="async"
          width={640}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red">
            {c.industry}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-extrabold text-ink leading-snug">
          <Link
            to="/case-studies/$slug"
            params={{ slug: c.slug }}
            className="hover:text-brand-navy transition-colors"
          >
            {c.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-slate line-clamp-2">{c.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {c.services.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-full bg-brand-navy/5 px-2.5 py-1 text-[11px] text-brand-navy"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-5 rounded-xl bg-brand-navy/[0.04] px-4 py-3">
          <div className="text-xs uppercase tracking-wide text-muted-ink">Key outcome</div>
          <div className="mt-0.5 font-bold text-brand-navy">{c.primaryOutcome}</div>
        </div>
        <Link
          to="/case-studies/$slug"
          params={{ slug: c.slug }}
          className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-navy"
        >
          View Case Study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
