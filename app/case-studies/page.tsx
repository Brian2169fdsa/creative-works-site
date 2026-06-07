import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import StatsBand from "@/components/ui/StatsBand";
import CTASection from "@/components/ui/CTASection";
import CaseStudiesGrid from "./CaseStudiesGrid";
import { CONSULT_HREF } from "@/lib/navigation";
import { CASE_STUDIES } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Case Studies | Stronger Organizations, Better Outcomes",
  description:
    "Real-world examples of how Creative Works helps behavioral health organizations strengthen the systems behind care.",
  openGraph: {
    title: "Case Studies | Creative Works",
    description: "Real-world examples of stronger systems and better outcomes.",
  },
};

const STATS = [
  { value: "100+", label: "Organizations Supported" },
  { value: "5", label: "Core Service Areas" },
  { value: "98%", label: "Client Satisfaction Rate" },
  { value: "15+", label: "Years Combined Experience" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Stronger organizations. Better outcomes."
        lead="Real-world examples of how Creative Works helps behavioral health organizations strengthen the systems behind care. These are illustrative examples, your story could be next."
        primary={{ label: "Discuss Your Organization", href: "/contact" }}
        secondary={{ label: "Schedule a Consultation", href: CONSULT_HREF }}
        tone="cloud"
      />

      <CaseStudiesGrid cases={CASE_STUDIES} />

      <StatsBand
        title="Results that matter."
        subtitle="Placeholder metrics, replace with your real outcomes."
        stats={STATS}
      />

      <CTASection
        title="Let's write your success story."
        body="Schedule a consultation and tell us where your organization is feeling the strain."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}
