# Creative Works — Design System

A professional-services brand system for **Creative Works**, a Phoenix-based firm that
provides full-service operational support — marketing, SharePoint setup, IT services,
staffing, and operational support — to **behavioral health organizations**.

The brand should feel **strategic, reliable, human, mission-driven, modern, warm, and
professional**. It is a trusted operational partner for behavioral health leaders — not a
flashy marketing agency, not a cold clinical vendor.

> **Tagline:** Renewing Organizations. Empowering People. Building Better Futures.
> **Pillar line:** Strategic. Reliable. Human.

## Source material
This system was built from four brand reference images supplied by the client (in `uploads/`):
- `src-phoenix.png` — full horizontal logo (navy "creative" wordmark + orange "WORKS" + phoenix-in-the-'a').
- `src-logo.png` — the orange phoenix icon mark (gradient, in a circular negative-space disc).
- `src-ad.png` — a social/ad creative ("Full-Service Support for Behavioral Health Organizations").
- `src-homepage.png` — a full homepage mockup. **This is the visual source of truth** for layout, section
  rhythm, the navy stats band, the orange CTA band, service-pillar strip, and footer.

No codebase or Figma file was provided — the system is reconstructed from these mockups plus the
written brief. Logos were background-knocked-out programmatically into `assets/`.

---

## Index / manifest
- **`styles.css`** — global entry. Link this one file. Imports-only; reaches all tokens + fonts.
- **`tokens/`** — `colors.css`, `typography.css`, `spacing.css` (radii/shadows/motion), `fonts.css`.
- **`assets/`** — `logo-full.png`, `logo-full-white.png` (for navy backgrounds), `phoenix-mark.png`, `favicon.png`.
- **`components/`** — reusable React primitives (see list below).
- **`ui_kits/website/`** — high-fidelity homepage recreation.
- **`guidelines/`** — foundation specimen cards (colors, type, spacing, brand) shown in the Design System tab.
- **`SKILL.md`** — Agent Skill wrapper for use in Claude Code.

### Components
`Button`, `CheckoutButton`, `Eyebrow`, `Badge`, `ServiceCard`, `FeatureCard`, `StatItem`,
`StatsBand`, `TestimonialCard`, `CTASection`, `Input`, `Textarea`, `Select`, `SectionHeading`.

---

## CONTENT FUNDAMENTALS — how Creative Works writes

**Voice:** clear, professional, warm, human, mission-aware, direct, confident. Never salesy,
never clinical, never casual-cute.

