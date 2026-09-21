import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, Users, X } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { CtaBanner } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/site-data";
import { getCaseStudyBySlug, getRelatedCaseStudies, type CaseStudy } from "@/lib/case-studies-data";

export const Route = createFileRoute("/case-studies_/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudyBySlug(params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ params, loaderData }) => {
    const url = `${SITE_URL}/case-studies/${params.slug}`;
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study not found | VisionGuru Labs" },
          { name: "robots", content: "noindex,follow" },
        ],
      };
    }
    const c = loaderData;
    const article = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      headline: c.title,
      description: c.seo.description,
      inLanguage: "en",
      about: c.industry,
      keywords: [...c.services, ...c.technologies].join(", "),
      author: { "@type": "Organization", name: "VisionGuru Labs" },
      publisher: {
        "@type": "Organization",
        name: "VisionGuru Labs",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      },
    };
    const crumbs = breadcrumbJsonLd([
      { label: "Home", href: "/" },
      { label: "Case Studies", href: "/case-studies" },
      { label: c.client },
    ]);
    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return {
      meta: [
        { title: c.seo.title },
        { name: "description", content: c.seo.description },
        { name: "keywords", content: c.technologies.join(", ") },
        { name: "robots", content: "index,follow,max-image-preview:large" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: c.seo.title },
        { property: "og:description", content: c.seo.description },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "VisionGuru Labs" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: c.seo.title },
        { name: "twitter:description", content: c.seo.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(article) },
        { type: "application/ld+json", children: JSON.stringify(crumbs) },
        ...(c.faqs.length ? [{ type: "application/ld+json", children: JSON.stringify(faq) }] : []),
      ],
    };
  },
  component: CaseStudyPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="container-x py-32 text-center">
        <h1 className="text-4xl font-extrabold text-ink">Case study not found</h1>
        <p className="mt-4 text-slate">This engagement may have moved or been renamed.</p>
        <Button asChild className="mt-8 bg-brand-navy hover:bg-brand-navy/90 text-paper">
          <Link to="/case-studies">Back to Case Studies</Link>
        </Button>
      </div>
    </PageShell>
  ),
});

function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      {eyebrow && <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">{eyebrow}</span>}
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-ink">{children}</h2>
    </div>
  );
}

