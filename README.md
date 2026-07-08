<div align="center">

# Nikita Chaurasia — Portfolio

A fast, accessible, fully static personal portfolio showcasing systems engineering work in **agentic AI**, **AI security**, and **real-time ML**.

[![Live](https://img.shields.io/badge/Live-nikita-chaurasia-portfolio.vercel.app-000?style=for-the-badge&logo=vercel&logoColor=white)](https://nikita-chaurasia-portfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](#-license)

### 🔗 [**View the live site →**](https://nikita-chaurasia-portfolio.vercel.app/)

</div>

---## Overview

This is the source for my personal portfolio — a single-page, statically exported Next.js application with a light/dark theme, scroll-reveal animations, and a content layer driven entirely from a single typed data file. It is built to load instantly, rank well, and stay trivially easy to update.

The site presents three shipped systems as its centerpieces:

- **Agentic Knowledge Retrieval System** — a multi-agent RAG platform on LangGraph that grounds answers in citations and runs sandboxed, self-correcting code over a document knowledge base.
- **SENTINEL** — a Manifest V3 Chrome extension that scans AI prompts for secrets and PII locally, before they ever leave the browser.
- **ADPULSE** — a real-time demand-side platform that prices ad-auction bids in-memory in roughly five milliseconds.

## ✨ Features

- **Static export** (`output: "export"`) — zero server runtime, deployable to any CDN or static host.
- **Light & dark mode** — system-aware with no flash of incorrect theme (inline pre-hydration script).
- **Motion** — scroll-triggered reveals and a magnetic CTA via Framer Motion, respecting reduced-motion.
- **Content as data** — every section (skills, experience, projects, education) is generated from one typed source of truth in `src/lib/data.ts`.
- **SEO & social** — metadata and Open Graph tags configured in the root layout.
- **Performance-first** — Google Fonts via `next/font`, optimized image assets (JPG + WebP), and no client-side data fetching.
- **Accessible** — semantic landmarks, keyboard-navigable, and high-contrast typography.

## 🛠 Tech Stack

| Area        | Choice                                  |
| ----------- | --------------------------------------- |
| Framework   | Next.js 14 (App Router, static export)  |
| Language    | TypeScript 5                            |
| Styling     | Tailwind CSS 3                          |
| Animation   | Framer Motion 11                        |
| Fonts       | Syne + DM Sans (`next/font/google`)     |
| Images      | Sharp (build-time optimization)         |
| Tooling     | ESLint (`eslint-config-next`), PostCSS  |
| Hosting     | Vercel                                  |

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** and npm

### Installation

```bash
git clone https://github.com/nikitayk/PORTFOLIO.git
cd PORTFOLIO_
npm install
```

### Development

```bash
npm run dev
```

The page hot-reloads on save.

### Production build

```bash
npm run build
```

A fully static site is emitted to `out/`, ready to serve from any static host.

## 📜 Scripts

| Script                   | Description                                              |
| ------------------------ | ------------------------------------------------------- |
| `npm run dev`            | Start the local development server                      |
| `npm run build`          | Build and statically export the site to `out/`          |
| `npm run start`          | Serve the production build                              |
| `npm run lint`           | Run ESLint                                              |
| `npm run optimize-photo` | Generate optimized JPG/WebP profile images via Sharp    |

## 📁 Project Structure

```text
.
├── public/                 # Static assets (profile image, resume PDF)
├── scripts/
│   └── optimize-photo.mjs  # Sharp-based image optimization
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout, fonts, metadata, theme bootstrap
│   │   ├── page.tsx        # Single-page composition of all sections
│   │   └── globals.css     # Tailwind layers + global styles
│   ├── components/         # Hero, About, Skills, Experience, Projects, etc.
│   └── lib/
│       └── data.ts         # Single typed source of truth for all content
├── next.config.mjs         # Static export + image config
├── tailwind.config.ts
└── tsconfig.json
```

## ✏️ Customizing Content

All copy, links, skills, experience, projects, and education live in a single typed file:

```text
src/lib/data.ts
```

Edit the exported objects there — the UI is fully data-driven, so updates flow through to every section automatically without touching components.

## 🌐 Deployment

The site is deployed on **Vercel** at **[nikita-chaurasia-portfolio.vercel.app](https://nikita-chaurasia-portfolio.vercel.app/)**.

- **Vercel:** import the repository — no configuration required. Every push to `main` triggers a new deployment.
- **Any static host:** run `npm run build` and serve the generated `out/` directory (works with GitHub Pages, Netlify, Cloudflare Pages, S3, etc.).

## 📄 License

Released under the **MIT License**. The portfolio's personal 
