# Design Language: Home - Byo3

> Extracted from `https://byo3.it/` on June 1, 2026
> 609 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#00588a` | rgb(0, 88, 138) | hsl(202, 100%, 27%) | 22 |
| Secondary | `#e8a732` | rgb(232, 167, 50) | hsl(39, 80%, 55%) | 20 |
| Accent | `#d65e53` | rgb(214, 94, 83) | hsl(5, 62%, 58%) | 12 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#212121` | hsl(0, 0%, 13%) | 726 |
| `#000000` | hsl(0, 0%, 0%) | 162 |
| `#33373d` | hsl(216, 9%, 22%) | 100 |
| `#ffffff` | hsl(0, 0%, 100%) | 56 |
| `#69727d` | hsl(213, 9%, 45%) | 27 |
| `#7a7a7a` | hsl(0, 0%, 48%) | 26 |
| `#f5f5f5` | hsl(0, 0%, 96%) | 4 |
| `#2d2d2d` | hsl(0, 0%, 18%) | 1 |

### Background Colors

Used on large-area elements: `#ffffff`, `#00588a`

### Text Colors

Text color palette: `#000000`, `#212121`, `#cc3366`, `#33373d`, `#ffffff`, `#00588a`, `#e8a732`, `#5cbcd3`, `#d65e53`, `#7a7a7a`

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#212121` | text, border | 726 |
| `#000000` | text, border, background | 162 |
| `#33373d` | text, border | 100 |
| `#cc3366` | text, border | 58 |
| `#ffffff` | background, text, border | 56 |
| `#69727d` | border, text | 27 |
| `#7a7a7a` | text, border | 26 |
| `#00588a` | text, border, background | 22 |
| `#e8a732` | text, border | 20 |
| `#5cbcd3` | text, border | 20 |
| `#d65e53` | text, border | 12 |
| `#f5f5f5` | text, border | 4 |
| `#2d2d2d` | background | 1 |

## Typography

### Font Families

