import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative surface-dark pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-mesh)" }} />
      <div className="container-x relative">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky">{eyebrow}</span>
        <h1 className="mt-4 text-4xl md:text-6xl text-paper text-balance max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-6 text-lg text-paper/70 max-w-2xl text-balance">{subtitle}</p>}
      </div>
    </section>
  );
}
