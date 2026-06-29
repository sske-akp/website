# Design Plan — Sri Sai Krishna Enterprises (SSKE)

Phase 1: a fast, mobile-first **brochure / showcase** site for a family-owned electrical
retailer, dealer & distributor in **Anakapalli, Visakhapatnam district, Andhra Pradesh**
(established **1998**, 3-floor showroom). Its single goal: build credibility and funnel every
visitor to **WhatsApp / call / visit**. No e-commerce, no prices, no inventory, no CMS.

---

## 1. Tech stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | **Astro 7.0.3** (static output) | Ships **zero JS by default**; tiny islands only where needed. |
| Styling | **Tailwind CSS v4** (`@tailwindcss/vite`) | CSS-first config in `src/styles/global.css` via `@theme` — **no `tailwind.config.js`**. |
| Icons | `astro-icon` + `@iconify-json/tabler` | SVG rendered at build time (zero client JS). |
| Fonts | self-hosted via Fontsource (variable) | **Space Grotesk** (display) + **Inter** (body). No Google CDN → faster + private. |
| Images | Astro `<Image>` pipeline (when real assets exist) | Branded `PhotoPlaceholder` used until photos are supplied. |
| Motion | CSS transitions + `<ClientRouter />` view transitions | Calm scroll-reveal via a single shared `IntersectionObserver`. |
| Hosting | **Cloudflare Pages** (free tier) | Pure static `dist/` — **no adapter, no backend, no serverless** needed. |

> **Decision flagged:** the brief pinned "Astro latest stable v6.x", but 6.x is no longer the
> latest line. You chose **Astro 7.0.3** (newest stable, longest support runway) over 6.4.8.

Total external JS shipped: only Astro's ClientRouter (~13 KB) + prefetch (~2 KB). Everything
else is static HTML/CSS.

---

## 2. Color palette — "warm, trustworthy, electrical" (not corporate-blue, not lightning-yellow)

A **copper** primary (evokes copper wire / energy / premium warmth) + a **deep teal** accent
(trust, modern, cool complement) over **warm stone** neutrals. Clean **dark mode** included
(class-based, no flash-of-wrong-theme). All foreground/background pairings verified for WCAG AA.

Tokens are semantic and theme-adaptive — utilities like `bg-canvas`, `text-ink`,
`bg-primary text-on-primary`, `text-primary-text`, `bg-accent`, `border-line` swap automatically
between light/dark.

| Token (utility) | Light | Dark | Role |
|---|---|---|---|
| `canvas` | `#faf9f7` | `#1a1714` | Page background |
| `surface` | `#ffffff` | `#232019` | Cards / panels |
| `surface-2` | `#f4f2ef` | `#2c2823` | Alt / footer bands |
| `ink` | `#1c1917` | `#f5f1ea` | Primary text |
| `muted` | `#57534e` | `#b0a79c` | Secondary text |
| `line` | `#e7e3de` | `#3a342c` | Borders / dividers |
| `primary` (copper) | `#c2410c` | `#d4541a` | Buttons / brand fills |
| `on-primary` | `#ffffff` | `#ffffff` | Text on copper |
| `primary-text` | `#b43309` | `#f0a06a` | Copper as link/heading text |
| `accent` (teal) | `#0f766e` | `#2dd4bf` | Secondary fills |
| `accent-text` | `#0d6b63` | `#5eead4` | Teal as text |

---

## 3. Typography

- **Display / headings:** Space Grotesk Variable — geometric, confident, modern.
- **Body:** Inter Variable — high legibility at every size.
- **Type scale (never browser default):** 12 · 14 · 16 (base, line-height 1.6) · 18 · 20 · 24 ·
  30 · 36 · 48 · 60 px, with progressively tighter line-height & negative letter-spacing on
  large display sizes. Exposed as `text-xs … text-6xl`.

---

## 4. Spacing & layout rhythm

- `container-x` — centered, max-width **80rem**, 1.25rem side padding.
- `section-y` — responsive vertical rhythm, `clamp(3rem, 8vw, 7.5rem)` = **48px mobile → 120px desktop**.
- Generous whitespace is a feature. Section layouts are **varied** (full-bleed hero → big-type
  statement → 3 segment panels → category grid → brand wall → photo-led split → colored CTA band)
  to deliberately avoid the "same card grid five times" directory-site look.

---

## 5. Content model (no CMS — plain typed files)

Lives in **`src/data/`** (chosen over `src/content/` to avoid Astro's reserved
content-collections directory). Interfaces in `src/data/types.ts`. Edit a file → push to git → auto-deploy.