- **-apple-system** — used for all (341 elements)
- **Roboto** — used for all (179 elements)
- **Times** — used for body (73 elements)
- **Poppins** — used for body (16 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 40px | 2.5rem | 300 | 40px | normal | h1 |
| 36px | 2.25rem | 400 | 54px | normal | div, svg, defs, style |
| 35px | 2.1875rem | 300 | 35px | normal | div, br, h2 |
| 30px | 1.875rem | 300 | 30px | normal | h2, br |
| 25px | 1.5625rem | 300 | 25px | normal | h1, h2, a |
| 22px | 1.375rem | 400 | 33px | normal | div, svg, path |
| 20px | 1.25rem | 300 | 20px | normal | a, span, button |
| 18px | 1.125rem | 300 | 25.2px | normal | div, br, p, a |
| 16px | 1rem | 400 | 18.4px | normal | html, head, meta, link |
| 15px | 0.9375rem | 400 | 15px | normal | div, a, span |
| 14px | 0.875rem | 300 | 14px | normal | a, span, div, p |
| 13px | 0.8125rem | 400 | 19.5px | normal | nav, ul, li, div |
| 12px | 0.75rem | 400 | 12px | normal | a, span, svg, path |
| 1px | 0.0625rem | 300 | 1.5px | normal | a, span, svg, path |
| 0px | 0rem | 400 | 0px | normal | div, span |

### Heading Scale

```css
h1 { font-size: 40px; font-weight: 300; line-height: 40px; }
h2 { font-size: 35px; font-weight: 300; line-height: 35px; }
h2 { font-size: 30px; font-weight: 300; line-height: 30px; }
h1 { font-size: 25px; font-weight: 300; line-height: 25px; }
h6 { font-size: 18px; font-weight: 300; line-height: 25.2px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: 18.4px; }
```

### Font Weights in Use

`400` (433x), `300` (160x), `500` (6x), `700` (5x), `600` (3x), `100` (2x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-2 | 2px | 0.125rem |
| spacing-20 | 20px | 1.25rem |
| spacing-24 | 24px | 1.5rem |
| spacing-30 | 30px | 1.875rem |
| spacing-40 | 40px | 2.5rem |
| spacing-50 | 50px | 3.125rem |
| spacing-56 | 56px | 3.5rem |
| spacing-60 | 60px | 3.75rem |
| spacing-80 | 80px | 5rem |
| spacing-144 | 144px | 9rem |
| spacing-150 | 150px | 9.375rem |
| spacing-241 | 241px | 15.0625rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 3px | 2 |
| full | 50px | 4 |
| full | 64px | 3 |
| full | 100px | 13 |

## CSS Custom Properties

### Colors

```css
--wp--preset--color--black: #000000;
--wp--preset--color--cyan-bluish-gray: #abb8c3;
--wp--preset--color--white: #ffffff;
--wp--preset--color--pale-pink: #f78da7;
--wp--preset--color--vivid-red: #cf2e2e;
--wp--preset--color--luminous-vivid-orange: #ff6900;
--wp--preset--color--luminous-vivid-amber: #fcb900;
--wp--preset--color--light-green-cyan: #7bdcb5;
--wp--preset--color--vivid-green-cyan: #00d084;
--wp--preset--color--pale-cyan-blue: #8ed1fc;
--wp--preset--color--vivid-cyan-blue: #0693e3;
--wp--preset--color--vivid-purple: #9b51e0;
--swiper-theme-color: #007aff;
```

### Spacing

```css
--wp--preset--font-size--small: 13px;
--wp--preset--font-size--medium: 20px;
--wp--preset--font-size--large: 36px;
--wp--preset--font-size--x-large: 42px;
--wp--preset--spacing--20: 0.44rem;
--wp--preset--spacing--30: 0.67rem;
--wp--preset--spacing--40: 1rem;
--wp--preset--spacing--50: 1.5rem;
--wp--preset--spacing--60: 2.25rem;
--wp--preset--spacing--70: 3.38rem;
--wp--preset--spacing--80: 5.06rem;
--wp--style--global--content-size: 800px;
--wp--style--global--wide-size: 1200px;
--wp--style--block-gap: 24px;
--swiper-navigation-size: 44px;
```

### Shadows

```css
--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);
--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);
```

### Other

```css
--wp--preset--aspect-ratio--square: 1;
--wp--preset--aspect-ratio--4-3: 4/3;
--wp--preset--aspect-ratio--3-4: 3/4;
--wp--preset--aspect-ratio--3-2: 3/2;
--wp--preset--aspect-ratio--2-3: 2/3;
--wp--preset--aspect-ratio--16-9: 16/9;
--wp--preset--aspect-ratio--9-16: 9/16;
--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);
--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);
--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);
--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
--direction-multiplier: 1;
--page-title-display: none;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| xs | 320px | min-width |
| sm | 479px | max-width |
| sm | 480px | max-width |
| 575px | 575px | max-width |
| sm | 576px | min-width |
| sm | 639px | max-width |
| sm | 640px | min-width |
| md | 767px | max-width |
| md | 768px | min-width |
| lg | 991px | max-width |
| lg | 992px | min-width |
| lg | 1024px | max-width |
| lg | 1025px | min-width |
| 1200px | 1200px | min-width |
| 1366px | 1366px | max-width |
| 1367px | 1367px | min-width |
| 2399px | 2399px | max-width |
| 2400px | 2400px | min-width |

## Transitions & Animations

**Durations:** `0.3s`, `0.4s`, `6s`, `20s`, `0.25s`

### Common Transitions

```css
transition: all;
transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
transition: 0.3s;
transition: 0.4s;
transition: max-height 0.3s, transform 0.3s;
transition: fill 0.3s;
transition: color 0.3s;
transition: transform;
transition: transform 6s;
```

### Keyframe Animations

**eicon-spin**
```css
@keyframes eicon-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(359deg); }
}
```

**hide-scroll**
```css
@keyframes hide-scroll {
  0%, 100% { overflow: hidden; }
}
```

**fadeInUp**
```css
@keyframes fadeInUp {
  0% { opacity: 0; transform: translate3d(0px, 100%, 0px); }
  100% { opacity: 1; transform: none; }
}
```

**swiper-preloader-spin**
```css
@keyframes swiper-preloader-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (27 instances)

```css
.button {
  background-color: rgba(97, 206, 112, 0);
  color: rgb(33, 33, 33);
  font-size: 14px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 24px;
  border-radius: 100px;
}
```

### Inputs (5 instances)

