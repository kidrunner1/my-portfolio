# Agent Guide

This file gives future AI agents and contributors the project-specific context needed to work safely on this portfolio.

## Project Overview

- Framework: Next.js App Router
- Language: TypeScript / TSX
- Styling: Tailwind CSS v4
- Animation: CSS transitions only; AOS was removed to improve Lighthouse performance
- 3D visual: `three`, `three-globe`, `@react-three/fiber`, `@react-three/drei`
- Package manager: npm
- Primary visual direction: dark slate interface with teal, cyan, and rose accents

## Important Commands

Use `npm.cmd` on Windows PowerShell because plain `npm` can be blocked by execution policy.

```bash
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
npm.cmd audit --audit-level=moderate
```

## Main Routes

- `/`: Home page with hero, refined globe visual, toolset, working principles, and selected work
- `/About`: Profile, stack, journey, values, and location/work mode
- `/Portfolio`: Case-study style project list with category filters, carousel previews, impact, stack, and links
- `/Contact`: Contact cards, collaboration types, response flow, and availability CTA

## Important Files

- `app/page.tsx`: Home page and hero framing around the globe
- `app/About/page.tsx`: About page content and layout
- `app/Portfolio/page.tsx`: Portfolio UI, category filtering, project cards, and carousel
- `app/Contact/page.tsx`: Contact page UI and CTA flow
- `app/project_data/project.tsx`: Portfolio project data, including `role`, `year`, `status`, `impact`, and `stack`
- `app/components/layout/Navbar.tsx`: Glass navbar with active route state and mobile menu
- `app/components/LazyGlobe.tsx`: Defers the interactive globe and shows a lightweight static visual first
- `app/components/GithubGlobe.tsx`: Globe route data and visual config
- `app/components/ui/globe.tsx`: Three.js globe implementation
- `app/globals.css`: Global Tailwind theme and font fallback
- `next.config.ts`: Next.js config and remote image hosts

## Design System Notes

- Keep the site visually consistent with the slate/teal/cyan/rose palette.
- Prefer rectangular `rounded-lg` panels over heavily rounded cards.
- Keep UI sections full-width and structured; avoid nested cards unless the content is a repeated item.
- Use strong typography for page headlines and smaller, tighter text inside cards and controls.
- Preserve the current narrative flow:
  - Home introduces value.
  - About explains identity and working style.
  - Portfolio proves capability through projects.
  - Contact closes with clear ways to start a conversation.

## Globe Notes

- The globe is a signature hero visual, not a generic demo.
- Current route concept: Bangkok/Thailand connects to Singapore, Tokyo, Hong Kong, San Francisco, London, and New York.
- Keep arc density intentional. Do not add dozens of random arcs.
- Globe colors should stay aligned with teal, cyan, rose, and slate.
- Do not call `Math.random()` during render. Use deterministic data.
- Globe material, atmosphere, arcs, rings, and auto-rotation are configured through `GlobeConfig`.
- The interactive globe should not load immediately during first paint. Keep `LazyGlobe` in front of it.
- On mobile and reduced-motion devices, prefer the static globe visual instead of the WebGL canvas.

## Coding Guidelines

- Keep TypeScript strict mode passing.
- Avoid `any` unless there is no practical typed alternative.
- Use `next/image` instead of raw `<img>`.
- Do not call impure functions such as `Math.random()` during React render.
- Avoid `setState` in `useEffect` when the value can be derived or is unused.
- If adding external image hosts, update `next.config.ts`.
- If dependencies change, run `npm.cmd audit --audit-level=moderate`.
- Do not reintroduce AOS or another scroll animation runtime unless there is a clear performance budget for it.
- Preserve existing user changes. Do not revert unrelated work.

## Validation Checklist

Before commit or handoff, run:

```bash
npm.cmd run lint
npm.cmd run build
npm.cmd audit --audit-level=moderate
```

For UI work, also start the dev server and smoke-test:

```bash
npm.cmd run dev
```

Check at least:

- `http://127.0.0.1:3000/`
- `http://127.0.0.1:3000/About`
- `http://127.0.0.1:3000/Portfolio`
- `http://127.0.0.1:3000/Contact`

## Known Notes

- `next/font/google` was removed because builds can fail when Google Fonts cannot be fetched. Font fallback is handled in CSS.
- `package.json` uses `overrides.postcss` so audit uses a patched PostCSS version across the dependency tree.
- Earlier Thai text in the app had mojibake from encoding issues. Current redesigned pages use clean Thai copy.
