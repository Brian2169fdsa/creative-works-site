import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  CheckCircle2,
  HeartHandshake,
  Compass,
  Megaphone,
  FolderCog,
  CloudCog,
  ShieldCheck,
  Users,
  RefreshCw,
  ListChecks,
  Lightbulb,
  BadgeCheck,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessSteps from "@/components/ui/ProcessSteps";
import PillList from "@/components/ui/PillList";
import CTASection from "@/components/ui/CTASection";
import StatsBand from "@/components/ui/StatsBand";
import Eyebrow from "@/components/ui/Eyebrow";
import {
  TRUST_CHIPS,
  WHY_ITEMS,
  PHOENIX_POINTS,
  WHO_WE_HELP,
  STATS,
  TESTIMONIAL,
} from "@/lib/site-content";
import { SERVICES } from "@/lib/services";
import { CONSULT_HREF } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Creative Works | Full-Service Support for Behavioral Health Organizations",
  description:
    "Creative Works is a Phoenix-based professional services partner helping behavioral health organizations strengthen the systems behind care, marketing, SharePoint, IT, staffing, and operational support.",
  openGraph: {
    title: "Creative Works | Professional Services for Behavioral Health",
    description: "We help behavioral health organizations strengthen the systems behind care.",
    images: [{ url: "/images/home-hero.png" }],
  },
};

const SERVICE_ICONS: Record<string, LucideIcon> = {
  marketing: Megaphone,
  "sharepoint-setup": FolderCog,
  "salesforce-build-outs": CloudCog,
  "it-services": ShieldCheck,
  "staffing-support": Users,
  "operational-support": RefreshCw,
  "business-process-services": ListChecks,
  consulting: Lightbulb,
  licensure: BadgeCheck,
};

const WHY_ICONS: Record<string, LucideIcon> = {
  Target,
  CheckCircle2,
  HeartHandshake,
  Compass,
};

const PROCESS_STEPS = [
  {
    title: "Discover",
    desc: "We learn your organization, your mission, and the challenges slowing your team down.",
  },
  {
    title: "Assess",
    desc: "We map your systems, marketing, staffing, and operations to find the real gaps.",
  },
  {
    title: "Build",
    desc: "We design and implement solutions tailored to how your team actually works.",
  },
  {
    title: "Support",
    desc: "We stay with you, training, refining, and supporting long-term success.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-tight text-navy-midnight">
                Full-Service Support for Behavioral Health Organizations
              </h1>
              <p className="mt-5 text-xl text-gray-600 leading-relaxed max-w-2xl">
                We partner with behavioral health organizations to strengthen
                operations, elevate impact, and build a better future for the
                communities you serve.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href={CONSULT_HREF} size="lg" arrow>
                  Schedule a Consultation
                </Button>
                <Button href="/services" variant="secondary" size="lg" arrow>
                  Explore Our Services
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-7 gap-y-3 mt-8">
                {TRUST_CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-midnight"
                  >
                    <CheckCircle2
                      className="w-4.5 h-4.5 text-orange flex-shrink-0"
                      aria-hidden="true"
                    />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[5/3.4] shadow-lg">
              <Image
                src="/images/home-hero.png"
                alt="Creative Works hero"
                fill
                className="object-cover"
                style={{ objectPosition: "100% center" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar Strip */}
      <section className="px-6 -mt-8 relative z-10">
        <div className="max-w-container mx-auto bg-white border border-gray-200 rounded-xl shadow-card overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9">
            {SERVICES.map((svc, i) => {
              const Icon = SERVICE_ICONS[svc.slug] || Megaphone;
              return (
                <Link
                  key={svc.slug}
                  href={svc.href}
                  className={cn(
                    "flex flex-col items-center text-center gap-2.5 p-5 hover:bg-cloud transition-colors",
                    i > 0 ? "border-l border-gray-200" : ""
                  )}
                >
                  <Icon
                    className="w-7 h-7 text-orange"
                    aria-hidden="true"
                  />
                  <span className="font-display font-bold text-sm text-navy-midnight leading-tight">
                    {svc.eyebrow}
                  </span>
                  <span className="text-xs text-gray-500 leading-tight hidden lg:block">
                    {svc.tagline}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Creative Works */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SectionHeading
            eyebrow="Why Creative Works"
            title="Strategy, technology, and people working together."
            lead="We combine strategy, technology, and people to deliver solutions that make a real difference. Our approach is built around what matters most: clarity, reliability, and sustainable growth."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_ITEMS.map((item) => {
              const Icon = WHY_ICONS[item.icon] || Target;
              return (
                <div
                  key={item.title}
                  className="bg-cloud rounded-lg p-6 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-navy-midnight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Phoenix Rooted */}
      <Section tone="cloud">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden aspect-[5/3.2] shadow-card">
            <Image
              src="/images/home-secondary.png"
              alt="Creative Works community"
              fill
              className="object-cover object-bottom"
            />
          </div>
          <div>
            <Eyebrow>Rooted in Phoenix</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-snug text-navy-midnight mt-4">
              Rooted in Phoenix. Driven by Purpose.
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl">
              Creative Works is a Phoenix-based professional services firm
              dedicated to supporting behavioral health organizations. We
              understand the operational demands of mission-driven care and help
              teams build stronger organizations that change lives.
            </p>
            <div className="mt-6 grid gap-4">
              {PHOENIX_POINTS.map((point) => (
                <div key={point.title} className="flex gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-orange flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="font-bold text-navy-midnight text-base">
                      {point.title}
                    </div>
                    <div className="text-sm text-gray-600 leading-snug mt-0.5">
                      {point.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section id="services">
        <SectionHeading
          align="center"
          eyebrow="Our Services"
          title="A full suite of services. One trusted partner."
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc) => {
            const Icon = SERVICE_ICONS[svc.slug] || Megaphone;
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
                <p className="text-gray-600 text-base leading-relaxed flex-1">
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

      {/* Who We Help */}
      <Section tone="cloud">
        <SectionHeading
          align="center"
          eyebrow="Who We Help"
          title="Built for mission-driven behavioral health organizations."
          lead="From growing clinics to established treatment centers, we support the teams working to make care more accessible and effective."
          className="mb-9"
        />
        <div className="flex justify-center">
          <PillList items={WHO_WE_HELP} />
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="How We Work"
          title="A clear path from challenge to lasting change."
          className="mb-10"
        />
        <ProcessSteps steps={PROCESS_STEPS} />
      </Section>

      {/* Stats + Testimonial */}
      <section className="bg-navy-midnight py-16">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight">
              Stronger Organizations. Better Outcomes.
            </h2>
            <p className="mt-3 text-white/70 max-w-lg mx-auto">
              We help behavioral health organizations strengthen the systems
              behind care.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start justify-center lg:justify-between">
            <div className="flex flex-wrap gap-10 justify-center">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-extrabold text-4xl text-orange-soft">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 min-w-[280px] max-w-lg border-l border-white/14 pl-8">
              <blockquote>
                <p className="text-white text-lg leading-relaxed italic">
                  &ldquo;{TESTIMONIAL.quote}&rdquo;
                </p>
                <footer className="mt-5">
                  <span className="font-bold text-white">
                    {TESTIMONIAL.name}, {TESTIMONIAL.role}
                  </span>
                  <br />
                  <span className="text-white/60 text-sm">
                    {TESTIMONIAL.org}
                  </span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build a Stronger Future, Together."
        body="Whether you need strategic guidance, better systems, or the right people, Creative Works is here to help your mission thrive."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}
