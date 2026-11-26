# Reza Portfolio

Personal portfolio of Fahreza Adam Nuardiansyah — Next.js 16 (App Router), TypeScript, Tailwind CSS v4.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

Deployed on Vercel (zero-config).

## Structure

- `app/layout.tsx` — fonts, metadata, theme init, particles background
- `app/page.tsx` — all page sections
- `app/globals.css` — design tokens (light/dark) and custom CSS
- `components/` — navbar, theme toggle, reveal animation, particles
- `lib/content.ts` — nav, coursework, skills, experience data
- `public/` — images, CV PDF, robots.txt
