
# Full blog post page (SEO / GEO optimized)

Add a detailed article page at `/insights/$slug` and link each card on `/insights` to it. Every element on the page is chosen for search engines, LLM answer engines (GEO), and social crawlers — not just visual polish.

## 1. What "SEO/GEO friendly" means here

An expert-grade article page carries four categories of signals. The plan implements every one.

**On-page HTML semantics**
- Single `<h1>` matching the post title
- `<article>` wrapper with `<header>`, `<section>`, `<footer>`
- Logical `<h2>` / `<h3>` outline (crawlers + LLM chunkers key off this)
- `<time datetime="ISO">` for publish + updated dates
- Descriptive `alt` on the hero image, `loading="lazy"` on below-the-fold images
- Internal links to `/services`, `/case-studies`, and related posts (link equity + crawl depth)
- Breadcrumb trail Home → Insights → Category → Post

**Head metadata (per route via `head()`)**
- Unique `<title>` — post title + " | VisionGuru Labs Insights", under 60 chars where possible
- `<meta name="description">` — 150–160 char summary
- Canonical self-referencing `https://visiongurulabs.com/insights/{slug}`
- Open Graph: `og:type=article`, `og:title`, `og:description`, `og:url`, `og:image` (absolute), `og:site_name`, `article:published_time`, `article:author`, `article:section`, `article:tag`
- Twitter: `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`
- `<meta name="author">`, `<meta name="keywords">` (tags), `<meta name="robots" content="index,follow,max-image-preview:large">`

**Structured data (JSON-LD in `head().scripts`)** — this is the biggest GEO/AI-search lever
- `Article` (or `BlogPosting`) — headline, description, image, datePublished, dateModified, author (Person/Organization), publisher (Organization with logo), mainEntityOfPage, articleSection, keywords, wordCount, inLanguage
- `BreadcrumbList` — Home → Insights → Post
- `FAQPage` — 3–4 Q&As appended to each post (huge for AI Overviews / ChatGPT / Perplexity citations)
- Organization already lives on `__root.tsx`; leave it

**Content structure LLMs reward**
- TL;DR / Key Takeaways box near the top (3–5 bullets — this is what answer engines quote)
- Table of contents anchored to `<h2>`s
- Short paragraphs, definition-style opening sentence answering "What is X?"
- Pull-quote / callouts
- FAQ block at the end (mirrors the FAQPage JSON-LD)
- Author bio card with credentials (E-E-A-T)
- Related posts (3 cards) — internal linking + dwell time
- Reading time + publish date visible to users
- Share buttons (X, LinkedIn, copy link) with `rel="noopener"`
- Prev / Next post navigation

**Performance & accessibility (indirect but weighted)**
- Hero image sized and lazy-loaded past the fold
- `aria-label` on icon-only share buttons
- `prefers-reduced-motion` respected in Reveal animations (already handled)
- 44px min tap targets on TOC + share

## 2. Data model changes (`src/lib/site-data.ts`)

Extend `Insight` with the fields the page + schema need. Backfill the 12 existing posts.

```ts
type Insight = {
  slug: string;              // NEW — URL segment
  title: string;
  category: string;
  excerpt: string;           // used for description + og:description
  readTime: string;
  publishedAt: string;       // ISO date
  updatedAt?: string;        // ISO date
  author: { name: string; role: string; initials: string };
  tags: string[];            // article:tag + keywords
  heroAlt: string;           // alt text for hero
  tldr: string[];            // 3–5 key takeaways
  body: Array<               // structured content blocks — renders + wordCount
    | { type: "h2"; text: string; id: string }
    | { type: "h3"; text: string; id: string }
    | { type: "p"; text: string }
    | { type: "quote"; text: string; cite?: string }
    | { type: "list"; items: string[] }
  >;
  faqs: { q: string; a: string }[];  // drives FAQPage JSON-LD + visible FAQ section
};
```

Also add a helper `getRelatedInsights(slug)` that returns 3 posts sharing category / tags.

## 3. Route file: `src/routes/insights.$slug.tsx`

Structure (top to bottom):

```text
Header (site chrome, already global)
├── Breadcrumb (Home / Insights / Category / Title)
├── <article>
│   ├── <header>: category badge, H1 title, byline (author, publishedAt <time>, readTime, updated <time>)
│   ├── Hero image (bundled asset or gradient placeholder w/ alt)
│   ├── Key Takeaways card (TL;DR bullets)
│   ├── Table of contents (anchor list of H2s)
│   ├── Body sections rendered from body[] blocks
│   ├── Author bio card (E-E-A-T)
│   ├── FAQ section (<details>/<summary> or headings + paragraphs)
│   ├── Share buttons row
│   └── Prev / Next post nav
├── Related Insights (3 cards → other posts)
└── CTA banner (existing component)
```

`head()` returns everything from section 1: title, description, canonical, og:*, twitter:*, article:*, robots, and a `scripts` array with `Article`, `BreadcrumbList`, and `FAQPage` JSON-LD, all built from `params` + the resolved post.

Handle unknown slug: throw `notFound()`; `notFoundComponent` returns a "Post not found" state and the route's `head()` returns `title: "Not found"` + `robots: noindex` when `loaderData` is missing.

## 4. Route file changes: `src/routes/insights.tsx`

- Each card wraps in `<Link to="/insights/$slug" params={{ slug }}>` (whole-card link) and includes a visible "Read article →" button/text with the red-underline hover.
- Filters + pagination stay as they are.

## 5. Route file changes: `src/routes/__root.tsx`

No changes required. `og:type: "website"` on root is fine — the leaf `head()` overrides it to `article` per merge rules. Organization JSON-LD stays sitewide.

## 6. Sitemap

If `public/sitemap.xml` (or a `sitemap.xml.tsx` route) exists, add one entry per post slug so search engines discover the new URLs. I'll check and extend it during build.

## 7. Not in scope for this pass

- Markdown / MDX pipeline — content stays in typed `body[]` blocks in `site-data.ts` (matches the current "polished placeholders" choice).
- Comments, view counts, or CMS backend.
- Real author photos — the author card uses the same gradient-initials treatment as the team grid.
- Real hero photography — hero uses a generated abstract gradient block per post, alt-texted.

## Technical section

- `insights.$slug.tsx` maps to `/insights/$slug` per file-based routing rules; `Route.useParams()` returns `{ slug }`.
- Loader is synchronous: `insights.find(p => p.slug === params.slug) ?? throw notFound()`. No TanStack Query needed — data is bundled.
- `head({ params, loaderData })` receives the resolved post. Absolute canonical + og:url built from `https://visiongurulabs.com/insights/${params.slug}`. `og:image` omitted per rules unless we generate a real per-post asset (we won't this pass — placeholder previews score worse than none).
- JSON-LD via `scripts: [{ type: "application/ld+json", children: JSON.stringify(...) }]`. Three separate script entries (Article, BreadcrumbList, FAQPage) so validators parse each independently.
- Anchor IDs on H2/H3 come from the `body[]` blocks — stable, no runtime slugification drift between TOC links and headings.
- Reading position / prev-next derived from index of slug in `insights` array.
- Related posts: same-category first, fall back to tag overlap, cap at 3, exclude current.
- No new dependencies.