```css
.input {
  color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  border-radius: 0px;
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (79 instances)

```css
.link {
  color: rgb(33, 33, 33);
  font-size: 16px;
  font-weight: 300;
}
```

### Navigation (22 instances)

```css
.navigatio {
  background-color: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
}
```

### Footer (2 instances)

```css
.foote {
  background-color: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (2 instances)

```css
.modal {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Dropdowns (68 instances)

```css
.dropdown {
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  border-color: rgb(33, 33, 33);
  padding-top: 0px;
}
```

### Switches (8 instances)

```css
.switche {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0px;
  border-color: rgb(51, 55, 61);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 14 instances, 1 variant

**Variant 1** (14 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(33, 33, 33);
  font-size: 16px;
  font-weight: 400;
```

### Button — 14 instances, 3 variants

**Variant 1** (9 instances)

```css
  background: rgba(94, 186, 201, 0);
  color: rgb(33, 33, 33);
  padding: 0px 20px 0px 0px;
  border-radius: 0px;
  border: 0px 1px 0px 0px solid rgb(33, 33, 33);
  font-size: 14px;
  font-weight: 300;
```

**Variant 2** (3 instances)

```css
  background: rgba(97, 206, 112, 0);
  color: rgb(232, 167, 50);
  padding: 12px 24px 12px 24px;
  border-radius: 100px;
  border: 2px solid rgb(232, 167, 50);
  font-size: 15px;
  font-weight: 400;
```

**Variant 3** (2 instances)

```css
  background: rgba(97, 206, 112, 0);
  color: rgb(92, 188, 211);
  padding: 12px 24px 12px 24px;
  border-radius: 100px;
  border: 2px solid rgb(92, 188, 211);
  font-size: 15px;
  font-weight: 400;
```

### Button — 15 instances, 3 variants

**Variant 1** (10 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(33, 33, 33);
  font-size: 14px;
  font-weight: 300;
```

**Variant 2** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(232, 167, 50);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(232, 167, 50);
  font-size: 15px;
  font-weight: 400;
```

**Variant 3** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(92, 188, 211);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(92, 188, 211);
  font-size: 15px;
  font-weight: 400;
```

### Button — 14 instances, 3 variants

**Variant 1** (9 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(33, 33, 33);
  font-size: 14px;
  font-weight: 300;
```

**Variant 2** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(232, 167, 50);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(232, 167, 50);
  font-size: 15px;
  font-weight: 400;
```

**Variant 3** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(92, 188, 211);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(92, 188, 211);
  font-size: 15px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
  padding: 12px 24px 12px 24px;
  border-radius: 100px;
  border: 1px solid rgb(33, 33, 33);
  font-size: 15px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(122, 122, 122);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(122, 122, 122);
  font-size: 36px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(33, 33, 33);
  font-size: 16px;
  font-weight: 400;
```

### Input — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
  padding: 8px 16px 8px 16px;
  border-radius: 0px;
  border: 0px solid rgb(105, 114, 125);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
  padding: 0px 30px 0px 30px;
  border-radius: 0px;
  border: 0px none rgb(33, 33, 33);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(70, 127, 247, 0);
  color: rgb(57, 57, 57);
  padding: 1.76562px 8.84375px 1.76562px 8.84375px;
  border-radius: 50px;
  border: 0px none rgba(70, 127, 247, 0);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(57, 57, 57);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(57, 57, 57);
  font-size: 16px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(56, 56, 56);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(56, 56, 56);
  font-size: 14px;
  font-weight: 300;
```

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgb(45, 45, 45);
  color: rgb(255, 255, 255);
  padding: 8px 32px 8px 32px;
  border-radius: 64px;
  border: 0px none rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 700;
```

## Layout System

**2 grid containers** and **176 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 3-column | 1x |
| 2-column | 1x |

### Grid Templates

```css
grid-template-columns: 550px 550px;
gap: 20px;
grid-template-columns: 353.328px 353.328px 353.344px;
gap: 0px 20px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 127x |
| column/nowrap | 42x |
| row/wrap | 7x |

**Gap values:** `0px 20px`, `10px 0px`, `20px`, `20px 0px`, `30px 0px`, `40px`, `5px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 3 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#ffffff` | `#00588a` | 7.6:1 | AAA |
| `#ffffff` | `#2d2d2d` | 13.77:1 | AAA |

## Design System Score

**Overall: 83/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 85/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 114 !important rules — prefer specificity over overrides
- 77% of CSS is unused — consider purging
- 4395 duplicate CSS declarations

## Z-Index Map

**5 unique z-index values** across 2 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 9997,99999998 | nav.e.l.e.m.e.n.t.o.r.-.n.a.v.-.m.e.n.u.-.-.d.r.o.p.d.o.w.n. .e.l.e.m.e.n.t.o.r.-.n.a.v.-.m.e.n.u._._.c.o.n.t.a.i.n.e.r, div.i.u.b.e.n.d.a.-.c.s.-.d.e.f.a.u.l.t. .i.u.b.e.n.d.a.-.c.s.-.b.o.t.t.o.m. .i.u.b.e.n.d.a.-.c.s.-.s.l.i.d.e.i.n. .i.u.b.e.n.d.a.-.c.s.-.v.i.s.i.b.l.e |
| base | -1000,2 | span.s.w.i.p.e.r.-.n.o.t.i.f.i.c.a.t.i.o.n, div.e.l.e.m.e.n.t.o.r.-.s.l.i.d.e.s.-.w.r.a.p.p.e.r. .e.l.e.m.e.n.t.o.r.-.m.a.i.n.-.s.w.i.p.e.r. .s.w.i.p.e.r, div.s.w.i.p.e.r.-.w.r.a.p.p.e.r. .e.l.e.m.e.n.t.o.r.-.s.l.i.d.e.s |

**Issues:**
- [object Object]

## SVG Icons

**8 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 3 |
| sm | 3 |
| lg | 2 |

**Icon colors:** `rgb(33, 33, 33)`, `rgb(122, 122, 122)`, `#212121`, `rgb(255, 255, 255)`, `rgb(0, 88, 138)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| swiper-icons | self-hosted | 400 | normal |
| Roboto | self-hosted | 100, 200, 300, 400, 500, 600, 700, 800, 900 | italic, normal |
| Poppins | self-hosted | 100, 200, 300, 400, 500, 600, 700, 800, 900 | italic, normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 8 | objectFit: cover, borderRadius: 0px, shape: square |
| gallery | 4 | objectFit: fill, borderRadius: 0px, shape: square |
| thumbnail | 3 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 3:2 (5x), 1:1 (5x), 9:16 (2x), 2.5:1 (1x), 1.99:1 (1x), 6.57:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `sm` | `250ms` | 250 |
| `md` | `300ms` | 300 |
| `xxl` | `6s` | 6000 |

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `fadeInUp` | slide | opacity, transform | 1 |

## Component Anatomy

### button — 69 instances

**Slots:** label
**Variants:** link · primary
**Sizes:** sm

| variant | count | sample label |
|---|---|---|
| default | 52 | Ozono Salute |
| link | 15 | Ozono Salute |
| primary | 2 | Rifiuta |

## Brand Voice

**Tone:** neutral · **Pronoun:** third-person · **Headings:** unknown (tight)

### Top CTA Verbs

- **scopri** (25)
- **acquista** (21)
- **ozono** (4)
- **naturfarma** (4)
- **womanhealth** (4)
- **invia** (4)
- **st** (1)
- **email** (1)

### Button Copy Patterns

- "scopri di più" (24×)
- "acquista ora" (21×)
- "ozono salute" (4×)
- "naturfarma" (4×)
- "4womanhealth" (4×)
- "invia" (4×)
- ".st0 {        fill: none;        stroke: #212121;        stroke-linecap: round;        stroke-linejoin: round;        stroke-width: 4px;      }" (1×)
- "email
invia" (1×)
- "privacy policy" (1×)
- "cookie policy" (1×)

## Page Intent

**Type:** `landing` (confidence 0.29)

Alternates: legal (0.4)

## Section Roles

Reading order (top→bottom): nav → nav → nav → nav → nav → nav → nav → footer → nav → nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.4 |
| 1 | nav | — | 0.9 |
| 2 | nav | — | 0.9 |
| 3 | nav | — | 0.9 |
| 4 | nav | — | 0.9 |
| 5 | footer | — | 0.95 |
| 6 | nav | — | 0.9 |
| 7 | nav | — | 0.9 |
| 8 | nav | — | 0.9 |
| 9 | nav | — | 0.9 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.31 |
| Shadow profile | none |
| Avg shadow blur | 0px |
| Max radius | 100px |
| backdrop-filter in use | no |
| Gradients | 0 |

## Imagery Style

**Label:** `photography` (confidence 0.2)
**Counts:** total 15, svg 0, icon 1, screenshot-like 0, photo-like 3
**Dominant aspect:** landscape
**Radius profile on images:** square

## Component Library

**Detected:** `bootstrap` (confidence 0.6)

Evidence:
- bootstrap utility hits: 3

## Component Screenshots

9 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| button--default | 0 | 102 × 24 | `screenshots/button-default-0.png` |
| button--default | 1 | 81 × 14 | `screenshots/button-default-1.png` |
| button--default | 2 | 81 × 14 | `screenshots/button-default-2.png` |
| button--default--sm | 0 | 102 × 14 | `screenshots/button-default-sm-0.png` |
| button--default--sm | 1 | 92 × 14 | `screenshots/button-default-sm-1.png` |
| button--default--sm | 2 | 116 × 14 | `screenshots/button-default-sm-2.png` |
| input--default--sm | 0 | 286 × 40 | `screenshots/input-default-sm-0.png` |
| button--primary | 0 | 108 × 36 | `screenshots/button-primary-0.png` |
| button--primary | 1 | 115 × 36 | `screenshots/button-primary-1.png` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `-apple-system` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