| File | Export | Key fields |
|---|---|---|
| `site.ts` | `site: SiteSettings` | businessName, shortName, tagline, establishedYear, address{line1,line2?,city,district,state,pincode?}, phone, phoneDisplay, whatsapp, email?, mapEmbedUrl?, mapLink?, hours[{days,time}], social?[] |
| `brands.ts` | `brands: Brand[]` | name, logo, description, categoryTags[], website? — *(7 brands: L&T, AquaTexmo, Crompton, Almonard, GM, Finolex, RR Cables)* |
| `productCategories.ts` | `productCategories: ProductCategory[]` | slug, name, description, photos[], segments[] (`agriculture` \| `industrial` \| `retail-home`), icon — *(8 categories)* |
| `story.ts` | `story: StoryContent` | heading, lead, paragraphs[], milestones[] |

---

## 6. Reusable components (`src/components/`)

- **`EnquireButton.astro`** — the single source of truth for WhatsApp CTAs. Takes a `context`
  prop and builds a `wa.me` link with a pre-filled message (`"Hi <business>, <context>"`). Used
  everywhere instead of scattered `mailto:`/`tel:` links. Variants: primary/accent/outline/ghost.
- `Header.astro` — sticky, blurred header; 6 top-level items; active-state; mobile hamburger
  (tiny vanilla island, ESC/click-outside to close); theme toggle.
- `MobileCtaBar.astro` — sticky bottom bar on mobile only, **Call + WhatsApp always visible**.
- `Footer.astro`, `ThemeToggle.astro`, `Reveal.astro` (scroll-reveal), `SectionHeading.astro`,
  `Button.astro`, `BrandCard.astro`, `CategoryCard.astro`, `PhotoPlaceholder.astro`,
  `Container.astro`, `Section.astro`.

---

## 7. Pages — each with one job

| Route | Single job |
|---|---|
| `/` | Establish credibility + route to WhatsApp/call/visit. 7 varied sections, one `<h1>`. |
| `/our-story` | Build trust via the 25-year family narrative + milestones. |
| `/brands` | Show the authorised brand portfolio. |
| `/what-we-serve` | Segment buyers — anchored `#agriculture` / `#retail-home` / `#industrial`; speaks to the **industrial pivot**; routes each to the right products. |
| `/visit-us` | Get them to the 3-floor showroom — address, hours, map, directions. |
| `/contact` | Make contact effortless — WhatsApp-first (no form backend this phase). |

Header navigation is exactly **6 items** (≤6 rule). Every page ends in a WhatsApp/call CTA, and
the mobile Call/WhatsApp bar is always on screen.

---

## 8. Performance & accessibility

- Static HTML, near-zero JS, self-hosted fonts, lazy media → built to land a **Lighthouse mobile
  score in the 90s** (a credibility signal, not a bandwidth survival tactic).
- One `<h1>` per page; semantic `<address>`/`<dl>`; decorative graphics `aria-hidden`; visible
  focus rings; `prefers-reduced-motion` disables all motion; AA-checked color pairings;
  skip-to-content link; dark mode with no flash on load.

---

## 9. ⚠️ Replace before launch (placeholders — nothing fabricated)

Real contact facts were not yet available, so they are rendered as **obvious bracketed
placeholders** that can never be silently shipped. Update in **`src/data/site.ts`**:

- `address.line1`, `address.line2`, `address.pincode`
- `phone` (+ `phoneDisplay`) and `whatsapp` (digits only for `wa.me`)
- `email`
- `mapLink` and `mapEmbedUrl` (adding `mapEmbedUrl` activates the live map on `/visit-us`)
- `hours` (days + times, incl. Sunday)
- `social` (only if profiles exist)

**Images:** every brand `logo` is `"[LOGO NEEDED]"` (renders a styled initials tile) and every
category `photos` entry is `"[PHOTO NEEDED]"`. The hero uses a pure-CSS backdrop with a
`<!-- TODO -->` marking where a real showroom photo / short muted loop should go. Swap in real
photos via Astro `<Image>` when available — **no stock photos, no fabricated reviews/stats**.

---

## 10. Working with the project

```bash
npm run dev      # local dev at http://localhost:4321
npm run build    # static output to dist/
npm run preview  # preview the production build
```

Deploy: point **Cloudflare Pages** at the repo — build `npm run build`, output `dist/`. Editing
content = edit the typed files in `src/data/` and push to git.

---

## 11. Deliberately deferred (Phase 2+) — keep out of Phase 1

CMS / non-technical editing UI · blog / news · search · Telugu / multi-language · analytics ·
SEO structured-data (schema.org) · server-backed contact form · e-commerce / pricing / SKU
catalog / inventory · customer testimonials & reviews (until real ones exist) · a real domain
in `astro.config.mjs` (`site` is currently a placeholder).
