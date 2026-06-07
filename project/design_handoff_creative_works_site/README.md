# Handoff: Creative Works Website + Stripe Integration

## Overview
This is the full website for **Creative Works**, a Phoenix-based professional-services firm
serving behavioral health organizations across nine services: **Marketing, SharePoint Setup,
Salesforce Build-Outs, IT Services, Staffing Support, Operational Support, Business Process
Services, Consulting Services, and Licensure Services**. The site's job is to explain the
full-service model, build trust with behavioral-health decision-makers, and drive visitors to
**schedule a consultation**, **start a paid Discovery & Operations Assessment**, or **pay a
custom project deposit** via Stripe.

The design is delivered as a complete, navigable HTML prototype (19 pages + a checkout flow).
This package tells you how to rebuild it in the intended production stack and wire up Stripe.

## About the Design Files
The HTML files in this project are **design references** — high-fidelity prototypes showing the
intended look, copy, layout, and behavior. They are **not** meant to ship as-is. Your task is to
**recreate them in the intended production environment** (see Target Stack) using its conventions,
then connect real Stripe Checkout.

Every page is built by composing a shared **Creative Works Design System** (React component
bundle) that is bound to this project under `_ds/`. The visual tokens (colors, type, spacing,
radii, shadows) live in that design system's CSS and are reproduced under **Design Tokens** below.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, components, copy, and interactions are all
present. Recreate the UI faithfully using the production stack's component patterns. The prototype
matches the client's homepage mockup section-for-section.

## Target Stack (from the client brief)
- **Next.js (App Router) + TypeScript**
- **Tailwind CSS** (+ shadcn/ui where helpful)
- **Stripe Checkout** with server-side session creation + webhook
- **Vercel** deployment
- Reusable components, a content-config layer, SEO metadata per page, accessible semantic HTML,
  mobile-first responsive layout.

Recommended Next.js file structure is in `prototype-map.md`. Drop-in Stripe + config code is in
`code/` (TypeScript, ready to adapt).

## Screens / Views
There are 19 pages plus a 3-step checkout flow. Each prototype file is self-contained and maps to
a Next.js route (see `prototype-map.md`). Summary:

| Page | Prototype file | Purpose |
|---|---|---|
| Home | `index.html` | Hero, 5-pillar strip, why-us, Phoenix identity, services, who-we-help, process, stats band, CTA |
| Services overview | `services.html` | 9 service cards, combined-support, vendor-vs-partner comparison, 5-step process |
| Marketing | `service-marketing.html` | Service detail (problem → provide → deliverables → benefits → related → CTA) |
| SharePoint Setup | `service-sharepoint.html` | Service detail + sample information architecture |
| Salesforce Build-Outs | `service-salesforce.html` | Service detail + adoption callout |
| IT Services | `service-it.html` | Service detail + navy security callout + support-model cards |
| Staffing Support | `service-staffing.html` | Service detail (problem → areas → how-it-works → benefits) |
| Operational Support | `service-operations.html` | Service detail + assessment callout |
| Business Process Services | `service-business-process.html` | Service detail + optimize-vs-outsource callout |
| Consulting Services | `service-consulting.html` | Service detail + how-we-work callout |
| Licensure Services | `service-licensure.html` | Behavioral health licensure: applications, accreditation, compliance (+scope note) |
| Industries | `industries.html` | Behavioral-health primary card + adjacent industries + why focus matters |
| Behavioral Health | `behavioral-health.html` | Deep industry landing: who/challenges/pillars/use-cases |
| About | `about.html` | Story, mission band, values, what-makes-us-different, Phoenix roots |
| Case Studies | `case-studies.html` | Category-filterable case cards + results band |
| Resources | `resources.html` | Featured article, topic categories, article grid, newsletter |
| Article template | `resource-article.html` | Single resource/blog article layout |
| Contact | `contact.html` | Full lead-capture form, contact info card, what-happens-next |
| Schedule Consultation | `schedule-consultation.html` | 3 consultation options (2 Stripe-enabled), what-we-discuss, scheduler embed slot, FAQ |
| Checkout | `checkout.html` | Branded payment screen (mock; replace with real Stripe Checkout redirect) |
| Checkout success | `checkout-success.html` | Confirmation + next steps |
| Checkout cancel | `checkout-cancel.html` | Recovery page |
| Privacy Policy | `privacy-policy.html` | Placeholder legal copy (review with counsel) |
| Terms of Service | `terms-of-service.html` | Placeholder legal copy (review with counsel) |

### Shared chrome & layout primitives
All pages share, via `lib/site.jsx`:
- **Header** — sticky, blurred white bar, logo left, nav with Services + Industries dropdowns,
  active-link underline, "Schedule a Consultation" pill CTA, hamburger < 900px.
- **Footer** — deep-navy, brand column + Quick Links / Services / Industries / Contact columns,
  social row, legal bar.
