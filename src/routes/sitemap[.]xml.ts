import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { insights } from "@/lib/site-data";
import { allCaseStudies as caseStudies } from "@/lib/case-studies-data";
import { serviceDetails } from "@/lib/services-data";

const BASE_URL = "https://visiongurulabs.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "weekly", priority: "0.9" },
          { path: "/industries", changefreq: "monthly", priority: "0.7" },
          { path: "/case-studies", changefreq: "weekly", priority: "0.9" },
          { path: "/insights", changefreq: "weekly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/careers", changefreq: "monthly", priority: "0.5" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
        ];

        for (const s of serviceDetails) {
          entries.push({ path: `/services/${s.slug}`, changefreq: "monthly", priority: "0.8" });
          for (const sub of s.subServices) {
            entries.push({
              path: `/services/${s.slug}/${sub.slug}`,
              changefreq: "monthly",
              priority: "0.7",
            });
          }
        }

        for (const c of caseStudies) {
          entries.push({ path: `/case-studies/${c.slug}`, changefreq: "monthly", priority: "0.8" });
        }

        for (const p of insights) {
          entries.push({ path: `/insights/${p.slug}`, changefreq: "monthly", priority: "0.7" });
        }

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
