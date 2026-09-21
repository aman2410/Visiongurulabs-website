import { Link } from "@tanstack/react-router";
import { services, industries, navLinks } from "@/lib/site-data";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { LogoMark } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="surface-dark">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark className="h-9 w-9" />
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                  Vision<span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-300">Guru</span>
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[5px] text-[9px] font-mono font-bold uppercase tracking-[0.2em] bg-brand-orange/15 text-brand-orange border border-brand-orange/35 shadow-[0_0_12px_rgba(245,148,92,0.2)]">
                  <span className="h-1 w-1 rounded-full bg-brand-orange animate-pulse" />
                  LABS
                </span>
              </div>
            </div>
            <p className="text-paper/70 text-sm max-w-sm">
              Strategic technology partners for businesses navigating AI, software, and digital transformation.
            </p>
            <form
              className="mt-6 flex gap-2 max-w-sm"
              onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).reset(); }}
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email for newsletter"
                className="flex-1 min-w-0 rounded-md bg-white/5 border border-white/15 px-3 py-2 text-sm text-paper placeholder:text-paper/40 focus:outline-none focus:ring-2 focus:ring-brand-sky"
              />
              <button className="rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-white hover:bg-brand-red/90 transition-colors shadow-xs">
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-sm font-extrabold text-paper mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className="text-paper/60 hover:text-paper transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold text-paper mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              {industries.slice(0, 6).map((i) => (
                <li key={i.name}>
                  <Link to="/industries" className="text-paper/60 hover:text-paper transition-colors">{i.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold text-paper mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.filter(l => ["/about","/careers","/case-studies","/insights","/contact"].includes(l.to)).map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-paper/60 hover:text-paper transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-paper/50">
            © {new Date().getFullYear()} VisionGuru Labs LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@visionguru.labs" aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-paper/80"><Mail className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-paper/80"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-paper/80"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-paper/80"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
