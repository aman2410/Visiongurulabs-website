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
      { property: "og:url", content: "https://www.visiongurulabs.com/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About VisionGuru Labs" },
      { name: "twitter:description", content: "Vision. Guru. Labs. A senior partner for software and AI." },
    ],
    links: [{ rel: "canonical", href: "https://www.visiongurulabs.com/about" }],
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
        eyebrow="About VisionGuru Labs"
        title="Vision. Guru. Labs."
        subtitle="Three ideas that shape how we work: see what's coming, guide with deep expertise, and engineer mission-critical systems that scale."
        graphic={<AboutGraphic />}
      />
      <Breadcrumbs crumbs={crumbs} />
      <section className="py-20 lg:py-28 border-b border-border/70">
        <div className="container-x grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-lg text-slate leading-relaxed">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                From First Launch to Lifetime Partner
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-ink tracking-tight text-balance">
                Built on a Service-First Mindset. Engineered for Mission-Critical Scale.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                VisionGuru Labs LLP was founded to close a gap we saw again and again: organizations had ambitious technology
                agendas, but the partners available to help them were either strategy houses that couldn't ship, or dev shops
                that couldn't strategize.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                We built a multi-disciplinary firm that does both. Led by our founding team, principal architects, and domain Gurus,
                we combine strategic vision with hands-on execution — closely partnering with prestigious institutions like the{" "}
                <span className="font-semibold text-ink">Indian Army</span> and{" "}
                <span className="font-semibold text-ink">MOIL Limited (A Govt. of India Enterprise)</span>, alongside high-growth
                enterprises and startups worldwide.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Today, our team spans Founding Leadership, Principal Engineering & AI, Finance & Commercial Governance, and
                People & Talent Operations — backed by specialized delivery pods big enough to execute any project across all
                ten of our service disciplines.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-5">
            {stats.map((s, idx) => (
              <Reveal key={s.label} delay={idx * 0.05}>
                <div className="rounded-2xl border border-border/80 bg-paper/60 p-6 h-full flex flex-col justify-between">
                  <div className="text-4xl lg:text-5xl font-extrabold text-brand-navy">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-ink">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <TeamGrid />
      <CtaBanner />
    </PageShell>
  );
}

