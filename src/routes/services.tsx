import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { services, SITE_URL } from "@/lib/site-data";
import { CtaBanner } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ArrowRight, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Custom Software, AI & SaaS Development | VisionGuru Labs" },
      { name: "description", content: "Custom software development, AI consulting, SaaS, mobile, staff augmentation, and digital transformation from a senior engineering partner." },
      { property: "og:title", content: "Services — VisionGuru Labs" },
      { property: "og:description", content: "Ten disciplines. One senior partner across strategy, engineering, and AI." },
      { property: "og:url", content: `${SITE_URL}/services` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Services — VisionGuru Labs" },
      { name: "twitter:description", content: "Ten disciplines. One senior partner across strategy, engineering, and AI." },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "VisionGuru Labs services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: `${SITE_URL}/services/${s.slug}`,
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Ten disciplines. One senior partner."
        subtitle="From board-level strategy to production engineering, we cover the full arc of building modern software and AI systems."
      />
      <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 0.03}>
                <div className="group h-full rounded-2xl border border-border bg-background p-8 hover:shadow-[var(--shadow-elegant)] transition-shadow">
                  <div className="flex items-start gap-5">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-paper transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-extrabold text-ink">{s.title}</h2>
                      <p className="mt-2 text-slate">{s.description}</p>
                      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navy red-underline"
                        >
                          See {s.title} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-red red-underline">
                          <MessageSquare className="h-4 w-4" /> Discuss a project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CtaBanner />
    </PageShell>
  );
}

