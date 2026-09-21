import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { industries } from "@/lib/site-data";
import { CtaBanner } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" },
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Healthcare, BFSI, Manufacturing & More | VisionGuru Labs" },
      { name: "description", content: "Deep sector context across healthcare, BFSI, manufacturing, government, real estate, education, logistics, e-commerce, and recruitment." },
      { property: "og:title", content: "Industries we serve — VisionGuru Labs" },
      { property: "og:description", content: "Nine sectors, real domain fluency." },
      { property: "og:url", content: "https://guru-spark-vision.lovable.app/industries" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Industries we serve — VisionGuru Labs" },
      { name: "twitter:description", content: "Nine sectors, real domain fluency." },
    ],
    links: [{ rel: "canonical", href: "https://guru-spark-vision.lovable.app/industries" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(crumbs)),
      },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        title="Domain fluency, not just technical fluency."
        subtitle="We invest in understanding the regulatory, operational, and commercial context of every sector we serve."
      />
      <Breadcrumbs crumbs={crumbs} />
      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.name} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-border bg-background p-8">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-sky/10 text-brand-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-extrabold text-ink">{ind.name}</h2>
                  <p className="mt-2 text-slate">{ind.blurb}</p>
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