- **PageHero**, **Section** (white/cloud/navy tones), **Breadcrumb**, **ProcessSteps**,
  **CheckGrid**, **ProblemSolution**, **FAQ** (accordion), **PillList**, **IconBadge**,
  **ImageFrame** (rounded photo + phoenix-curve accent), **Placeholder** (branded image slot).

The 9 service detail pages are generated from a single config-driven engine
(`lib/service-page.jsx`) — recreate this as one `<ServicePage config={...}>` component in Next.js
and feed it per-service data from a content file.

## Interactions & Behavior
- **Nav dropdowns**: open on hover (desktop). Mobile: hamburger toggles a slide-down panel.
- **Buttons**: primary = solid orange, hover darkens to burnt orange, active scales to .98, soft
  orange glow shadow, optional trailing "→". Secondary = white + navy border. Inverse = on navy.
- **Cards**: lift on hover (translateY ≈ -3px) and grow shadow `--shadow-card` → `--shadow-lg`.
- **Case Studies**: category tab buttons filter the grid client-side (`All / SharePoint /
  Marketing / IT / Staffing / Operations`).
- **FAQ**: single-open accordion; chevron rotates 180°.
- **Contact form**: client-side validation, required fields, service multi-select chips, consent
  checkbox gates submit, success state replaces the form (no reload). Wire to an email/CRM/webhook.
- **Newsletter (Resources)**: placeholder submit → confirmation. Wire to email tool.
- **Checkout (mock)**: "Pay" → 1.1s delay → redirect to `checkout-success.html?type=...`. **Replace
  with a real Stripe Checkout session redirect** (see Stripe Integration).
- **Motion**: entrance fades + small translateY, `--ease-out`, ~220ms. No infinite loops.
- **Responsive**: hero/grids collapse to single column; pillar strip wraps; forms single-column;
  full-width CTAs where appropriate. Min font-size 16px body, larger headings via fluid clamps.

## State Management
Minimal, all local/client:
- Header: `open` (active dropdown), `mobile` (menu open).
- Case Studies: `cat` (active filter).
- FAQ: `open` (index of expanded item).
- Contact: `services` (selected service chips), `consent` (bool), `sent` (success state).
- Checkout: `busy` (processing). In production, the "Pay" action calls the checkout API and the
  server returns a Stripe session URL to redirect to — no client secret handling needed for
  hosted Checkout.

No global state library required. Page content should move into a content-config layer
(`lib/site-content.ts`, `lib/services.ts`, `lib/resources.ts`, `lib/navigation.ts`) so copy is
editable without touching components.

## Design Tokens
Reproduced from the Creative Works design system (`_ds/.../tokens/*.css`). Use these to build the
Tailwind theme.

**Brand color**
- Navy deep `#061E3A` (footer, dark blocks) · Navy midnight `#0A2540` (headings, nav) ·
  Navy 700 `#143257` · Navy 500 `#2B4A73`
- Phoenix orange `#F15A24` (primary CTA/accent) · Burnt `#D94A12` (hover/press) · Soft `#FF7A2F`
- White `#FFFFFF` · Cloud `#F8FAFC` (alt sections) · Gray-100 `#F1F4F8` · Gray-200 `#E5E7EB`
  (borders) · Gray-400 `#B6BFCB` · Gray-600 `#5B6573` (muted text) · Charcoal `#1F2937` (body)
- Soft blue `#EAF4FF` · Warm sand `#F7EFE5` · Success `#4F8A6D`
- Phoenix gradient: `linear-gradient(150deg, #FF7A2F 0%, #F15A24 45%, #D94A12 100%)`
- CTA gradient: `linear-gradient(135deg, #FF7A2F 0%, #F15A24 60%, #D94A12 100%)`
- Color ratio: orange is an **accent only** (~1:6 against navy/neutral). Never a background wash.

**Typography** — `Sora` (display headings, 500–800) + `Inter` (body/UI, 400–800), both Google Fonts.
- Scale: display 72 / h1 56 / h2 44 / h3 28 / h4 22 / body-lg 19 / body 16 / sm 14 / label 12.
- Use fluid clamps for headings (display `clamp(2.25rem,1.2rem+4.6vw,4.5rem)`, etc.).
- Eyebrows: 12px uppercase, letter-spacing 0.08em, 700, with a 44×3px orange rule above.
- Line-heights: tight 1.08, snug 1.18, normal 1.6, relaxed 1.75. Heading tracking -0.01/-0.02em.

**Spacing** — 4px base. Section vertical rhythm `--section-y` = 96px (64px tight). Container max
1200px, padding 1.5rem.

**Radii** — sm 8 · md 12 (inputs/small cards) · lg 16 (service cards) · xl 24 (hero image/feature
panels) · pill 999 (buttons/chips).

