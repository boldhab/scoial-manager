
# Social Media Dashboard

A modern, responsive social media analytics dashboard built with Next.js and Tailwind CSS. It includes overview cards, charts, audience insights, and configurable sections for posts, campaigns, customers, and settings.

## Highlights

- Modular dashboard sections with reusable UI components
- Responsive layout with a collapsible sidebar
- Theme support via `next-themes`
- Charting with Chart.js and React Chart.js 2
- State management ready with `zustand`

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Chart.js + React Chart.js 2

## Getting Started

### Prerequisites

- Node.js 18.18+ (or 20+)
- npm (or pnpm/yarn)

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Scripts

- `dev` — Start the development server
- `build` — Create a production build
- `start` — Run the production server
- `lint` — Run ESLint

## Project Structure

- [src/app/page.tsx](src/app/page.tsx) — Main dashboard page
- [src/app/layout.tsx](src/app/layout.tsx) — Root layout
- [src/app/globals.css](src/app/globals.css) — Global styles
- [src/components/DashboardHome.tsx](src/components/DashboardHome.tsx) — Dashboard container
- [src/components/Sidebar.tsx](src/components/Sidebar.tsx) — Sidebar navigation
- [src/components/ThemeToggler.tsx](src/components/ThemeToggler.tsx) — Theme switcher
- [src/components/sections](src/components/sections) — Dashboard sections
- [src/components/ui](src/components/ui) — Reusable UI components
- [src/hooks](src/hooks) — Custom hooks
- [src/lib/utils.ts](src/lib/utils.ts) — Utility helpers

## Documentation

- [docs/components.md](docs/components.md)
- [docs/api.md](docs/api.md)
- [docs/deployment.md](docs/deployment.md)

## develop by Habtamu Befekadu 
