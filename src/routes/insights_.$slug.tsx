import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Link as LinkIcon, Twitter, Linkedin } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { SITE_URL, getInsightBySlug, getRelatedInsights, insights, getInsightImage, type BlogBlock, type Insight } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/insights_/$slug")({
  loader: ({ params }) => {
    const post = getInsightBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ params, loaderData }) => {
    const url = `${SITE_URL}/insights/${params.slug}`;
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found | VisionGuru Labs Insights" },
          { name: "robots", content: "noindex,follow" },
        ],
      };
    }
    const p = loaderData;
    const title = `${p.title} | VisionGuru Labs Insights`;
    const description = p.excerpt;
    const wordCount = p.body.reduce((n, b) => {
      if (b.type === "p" || b.type === "h2" || b.type === "h3") return n + b.text.split(/\s+/).length;
      if (b.type === "quote") return n + b.text.split(/\s+/).length;
      if (b.type === "list") return n + b.items.join(" ").split(/\s+/).length;
      return n;
    }, 0);

    const article = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      headline: p.title,
      description: p.excerpt,
      inLanguage: "en",
      datePublished: p.publishedAt,
      dateModified: p.updatedAt ?? p.publishedAt,
      author: { "@type": "Person", name: p.author.name, jobTitle: p.author.role },
      publisher: {
        "@type": "Organization",
        name: "VisionGuru Labs",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      },
      articleSection: p.category,
      keywords: p.tags.join(", "),
      wordCount,
    };
    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
        { "@type": "ListItem", position: 3, name: p.category, item: `${SITE_URL}/insights` },
        { "@type": "ListItem", position: 4, name: p.title, item: url },
      ],
    };
    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "author", content: p.author.name },
        { name: "keywords", content: p.tags.join(", ") },
        { name: "robots", content: "index,follow,max-image-preview:large" },
        { property: "og:title", content: p.title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "VisionGuru Labs" },
        { property: "article:published_time", content: p.publishedAt },
        ...(p.updatedAt ? [{ property: "article:modified_time", content: p.updatedAt }] : []),
        { property: "article:author", content: p.author.name },
        { property: "article:section", content: p.category },
        ...p.tags.map((t) => ({ property: "article:tag", content: t })),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: p.title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(article) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbs) },
        ...(p.faqs.length ? [{ type: "application/ld+json", children: JSON.stringify(faq) }] : []),
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="container-x py-32 text-center">
        <h1 className="text-4xl font-extrabold text-ink">Article not found</h1>
        <p className="mt-4 text-slate">The insight you're looking for may have moved.</p>
        <Button asChild className="mt-8 bg-brand-navy hover:bg-brand-navy/90 text-paper">
          <Link to="/insights">Back to Insights</Link>
        </Button>
      </div>
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell>
      <div className="container-x py-32 text-center">
        <h1 className="text-3xl font-extrabold text-ink">This article didn't load</h1>
        <p className="mt-4 text-slate">{error.message}</p>
      </div>
    </PageShell>
  ),
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function BlogPostPage() {
  const post = Route.useLoaderData() as Insight;
  const idx = insights.findIndex((p) => p.slug === post.slug);
  const prev = idx > 0 ? insights[idx - 1] : undefined;
  const next = idx < insights.length - 1 ? insights[idx + 1] : undefined;
  const related = getRelatedInsights(post.slug);
  const toc = post.body.filter((b: BlogBlock): b is Extract<BlogBlock, { type: "h2" }> => b.type === "h2");
  const url = `${SITE_URL}/insights/${post.slug}`;

  return (
    <PageShell>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-border bg-paper">
        <div className="container-x py-4 pt-28">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-ink">
            <li><Link to="/" className="hover:text-brand-navy">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/insights" className="hover:text-brand-navy">Insights</Link></li>
            <li aria-hidden>/</li>
            <li className="text-brand-navy font-semibold">{post.category}</li>
            <li aria-hidden>/</li>
            <li className="text-ink truncate max-w-[40ch]" aria-current="page">{post.title}</li>
          </ol>
        </div>
      </nav>

      <article>
        {/* Header */}
        <header className="py-16 lg:py-24">
          <div className="container-x max-w-4xl">
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-brand-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-navy">
                {post.category}
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl text-ink text-balance">{post.title}</h1>
              <p className="mt-6 text-lg text-slate max-w-3xl">{post.excerpt}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-ink">
                <span className="inline-flex items-center gap-2"><User className="h-4 w-4" /> {post.author.name}</span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </span>
                {post.updatedAt && (
                  <span className="inline-flex items-center gap-2">
                    Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                  </span>
                )}
                <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {post.readTime} read</span>
              </div>
            </Reveal>
          </div>
        </header>

        {/* Hero */}
        <div className="container-x max-w-5xl">
          <div
            className="aspect-[16/7] rounded-3xl bg-slate-900 relative overflow-hidden shadow-2xl border border-border/80"
          >
            <img
              src={getInsightImage(post)}
              alt={post.heroAlt || post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Body + TOC */}
        <div className="container-x max-w-6xl py-16 lg:py-24">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12">
            {/* TOC */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-ink mb-3">On this page</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#key-takeaways" className="text-slate hover:text-brand-navy block py-1">Key takeaways</a></li>
                {toc.map((h: { id: string; text: string }) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="text-slate hover:text-brand-navy block py-1">{h.text}</a>
                  </li>
                ))}
                {post.faqs.length > 0 && (
                  <li><a href="#faq" className="text-slate hover:text-brand-navy block py-1">FAQs</a></li>
                )}
              </ul>
            </aside>

            <div className="min-w-0">
              {/* TL;DR */}
              <section
                id="key-takeaways"
                aria-labelledby="key-takeaways-heading"
                className="rounded-2xl border border-brand-navy/15 bg-brand-navy/[0.03] p-6 md:p-8 mb-12"
              >
                <h2 id="key-takeaways-heading" className="text-sm font-extrabold uppercase tracking-wider text-brand-navy">Key takeaways</h2>
                <ul className="mt-4 space-y-2 text-slate">
                  {post.tldr.map((t: string) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Body */}
              <div className="prose-vg">
                {post.body.map((block: BlogBlock, i: number) => {
                  if (block.type === "h2") {
                    return (
                      <h2 key={i} id={block.id} className="scroll-mt-24 mt-12 text-2xl md:text-3xl font-extrabold text-ink">
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "h3") {
                    return (
                      <h3 key={i} id={block.id} className="scroll-mt-24 mt-8 text-xl font-extrabold text-ink">
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "p") {
                    return <p key={i} className="mt-5 text-slate leading-relaxed text-[1.0625rem]">{block.text}</p>;
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={i} className="mt-5 space-y-2 text-slate">
                        {block.items.map((it: string) => (
                          <li key={it} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote key={i} className="mt-8 border-l-4 border-brand-red pl-6 py-2 italic text-ink text-xl leading-snug">
                        “{block.text}”
                        {block.cite && <footer className="mt-2 text-sm not-italic text-muted-ink">— {block.cite}</footer>}
                      </blockquote>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                {post.tags.map((t: string) => (
                  <span key={t} className="text-xs rounded-full bg-paper border border-border text-slate px-3 py-1">#{t}</span>
                ))}
              </div>

              {/* Share */}
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-ink">Share</span>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="h-10 w-10 rounded-full border border-border hover:bg-paper flex items-center justify-center text-slate hover:text-brand-navy"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="h-10 w-10 rounded-full border border-border hover:bg-paper flex items-center justify-center text-slate hover:text-brand-navy"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={url}
                  aria-label="Copy article link"
                  className="h-10 w-10 rounded-full border border-border hover:bg-paper flex items-center justify-center text-slate hover:text-brand-navy"
                  onClick={(e) => {
                    e.preventDefault();
                    if (typeof navigator !== "undefined" && navigator.clipboard) navigator.clipboard.writeText(url);
                  }}
                >
                  <LinkIcon className="h-4 w-4" />
                </a>
              </div>

              {/* Author bio */}
              <section aria-labelledby="author-heading" className="mt-12 rounded-2xl border border-border bg-background p-6 md:p-8">
                <h2 id="author-heading" className="sr-only">About the author</h2>
                <div className="flex items-start gap-5">
                  <div className={cn("h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-br flex items-center justify-center text-paper font-extrabold text-lg", post.author.gradient)}>
                    {post.author.initials}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-ink">Written by</div>
                    <div className="text-lg font-extrabold text-ink mt-1">{post.author.name}</div>
                    <div className="text-sm text-slate">{post.author.role}</div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              {post.faqs.length > 0 && (
                <section id="faq" aria-labelledby="faq-heading" className="mt-16 scroll-mt-24">
                  <h2 id="faq-heading" className="text-2xl md:text-3xl font-extrabold text-ink">Frequently asked questions</h2>
                  <div className="mt-6 divide-y divide-border border-y border-border">
                    {post.faqs.map((f: { q: string; a: string }) => (
                      <details key={f.q} className="group py-5">
                        <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-semibold text-ink">
                          <span>{f.q}</span>
                          <span className="text-brand-red text-xl leading-none transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <p className="mt-3 text-slate leading-relaxed">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Prev / Next */}
              <nav aria-label="More insights" className="mt-16 grid gap-4 sm:grid-cols-2">
                {prev ? (
                  <Link
                    to="/insights/$slug"
                    params={{ slug: prev.slug }}
                    className="group rounded-2xl border border-border p-5 hover:border-brand-navy/40 hover:bg-brand-navy/[0.02] transition-colors"
                  >
                    <div className="text-xs uppercase tracking-wider text-muted-ink inline-flex items-center gap-2"><ArrowLeft className="h-3.5 w-3.5" /> Previous</div>
                    <div className="mt-2 font-extrabold text-ink group-hover:text-brand-navy">{prev.title}</div>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link
                    to="/insights/$slug"
                    params={{ slug: next.slug }}
                    className="group rounded-2xl border border-border p-5 text-right hover:border-brand-navy/40 hover:bg-brand-navy/[0.02] transition-colors"
                  >
                    <div className="text-xs uppercase tracking-wider text-muted-ink inline-flex items-center gap-2 justify-end w-full">Next <ArrowRight className="h-3.5 w-3.5" /></div>
                    <div className="mt-2 font-extrabold text-ink group-hover:text-brand-navy">{next.title}</div>
                  </Link>
                ) : <div />}
              </nav>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="py-20 bg-paper border-t border-border">
          <div className="container-x">
            <h2 id="related-heading" className="text-2xl md:text-3xl font-extrabold text-ink">Related insights</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/insights/$slug"
                  params={{ slug: r.slug }}
                  className="group h-full rounded-2xl border border-border bg-background overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-shadow flex flex-col"
                >
                  <div className={cn("h-32 bg-gradient-to-br relative", r.gradient)}>
                    <span className="absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-wider bg-white/80 backdrop-blur px-2 py-1 rounded-full text-brand-navy">{r.category}</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-extrabold text-ink group-hover:text-brand-navy">{r.title}</h3>
                    <p className="mt-2 text-sm text-slate line-clamp-2">{r.excerpt}</p>
                    <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-navy">
                      Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </PageShell>
  );
}
