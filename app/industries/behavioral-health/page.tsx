import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Megaphone, FolderCog, CloudCog, ShieldCheck, Users,
  RefreshCw, ListChecks, Lightbulb, BadgeCheck,
  Rocket, DoorOpen, UserPlus, Grid2X2, Handshake,
} from "lucide-react";
import Section from "@/components/ui/Section";
import ImageFrame from "@/components/ui/ImageFrame";
import SectionHeading from "@/components/ui/SectionHeading";
import CheckGrid from "@/components/ui/CheckGrid";
import PillList from "@/components/ui/PillList";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/services";
import { CONSULT_HREF } from "@/lib/navigation";
import AnyVerticalNote from "@/components/ui/AnyVerticalNote";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Behavioral Health Organizations | Industry Services",
  description:
    "Phoenix Creative Works helps behavioral health organizations strengthen the systems behind care, marketing, SharePoint, IT, staffing, and operations, tailored to mission-driven teams.",
  openGraph: {
    title: "Behavioral Health Organizations | Phoenix Creative Works",
    description:
      "We understand your world. We help you strengthen the systems behind care.",
    images: [{ url: "/images/photo-hero.jpg" }],
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

const WHO = [
  "Mental Health Clinics",
  "Substance Use Treatment",
  "Outpatient Programs",
  "Residential Treatment Centers",
  "Recovery Organizations",
  "Community Behavioral Health",
  "Psychiatric Service Providers",
  "Integrated Care Teams",
];

const CHALLENGES = [
  {
    title: "Staffing shortages",
    desc: "Too few hands, too much to do, and leaders covering the gaps.",
  },
  {
    title: "Operational complexity",
    desc: "Many moving parts with little structure holding them together.",
  },
  {
    title: "Documentation burden",
    desc: "Endless paperwork pulling staff away from people.",
  },
  {
    title: "Referral competition",
    desc: "Standing out and staying top-of-mind with partners.",
  },
  {
    title: "Technology gaps",
    desc: "Tools that do not talk to each other or break down.",
  },
  {
    title: "Internal file chaos",
    desc: "Documents scattered where no one can find them.",
  },
  {
    title: "Compliance-sensitive workflows",
    desc: "Processes that must be careful, consistent, and documented.",
  },
  {
    title: "Leadership overload",
    desc: "Directors wearing five hats and running out of hours.",
  },
];

const USE_CASES = [
  { icon: Rocket, t: "Launching a new program" },
  { icon: DoorOpen, t: "Improving intake operations" },
  { icon: FolderCog, t: "Organizing internal documents" },
  { icon: Users, t: "Supporting staff transitions" },
  { icon: Megaphone, t: "Building marketing campaigns" },
  { icon: Handshake, t: "Creating referral partner materials" },
  { icon: UserPlus, t: "Improving staff onboarding" },
  { icon: Grid2X2, t: "Setting up Microsoft 365 and SharePoint" },
];

export default function BehavioralHealthPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cloud py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Industries", href: "/industries" },
                  { label: "Behavioral Health" },
                ]}
              />
              <Eyebrow>Behavioral Health Organizations</Eyebrow>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-tight text-navy-midnight mt-4">
                We understand your world, because it is the only one we work in.
              </h1>
              <p className="mt-5 text-xl text-gray-600 leading-relaxed max-w-2xl">
                Behavioral health organizations carry an enormous mission with
                limited resources. Phoenix Creative Works helps you strengthen the
                systems behind care so your team can spend more time with the
                people who need them.
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
            <ImageFrame className="aspect-[5/3.4] shadow-lg">
              <Image
                src="/images/photo-hero.jpg"
                alt="Behavioral health leadership team meeting"
                fill
                className="object-cover"
              />
            </ImageFrame>
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Who We Support"
          title="The teams behind behavioral health care."
          className="mb-9"
        />
        <div className="flex justify-center">
          <PillList items={WHO} />
        </div>
      </Section>

      {/* Challenges */}
      <Section tone="cloud">
        <SectionHeading
          eyebrow="Challenges We Understand"
          title="The pressures you live with every day."
          lead="We have worked alongside teams like yours. These are the realities we design around, not assumptions we make from the outside."
          className="mb-9"
        />
        <CheckGrid items={CHALLENGES} columns={2} icon="alert" />
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="How We Help"
          title="A full suite of services, tailored to behavioral health."
          lead="Each of our services adapts to the realities of mission-driven care."
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

      {/* Use Cases */}
      <Section tone="cloud">
        <SectionHeading
          align="center"
          eyebrow="Use Cases"
          title="Where organizations bring us in."
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {USE_CASES.map((u) => (
            <div
              key={u.t}
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-md shadow-xs"
            >
              <u.icon
                className="w-5 h-5 text-orange flex-shrink-0"
                aria-hidden="true"
              />
              <span className="font-semibold text-base text-navy-midnight">
                {u.t}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <AnyVerticalNote />

      <CTASection
        title="Let's strengthen the systems behind your care."
        body="Schedule a consultation and we will help you find the highest-impact place to start."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}
