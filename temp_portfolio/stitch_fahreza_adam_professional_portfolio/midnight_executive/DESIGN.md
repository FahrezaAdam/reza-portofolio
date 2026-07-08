---
name: Midnight Executive
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c5c5d4'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8f909e'
  outline-variant: '#454652'
  surface-tint: '#b9c3ff'
  primary: '#b9c3ff'
  on-primary: '#022289'
  primary-container: '#2e44a7'
  on-primary-container: '#afbbff'
  inverse-primary: '#4156b9'
  secondary: '#b7c8e1'
  on-secondary: '#213145'
  secondary-container: '#3a4a5f'
  on-secondary-container: '#a9bad3'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#005473'
  on-tertiary-container: '#63caff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dee1ff'
  primary-fixed-dim: '#b9c3ff'
  on-primary-fixed: '#001258'
  on-primary-fixed-variant: '#263da0'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

This design system is built for professional enterprise environments that require high-focus, low-strain interfaces. The personality is authoritative, sophisticated, and technically precise. By shifting to a deep-space dark mode, the UI recedes into the background, allowing data and content to take center stage. 

The aesthetic is **Corporate Modern** with a focus on **Tonal Layering**. It avoids pure blacks to prevent harsh contrast, instead utilizing a refined palette of deep navies and charcoals. The emotional response should be one of stability and "quiet power"—an interface that feels like a high-end command center. Precision is communicated through crisp borders and intentional whitespace, while the rounded geometry prevents the system from feeling overly aggressive or industrial.

## Colors

The palette is anchored by a deep navy background (`#0f172a`) which serves as the foundation for all views. The primary blue (`#2e44a7`) is used sparingly for high-intent actions and active states to maintain professional restraint.

Depth is achieved through a "Surface Tier" system rather than traditional shadows:
- **Level 0 (Base):** `#0f172a` — The primary canvas.
- **Level 1 (Surface):** `#1e293b` — Used for cards, sidebars, and navigation headers.
- **Level 2 (Container):** `#334155` — Used for nested elements, inputs, and hover states.

Functional colors (Success, Warning, Error) should be slightly desaturated to remain legible against the dark background without appearing "neon."

## Typography

The design system utilizes **Plus Jakarta Sans** across all levels to maintain a friendly yet professional tone. The high x-height and open counters of this font ensure exceptional legibility in dark mode.

Text hierarchy is strictly enforced through color:
- **High Emphasis:** `#f8fafc` (Off-white) for headlines and primary labels.
- **Medium Emphasis:** `#94a3b8` (Slate-400) for body copy and supporting text.
- **Disabled/Low Emphasis:** `#475569` (Slate-600) for placeholders and metadata.

Avoid using pure white (`#ffffff`) for long-form body text to reduce eye fatigue and "halation" effects on high-brightness displays.

## Layout & Spacing

This design system follows a **12-column fluid grid** for desktop and a **4-column fluid grid** for mobile. A standard 8px spatial rhythm governs all padding and margins to ensure visual harmony.

**Responsive Rules:**
- **Desktop (1440px+):** 40px outer margins, 24px gutters.
- **Tablet (768px - 1439px):** 24px outer margins, 16px gutters.
- **Mobile (0px - 767px):** 16px outer margins, 16px gutters.

Large sections of content should be separated by substantial vertical whitespace (64px+) to maintain the minimalist, airy feel of the brand.

## Elevation & Depth

In this dark mode implementation, elevation is primarily communicated through **Tonal Ramping** and **Subtle Outlines** rather than heavy shadows.

- **Outlines:** Use a 1px border of `#334155` (Level 2 Container) for all primary surface elements to provide a crisp edge against the Level 0 background.
- **Hover States:** Interactive elements should increase their tonal brightness (e.g., Level 1 to Level 2) upon interaction.
- **Overlays:** Modals and menus utilize a subtle `backdrop-filter: blur(12px)` combined with a more pronounced 1px border (`#475569`) to separate them from the layers beneath.
- **Shadows:** If used, shadows must be deep, large-radius, and low-opacity (25-30%), using the background hex as the shadow color to ensure they feel like "ambient occlusion" rather than a drop-shadow.

## Shapes

The shape language is defined as **Rounded**, utilizing a base radius of 8px (`0.5rem`). This provides a modern, approachable feel while remaining structured enough for enterprise data visualization.

- **Standard Elements (Buttons, Inputs):** 8px (0.5rem)
- **Large Elements (Cards, Modals):** 16px (1rem)
- **Extra Large (Hero Sections):** 24px (1.5rem)

Consistency in rounding is critical; do not mix sharp and rounded elements within the same view.

## Components

### Buttons
- **Primary:** Background `#2e44a7`, Text `#ffffff`, 8px radius. High-contrast hover state with a slight brightness increase.
- **Secondary:** Transparent background, Border 1px `#334155`, Text `#f8fafc`. Hover state fills with `#1e293b`.

### Inputs & Fields
- **Default:** Background `#1e293b`, Border 1px `#334155`, Text `#f8fafc`. 
- **Focus:** Border color transitions to `#2e44a7` with a 2px outer glow of the same color at 20% opacity.

### Cards
- Surfaces use Level 1 (`#1e293b`) with an 8px or 16px radius.
- Always include a subtle 1px border of `#334155` to ensure the card doesn't bleed into the background on lower-quality displays.

### Chips & Badges
- Small, 100px radius (pill-shaped). Use Level 2 (`#334155`) for neutral states and a low-opacity version of the primary blue (15% opacity) with solid blue text for active indicators.

### Data Lists
- Rows separated by 1px dividers of `#1e293b`. Zebra-striping is discouraged; use hover highlight states (`#334155`) for row identification instead.