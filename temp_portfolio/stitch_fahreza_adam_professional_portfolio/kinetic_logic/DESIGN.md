---
name: Kinetic Logic
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#454652'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#757684'
  outline-variant: '#c5c5d4'
  surface-tint: '#4156b9'
  primary: '#0f2a90'
  on-primary: '#ffffff'
  primary-container: '#2e44a7'
  on-primary-container: '#afbbff'
  inverse-primary: '#b9c3ff'
  secondary: '#006c4a'
  on-secondary: '#ffffff'
  secondary-container: '#82f5c1'
  on-secondary-container: '#00714e'
  tertiary: '#003b57'
  on-tertiary: '#ffffff'
  tertiary-container: '#005378'
  on-tertiary-container: '#75c8ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dee1ff'
  primary-fixed-dim: '#b9c3ff'
  on-primary-fixed: '#001258'
  on-primary-fixed-variant: '#263da0'
  secondary-fixed: '#85f8c4'
  secondary-fixed-dim: '#68dba9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is engineered for the modern full-stack developer, balancing technical precision with creative approachability. It targets a professional audience—recruiters, engineering managers, and potential clients—who value clarity, performance, and attention to detail.

The style is **Refined Minimalism**. It leverages generous whitespace to let code snippets and project case studies breathe, ensuring cognitive load remains low. By mixing high-contrast typography with subtle depth effects, the UI feels structured yet fluid. The emotional response should be one of "effortless competence"—a site that works as reliably as the code it showcases.

## Colors
This design system utilizes a structured palette to establish trust and drive action:

- **Primary (Deep Indigo):** Used for core branding, active states, and navigation highlights. It represents the "logic" and stability of the backend.
- **Secondary (Emerald):** Reserved strictly for success states, primary CTAs, and "Live Demo" links. It provides a high-contrast energetic pop against the indigo.
- **Tertiary (Cyan):** Used for tech stack badges and secondary accents to denote "modernity."
- **Neutral Surface:** An off-white base (#F9FAFB) prevents screen glare, while dark charcoal (#111827) ensures AA/AAA accessibility for long-form reading.

## Typography
The typography strategy employs a three-tier system:
1. **Plus Jakarta Sans** for headings to inject personality and a contemporary "tech-startup" aesthetic.
2. **Inter** for body text to maximize readability across all device types and resolutions.
3. **Geist** for labels and code snippets, providing a precise, developer-centric feel that distinguishes technical metadata from prose.

Headlines should use tight letter-spacing (-0.02em) to appear more impactful. Large display sizes must scale down on mobile to maintain visual hierarchy without breaking layouts.

## Layout & Spacing
The layout follows a **12-column fixed grid** for desktop, centered within a max-width container of 1200px. 

- **Desktop (1024px+):** 12 columns, 24px gutters, 48px page margins.
- **Tablet (768px - 1023px):** 8 columns, 24px gutters, 32px page margins.
- **Mobile (Under 768px):** 4 columns, 16px gutters, 20px page margins.

Spacing follows an 8px base unit. Vertical sections should be separated by `xl` (80px) spacing to maintain the minimalist, airy feel. Content blocks like project cards use `md` (24px) padding.

## Elevation & Depth
This design system uses **Tonal Layering** combined with **Ambient Shadows**. 

- **Level 0 (Background):** #F9FAFB.
- **Level 1 (Cards/Surface):** Pure #FFFFFF with a 1px border of #E5E7EB.
- **Level 2 (Interaction):** When hovering over cards or buttons, apply a soft, diffused shadow: `0 10px 25px -5px rgba(46, 68, 167, 0.08)`. 

Avoid heavy dark shadows. The goal is to make elements appear as if they are gently floating just above the surface, using the primary indigo color at a very low opacity in the shadow tint to maintain color harmony.

## Shapes
The shape language is consistently rounded to soften the "hard" nature of a technical portfolio.

- **Standard Elements (Inputs, Buttons, Cards):** 0.5rem (8px).
- **Large Containers (Sections, Hero Images):** 1rem (16px).
- **Small Elements (Chips, Tags):** 0.25rem (4px) or fully pill-shaped depending on content length.

All decorative icons and image containers must adhere to these radius values to ensure a unified visual language.

## Components

### Buttons
- **Primary:** Solid Deep Indigo background, white text. 8px radius. Subtle scale-up on hover.
- **Secondary:** Transparent background with 1px Slate Blue border.
- **Ghost:** No border, Indigo text, light gray background on hover.

### Cards
- **Project Card:** White background, 1px light gray border. Featured image at top with 8px top-radius. Meta-info (tech stack) using `label-md` in Cyan.

### Chips/Badges
- Use a light tint of the Tertiary color (Cyan) for background with a darker version for text. These represent "Skills" or "Tools."

### Input Fields
- Subtle gray border (#D1D5DB). On focus, transition border to Primary Indigo and add a 3px soft blue outer glow (ring).

### Navigation
- A sticky top bar with a slight backdrop blur (10px) and 80% opacity background to allow content to scroll underneath while maintaining legibility.