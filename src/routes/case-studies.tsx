import { useMemo } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { CtaBanner } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/site-data";
import {
  allCaseStudies as caseStudies,
  caseStudyIndustries,
  caseStudyServices,
  filterCaseStudies,
  CASE_STUDY_PAGE_SIZE,
} from "@/lib/case-studies-data";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
];

type CaseStudySearch = { industry?: string; service?: string; page?: number };

export const Route = createFileRoute("/case-studies")({
  validateSearch: (search: Record<string, unknown>): CaseStudySearch => ({
    industry: typeof search.industry === "string" ? search.industry : undefined,
    service: typeof search.service === "string" ? search.service : undefined,
    page: Number(search.page) > 1 ? Math.floor(Number(search.page)) : undefined,
  }),
  head: () => {
    const url = `${SITE_URL}/case-studies`;
    const title = "Case Studies — Measurable Outcomes | VisionGuru Labs";
    const description =
      "Detailed engineering case studies from VisionGuru Labs: the challenge, our approach, the architecture, and the measured business results.";
    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "VisionGuru Labs Case Studies",
      itemListElement: caseStudies.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/case-studies/${c.slug}`,
        name: c.title,
      })),
    };
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "index,follow,max-image-preview:large" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(itemList) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd(crumbs)) },
      ],
    };
  },
  component: CaseStudiesPage,
});

function Chip({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold transition-colors min-h-[40px]",
        active
          ? "border-brand-navy bg-brand-navy text-paper"
          : "border-border bg-background text-slate hover:border-brand-navy/40 hover:text-brand-navy",
      )}
    >
      {children}
    </button>
  );
}

function CaseStudiesPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/case-studies" });
  const industry = search.industry ?? "All";
  const service = search.service ?? "All";

  const filtered = useMemo(() => filterCaseStudies({ industry, service }), [industry, service]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / CASE_STUDY_PAGE_SIZE));
  const current = Math.min(Math.max(1, search.page ?? 1), totalPages);
  const visible = filtered.slice((current - 1) * CASE_STUDY_PAGE_SIZE, current * CASE_STUDY_PAGE_SIZE);

  const setIndustry = (value: string) =>
    navigate({ search: (prev) => ({ ...prev, industry: value === "All" ? undefined : value, page: undefined }) });
  const setService = (value: string) =>
    navigate({ search: (prev) => ({ ...prev, service: value === "All" ? undefined : value, page: undefined }) });
  const setPage = (value: number) =>
    navigate({ search: (prev) => ({ ...prev, page: value <= 1 ? undefined : value }) });
  const clearFilters = () => navigate({ search: {} });


  return (
    <PageShell>
      <PageHero
        eyebrow="Case Studies"
        title="Systems that shipped. Outcomes that stuck."
        subtitle="Full engagement write-ups: the problem, the architecture, and the numbers that moved."
      />
      <Breadcrumbs crumbs={crumbs} />

      <section className="py-14 lg:py-20">
        <div className="container-x">
          <div className="space-y-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-ink mb-3">Industry</div>
              <div className="flex flex-wrap gap-2">
                <Chip active={industry === "All"} onClick={() => setIndustry("All")}>All</Chip>
                {caseStudyIndustries.map((i) => (
                  <Chip key={i} active={industry === i} onClick={() => setIndustry(i)}>{i}</Chip>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-ink mb-3">Service</div>
              <div className="flex flex-wrap gap-2">
                <Chip active={service === "All"} onClick={() => setService("All")}>All</Chip>
                {caseStudyServices.map((s) => (
                  <Chip key={s} active={service === s} onClick={() => setService(s)}>{s}</Chip>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-ink" aria-live="polite">
            Showing {visible.length} of {filtered.length} case {filtered.length === 1 ? "study" : "studies"}
            {filtered.length > 0 && ` · Page ${current} of ${totalPages}`}
          </p>

          {visible.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-border bg-background p-12 text-center">
              <p className="text-slate">No case studies match those filters yet.</p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={clearFilters}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <article className="group h-full flex flex-col overflow-hidden rounded-3xl border border-border bg-background hover:shadow-[var(--shadow-elegant)] transition-shadow">
                    <Link
                      to="/case-studies/$slug"
                      params={{ slug: c.slug }}
                      className="block aspect-[16/10] overflow-hidden bg-brand-navy/5"
                    >
                      <img
                        src={c.heroImage.src}
                        alt={c.heroImage.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red">{c.industry}</span>
                      </div>
                      <h2 className="mt-3 text-xl font-extrabold text-ink leading-snug">
                        <Link to="/case-studies/$slug" params={{ slug: c.slug }} className="hover:text-brand-navy transition-colors">
                          {c.title}
                        </Link>
                      </h2>
                      <p className="mt-2 text-sm text-slate">{c.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {c.services.slice(0, 3).map((s) => (
                          <span key={s} className="rounded-full bg-brand-navy/5 px-2.5 py-1 text-[11px] text-brand-navy">{s}</span>
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
                </Reveal>
              ))}
            </div>
          )}

          {filtered.length > 0 && (
            <nav aria-label="Pagination" className="mt-14 flex items-center justify-center gap-2">
              <Button variant="outline" size="sm" disabled={current === 1} onClick={() => setPage(current - 1)}>
                <ChevronLeft className="h-4 w-4" /> Previous
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  aria-current={n === current ? "page" : undefined}
                  className={cn(
                    "h-10 min-w-10 rounded-lg border text-sm font-semibold transition-colors",
                    n === current
                      ? "border-brand-navy bg-brand-navy text-paper"
                      : "border-border bg-background text-slate hover:border-brand-navy/40",
                  )}
                >
                  {n}
                </button>
              ))}
              <Button variant="outline" size="sm" disabled={current === totalPages} onClick={() => setPage(current + 1)}>
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </nav>
          )}
        </div>
      </section>

      <CtaBanner />
    </PageShell>
  );
}
