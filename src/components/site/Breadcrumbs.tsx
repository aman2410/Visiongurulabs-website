import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/site-data";

export type Crumb = { label: string; href?: string };

/** JSON-LD BreadcrumbList for a route's head() scripts array. */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-paper">
      <div className="container-x py-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-ink">
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1;
            return (
              <li key={c.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3 shrink-0 opacity-50" aria-hidden />}
                {c.href && !last ? (
                  <Link to={c.href as never} className="hover:text-brand-navy transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink font-semibold truncate max-w-[42ch]" aria-current="page">
                    {c.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
