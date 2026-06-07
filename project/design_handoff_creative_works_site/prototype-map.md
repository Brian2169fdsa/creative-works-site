# Prototype → Next.js Route Map

Each HTML prototype maps to one App Router route. Recreate each prototype's sections as React
components styled with Tailwind using the tokens in `README.md`.

| Prototype file | Next.js route | Page component |
|---|---|---|
| `index.html` | `/` | `app/page.tsx` |
| `services.html` | `/services` | `app/services/page.tsx` |
| `service-marketing.html` | `/services/marketing` | `app/services/marketing/page.tsx` |
| `service-sharepoint.html` | `/services/sharepoint-setup` | `app/services/sharepoint-setup/page.tsx` |
| `service-salesforce.html` | `/services/salesforce-build-outs` | `app/services/salesforce-build-outs/page.tsx` |
| `service-it.html` | `/services/it-services` | `app/services/it-services/page.tsx` |
| `service-staffing.html` | `/services/staffing-support` | `app/services/staffing-support/page.tsx` |
| `service-operations.html` | `/services/operational-support` | `app/services/operational-support/page.tsx` |
| `service-business-process.html` | `/services/business-process-services` | `app/services/business-process-services/page.tsx` |
| `service-consulting.html` | `/services/consulting` | `app/services/consulting/page.tsx` |
| `service-licensure.html` | `/services/licensure` | `app/services/licensure/page.tsx` |
| `industries.html` | `/industries` | `app/industries/page.tsx` |
| `behavioral-health.html` | `/industries/behavioral-health` | `app/industries/behavioral-health/page.tsx` |
| `about.html` | `/about` | `app/about/page.tsx` |
| `case-studies.html` | `/case-studies` | `app/case-studies/page.tsx` |
| `resources.html` | `/resources` | `app/resources/page.tsx` |
| `resource-article.html` | `/resources/[slug]` | `app/resources/[slug]/page.tsx` |
| `contact.html` | `/contact` | `app/contact/page.tsx` |
| `schedule-consultation.html` | `/schedule-consultation` | `app/schedule-consultation/page.tsx` |
| `checkout.html` | (Stripe-hosted — no local route needed) | Replace with Stripe Checkout redirect |
| `checkout-success.html` | `/checkout/success` | `app/checkout/success/page.tsx` |
| `checkout-cancel.html` | `/checkout/cancel` | `app/checkout/cancel/page.tsx` |
| `privacy-policy.html` | `/privacy-policy` | `app/privacy-policy/page.tsx` |
| `terms-of-service.html` | `/terms-of-service` | `app/terms-of-service/page.tsx` |

> Note: `checkout.html` in the prototype is a **front-end mock** of a payment screen so the flow is
> demonstrable offline. In production you do **not** build this page — the `CheckoutButton` POSTs to
> `/api/stripe/checkout` and the user is redirected to **Stripe-hosted Checkout**, which returns to
> `/checkout/success` or `/checkout/cancel`.

## Recommended file structure
```
/app
  /page.tsx
  /services/page.tsx
  /services/marketing/page.tsx
  /services/sharepoint-setup/page.tsx
  /services/salesforce-build-outs/page.tsx
  /services/it-services/page.tsx
  /services/staffing-support/page.tsx
  /services/operational-support/page.tsx
  /services/business-process-services/page.tsx
  /services/consulting/page.tsx
  /services/licensure/page.tsx
  /industries/page.tsx
  /industries/behavioral-health/page.tsx
  /about/page.tsx
  /case-studies/page.tsx
  /resources/page.tsx
  /resources/[slug]/page.tsx
  /contact/page.tsx
  /schedule-consultation/page.tsx
  /checkout/success/page.tsx
  /checkout/cancel/page.tsx
  /privacy-policy/page.tsx
  /terms-of-service/page.tsx
  /api/stripe/checkout/route.ts      ← code/checkout-route.ts
  /api/stripe/webhook/route.ts       ← code/webhook-route.ts
  /api/contact/route.ts              ← build to deliver the contact form
/components
  Header.tsx  Footer.tsx  MobileNav.tsx
  PageHero.tsx  Section.tsx  Breadcrumb.tsx  SectionHeading.tsx  Eyebrow.tsx
  Button.tsx  Badge.tsx  IconBadge.tsx  ImageFrame.tsx  ImagePlaceholder.tsx
  ServiceCard.tsx  FeatureCard.tsx  ServicePage.tsx (config-driven)
  ProcessSteps.tsx  CheckGrid.tsx  ProblemSolution.tsx  FAQ.tsx  PillList.tsx
  StatsBand.tsx  TestimonialCard.tsx  CTASection.tsx
  ContactForm.tsx  ConsultationOptions.tsx  CheckoutButton.tsx  ← code/CheckoutButton.tsx
  CaseStudyCard.tsx  ResourceCard.tsx
/lib
  stripe.ts        ← code/stripe.ts
  constants.ts     ← code/constants.ts (STRIPE_PRODUCTS)
  site-content.ts  services.ts  resources.ts  case-studies.ts  navigation.ts  metadata.ts
/public
  /images   /logos   /icons
```

## Tailwind theme starter
Map the tokens in `README.md` into `tailwind.config.ts` `theme.extend`:
- `colors`: navy (deep/midnight/700/500), orange (DEFAULT/burnt/soft), cloud, gray scale,
  soft-blue, warm-sand, success.
- `fontFamily`: `display: ["Sora", ...]`, `sans: ["Inter", ...]`.
- `borderRadius`: sm 8 / md 12 / lg 16 / xl 24 / pill 9999.
- `boxShadow`: xs / sm / card / lg / cta (values in README).
- Add the fluid heading sizes as utilities or use `clamp()` in component styles.

## Build order (from the client brief)
1. Design system → Tailwind theme + base components (Header, Footer, Button, Card, Section, CTA).
2. Homepage (sets the rhythm).
3. Services overview + the 5 service detail pages (one `ServicePage` + per-service config).
4. Industries, Behavioral Health, About.
5. Contact, Schedule Consultation, Stripe routes, success/cancel.
6. Resources, Case Studies, article template.
7. Legal, metadata, sitemap, robots, OG image, Vercel env, QA.
