import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartPulse, Users2, Handshake, Hospital, Building2,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import { CONSULT_HREF } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Industries | Mission-Driven Organizations",
  description:
    "Creative Works supports behavioral health organizations, human services nonprofits, and other mission-driven teams across a full suite of coordinated professional services.",
};

const ADJACENT_INDUSTRIES = [
  {
    icon: Users2,
    title: "Human Services Organizations",
    desc: "Workforce development, housing, and social services teams that benefit from the same support model.",
  },
  {
    icon: Handshake,
    title: "Nonprofits",
    desc: "Mission-driven organizations of all kinds that need stronger systems without a big-agency price tag.",
  },
  {
    icon: Hospital,
    title: "Healthcare Services",
    desc: "Outpatient, integrated, and specialty healthcare teams with administrative and operational needs.",
  },
  {
    icon: Building2,
    title: "Community-Based Organizations",
    desc: "Local organizations serving their communities, from housing to education and beyond.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Supporting Mission-Driven Organizations"
        lead="We believe organizations doing the most important work deserve professional-grade support. Our services are designed for the realities of care-oriented teams."
        primary={{ label: "Schedule a Consultation", href: CONSULT_HREF }}
        secondary={{ label: "Learn About Behavioral Health", href: "/industries/behavioral-health" }}
        tone="cloud"
        align="center"
      />

      {/* Primary Industry */}
      <Section>
        <div className="bg-navy-midnight rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-md bg-white/10 border border-white/20 flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-orange-soft" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-orange-soft">
                  Primary Focus
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight tracking-tight">
                Behavioral Health Organizations
              </h2>
              <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-xl">
                Mental health clinics, substance use treatment, residential
                programs, recovery organizations, and integrated care teams.
                This is the world we know best, and where every service we offer
                is most deeply tuned.
              </p>
              <div className="mt-8">
                <Link
                  href="/industries/behavioral-health"
                  className="inline-flex items-center gap-2 bg-orange hover:bg-orange-burnt text-white font-semibold rounded-pill px-7 py-3.5 text-base shadow-cta transition-all"
                >
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="bg-navy-700/30 p-10 lg:p-14 flex flex-col justify-center gap-4">
              {[
                "Mental Health Clinics",
                "Substance Use Treatment",
                "Outpatient Programs",
                "Residential Treatment Centers",
                "Recovery Organizations",
                "Community Behavioral Health",
                "Psychiatric Service Providers",
                "Integrated Care Teams",
              ].map((org) => (
                <div key={org} className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                  {org}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Adjacent Industries */}
      <Section tone="cloud">
        <SectionHeading
          eyebrow="Also Served"
          title="We help other mission-driven organizations too."
          lead="Our services translate well to any organization that needs stronger systems, reliable support, and a partner who understands the demands of mission-driven work."
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ADJACENT_INDUSTRIES.map((ind) => (
            <div
              key={ind.title}
              className="bg-white border border-gray-200 rounded-lg p-7 flex flex-col gap-4 shadow-sm"
            >
              <div className="w-10 h-10 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
                <ind.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-xl text-navy-midnight">
                {ind.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Focus Matters */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            align="center"
            eyebrow="Why Focus Matters"
            title="Care-oriented organizations need specialized support."
            lead="Generic professional services firms do not understand compliance-sensitive workflows, community trust-building, or the operational reality of mission-driven care. We do. And that context changes everything, from how we build your Salesforce instance to how we write your marketing copy."
          />
          <div className="mt-8">
            <Link
              href={CONSULT_HREF}
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-burnt text-white font-semibold rounded-pill px-7 py-3.5 text-base shadow-cta transition-all"
            >
              Schedule a Consultation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>

      <CTASection
        title="Let's strengthen the systems behind your care."
        body="Schedule a consultation and we will help you find the highest-impact place to start."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}
