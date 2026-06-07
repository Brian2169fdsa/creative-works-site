# Claude Code Prompt — Build the Creative Works Production Site

Paste everything below the line into Claude Code (run it from the repo that contains this
project's files). It tells Claude Code how to turn the HTML prototype into the real product.

---

You are building the production website for **Creative Works**, a Phoenix-based professional
services firm serving **behavioral health organizations** across nine services: Marketing,
SharePoint Setup, Salesforce Build-Outs, IT Services, Staffing Support, Operational Support,
Business Process Services, Consulting Services, and Behavioral Health Licensure Services.

## What you're starting from
This repo contains a complete, high-fidelity **HTML prototype** of the full site (24 pages) plus a
developer handoff package. The prototype is a **design reference** — recreate it faithfully in the
production stack below; do not ship the HTML as-is.

Read these first, in order:
1. `design_handoff_creative_works_site/README.md` — full design spec: every page, all design
   tokens (colors, type, spacing, radii, shadows), components, interactions, accessibility, and
   the Stripe integration plan.
2. `design_handoff_creative_works_site/prototype-map.md` — the page→route map and the recommended
   Next.js file structure + Tailwind theme.
3. `design_handoff_creative_works_site/code/` — drop-in TypeScript: `constants.ts`
   (`STRIPE_PRODUCTS`), `stripe.ts`, `checkout-route.ts`, `webhook-route.ts`, `CheckoutButton.tsx`,
   `.env.example`.
4. The prototype pages at the repo root (`index.html`, `services.html`, `service-*.html`,
   `industries.html`, `behavioral-health.html`, `about.html`, `case-studies.html`,
   `resources.html`, `resource-article.html`, `contact.html`, `schedule-consultation.html`,
   `checkout*.html`, `privacy-policy.html`, `terms-of-service.html`) and the shared logic in
   `lib/site.jsx` (chrome + section primitives + the `SERVICES` list + `CONTACT` + `PRODUCTS`) and
   `lib/service-page.jsx` (the config-driven service-detail engine). Lift exact copy, layout, and
   values from these. Brand tokens live in `_ds/creative-works-design-system-*/tokens/`.

## Target stack
Next.js (App Router) + TypeScript + Tailwind CSS (+ shadcn/ui where helpful), Stripe Checkout
(server-side sessions + webhook), Vercel deployment. Mobile-first, accessible semantic HTML,
per-route SEO metadata, reusable components, and a content-config layer so copy is editable without
touching components.

## Build order
1. **Design system → Tailwind theme + base components.** Map the tokens from the README into
   `tailwind.config.ts` (navy/orange/cloud palette, Sora display + Inter body, radii, shadows).
   Build Header (sticky, blurred, Services + Industries dropdowns, active state, mobile menu),
   Footer (navy, with all 9 services), Button (pill, orange primary / outlined secondary / inverse),
   Section, PageHero, CTASection, Card, Badge, Eyebrow, IconBadge.
2. **Homepage** (sets the rhythm), then the **Services overview + all 9 service detail pages**
   (build ONE config-driven `<ServicePage>` and feed per-service data — mirror `lib/service-page.jsx`).
3. **Industries, Behavioral Health, About.**
4. **Contact + Schedule Consultation + Stripe** (checkout route, webhook, success/cancel).
5. **Resources, Case Studies, article template.**
6. **Legal, metadata, sitemap, robots, OG image, Vercel env, QA.**

## Content config (single sources of truth)
Move these into `/lib`: `navigation.ts`, `services.ts` (the 9 services with slug/icon/title/
tagline/short + per-page problem/provide/process/benefits), `site-content.ts`, `resources.ts`,
`case-studies.ts`. Real details to wire in:
- **Phone:** 602-402-5121 · **Email:** hello@phoenixcreativeworks.com · **Location:** Phoenix, Arizona
- **Lucide** icons (`lucide-react`). Service icons: Marketing `megaphone`, SharePoint `folder-cog`,
  Salesforce `cloud-cog`, IT `shield-check`, Staffing `users`, Operations `refresh-cw`, Business
  Process `list-checks`, Consulting `lightbulb`, Licensure `badge-check`.
- Copy is intentionally **em-dash-free** — keep it that way.

## Stripe
Use `code/constants.ts`, `code/stripe.ts`, `code/checkout-route.ts`, `code/webhook-route.ts`,
`code/CheckoutButton.tsx`. Three products (amounts in cents, replace placeholder price IDs with
real Stripe Price IDs): Initial Consultation Deposit $250, Discovery & Operations Assessment $1,500,
Custom Project Deposit $2,500. The Schedule Consultation page surfaces the Assessment + Project
Deposit (Stripe) and a free Intro Call (→ contact). Server-side session creation only; never expose
the secret key; validate `type` server-side; success/cancel URLs from `NEXT_PUBLIC_SITE_URL`. The
prototype's `checkout.html` is a front-end mock — in production you redirect to Stripe-hosted
Checkout instead of building that screen.

## Images
The prototype uses drag-and-drop `<image-slot>` placeholders for all photography. In production,
replace these with `next/image` and real photos: warm, natural-light images of behavioral-health
*leadership/administrative teams* and Phoenix — never clinical scenes or vulnerable clients. The
Creative Works logo and the orange phoenix-mark glyph are fixed brand assets in `assets/`.

## Forms
Build the contact form as a reusable component (client validation, required fields, service
multi-select, consent checkbox, success state). Wire it to an API route that delivers via the
client's chosen tool (Resend/SendGrid/CRM/webhook) — leave a clear TODO + env var. Add a scheduler
embed slot (Calendly / Microsoft Bookings) on the Schedule Consultation page.

## Definition of done
All 24 routes build and render; header + footer nav fully linked; Stripe Checkout works end-to-end
in test mode with working success/cancel; contact form submits; per-page SEO metadata + sitemap +
robots; Lighthouse-clean, accessible, responsive from 320px up; deployable to Vercel with the env
vars in `.env.example`.
