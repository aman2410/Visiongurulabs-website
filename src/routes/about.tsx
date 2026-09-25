import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { AboutGraphic } from "@/components/site/hero-graphics";
import { TeamGrid, CtaBanner } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";
import { stats } from "@/lib/site-data";
import { Counter } from "@/components/site/Counter";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Strategic Technology Guides | VisionGuru Labs" },
      { name: "description", content: "VisionGuru Labs LLP: a senior team of product, engineering, AI, and growth operators helping businesses navigate the next era of software." },
      { property: "og:title", content: "About VisionGuru Labs" },
      { property: "og:description", content: "Vision. Guru. Labs. A senior partner for software and AI." },
      { property: "og:url", content: "https://visiongurulabs.com/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About VisionGuru Labs" },
      { name: "twitter:description", content: "Vision. Guru. Labs. A senior partner for software and AI." },
    ],
    links: [{ rel: "canonical", href: "https://visiongurulabs.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(crumbs)),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="Vision. Guru. Labs."
        subtitle="Three ideas that shape how we work: see what's coming, guide with expertise, and engineer solutions that ship."
        graphic={<AboutGraphic />}
      />
      <Breadcrumbs crumbs={crumbs} />
      <section className="py-20 lg:py-28">
        <div className="container-x max-w-3xl space-y-8 text-lg text-slate leading-relaxed">
          <Reveal>
            <p>
              VisionGuru Labs LLP was founded to close a gap we saw again and again: businesses had ambitious technology
              agendas, but the partners available to help them were either strategy houses that couldn't ship, or dev shops
              that couldn't strategize.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              We built a firm that does both. Senior engineers who have shipped at scale sit next to product and AI operators
              who have done the work — no juniors sold at senior rates, no hand-offs to teams you never met in the pitch.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              We work with startups shaping category-defining products, enterprises modernizing decades-old stacks, and
              governments building citizen services that actually work. Different scale, same standard.
            </p>
          </Reveal>
        </div>

        <div className="container-x mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div>
                <div className="text-4xl font-extrabold text-brand-navy"><Counter to={s.value} suffix={s.suffix} /></div>
                <div className="mt-1 text-sm text-muted-ink">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <TeamGrid />
      <CtaBanner />
    </PageShell>
  );
}
