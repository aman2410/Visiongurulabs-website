import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/site-data";
import { getService, getServiceDetail, type ServiceDetail } from "@/lib/services-data";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    const detail = getServiceDetail(params.slug);
    const service = getService(params.slug);
    if (!detail || !service) throw notFound();
    return { detail, title: service.title, description: service.description };
  },
  head: ({ params, loaderData }) => {
    const url = `${SITE_URL}/services/${params.slug}`;
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found | VisionGuru Labs" },
          { name: "robots", content: "noindex,follow" },
        ],
      };
    }
    const d = loaderData.detail;
    const title = `${d.seoTitle} | VisionGuru Labs`;
    return {
      meta: [
        { title },
        { name: "description", content: d.seoDescription },
        { name: "keywords", content: d.keywords.join(", ") },
        { name: "robots", content: "index,follow,max-image-preview:large" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: d.seoDescription },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "VisionGuru Labs" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: d.seoDescription },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: loaderData.title,
            serviceType: loaderData.title,
            description: d.seoDescription,
            url,
            provider: { "@type": "Organization", name: "VisionGuru Labs", url: SITE_URL },
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${loaderData.title} offerings`,
              itemListElement: d.subServices.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.title, description: s.description, url: `${url}/${s.slug}` },
              })),
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: loaderData.title, href: `/services/${params.slug}` },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="container-x py-32 text-center">
        <h1 className="text-4xl font-extrabold text-ink">Service not found</h1>
        <p className="mt-4 text-slate">This service may have been renamed or moved.</p>
        <Button asChild className="mt-8 bg-brand-navy hover:bg-brand-navy/90 text-paper">
          <Link to="/services">All services</Link>
        </Button>
      </div>
    </PageShell>
  ),
});

function ServiceDetailPage() {
  const { detail, title, description } = Route.useLoaderData() as {
    detail: ServiceDetail;
    title: string;
    description: string;
  };
  const Icon = getService(detail.slug)!.icon;

  return (
    <PageShell>
      <section className="relative surface-dark pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-mesh)" }} />
        <div className="container-x relative max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky">Services</span>
          <h1 className="mt-4 text-4xl md:text-6xl text-paper text-balance">{title}</h1>
          <p className="mt-6 text-lg text-paper/70 max-w-2xl text-balance">{detail.tagline} — {description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-semibold shadow-sm h-12 px-6 transition-transform active:scale-95">
              <Link to="/contact">
                <MessageSquare className="h-4 w-4" /> Discuss a project
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass-dark" className="h-12 px-6 font-semibold">
              <a href="#offerings">
                See what we deliver <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: title },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-ink">What is {title.toLowerCase()}?</h2>
              <p className="mt-4 text-lg text-slate">{detail.intro}</p>
              {detail.overview.map((p) => (
                <p key={p} className="mt-4 text-slate">{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-border bg-background p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-ink">Typical outcomes</h2>
              <dl className="mt-6 space-y-6">
                {detail.outcomes.map((o) => (
                  <div key={o.label}>
                    <dt className="text-sm text-slate">{o.label}</dt>
                    <dd className="text-3xl font-extrabold text-brand-navy">{o.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="offerings" className="scroll-mt-24 py-16 lg:py-24 bg-muted/40">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink">What we deliver</h2>
          <p className="mt-3 text-slate max-w-2xl">Each area below is a full engagement in its own right. Open one to see scope, deliverables, and answers to the questions clients ask first.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {detail.subServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-background p-8 hover:shadow-[var(--shadow-elegant)] transition-shadow">
                  <h3 className="text-xl font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-3 text-slate flex-1">{s.description}</p>
                  <ul className="mt-5 space-y-2">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-slate">
                        <Check className="h-4 w-4 shrink-0 text-brand-sky" /> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/services/$slug/$sub"
                      params={{ slug: detail.slug, sub: s.slug }}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navy red-underline"
                    >
                      See {s.title} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink">Capabilities</h2>
            <ul className="mt-6 space-y-3">
              {detail.capabilities.map((c) => (
                <li key={c} className="flex gap-3 text-slate">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-red" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-ink">Technologies we use</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {detail.stack.map((t) => (
                <li key={t} className="rounded-full border border-border px-3 py-1 text-sm text-slate">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink">Frequently asked questions</h2>
          <dl className="mt-8 divide-y divide-border">
            {detail.faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="text-lg font-bold text-ink">{f.q}</dt>
                <dd className="mt-2 text-slate">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <h2 className="text-3xl font-extrabold text-ink">Related services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {detail.related.map((slug) => {
              const rel = getService(slug);
              const relDetail = getServiceDetail(slug);
              if (!rel || !relDetail) return null;
              return (
                <Link
                  key={slug}
                  to="/services/$slug"
                  params={{ slug }}
                  className="group rounded-2xl border border-border bg-background p-6 hover:shadow-[var(--shadow-elegant)] transition-shadow"
                >
                  <h3 className="text-lg font-extrabold text-ink">{rel.title}</h3>
                  <p className="mt-2 text-sm text-slate">{rel.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-navy">
                    See service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageShell>
  );
}
