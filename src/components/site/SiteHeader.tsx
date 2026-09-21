import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // Pages without a dark hero behind the header need a solid bar at all times
  const lightPage = /^\/insights\/[^/]+/.test(pathname);
  const solid = scrolled || lightPage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={solid}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300 data-[scrolled=true]:backdrop-blur-xl data-[scrolled=true]:bg-brand-navy/90 data-[scrolled=true]:border-b data-[scrolled=true]:border-white/10"
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-paper group">
          <LogoMark />
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-extrabold tracking-tight text-white leading-none">
              Vision<span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-300">Guru</span>
            </span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[5px] text-[9px] font-mono font-bold uppercase tracking-[0.2em] bg-brand-orange/15 text-brand-orange border border-brand-orange/35 shadow-[0_0_12px_rgba(245,148,92,0.2)]">
              <span className="h-1 w-1 rounded-full bg-brand-orange animate-pulse" />
              LABS
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-paper/80 hover:text-paper red-underline transition-colors"
              activeProps={{ className: "text-paper" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-brand-red hover:bg-brand-red/90 text-white font-semibold border-0 shadow-sm">
            <Link to="/contact">Talk to a Guru</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-md text-paper hover:bg-white/10"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-brand-navy-deep border-t border-white/10">
          <div className="container-x py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-paper/90 hover:text-paper"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-3 bg-brand-red hover:bg-brand-red/90 text-white font-semibold border-0">
              <Link to="/contact" onClick={() => setOpen(false)}>Talk to a Guru</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className} rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.25),0_0_15px_rgba(245,148,92,0.2)] ring-1 ring-white/50 p-1 shrink-0 group-hover:ring-brand-orange/60 group-hover:shadow-[0_0_20px_rgba(245,148,92,0.4)] group-hover:scale-105 transition-all duration-300`}
    >
      <img
        src="/logo-tight.png"
        alt="VisionGuru Labs Logo"
        className="h-full w-full object-contain"
        width={36}
        height={36}
      />
    </span>
  );
}
