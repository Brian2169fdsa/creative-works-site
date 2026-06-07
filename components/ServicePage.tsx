import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "./ui/Breadcrumb";
import Eyebrow from "./ui/Eyebrow";
import Button from "./ui/Button";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import CheckGrid from "./ui/CheckGrid";
import ProcessSteps from "./ui/ProcessSteps";
import CTASection from "./ui/CTASection";
import { CONSULT_HREF } from "@/lib/navigation";
import type { ServiceConfig } from "@/lib/services";
import { SERVICES } from "@/lib/services";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function getIcon(name: string): LucideIcon {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  // Convert PascalCase icon name
  const pascal = name
    .split(/[-_]/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
  return icons[pascal] || LucideIcons.Star;
}

interface CardRowProps {
  cards: { icon?: string; title: string; desc?: string }[];
  columns?: number;
}

function CardRow({ cards }: CardRowProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((card, i) => {
        const Icon = card.icon ? getIcon(card.icon) : null;
        return (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-3"
          >
            {Icon && (
              <div className="w-11 h-11 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
            )}
            <h3 className="font-display font-bold text-lg text-navy-midnight">
              {card.title}
            </h3>
            {card.desc && (
              <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

interface CalloutSectionProps {
  s: NonNullable<ServiceConfig["sections"]>[0];
}

function CalloutSection({ s }: CalloutSectionProps) {
  const dark = s.tone === "navy";
  return (
    <Section tone={dark ? "navy" : "cloud"}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading
            eyebrow={s.eyebrow}
            title={s.title}
            lead={s.body}
            inverse={dark}
          />
          {s.points && (
            <div className="mt-6">
              <CheckGrid
                items={s.points}
                columns={1}
                inverse={dark}
              />
            </div>
          )}
        </div>
        <div className="relative rounded-xl overflow-hidden aspect-[5/3.4] bg-navy-700/20 flex items-center justify-center">
          <div className={cn("text-center p-8", dark ? "text-white/40" : "text-gray-400")}>
            <p className="text-sm">{s.placeholder || "Image placeholder"}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function RelatedServices({ slugs }: { slugs?: string[] }) {
  if (!slugs?.length) return null;
  const items = slugs.map((slug) => SERVICES.find((s) => s.slug === slug)).filter(Boolean) as ServiceConfig[];
  if (!items.length) return null;

  return (
    <Section tone="cloud">
      <SectionHeading
        align="center"
        eyebrow="Works Better Together"
        title="Pair this with our other services."
        lead="Most organizations need more than one kind of support. We coordinate it all under one trusted partner."
        className="mb-10"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((svc) => {
          const Icon = getIcon(svc.icon);
          return (
            <div
              key={svc.slug}
              className="bg-white border border-gray-200 rounded-lg shadow-card hover:-translate-y-1 hover:shadow-lg transition-all duration-200 p-7 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-xl text-navy-midnight">
                {svc.eyebrow}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {svc.short}
              </p>
              <Link
                href={svc.href}
                className="inline-flex items-center gap-2 text-orange font-bold text-sm hover:text-orange-burnt transition-colors"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default function ServicePage(cfg: ServiceConfig) {
  const Icon = getIcon(cfg.icon);

  return (
    <>
      {/* Hero */}
      <section className="bg-cloud py-20 relative overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: cfg.eyebrow },
                ]}
              />
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <Eyebrow>{cfg.eyebrow}</Eyebrow>
              </div>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3rem] tracking-tight leading-tight text-navy-midnight">
                {cfg.title}
              </h1>
              <p className="mt-5 text-xl text-gray-600 leading-relaxed max-w-2xl">
                {cfg.lead}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href={CONSULT_HREF} size="lg" arrow>
                  Schedule a Consultation
                </Button>
                <Button href="/contact" variant="secondary" size="lg" arrow>
                  Talk With Our Team
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[5/3.4] shadow-lg">
              {cfg.heroImage ? (
                <Image
                  src={cfg.heroImage}
                  alt={`${cfg.eyebrow} hero`}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-navy-700/10 flex items-center justify-center">
                  <div className="text-center p-8 text-gray-400">
                    <Icon className="w-16 h-16 mx-auto mb-3 text-orange/30" aria-hidden="true" />
                    <p className="text-sm">{cfg.heroPlaceholder || `${cfg.eyebrow}, photo placeholder`}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      {cfg.problem && (
        <Section>
          <SectionHeading
            eyebrow={cfg.problem.eyebrow || "The Challenge"}
            title={cfg.problem.title}
            lead={cfg.problem.lead}
            className="mb-8"
          />
          <CheckGrid
            items={cfg.problem.items}
            columns={cfg.problem.columns === 1 ? 1 : 2}
            icon="alert"
          />
        </Section>
      )}

      {/* What we provide */}
      {cfg.provide && (
        <Section tone="cloud">
          <SectionHeading
            align="center"
            eyebrow={cfg.provide.eyebrow || "What We Provide"}
            title={cfg.provide.title}
            lead={cfg.provide.lead}
            className="mb-10"
          />
          <CardRow cards={cfg.provide.cards} columns={cfg.provide.columns} />
        </Section>
      )}

      {/* Custom sections */}
      {(cfg.sections || []).map((s, i) => {
        if (s.type === "callout") return <CalloutSection key={i} s={s} />;
        if (s.type === "cards") {
          return (
            <Section key={i} tone={(s.tone as "white" | "cloud" | "navy") || "white"}>
              <SectionHeading
                align={(s.align as "left" | "center") || "center"}
                eyebrow={s.eyebrow}
                title={s.title}
                lead={s.lead}
                className="mb-10"
              />
              {s.cards && <CardRow cards={s.cards} columns={s.columns} />}
            </Section>
          );
        }
        if (s.type === "checklist") {
          return (
            <Section key={i} tone={(s.tone as "white" | "cloud" | "navy") || "white"}>
              <SectionHeading
                align={(s.align as "left" | "center") || "left"}
                eyebrow={s.eyebrow}
                title={s.title}
                lead={s.lead}
                className="mb-8"
              />
              {s.items && <CheckGrid items={s.items} columns={s.columns === 1 ? 1 : s.columns === 3 ? 3 : 2} />}
            </Section>
          );
        }
        return null;
      })}

      {/* Process */}
      {cfg.process && (
        <Section>
          <SectionHeading
            align="center"
            eyebrow={cfg.process.eyebrow || "How It Works"}
            title={cfg.process.title}
            lead={cfg.process.lead}
            className="mb-10"
          />
          <ProcessSteps steps={cfg.process.steps} />
        </Section>
      )}

      {/* Benefits */}
      {cfg.benefits && (
        <Section tone="cloud">
          <SectionHeading
            align="center"
            eyebrow={cfg.benefits.eyebrow || "The Payoff"}
            title={cfg.benefits.title}
            lead={cfg.benefits.lead}
            className="mb-8"
          />
          <CheckGrid
            items={cfg.benefits.items}
            columns={3}
          />
        </Section>
      )}

      <RelatedServices slugs={cfg.related} />

      <CTASection
        title={(cfg.cta?.title) || "Let's Build a Stronger Future, Together."}
        body={cfg.cta?.body || "Schedule a consultation and we will help you find the right next step for your organization."}
        buttonLabel={cfg.cta?.label || "Schedule a Consultation"}
        href={CONSULT_HREF}
        tone="orange"
      />
    </>
  );
}
