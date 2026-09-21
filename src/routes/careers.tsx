import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { CtaBanner } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers" },
];

const roles = [
  { title: "Senior Full-Stack Engineer", location: "Remote · Bengaluru", type: "Full-time" },
  { title: "AI/ML Engineer (LLMs)", location: "Remote · Bengaluru", type: "Full-time" },
  { title: "Product Designer", location: "Remote · Mumbai", type: "Full-time" },
  { title: "Engineering Manager", location: "Bengaluru", type: "Full-time" },
  { title: "DevRel & Technical Writer", location: "Remote", type: "Contract" },
];

const values = [
  { title: "Senior by default", body: "No junior engineers billed at senior rates. Ever." },
  { title: "Ship in weeks", body: "Value gets delivered in small, testable increments." },
  { title: "Strategy first", body: "We reframe problems before we solution them." },
  { title: "Long-term thinking", body: "We optimize for the second year, not the first sprint." },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join a Senior Engineering Team | VisionGuru Labs" },
      { name: "description", content: "Open roles across engineering, AI, product, and design at VisionGuru Labs LLP." },
      { property: "og:title", content: "Careers at VisionGuru Labs" },
      { property: "og:description", content: "Senior by default. Ship in weeks. Long-term thinking." },
      { property: "og:url", content: "https://guru-spark-vision.lovable.app/careers" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Careers at VisionGuru Labs" },
      { name: "twitter:description", content: "Senior by default. Ship in weeks. Long-term thinking." },
    ],
    links: [{ rel: "canonical", href: "https://guru-spark-vision.lovable.app/careers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(crumbs)),
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Careers"
        title="Work with a senior bench, on work that matters."
        subtitle="We hire operators who have shipped, not resumes that describe shipping."
      />
      <Breadcrumbs crumbs={crumbs} />

      <section className="py-20">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-background p-6">
                  <div className="text-2xl font-extrabold text-brand-navy">0{i + 1}</div>
                  <h3 className="mt-3 font-extrabold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl md:text-4xl text-ink">Open roles</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-background overflow-hidden">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.03}>
                <a href="mailto:careers@visionguru.labs" className="group flex items-center justify-between gap-6 p-6 hover:bg-paper/60 transition-colors">
                  <div>
                    <h3 className="font-extrabold text-ink">{r.title}</h3>
                    <div className="mt-1 flex items-center gap-3 text-sm text-muted-ink">
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {r.location}</span>
                      <span>·</span>
                      <span>{r.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-brand-navy transition-transform group-hover:translate-x-1" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </PageShell>
  );
}
