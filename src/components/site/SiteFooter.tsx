import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { services, industries, navLinks } from "@/lib/site-data";
import { Github, Linkedin, Twitter, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { LogoMark } from "./SiteHeader";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email address.");
      setSubscribed(false);
      return;
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      setError("Please enter a valid email address (e.g., you@company.com).");
      setSubscribed(false);
      return;
    }
    setError(null);
    setSubscribed(true);
    setEmail("");
  };

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
            <div className="mt-6 max-w-sm">
              <form
                noValidate
                className="flex gap-2"
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                    if (subscribed) setSubscribed(false);
                  }}
                  placeholder="you@company.com"
                  aria-label="Email for newsletter"
                  aria-invalid={Boolean(error)}
                  className={`flex-1 min-w-0 rounded-md bg-white/5 border px-3 py-2 text-sm text-paper placeholder:text-paper/40 focus:outline-none focus:ring-2 ${
                    error
                      ? "border-brand-red focus:ring-brand-red"
                      : "border-white/15 focus:ring-brand-sky"
                  }`}
                />
                <button
                  type="submit"
                  className="rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-white hover:bg-brand-red/90 transition-colors shadow-xs"
                >
                  Subscribe
                </button>
              </form>
              {error && (
                <p role="alert" className="mt-2 flex items-center gap-1.5 text-xs text-brand-red">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{error}</span>
                </p>
              )}
              {subscribed && (
                <p role="status" className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>Thanks for subscribing! You'll hear from us soon.</span>
                </p>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-extrabold text-paper mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-paper/60 hover:text-paper transition-colors"
                  >
                    {s.title}
                  </Link>
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
            <a href="mailto:info@visiongurulabs.com" aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-paper/80"><Mail className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-paper/80"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-paper/80"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-paper/80"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