**Shadows** — xs `0 1px 2px rgba(6,30,58,.06)` · sm `0 2px 8px rgba(6,30,58,.06)` ·
card `0 6px 20px rgba(6,30,58,.08)` · lg `0 16px 40px rgba(6,30,58,.12)` ·
cta `0 10px 24px rgba(241,90,36,.30)` (orange glow under primary buttons).

**Motion** — ease-out `cubic-bezier(.22,1,.36,1)`, durations 140/220/420ms.

The exact CSS variable definitions are in
`_ds/creative-works-design-system-42e791e1-07c1-40df-bce4-e272f16f1514/tokens/`.

## Iconography
**Lucide** line icons (2px stroke, rounded). Service icons: Marketing `megaphone`, SharePoint
`folder-cog`, Salesforce `cloud-cog`, IT `shield-check`, Staffing `users`, Operations
`refresh-cw`, Business Process `list-checks`, Consulting `lightbulb`, Licensure `badge-check`. In Next.js use
`lucide-react`. The phoenix mark (`assets/phoenix-mark.png`) is the brand glyph — used as the
favicon and as a faint watermark inside navy/orange bands. **No emoji.**

## Assets
From the bound design system (copied into `assets/` in this project):
- `logo-full.png` (navy/orange wordmark, light backgrounds), `logo-full-white.png` (navy
  backgrounds), `phoenix-mark.png` (icon/watermark), `favicon.png`.
- `photo-hero.jpg` (leadership meeting), `photo-meeting.jpg` (two professionals),
  `photo-phoenix.jpg` (Phoenix skyline). These are used on Home, Behavioral Health, About,
  Services, and the article template.
- Everywhere else, the prototype uses **branded `Placeholder` blocks** (labeled, with a phoenix
  curve + Lucide icon). Replace these with real photography per the brand's imagery guidance:
  warm, natural-light photos of behavioral-health *leadership/administrative teams* and Phoenix —
  never clinical scenes or vulnerable clients.

## Stripe Integration
Three paid products are defined (see `code/constants.ts`). Two are surfaced on the Schedule
Consultation page (Assessment, Project Deposit); the Initial Consultation Deposit is available for
reuse. A Professional Services Retainer is mentioned but should **not** auto-checkout unless a
recurring price ID is provided.

**Flow to implement** (hosted Stripe Checkout):
1. Client calls `POST /api/stripe/checkout` with `{ type }` (one of the product keys).
2. Server validates `type`, looks up the product, creates a Checkout Session
   (`mode: 'payment'`, the product's `priceId`, `success_url`/`cancel_url` from
   `NEXT_PUBLIC_SITE_URL`), and returns `{ url }`.
3. Client redirects to `session.url`. Stripe handles payment, then returns the user to
   `/checkout/success` or `/checkout/cancel`.
4. `POST /api/stripe/webhook` verifies the signature and handles `checkout.session.completed`
   (send confirmation email / notify the team / record the lead).

**Drop-in code** (in `code/`, adapt to your repo):
- `constants.ts` — `STRIPE_PRODUCTS` catalog (amounts in cents, placeholder price IDs).
- `stripe.ts` — server Stripe client.
- `checkout-route.ts` — `app/api/stripe/checkout/route.ts`.
- `webhook-route.ts` — `app/api/stripe/webhook/route.ts`.
- `CheckoutButton.tsx` — client component that POSTs and redirects.
- `.env.example` — required environment variables.

**Security**: never expose `STRIPE_SECRET_KEY` client-side; create sessions server-side only;
validate `type` against the catalog on the server; use placeholder price IDs until real ones exist.

## SEO / Metadata
Every prototype page has a unique `<title>`, meta description, Open Graph title/description/image,
and a canonical URL placeholder (`https://www.creativeworksaz.com/...`). Port these into Next.js
`metadata` exports per route. Add `sitemap.ts`, `robots.ts`, and a real OG image before launch.

## Accessibility
Semantic headings/landmarks, real `<button>`/`<a>` elements, labeled form fields with an orange
focus ring, alt text on photos (decorative placeholders/watermarks are `aria-hidden`), keyboard-
navigable menus, sufficient contrast (navy/white, orange used at AA sizes). Maintain these.

## Files
Prototype pages (project root): `index.html`, `services.html`, `service-marketing.html`,
`service-sharepoint.html`, `service-it.html`, `service-staffing.html`, `service-operations.html`,
`industries.html`, `behavioral-health.html`, `about.html`, `case-studies.html`, `resources.html`,
`resource-article.html`, `contact.html`, `schedule-consultation.html`, `checkout.html`,
`checkout-success.html`, `checkout-cancel.html`, `privacy-policy.html`, `terms-of-service.html`.

Shared logic: `lib/site.jsx` (chrome + primitives + `PRODUCTS` catalog), `lib/service-page.jsx`
(service-detail engine). Design system: `_ds/creative-works-design-system-…/` (bundle + tokens +
component source). Assets: `assets/`.

See `prototype-map.md` for the page → Next.js route mapping and recommended file structure.
