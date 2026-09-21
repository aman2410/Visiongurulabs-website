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

export interface PageHeroImage {
  src: string;
  alt: string;
  badge?: string;
  caption?: string;
}

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  graphic?: ReactNode;
  image?: PageHeroImage;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, graphic, image, children }: PageHeroProps) {
  const hasVisual = Boolean(graphic || image);

  return (
    <section className="relative surface-dark pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Dynamic ambient mesh & gradient blooms */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "var(--gradient-mesh)" }} />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-brand-sky/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-10 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className={hasVisual ? "grid gap-10 lg:grid-cols-12 lg:gap-12 items-center" : ""}>
          {/* Main content column */}
          <div className={hasVisual ? "lg:col-span-7" : "max-w-3xl"}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky backdrop-blur-sm mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-sky animate-pulse" />
              <span>{eyebrow}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-paper tracking-tight text-balance leading-[1.12]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg sm:text-xl text-paper/75 leading-relaxed max-w-2xl text-balance font-normal">
                {subtitle}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>

          {/* Infographic / Visual showcase column */}
          {hasVisual && (
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Backlight glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand-sky/25 via-brand-orange/20 to-transparent blur-2xl opacity-75 -z-10" />

              {graphic ? (
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/15 bg-brand-navy/90 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-brand-sky/40 hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]">
                  {graphic}
                </div>
              ) : image ? (
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/20 bg-brand-navy/60 backdrop-blur-md shadow-2xl group transition-all duration-500 hover:border-brand-orange/40 hover:shadow-[0_0_40px_rgba(245,148,92,0.2)]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={500}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                  />

                  {/* Surface overlay gradient for depth & contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/20 to-transparent pointer-events-none" />

                  {/* Overlaid micro-badge */}
                  {image.badge && (
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-navy/90 border border-white/25 text-xs font-semibold text-paper shadow-lg backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                        <span className="tracking-wide">{image.badge}</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