function CaseStudyPage() {
  const c = Route.useLoaderData() as CaseStudy;
  const related = getRelatedCaseStudies(c.slug);

  return (
    <PageShell>
      <section className="relative surface-dark pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-mesh)" }} />
        <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky">{c.industry}</span>
            <h1 className="mt-4 text-4xl md:text-5xl text-paper text-balance">{c.title}</h1>
            <p className="mt-5 text-lg text-paper/70 max-w-xl">{c.summary}</p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-paper/70">
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-brand-sky" />{c.duration}</span>
              <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-brand-sky" />{c.team}</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-brand-red hover:bg-brand-red/90 text-white font-semibold shadow-sm">
                <Link to="/contact">Discuss a similar project</Link>
              </Button>
              <Button asChild variant="outline" className="border-paper/30 text-paper hover:bg-paper/10">
                <Link to="/case-studies">See all case studies</Link>
              </Button>
            </div>
          </div>
          <img
            src={c.heroImage.src}
            alt={c.heroImage.alt}
            className="rounded-3xl border border-paper/10 shadow-2xl w-full object-cover"
          />
        </div>
      </section>

      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: c.client },
        ]}
      />

      {/* At a glance */}
      <section className="py-14 border-b border-border">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {c.results.map((r) => (
            <div key={r.label} className="rounded-2xl border border-border bg-background p-6">
              <div className="text-4xl font-extrabold text-brand-navy">
                {r.prefix}
                <Counter to={Math.round(r.value)} suffix={r.suffix ?? ""} />
              </div>
              <div className="mt-2 text-sm text-muted-ink">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 lg:py-24">
        <div className="container-x max-w-4xl">
          <Reveal>
            <SectionTitle eyebrow="The Challenge">Where things stood</SectionTitle>
            <p className="text-lg text-slate">{c.challenge.context}</p>
            <p className="mt-4 text-lg text-slate">{c.challenge.problem}</p>
            <ul className="mt-6 space-y-3">
              {c.challenge.problemPoints.map((p) => (
                <li key={p} className="flex gap-3 text-slate">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <blockquote className="mt-8 border-l-4 border-brand-red pl-6 text-lg font-medium text-ink">
              {c.challenge.whyItMattered}
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 lg:py-24 bg-paper border-y border-border">
        <div className="container-x max-w-4xl">
          <Reveal>
            <SectionTitle eyebrow="Objectives">What we set out to achieve</SectionTitle>
            <ul className="grid gap-4 sm:grid-cols-2">
              {c.objectives.map((o) => (
                <li key={o} className="flex gap-3 rounded-2xl border border-border bg-background p-5 text-slate">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-navy" aria-hidden />
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal><SectionTitle eyebrow="Our Approach">How we ran the engagement</SectionTitle></Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {c.approach.map((s, i) => (
              <Reveal key={s.number} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-background p-6">
                  <div className="text-sm font-extrabold text-brand-red">{s.number}</div>
                  <h3 className="mt-2 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 lg:py-24 bg-paper border-y border-border">
        <div className="container-x max-w-5xl">
          <Reveal><SectionTitle eyebrow="The Solution">What we built</SectionTitle></Reveal>
          <div className="space-y-10">
            {c.solutionSections.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-background p-8">
                  <h3 className="text-2xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 text-slate">{s.body}</p>
                  {s.bullets && (
                    <ul className="mt-5 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-slate">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {c.images.length > 0 && (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {c.images.map((img) => (
                <figure key={img.alt} className="overflow-hidden rounded-2xl border border-border bg-background">
                  <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="w-full object-cover" />
                  {img.caption && <figcaption className="px-5 py-3 text-sm text-muted-ink">{img.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal><SectionTitle eyebrow="Technology">Architecture at a glance</SectionTitle></Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.architecture.map((a) => (
              <div key={a.label} className="rounded-2xl border border-border bg-background p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-ink">{a.label}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {a.items.map((t) => (
                    <span key={t} className="rounded-full bg-brand-navy/5 px-3 py-1 text-xs text-brand-navy">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      {c.beforeAfter && (
        <section className="py-16 lg:py-24 bg-paper border-y border-border">
          <div className="container-x max-w-4xl">
            <Reveal><SectionTitle eyebrow="Impact">Before and after</SectionTitle></Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-background p-8">
                <h3 className="text-lg font-bold text-brand-red">Before</h3>
                <ul className="mt-4 space-y-3">
                  {c.beforeAfter.before.map((b) => (
                    <li key={b} className="flex gap-3 text-slate"><X className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden />{b}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-brand-navy/20 bg-brand-navy/[0.03] p-8">
                <h3 className="text-lg font-bold text-brand-navy">After</h3>
                <ul className="mt-4 space-y-3">
                  {c.beforeAfter.after.map((b) => (
                    <li key={b} className="flex gap-3 text-slate"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" aria-hidden />{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Business impact */}
      {c.businessImpact && (
        <section className="py-16 lg:py-24">
          <div className="container-x">
            <Reveal><SectionTitle eyebrow="Business Value">What it meant commercially</SectionTitle></Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {c.businessImpact.map((b) => (
                <div key={b.title} className="rounded-2xl border border-border bg-background p-6">
                  <h3 className="text-lg font-bold text-ink">{b.title}</h3>
                  <p className="mt-2 text-sm text-slate">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {c.testimonial && (
        <section className="py-16 lg:py-20 surface-dark">
          <div className="container-x max-w-3xl text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-paper text-balance">
              “{c.testimonial.quote}”
            </blockquote>
            <div className="mt-6 text-sm text-paper/70">
              {c.testimonial.name} — {c.testimonial.role}, {c.testimonial.company}
            </div>
          </div>
        </section>
      )}

      {/* Services used */}
      <section className="py-16 lg:py-24">
        <div className="container-x max-w-4xl">
          <Reveal>
            <SectionTitle eyebrow="Services Involved">Capabilities behind this work</SectionTitle>
            <div className="flex flex-wrap gap-3">
              {c.serviceLinks.map((slug, i) => (
                <Link
                  key={slug}
                  to="/services/$slug"
                  params={{ slug }}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-brand-navy hover:border-brand-navy transition-colors"
                >
                  {c.services[i] ?? slug}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-brand-navy hover:border-brand-navy transition-colors"
              >
                {c.industry} industry
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-paper border-y border-border">
        <div className="container-x max-w-3xl">
          <Reveal><SectionTitle eyebrow="FAQ">Common questions</SectionTitle></Reveal>
          <div className="space-y-3">
            {c.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-background p-6">
                <summary className="cursor-pointer list-none font-bold text-ink min-h-[44px] flex items-center">{f.q}</summary>
                <p className="mt-3 text-slate">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container-x">
            <Reveal><SectionTitle eyebrow="More Work">Related case studies</SectionTitle></Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/case-studies/$slug"
                  params={{ slug: r.slug }}
                  className="group overflow-hidden rounded-2xl border border-border bg-background hover:shadow-[var(--shadow-elegant)] transition-shadow"
                >
                  <img src={r.heroImage.src} alt={r.heroImage.alt} loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover" />
                  <div className="p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red">{r.industry}</span>
                    <h3 className="mt-2 font-bold text-ink group-hover:text-brand-navy transition-colors">{r.title}</h3>
                    <p className="mt-2 text-sm text-slate">{r.primaryOutcome}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </PageShell>
  );
}