- **Person:** Second person to the client ("your team", "your organization", "the people you
  serve"), first-person plural for the firm ("We help…", "We combine strategy, technology, and
  people"). Creates a partner-to-partner tone.
- **Casing:** Headlines in Title Case or sentence case with strong nouns. Eyebrows / labels in
  ALL CAPS with wide letter-spacing (`--ls-label`). The wordmark sets the pattern: "creative"
  lowercase, "WORKS" spaced caps.
- **Sentence shape:** Short, declarative, parallel. Triads are a signature device:
  "Strategic. Reliable. Human." / "Renewing Organizations. Empowering People. Building Better
  Futures." / "Smart Solutions. Stronger Missions. Lasting Impact."
- **Headline style:** Outcome- and system-oriented. "Full-Service Support for Behavioral Health
  Organizations" · "Rooted in Phoenix. Driven by Purpose." · "Stronger Organizations. Better
  Outcomes." · "Let's Build a Stronger Future—Together."
- **Body style:** One idea per sentence, generous breathing room. Leads with the client's reality,
  then what Creative Works does about it. E.g. "Your team should not have to search through
  scattered folders… Creative Works helps you build SharePoint environments that are organized,
  secure, and easy to use."
- **CTA verbs:** "Schedule a Consultation", "Explore Our Services", "Talk With Our Team",
  "Learn More", "Start Assessment". Primary CTA is almost always *Schedule a Consultation*.
- **Vocabulary to use:** strengthen the systems behind care · support your mission · build better
  operations · reliable professional support · mission-driven · the people you serve.
- **Vocabulary to avoid:** "crush", "explode your growth", "disrupt", "hacks", "we're the best
  agency", anything hype-y, and any imagery/copy that exploits or depicts vulnerable clients.
- **Emoji:** none. Not part of the brand.

---

## VISUAL FOUNDATIONS

**Color.** Two-color brand contrast: **navy** is the trust color, **phoenix orange** is the
energy/action color.
- Navy (`#0A2540` / deepest `#061E3A`) carries headings, the dark stats band, and the footer.
- Orange (`#F15A24`) is reserved for CTAs, icons, stat numbers, thin line accents, and the
  phoenix. It is an accent, never a wash — used at roughly a 1:6 ratio against navy/neutral.
- Backgrounds are predominantly **white** with generous whitespace; a `--cw-cloud` (#F8FAFC) tint
  alternates sections. Accent tints (soft blue, warm sand) are available but used sparingly.
- The phoenix mark uses a warm gradient (`--cw-gradient-phoenix`, soft→burnt orange).

**Typography.** `Sora` for display headings (bold, rounded, geometric — chosen to echo the
rounded custom wordmark) and `Inter` for body/UI. Headings are bold (700–800) with slightly
negative tracking; eyebrows are 12px uppercase with `0.08em` tracking. Body runs 16–19px at
1.6 line-height. **Substitution note:** the literal wordmark uses a bespoke rounded typeface;
Sora is the nearest open match — swap if the brand font becomes available.

**Spacing & layout.** 4px base scale. Sections breathe with `--section-y` (96px) vertical
rhythm; content lives in a 1200px max container. Alternating image/text sections, a horizontal
five-up service-pillar strip (stacks on mobile), full-width navy and orange bands for emphasis.

**Backgrounds & motifs.** Clean and flat — no noise/grain. The signature decorative element is
the **phoenix curve**: a thin orange arc or quarter-circle that frames hero imagery and section
corners (echoing the swoop in the phoenix mark). Used sparingly. A faint, low-opacity phoenix
watermark can sit in navy/orange bands. No busy gradients on backgrounds; gradients are reserved
for the phoenix and orange CTA fills.

**Cards.** White surface, `--radius-lg` (16px) corners, hairline `--border-subtle` border, and a
soft low shadow (`--shadow-card`, navy-tinted). On hover they lift slightly (translateY -2px,
shadow grows). Icon sits top in orange. No colored-left-border cards.

**Borders & dividers.** Hairline 1px gray dividers separate pillar-strip items and footer
columns. A 3px orange rule (`--accent-rule`) underlines eyebrows and sits to the left of pull
quotes.

**Buttons.** Pill-shaped (`--radius-pill`). Primary = solid orange with a soft orange glow
shadow (`--shadow-cta`) and a trailing arrow "→". Secondary = white/transparent with navy text
and a hairline border. Hover darkens orange to burnt (`--cw-orange-burnt`); press shrinks
slightly (scale .98). Focus shows an orange ring.

**Motion.** Restrained and professional. Fades + small translateY on entrance, `--ease-out`,
~220ms. Hover transitions on color/shadow/transform. No bounce, no infinite loops.

**Imagery.** Warm, natural-light photography of behavioral-health *leadership and administrative
teams* — meetings, collaboration, office environments, Phoenix/desert skyline. Diverse,
professional, human. Avoid clinical/therapy imagery or anything depicting vulnerable clients.
Images sit in rounded frames (`--radius-xl`), often paired with a phoenix-curve accent.

---

## ICONOGRAPHY

Creative Works uses **outline / duotone line icons** with a medium stroke, rendered in navy with
selective orange fills (matching the homepage mockup's pillar icons: megaphone, shield-lock,
people group, refresh-cycle). Recommended set: **Lucide** (consistent 2px stroke, rounded
joins) — link from CDN (`https://unpkg.com/lucide@latest`). For the duotone treatment, render
the icon in navy and tint one accent element orange.

- The **phoenix mark** (`assets/phoenix-mark.png`) is the brand's hero glyph — used as the icon
  mark, favicon, and as a faint watermark in dark/orange bands. Use it sparingly and never
  recolor it.
- The **SharePoint** pillar uses Microsoft's SharePoint product glyph; substitute a generic
  document-collaboration line icon if brand-neutral usage is required.
- **No emoji.** **No unicode-glyph icons.** Use real SVG icons (Lucide) or the phoenix asset.
- Stat/feature icons are orange line icons sized ~28–32px sitting above the label.

> Substitution flagged: brand reference shows custom-styled pillar icons; Lucide is used as the
> closest open, license-clean match. Swap for the client's icon set if provided.
