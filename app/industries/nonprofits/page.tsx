import type { Metadata } from "next";
import Link from "next/link";
import {
  Megaphone, FolderCog, CloudCog, ShieldCheck, Users,
  RefreshCw, ListChecks, Lightbulb, BadgeCheck, Zap, Bot,
  Heart, Globe, ClipboardList, TrendingUp,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/services";
import { CONSULT_HREF } from "@/lib/navigation";
import AnyVerticalNote from "@/components/ui/AnyVerticalNote";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Nonprofits | Creative Works",
  description:
    "Creative Works helps nonprofit organizations build stronger operations, technology, and marketing so they can focus on their mission instead of fighting their own systems.",
  openGraph: {
    title: "Nonprofits | Creative Works",
    description: "Mission-driven organizations deserve mission-ready infrastructure.",
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
  automation: Zap,
  "ai-development": Bot,
};

const WHO = [
  "Health and Human Services Nonprofits",
  "Advocacy Organizations",
  "Community Foundations",
  "Faith-Based Service Organizations",
  "Education and Youth Programs",
  "Environmental and Conservation Groups",
  "Arts and Culture Organizations",
  "Veterans Service Organizations",
  "Animal Welfare Organizations",
  "Housing and Shelter Nonprofits",
  "Volunteer Management Organizations",
  "Civic and Community Associations",
];

const CHALLENGES = [
  { title: "Donor and funder reporting", desc: "Funders expect accurate, timely reporting. We build the systems and automations that make grant reporting a byproduct of your daily work, not an extra burden." },
  { title: "Limited staff capacity", desc: "Nonprofits run lean. We build systems that reduce administrative overhead so your team can spend more time on mission delivery." },
  { title: "Technology that does not fit", desc: "Generic software was not built for nonprofits. We configure and customize tools that actually match how your organization operates." },
  { title: "Board and donor communications", desc: "Consistent, professional communications build trust with your board and donors. We build the templates, systems, and workflows that keep stakeholders informed." },
  { title: "Volunteer coordination", desc: "Managing volunteers requires systems that track availability, skills, and hours. We build the infrastructure that makes coordination simple." },
  { title: "Digital presence and awareness", desc: "Your mission deserves to be known. We build the marketing and digital strategy that grows awareness and drives community engagement." },
];

export default function NonprofitsPage() {
  const featuredServices = SERVICES.filter((s) =>
    ["marketing", "salesforce-build-outs", "sharepoint-setup", "operational-support", "consulting", "automation"].includes(s.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-10 pb-0">
        <div className="max-w-container mx-auto px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Nonprofits" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
                  <Heart className="w-7 h-7" aria-hidden="true" />
                </div>
                <Eyebrow>Nonprofits</Eyebrow>
              </div>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-navy-midnight mb-5">
                Mission-driven organizations deserve mission-ready infrastructure.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Nonprofits do extraordinary work on constrained resources. We build the systems, technology, and marketing infrastructure that frees your team from administrative burden and lets you put every dollar toward impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href={CONSULT_HREF} size="lg" arrow>Schedule a Consultation</Button>
                <Button href="/services" variant="secondary" size="lg" arrow>Explore Our Services</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Heart, label: "Mission Aligned" },
                { icon: Globe, label: "Community Impact" },
                { icon: ClipboardList, label: "Funder Ready" },
                { icon: TrendingUp, label: "Built to Scale" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="bg-cloud rounded-xl p-6 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <p className="font-display font-bold text-sm text-navy-midnight">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <Section tone="navy">
        <SectionHeading
          align="center"
          eyebrow="Who We Serve"
          title="Built for nonprofits across every cause area."
          inverse
          className="mb-8"
        />
        <div className="flex flex-wrap gap-2 justify-center">
          {WHO.map((w) => (
            <span key={w} className="bg-white/10 border border-white/20 text-white/80 rounded-full px-4 py-1.5 text-sm font-medium">
              {w}
            </span>
          ))}
        </div>
      </Section>

      {/* Challenges */}
      <Section>
        <SectionHeading
          eyebrow="What We Understand"
          title="We know what nonprofits are up against."
          lead="Every recommendation we make accounts for the reality of nonprofit work, limited budgets, lean teams, and the constant pressure to demonstrate impact to funders and communities."
          className="mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHALLENGES.map((c) => (
            <div key={c.title} className="bg-cloud rounded-lg p-6">
              <div className="w-1 h-8 bg-orange rounded-full mb-4" />
              <h3 className="font-display font-bold text-lg text-navy-midnight mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section tone="cloud">
        <SectionHeading
          eyebrow="Our Services"
          title="The full range of support nonprofits need."
          lead="From donor communications and digital presence to operational systems and technology, we bring together everything your organization needs to run stronger and reach further."
          className="mb-8"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredServices.map((svc) => {
            const Icon = SERVICE_ICONS[svc.slug] || RefreshCw;
            return (
              <Link key={svc.slug} href={svc.href} className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col gap-3 hover:border-orange hover:shadow-card transition-all group">
                <div className="w-10 h-10 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy-midnight group-hover:text-orange transition-colors">{svc.eyebrow}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.tagline}</p>
              </Link>
            );
          })}
        </div>
        <div className="mt-6 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-orange hover:underline">
            View All Services
          </Link>
        </div>
      </Section>

      <AnyVerticalNote />

      <CTASection
        title="Let us help your nonprofit run stronger."
        body="Schedule a consultation and tell us about your mission and where we can make the biggest difference."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}
