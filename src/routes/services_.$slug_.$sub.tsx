import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/site-data";
import { getService, getServiceDetail, getSubService, type ServiceDetail, type SubService } from "@/lib/services-data";

export const Route = createFileRoute("/services_/$slug_/$sub")({
  loader: ({ params }) => {
    const detail = getServiceDetail(params.slug);
    const service = getService(params.slug);
    const subService = getSubService(params.slug, params.sub);
    if (!detail || !service || !subService) throw notFound();
    return { detail, subService, parentTitle: service.title };
  },
  head: ({ params, loaderData }) => {
    const url = `${SITE_URL}/services/${params.slug}/${params.sub}`;
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found | VisionGuru Labs" },
          { name: "robots", content: "noindex,follow" },
        ],
      };
    }
    const { subService: s, parentTitle, detail } = loaderData;
    const title = `${s.title} | ${parentTitle} | VisionGuru Labs`;
    const description = s.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: [s.title, ...detail.keywords].join(", ") },
        { name: "robots", content: "index,follow,max-image-preview:large" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "VisionGuru Labs" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            serviceType: s.title,
            description,
            url,
            isRelatedTo: { "@type": "Service", name: parentTitle, url: `${SITE_URL}/services/${params.slug}` },
            provider: { "@type": "Organization", name: "VisionGuru Labs", url: SITE_URL },
            areaServed: "Worldwide",
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: parentTitle, href: `/services/${params.slug}` },
              { label: s.title, href: `/services/${params.slug}/${params.sub}` },
            ]),
          ),
        },
        ...(s.faqs.length
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: s.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }),
              },
            ]
          : []),
      ],
    };
  },
  component: SubServicePage,
  notFoundComponent: () => (
    <PageShell>
      <div className="container-x py-32 text-center">
        <h1 className="text-4xl font-extrabold text-ink">Service not found</h1>
        <p className="mt-4 text-slate">This offering may have been renamed or moved.</p>
        <Button asChild className="mt-8 bg-brand-navy hover:bg-brand-navy/90 text-paper">
          <Link to="/services">All services</Link>
        </Button>
      </div>
    </PageShell>
  ),
});

function SubServicePage() {
  const { detail, subService, parentTitle } = Route.useLoaderData() as {
    detail: ServiceDetail;
    subService: SubService;
    parentTitle: string;
  };
  const siblings = detail.subServices.filter((s) => s.slug !== subService.slug);

  return (
    <PageShell>
      <section className="relative surface-dark pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-mesh)" }} />
        <div className="container-x relative max-w-4xl">
          <Link to="/services/$slug" params={{ slug: detail.slug }} className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky hover:underline">
            {parentTitle}
          </Link>
          <h1 className="mt-4 text-4xl md:text-5xl text-paper text-balance">{subService.title}</h1>
          <p className="mt-6 text-lg text-paper/70 max-w-2xl text-balance">{subService.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-semibold shadow-sm">
              <Link to="/contact">
                <MessageSquare className="h-4 w-4" /> Discuss a project
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-paper/30 bg-transparent text-paper hover:bg-paper hover:text-brand-navy">
              <Link to="/services/$slug" params={{ slug: detail.slug }}>
                See all {parentTitle} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: parentTitle, href: `/services/${detail.slug}` },
          { label: subService.title },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div>
              <h2 className="text-3xl font-extrabold text-ink">What's included</h2>
              <ul className="mt-6 space-y-4">
                {subService.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-slate">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand-red" /> {b}
                  </li>
                ))}
              </ul>
              <h2 className="mt-12 text-3xl font-extrabold text-ink">How it fits together</h2>
              {detail.overview.map((p) => (
                <p key={p} className="mt-4 text-slate">{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <aside className="rounded-2xl border border-border bg-background p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-ink">More in {parentTitle}</h2>
              <ul className="mt-5 space-y-4">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug/$sub"
                      params={{ slug: detail.slug, sub: s.slug }}
                      className="group block"
                    >
                      <span className="font-bold text-ink group-hover:text-brand-navy">{s.title}</span>
                      <span className="mt-1 block text-sm text-slate">{s.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-8 flex flex-wrap gap-2">
                {detail.stack.slice(0, 6).map((t) => (
                  <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-slate">{t}</li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      {subService.faqs.length > 0 && (
        <section className="py-16 lg:py-24 bg-muted/40">
          <div className="container-x max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">Frequently asked questions</h2>
            <dl className="mt-8 divide-y divide-border">
              {subService.faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="text-lg font-bold text-ink">{f.q}</dt>
                  <dd className="mt-2 text-slate">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <CtaBanner />
    </PageShell>
  );
}
