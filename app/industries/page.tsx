import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartPulse, Users2, Heart, ArrowRight,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import AnyVerticalNote from "@/components/ui/AnyVerticalNote";
import { CONSULT_HREF } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Industries | Mission-Driven Organizations",
  description:
    "Phoenix Creative Works supports behavioral health organizations, human services nonprofits, and other mission-driven teams across a full suite of coordinated professional services.",
};

const INDUSTRIES = [
  {
    icon: HeartPulse,
    eyebrow: "Primary Focus",
    title: "Behavioral Health Organizations",
    desc: "Mental health clinics, substance use treatment, residential programs, recovery organizations, and integrated care teams. This is the world we know best, and where every service we offer is most deeply tuned.",
    orgs: [
      "Mental Health Clinics",
      "Substance Use Treatment",
      "Outpatient Programs",
      "Residential Treatment Centers",
      "Recovery Organizations",
      "Community Behavioral Health",
      "Psychiatric Service Providers",
      "Integrated Care Teams",
    ],
    href: "/industries/behavioral-health",
    primary: true,
  },
  {
    icon: Users2,
    eyebrow: "Also Served",
    title: "Human Services Organizations",
    desc: "Community action agencies, social service providers, child and family services, housing programs, workforce development, and crisis intervention organizations that need stronger systems and reliable support.",
    orgs: [
      "Community Action Agencies",
      "Social Service Providers",
      "Child and Family Services",
      "Housing Programs",
      "Workforce Development",
      "Crisis Intervention Services",
      "Domestic Violence Programs",
      "Re-entry and Justice Services",
    ],
    href: "/industries/human-services",
    primary: false,
  },
  {
    icon: Heart,
    eyebrow: "Also Served",
    title: "Nonprofits",
    desc: "Mission-driven organizations of all kinds, advocacy groups, community foundations, faith-based services, education programs, veterans services, and civic organizations, that need stronger systems without a big-agency price tag.",
    orgs: [
      "Advocacy Organizations",
      "Community Foundations",
      "Faith-Based Organizations",
      "Education and Youth Programs",
      "Veterans Service Organizations",
      "Civic and Community Associations",
      "Animal Welfare Organizations",
      "Housing and Shelter Nonprofits",
    ],
    href: "/industries/nonprofits",
    primary: false,
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Supporting Mission-Driven Organizations"
        lead="We believe organizations doing the most important work deserve professional-grade support. Our services are designed for the realities of care-oriented, mission-driven teams."
        primary={{ label: "Schedule a Consultation", href: CONSULT_HREF }}
        secondary={{ label: "Our Services", href: "/services" }}
        tone="cloud"
        align="center"
      />

      {/* Industry Cards */}
      <Section>
        <div className="grid grid-cols-1 gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.title}
              className={`rounded-xl overflow-hidden ${ind.primary ? "bg-navy-midnight" : "bg-cloud border border-gray-200"}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left: content */}
                <div className={`p-10 lg:p-12 flex flex-col justify-center ${ind.primary ? "" : ""}`}>
                  <div className="inline-flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-md flex items-center justify-center ${ind.primary ? "bg-white/10 border border-white/20" : "bg-orange/10 border border-orange/20"}`}>
                      <ind.icon className={`w-6 h-6 ${ind.primary ? "text-orange-soft" : "text-orange"}`} aria-hidden="true" />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-[0.08em] ${ind.primary ? "text-orange-soft" : "text-orange"}`}>
                      {ind.eyebrow}
                    </span>
                  </div>
                  <h2 className={`font-display font-extrabold text-3xl md:text-4xl leading-tight tracking-tight ${ind.primary ? "text-white" : "text-navy-midnight"}`}>
                    {ind.title}
                  </h2>
                  <p className={`mt-4 text-lg leading-relaxed max-w-xl ${ind.primary ? "text-white/70" : "text-gray-600"}`}>
                    {ind.desc}
                  </p>
                  <div className="mt-7">
                    <Link
                      href={ind.href}
                      className={`inline-flex items-center gap-2 font-semibold rounded-pill px-6 py-3 text-sm transition-all ${ind.primary ? "bg-orange hover:bg-orange/90 text-white" : "bg-navy-midnight hover:bg-navy-deep text-white"}`}
                    >
                      Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
                {/* Right: org list */}
                <div className={`p-10 lg:p-12 flex flex-col justify-center gap-3 ${ind.primary ? "bg-navy-700/30" : "bg-white/60"}`}>
                  {ind.orgs.map((org) => (
                    <div key={org} className={`flex items-center gap-3 ${ind.primary ? "text-white/80" : "text-gray-700"}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                      <span className="text-sm">{org}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Focus Matters */}
      <Section tone="cloud">
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
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold rounded-pill px-7 py-3.5 text-base transition-all"
            >
              Schedule a Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>

      <AnyVerticalNote />

      <CTASection
        title="Let's strengthen the systems behind your mission."
        body="Schedule a consultation and we will help you find the highest-impact place to start."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}
