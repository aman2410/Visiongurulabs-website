---
name: ui-ux-pro-max
description: AI-powered design intelligence with 79 UI styles, 192 color palettes, 74 font pairings, 119 UX guidelines, and 25 chart types across 22 tech stacks. Use when designing, styling, auditing, or implementing UI/UX components, layouts, color schemes, animations, or typography.
---

# UI/UX Pro Max Design Intelligence

This skill provides a comprehensive searchable design system database to guide professional UI/UX decisions, typography, color palettes, animations, and component styling.

## Search CLI Command

To query the design intelligence database, execute:

```bash
python3 .agents/skills/ui-ux-pro-max/src/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain> [-n <max_results>]
```

### Search Domains
- `product`: Product type recommendations (SaaS, enterprise, fintech, consulting, portfolio)
- `style`: 79 UI styles (Bento Grid, dark SaaS, minimalism, glassmorphism) + Tailwind/CSS keywords
- `typography`: Font pairings with Google Fonts imports and hierarchy rules
- `color`: 192 curated color palettes by product type and mood
- `landing`: High-converting landing page layouts, hero patterns, and CTA strategies
- `chart`: 25 chart types and data visualization recommendations
- `ux`: 119 UX best practices, usability heuristics, and anti-patterns
- `icons`: Icon recommendations with import code (Lucide, Phosphor, Heroicons)
- `motion`: Animation skeletons by intensity tier (micro-hover, scroll reveal, stagger)
- `react`: Performance patterns, memoization, and layout stability
- `stacks`: Tech stack guidelines (`html-tailwind`, `react`, `shadcn`, `vue`, etc.)

### Design Dials (Full Design System Generation)
```bash
python3 .agents/skills/ui-ux-pro-max/src/ui-ux-pro-max/scripts/search.py "<query>" --design-system --variance <1-10> --motion <1-10> --density <1-10>
```
- `--variance`: Biases style selection (1 = conservative/minimal, 10 = bold/expressive).
- `--motion`: Attaches matching motion snippets from `motion.csv`.
- `--density`: Overrides spacing scale (1 = spacious marketing, 10 = dense dashboard).

### Direct Database Access
Canonical CSV databases are stored in:
`.agents/skills/ui-ux-pro-max/src/ui-ux-pro-max/data/`
- `products.csv`
- `styles.csv`
- `colors.csv`
- `typography.csv`
- `landing.csv`
- `ux-guidelines.csv`
- `motion.csv`
- `charts.csv`
- `icons.csv`
- `react-performance.csv`
