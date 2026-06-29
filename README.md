# Sri Sai Krishna Enterprises (SSKE) — official site

Fast, mobile-first **brochure site** for a family-owned electrical retailer, dealer &
distributor in Anakapalli, Visakhapatnam district, Andhra Pradesh (est. 1998). Built with
**Astro 7 + Tailwind v4**, static output, deployable to **Cloudflare Pages**. Every page funnels
visitors to **WhatsApp / call / visit** — no e-commerce, no prices, no CMS.

> 📐 See **[DESIGN-PLAN.md](./DESIGN-PLAN.md)** for the full design system, content model,
> page map, and what's deferred to later phases.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output -> dist/
npm run preview   # preview the production build
```

## Edit content (no CMS)

All content is plain typed files in **`src/data/`** — edit and push to git to deploy:

| File | What it holds |
|---|---|
| `site.ts` | business name, tagline, phone, WhatsApp, address, hours, map link |
| `brands.ts` | the brands carried |
| `productCategories.ts` | product categories + which segments they serve |
| `story.ts` | the "our story" narrative + milestones |

## ⚠️ Before launch

Contact details and images are **clearly-marked placeholders** (e.g. `[PHONE — ADD BEFORE
LAUNCH]`, `[LOGO NEEDED]`, `[PHOTO NEEDED]`). Fill the real values in `src/data/site.ts`, add real
brand logos / showroom photos, and set a real `site` domain in `astro.config.mjs`. See the
"Replace before launch" checklist in DESIGN-PLAN.md.
