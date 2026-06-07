import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Megaphone, FolderCog, CloudCog, ShieldCheck, Users,
  RefreshCw, ListChecks, Lightbulb, BadgeCheck, CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessSteps from "@/components/ui/ProcessSteps";
import ProblemSolution from "@/components/ui/ProblemSolution";
import CTASection from "@/components/ui/CTASection";
import { SERVICES } from "@/lib/services";
import { CONSULT_HREF } from "@/lib/navigation";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Behavioral Health Professional Services",
  description:
    "Marketing, SharePoint setup, IT services, staffing, and operational support, coordinated under one trusted partner for behavioral health organizations in Phoenix.",
  openGraph: {
    title: "Services | Creative Works",
    description:
      "A full suite of coordinated services. One trusted partner for behavioral health organizations.",
    images: [{ url: "/images/photo-meeting.jpg" }],
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

const SERVICE_DETAILS: Record<string, string[]> = {
  marketing: ["Brand and messaging", "Social media and ads", "Referral partner materials"],
  "sharepoint-setup": ["Portals and document libraries", "Permission structure", "Migration and training"],
  "salesforce-build-outs": ["CRM setup and configuration", "Workflow automation", "Dashboards and reporting"],
  "it-services": ["Microsoft 365 and accounts", "Cybersecurity basics", "Help desk coordination"],
  "staffing-support": ["Administrative and intake support", "Temporary coverage", "Onboarding support"],
  "operational-support": ["Workflow mapping and SOPs", "Process improvement", "Leadership support"],
  "business-process-services": ["Billing and revenue cycle", "Intake and admin processes", "HR and onboarding ops"],
  consulting: ["Strategic planning", "Problem-solving support", "Change leadership"],
  licensure: ["Licensure applications", "Policy and compliance", "Accreditation readiness"],
};

const STEPS = [
  {
    title: "Initial Consultation",
    desc: "We learn your organization, mission, and the pressures your team faces.",
  },
  {
    title: "Needs Assessment",
    desc: "We review systems, marketing, staffing, and operations to find the real gaps.",
  },
  {
    title: "Service Plan",
    desc: "We propose a clear, prioritized plan, one service or many, coordinated together.",
  },
  {
    title: "Implementation",
    desc: "We build, configure, and roll out solutions tailored to how your team works.",
  },
  {
    title: "Ongoing Support",
    desc: "We stay with you to train, refine, and support long-term success.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="The operational foundation behind better care."
        lead="Creative Works supports behavioral health organizations across a full suite of coordinated services, so your team can focus on the people you serve, not the systems behind them."
        primary={{ label: "Schedule a Consultation", href: CONSULT_HREF }}
        secondary={{ label: "Talk With Our Team", href: "/contact" }}
        tone="cloud"
      />

      {/* Services Grid */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Our Full Suite"
          title="Everything you need to strengthen the systems behind care."
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc) => {
            const Icon = SERVICE_ICONS[svc.slug] || Megaphone;
            const details = SERVICE_DETAILS[svc.slug] || [];
            return (
              <div
                key={svc.slug}
                className="flex flex-col gap-4 p-7 bg-white border border-gray-200 rounded-lg shadow-card"
              >
                <div className="w-8 h-8 text-orange">
                  <Icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy-midnight">
                  {svc.eyebrow}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {svc.short}
                </p>
                <ul className="grid gap-2">
                  {details.map((d) => (
                    <li
                      key={d}
                      className="flex gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-orange flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  href={svc.href}
                  className="mt-auto pt-2 inline-flex items-center gap-2 text-orange font-bold text-sm hover:text-orange-burnt transition-colors"
                >
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Combined Support */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden aspect-[5/4] shadow-card">
            <Image
              src="/images/photo-meeting.jpg"
              alt="Two professionals collaborating"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="One Coordinated Partner"
              title="Most organizations need more than one kind of support."
              lead="Marketing reaches your community. Systems keep your team organized. Reliable IT keeps everything running. The right people keep care moving. Strong operations hold it all together. Creative Works connects these so they work as one, instead of five disconnected vendors."
            />
            <div className="mt-6 grid gap-3">
              {[
                "Marketing and outreach that builds trust",
                "Internal systems that keep documents organized",
                "IT reliability your team can count on",
                "Staffing coverage when you need it",
                "Operational execution that ties it together",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-gray-700">
                  <CheckCircle2
                    className="w-5 h-5 text-orange flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Problem/Solution */}
      <Section tone="cloud">
        <SectionHeading
          align="center"
          eyebrow="Why It Matters"
          title="One coordinated partner beats a patchwork of vendors."
          lead="Juggling separate vendors for marketing, IT, staffing, and operations creates gaps, finger-pointing, and wasted time. Here is the difference."
          className="mb-10"
        />
        <ProblemSolution
          problemTitle="A patchwork of vendors"
          problems={[
            "Disconnected tools and inconsistent messaging",
            "Each vendor owns a silo, no one owns the outcome",
            "Repeated onboarding and duplicated context",
            "Gaps between marketing, systems, and operations",
            "More invoices, more meetings, more overhead",
          ]}
          solutionTitle="One Creative Works partnership"
          solutions={[
            "Strategy, systems, and people aligned to one plan",
            "A single team accountable for results",
            "We learn your organization once and apply it everywhere",
            "Services that hand off cleanly between each other",
            "One relationship, one point of contact, less overhead",
          ]}
        />
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Our Process"
          title="A clear path from first call to ongoing support."
          className="mb-10"
        />
        <ProcessSteps steps={STEPS} />
      </Section>

      <CTASection
        title="Not sure where to start?"
        body="Schedule a consultation and we will help you identify the highest-impact place to begin."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}
