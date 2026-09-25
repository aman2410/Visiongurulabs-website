# VisionGuru Labs

<p align="center">
  <img src="public/logo.png" alt="VisionGuru Labs Logo" width="140" height="140" style="border-radius: 24px;" />
</p>

<p align="center">
  <strong>Strategic Technology Partners for AI, Software & Digital Transformation</strong>
</p>

<p align="center">
  <a href="https://visiongurulabs.com/"><img src="https://img.shields.io/badge/Status-Live-success?style=flat-square" alt="Status" /></a>
  <img src="https://img.shields.io/badge/Stack-TanStack%20Start%20%7C%20React%2019-blue?style=flat-square" alt="Stack" />
  <img src="https://img.shields.io/badge/Styling-Tailwind%20CSS-38bdf8?style=flat-square" alt="Styling" />
  <img src="https://img.shields.io/badge/Runtime-Bun-fbf0df?style=flat-square&logo=bun" alt="Runtime" />
  <img src="https://img.shields.io/badge/License-Proprietary-orange?style=flat-square" alt="License" />
</p>

---

## 📌 Overview

**VisionGuru Labs LLP** is a collective of seasoned engineering leaders, system architects, and AI researchers guiding high-stakes technology decisions. We operate as long-term strategic partners—not vendors on a ticket queue—to help high-growth startups, established enterprises, and government institutions build scalable software and deploy resilient AI systems.

---

## ✨ Key Features & Experience

- **Brand System**: Bespoke brand palette featuring deep navy (`#022a5f`), dark space canvas (`#0a0f1d`), and radiant warm orange (`#f5945c` / `#ec982d`).
- **Interactive Narrative Flow**:
  - **Hero Section**: High-impact messaging with senior technical leadership proposition and live discovery booking.
  - **Outcome Matrix**: High-contrast, engineered comparison table (*"Traditional Agencies vs. VisionGuru Labs"*).
  - **Frontline Insights**: Technical field notes on architecture, LLM evaluation, and platform engineering with editorial imagery.
  - **Enterprise Trust**: Verified client portfolio showcasing collaborations with ISRO, DRDO, Indian Army, MOIL, PMBI, and high-growth venture-backed startups.
  - **Meet the Gurus**: Transparent team showcase featuring real senior leaders with LinkedIn and GitHub profiles.
- **Universal Breadcrumb Navigation**: Contextual, accessible breadcrumb hierarchy integrated across every page and sub-route.
- **Multi-Platform Favicon Suite**: High-contrast vector SVG (`/favicon.svg`), multi-layer ICO binary (`/favicon.ico`), and Apple Touch icons configured for light and dark browser modes with cache busting.
- **Design Intelligence**: Pre-installed `.agents/skills/ui-ux-pro-max` skill for design system querying across 79 UI styles and 192 color palettes.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [TanStack Start](https://tanstack.com/start) + [React 19](https://react.dev) (SSR & Streaming) |
| **Routing** | [TanStack Router](https://tanstack.com/router) (Full type-safety, file-based routing) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com), `@radix-ui/react-*` primitives |
| **Animations** | [Framer Motion](https://www.framer.com/motion) for high-performance physics-based micro-interactions |
| **Icons** | [Lucide React](https://lucide.dev) |
| **State & Data** | [TanStack Query](https://tanstack.com/query) |
| **Package Manager** | [Bun](https://bun.sh) |
| **Bundler & SSR Engine** | [Vite 8](https://vitejs.dev) + [Nitro](https://nitro.unjs.io) (Cloudflare / Edge compatible) |

---

## 📁 Project Structure

```text
VisionGuruLabs-website/
├── .agents/
│   └── skills/
│       └── ui-ux-pro-max/      # AI design intelligence engine & database
├── public/
│   ├── logo.png                # Master official brand emblem
│   ├── logo-transparent.png    # Alpha-processed transparent brand mark
│   ├── favicon.svg             # High-DPI scalable SVG favicon
│   ├── favicon.ico             # Multi-resolution ICO binary (16, 32, 48px)
│   ├── apple-touch-icon.png    # 180x180 iOS home-screen icon
│   ├── insights/               # Field note editorial photography
│   └── team/                   # Leadership profile photography
├── src/
│   ├── assets/                 # Client vector logos & backgrounds
│   ├── components/
│   │   ├── site/               # SiteHeader, SiteFooter, sections, Breadcrumbs
│   │   └── ui/                 # Radix / shadcn reusable UI components
│   ├── lib/                    # Site data, client logos, services & case studies
│   ├── routes/                 # File-based TanStack routes (__root, index, about, etc.)
│   └── styles.css              # Global design tokens and Tailwind directives
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) (v20+)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aman2410/VisionGuruLabs-website.git
   cd VisionGuruLabs-website
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

### Development

Start the local development server:

```bash
bun run dev
# or
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Building for Production

Compile static assets and server bundles:

```bash
bun run build
# or
npm run build
```

Preview the production build locally:

```bash
bun run preview
# or
npm run preview
```

---

## 🎨 UI/UX Pro Max Skill

This repository includes the [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) design intelligence database in `.agents/skills/ui-ux-pro-max`.

To query design specifications directly:

```bash
python3 .agents/skills/ui-ux-pro-max/src/ui-ux-pro-max/scripts/search.py "AI agency" --design-system
```

Available query domains: `product`, `style`, `typography`, `color`, `landing`, `chart`, `ux`, `motion`, `stacks`.

---

## 📄 License & Rights

© 2026 **VisionGuru Labs LLP**. All rights reserved.  
Unauthorized copying, modification, or distribution of proprietary assets is strictly prohibited.
