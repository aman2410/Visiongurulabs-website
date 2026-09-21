import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { insights, getInsightImage } from "@/lib/site-data";
import { CtaBanner } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Insights", href: "/insights" },
];

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — AI, Software Engineering & Product | VisionGuru Labs" },
      { name: "description", content: "Field notes on AI adoption, software architecture, startup operating models, and the technology trends shaping the next decade." },
      { property: "og:title", content: "Insights — VisionGuru Labs" },
      { property: "og:description", content: "Writing from the frontlines of AI and software engineering." },
      { property: "og:url", content: "https://guru-spark-vision.lovable.app/insights" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Insights — VisionGuru Labs" },
      { name: "twitter:description", content: "Writing from the frontlines of AI and software engineering." },
    ],
    links: [{ rel: "canonical", href: "https://guru-spark-vision.lovable.app/insights" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(crumbs)),
      },
    ],
  }),
  component: InsightsPage,
});

const PAGE_SIZE = 6;

function InsightsPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(insights.map((p) => p.category)))],
    [],
  );
  const [category, setCategory] = useState<string>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (category === "All" ? insights : insights.filter((p) => p.category === category)),
    [category],
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const selectCategory = (c: string) => {
    setCategory(c);
    setPage(1);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title="Writing from the frontlines."
        subtitle="Perspectives on AI, software engineering, product, and the operating models that make technology stick."
      />
      <Breadcrumbs crumbs={crumbs} />
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-center gap-2 mb-10" role="group" aria-label="Filter posts by category">
            {categories.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => selectCategory(c)}
                  aria-pressed={active}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-colors",
                    active
                      ? "bg-brand-navy text-paper border-brand-navy"
                      : "bg-background text-slate border-border hover:border-brand-navy hover:text-brand-navy",
                  )}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {paged.length === 0 ? (
            <p className="text-slate">No posts in this category yet.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paged.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.05}>
                  <article className="group h-full flex flex-col rounded-2xl border border-border bg-background overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-shadow">
                    <Link to="/insights/$slug" params={{ slug: post.slug }} className="flex-1 flex flex-col">
                      <div className="h-48 sm:h-52 overflow-hidden relative bg-slate-900">
                        <img
                          src={getInsightImage(post)}
                          alt={post.heroAlt || post.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider bg-white/95 text-brand-navy shadow-sm backdrop-blur-md px-3 py-1 rounded-full border border-white/20">{post.category}</span>
                        <span className="absolute bottom-3 right-3 text-xs font-medium text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md">{post.readTime} read</span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h2 className="text-lg font-extrabold text-ink group-hover:text-brand-navy transition-colors line-clamp-2 leading-snug">{post.title}</h2>
                          <p className="mt-2 text-sm text-slate line-clamp-2 leading-relaxed">{post.excerpt}</p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-border/80">
                          <div className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-50 group-hover:bg-brand-navy text-brand-navy group-hover:text-white font-semibold text-sm transition-all duration-200 border border-slate-200/80 group-hover:border-brand-navy shadow-2xs">
                            <span>Read article</span>
                            <ArrowRight className="h-4 w-4 text-brand-sky group-hover:text-white transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Pagination">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  aria-current={n === currentPage ? "page" : undefined}
                  className={cn(
                    "h-9 min-w-9 px-3 rounded-md text-sm font-semibold border transition-colors",
                    n === currentPage
                      ? "bg-brand-navy text-paper border-brand-navy"
                      : "bg-background text-slate border-border hover:border-brand-navy hover:text-brand-navy",
                  )}
                >
                  {n}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </nav>
          )}
        </div>
      </section>
      <CtaBanner />
    </PageShell>
  );
}
