import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ContactGraphic } from "@/components/site/hero-graphics";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Discovery Call | VisionGuru Labs" },
      { name: "description", content: "Talk to a Guru. Book a discovery call to discuss custom software, AI, or digital transformation." },
      { property: "og:title", content: "Contact VisionGuru Labs" },
      { property: "og:description", content: "Book a discovery call with our senior team." },
      { property: "og:url", content: "https://guru-spark-vision.lovable.app/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact VisionGuru Labs" },
      { name: "twitter:description", content: "Book a discovery call with our senior team." },
    ],
    links: [{ rel: "canonical", href: "https://guru-spark-vision.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(crumbs)),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Talk to a Guru."
        subtitle="Tell us about your goals. We'll respond within one business day."
        graphic={<ContactGraphic />}
      />
      <Breadcrumbs crumbs={crumbs} />
      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Reveal>
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="rounded-3xl border border-border bg-background p-8 lg:p-10 shadow-[var(--shadow-card)] space-y-5"
              >
                {submitted ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto h-14 w-14 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center">
                      <Send className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-2xl font-extrabold text-ink">Message received.</h2>
                    <p className="mt-2 text-slate">A Guru will be in touch within one business day.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Full name" name="name" required />
                      <Field label="Work email" name="email" type="email" required />
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Company" name="company" />
                      <Field label="Role" name="role" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-ink" htmlFor="topic">What can we help with?</label>
                      <select id="topic" name="topic" className="mt-2 w-full rounded-md border border-input bg-background px-3 h-11 text-sm">
                        <option>Custom software development</option>
                        <option>AI consulting</option>
                        <option>SaaS product build</option>
                        <option>Staff augmentation</option>
                        <option>Digital transformation</option>
                        <option>Something else</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-ink" htmlFor="message">Project brief</label>
                      <textarea id="message" name="message" required rows={5} className="mt-2 w-full rounded-md border border-input bg-background p-3 text-sm" />
                    </div>
                    <Button type="submit" className="bg-brand-red hover:bg-brand-red/90 text-white font-semibold border-0 h-11 px-6 shadow-sm">
                      Send message
                    </Button>
                  </>
                )}
              </form>
            </Reveal>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={0.05}>
              <InfoCard icon={<Mail className="h-5 w-5" />} title="Email" body="hello@visionguru.labs" />
            </Reveal>
            <Reveal delay={0.1}>
              <InfoCard icon={<Phone className="h-5 w-5" />} title="Phone" body="+91 80 4567 8900" />
            </Reveal>
            <Reveal delay={0.15}>
              <InfoCard icon={<MapPin className="h-5 w-5" />} title="Office" body={<>Bengaluru, India<br />Mumbai · Remote-first</>} />
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold text-ink" htmlFor={name}>
        {label}{required && <span className="text-brand-red"> *</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full rounded-md border border-input bg-background px-3 h-11 text-sm" />
    </div>
  );
}

function InfoCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy">{icon}</div>
      <h3 className="mt-4 font-extrabold text-ink">{title}</h3>
      <div className="mt-1 text-slate text-sm">{body}</div>
    </div>
  );
}
