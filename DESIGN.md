# BYO3 Homepage Design System

## Overview

Airy scientific editorial ecommerce. The homepage should resemble the supplied Framer-style mockup: a light, oxygenated page with navy typography, product-led visual chapters, soft blue-grey surfaces, and rounded but restrained ecommerce components.

## Color Tokens

```css
--navy: #082450;
--navy-2: #0f315f;
--blue: #1e6fd0;
--science: #2c7fa3;
--mist: #eef7fb;
--mist-2: #dbeff6;
--white: #fbfdff;
--paper: #f8f4ed;
--stone: #d8d2c8;
--ink: #0b1f3d;
--muted: #53657f;
--line: #d8e4ec;
--amber: #e8a732;
```

## Typography

Display uses an editorial serif stack because the approved homepage reference is serif-led and premium scientific. Body uses a clean sans stack for ecommerce readability.

```css
--font-display: "Canela", "Tiempos Headline", "IvyPresto Display", Georgia, serif;
--font-body: "Satoshi", "Avenir Next", "Nunito Sans", system-ui, sans-serif;
```

Headlines should be large but not shouting: hero maximum around 80px on wide desktop, with balanced line wrapping. Body copy stays around 16-20px, max 65ch.

## Components

Navigation: fixed top, white surface with a compact navy shipping bar above it. Desktop nav stays on one line. Mobile uses a drawer.

Buttons: pill shape, navy fill for primary, white outline for secondary. The trailing arrow sits in a circular sub-element.

Product cards: five softly tinted cards with real bottle imagery, a short benefit statement, and a consistent "Scopri" action. Cards are 16px radius, no nested card shells.

Science panels: thin-line icon circles, short explanatory copy, and image-led sections.

FAQ: single-row accordion cards on desktop, stacked on mobile.

## Motion

Motion is calm and motivated: reveal sections on entry, hover lift on product cards, product rail swaps the hero bottle. Respect `prefers-reduced-motion` and keep all animation on transform and opacity.

## Homepage Sections

1. Promo bar and navigation
2. Hero with Tonico as lead product and side rail for all five products
3. Research / Italian science intro
4. Five-product product family
5. Technology-to-capsule explainer
6. Trust strip
7. Testimonials
8. FAQ
9. Closing CTA and footer
