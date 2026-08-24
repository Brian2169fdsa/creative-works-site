import type { Metadata } from "next";
import Link from "next/link";
import {
  Megaphone, FolderCog, CloudCog, ShieldCheck, Users,
  RefreshCw, ListChecks, Lightbulb, BadgeCheck, Zap, Bot,
  HandHeart, Building2, UsersRound, Headphones, MapPin,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CheckGrid from "@/components/ui/CheckGrid";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/services";
import { CONSULT_HREF } from "@/lib/navigation";
import AnyVerticalNote from "@/components/ui/AnyVerticalNote";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Human Services Organizations | Phoenix Creative Works",
  description:
    "Phoenix Creative Works helps human services organizations strengthen operations, marketing, and technology so their teams can focus on serving the communities that need them most.",
  openGraph: {
    title: "Human Services Organizations | Phoenix Creative Works",
    description: "Stronger systems for organizations that serve people.",
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
  "Community Action Agencies",
  "Social Service Providers",
  "Child and Family Services",
  "Housing and Homelessness Programs",
  "Food Banks and Pantries",
  "Workforce Development Programs",
  "Crisis Intervention Services",
  "Domestic Violence Programs",
  "Re-entry and Justice Services",
  "Disability Services Organizations",
  "Senior Services Providers",
  "Community Health Workers",
];

const CHALLENGES = [
  { title: "Lean teams, heavy workloads", desc: "Human services organizations do more with less. We build systems that multiply your team's capacity without multiplying your headcount." },
  { title: "Fragmented data and reporting", desc: "Funders, regulators, and leadership all need different data. We connect your systems so reporting happens automatically, not manually." },
  { title: "Staff turnover and onboarding", desc: "High turnover is a reality in human services. We build the documentation, training systems, and portals that make onboarding faster and institutional knowledge stick." },
  { title: "Limited technology budgets", desc: "We build solutions scaled to your reality, not your wishlist, prioritizing the highest-impact work first." },
  { title: "Compliance and grant reporting", desc: "Grant requirements and regulatory compliance demand consistent, accurate documentation. We help you build systems that capture the right data from the start." },
  { title: "Community trust and outreach", desc: "Reaching the people you serve requires authentic, accessible communication. We build marketing and digital presence that reflects your community's trust." },
];

export default function HumanServicesPage() {
  const featuredServices = SERVICES.filter((s) =>
    ["marketing", "sharepoint-setup", "it-services", "operational-support", "staffing-support", "automation"].includes(s.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-10 pb-0">
        <div className="max-w-container mx-auto px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Human Services" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
                  <HandHeart className="w-7 h-7" aria-hidden="true" />
                </div>
                <Eyebrow>Human Services</Eyebrow>
              </div>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-navy-midnight mb-5">
                Stronger systems for organizations that serve people.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Human services organizations carry enormous responsibility with limited resources. We build the operational, technology, and marketing infrastructure that helps you serve more people, more effectively, without burning out your team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href={CONSULT_HREF} size="lg" arrow>Schedule a Consultation</Button>
                <Button href="/services" variant="secondary" size="lg" arrow>Explore Our Services</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: HandHeart, label: "People-First Approach" },
                { icon: Building2, label: "Community Rooted" },
                { icon: UsersRound, label: "Staff Empowerment" },
                { icon: MapPin, label: "Phoenix Based" },
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
          title="Built for the full range of human services."
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
          title="We know the challenges human services organizations face."
          lead="We do not apply generic business solutions to mission-driven work. Every recommendation we make is grounded in the realities your organization lives every day."
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
          title="Everything human services organizations need, under one roof."
          lead="From marketing and technology to operations and staffing, we bring together the services that strengthen your organization across every function."
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
        title="Ready to strengthen your organization?"
        body="Schedule a consultation and let us learn about your mission and where we can help most."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}
