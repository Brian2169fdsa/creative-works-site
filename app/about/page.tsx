import type { Metadata } from "next";
import Image from "next/image";
import {
  HeartHandshake,
  CheckCircle2,
  Target,
  Workflow,
  Compass,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CheckGrid from "@/components/ui/CheckGrid";
import CTASection from "@/components/ui/CTASection";
import ImageFrame from "@/components/ui/ImageFrame";
import Eyebrow from "@/components/ui/Eyebrow";
import { CONSULT_HREF } from "@/lib/navigation";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Phoenix Professional Services",
  description:
    "Phoenix Creative Works is a Phoenix-based professional services partner built around people and systems, dedicated to helping behavioral health organizations serve their communities better.",
  openGraph: {
    title: "About | Phoenix Creative Works",
    description: "People-first, systems-minded, and rooted in Phoenix.",
    images: [{ url: "/images/photo-meeting.jpg" }],
  },
};

const VALUES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: HeartHandshake,
    title: "Human First",
    desc: "We lead with empathy. People come before processes, always.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable Execution",
    desc: "We show up, follow through, and finish what we start.",
  },
  {
    icon: Target,
    title: "Strategic Thinking",
    desc: "We connect today's work to your long-term mission.",
  },
  {
    icon: Workflow,
    title: "Operational Clarity",
    desc: "We turn complexity into systems your team can run.",
  },
  {
    icon: Compass,
    title: "Mission Alignment",
    desc: "Your mission drives every decision we make together.",
  },
];

const DIFF = [
  {
    title: "Multi-service support",
    desc: "Marketing, systems, IT, staffing, and operations under one roof.",
  },
  {
    title: "Behavioral health understanding",
    desc: "We know the realities of mission-driven care.",
  },
  {
    title: "Professional execution",
    desc: "Polished, dependable work you can stand behind.",
  },
  {
    title: "A human approach",
    desc: "Real partnership, not transactional vendor relationships.",
  },
  {
    title: "Vendor consolidation",
    desc: "Fewer relationships to manage, more accountability.",
  },
  {
    title: "Systems-first thinking",
    desc: "We strengthen the foundation, not just the surface.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Phoenix Creative Works"
        title="Built around people and the systems that support them."
        lead="Phoenix Creative Works is a Phoenix-based professional services partner. We believe stronger systems help organizations serve people better, and we exist to build them for behavioral health teams."
        primary={{ label: "Schedule a Consultation", href: CONSULT_HREF }}
        secondary={{ label: "Our Services", href: "/services" }}
        tone="cloud"
      />

      {/* Brand Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ImageFrame flip className="aspect-[4/3.6] shadow-card">
            <Image
              src="/images/photo-meeting.jpg"
              alt="Phoenix Creative Works team in conversation"
              fill
              className="object-cover"
            />
          </ImageFrame>
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-snug text-navy-midnight mt-4 mb-5">
              A professional services partner, born in Phoenix.
            </h2>
            <div className="grid gap-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Phoenix Creative Works began with a simple observation: behavioral
                health organizations do extraordinary work, but too often carry
                it on systems that were never built to support them.
              </p>
              <p>
                So we built a different kind of partner, one that combines
                marketing, technology, staffing, and operations into a single,
                coordinated model. Not a marketing agency. Not a cold IT vendor.
                A practical, human team that strengthens the foundation behind
                care.
              </p>
              <p>
                We are proudly rooted in Phoenix, and we focus exclusively on
                mission-driven organizations, because when their systems get
                stronger, the people they serve are better off.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission Band */}
      <Section tone="navy">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow inverse className="items-center flex justify-center">
            Our Mission
          </Eyebrow>
          <p className="font-display font-bold text-3xl md:text-4xl leading-snug text-white mt-5">
            To strengthen the systems behind care, so behavioral health
            organizations can focus on the people they serve.
          </p>
          <p className="mt-5 text-lg text-white/70">
            Renewing Organizations. Empowering People. Building Better Futures.
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Our Values"
          title="What we stand for."
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="bg-cloud rounded-lg p-6 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
                <v.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy-midnight">
                {v.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section tone="cloud">
        <SectionHeading
          eyebrow="What Makes Us Different"
          title="Most firms do one thing. We strengthen the whole foundation."
          lead="Our difference is not a single feature, it is the way our services work together for organizations that need a true partner."
          className="mb-8"
        />
        <CheckGrid items={DIFF} columns={2} />
      </Section>

      {/* Phoenix Roots */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Phoenix Roots</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-snug text-navy-midnight mt-4 mb-4">
              Rooted in Phoenix. Driven by purpose.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Phoenix is more than our address, it is our community. We are
              invested in the organizations that serve Arizona, and proud to help
              them grow stronger and reach further.
            </p>
          </div>
          <ImageFrame className="aspect-[5/3.2] shadow-card">
            <Image
              src="/images/photo-phoenix.jpg"
              alt="Phoenix, Arizona skyline"
              fill
              className="object-cover"
            />
          </ImageFrame>
        </div>
      </Section>

      {/* Leadership teaser */}
      <Section tone="cloud">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Eyebrow>Our Team</Eyebrow>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight leading-snug text-navy-midnight mt-3 mb-3">
              Led by people who believe in the work.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Phoenix Creative Works is led by an experienced team spanning strategy,
              finance, and operations. Meet the leadership behind every
              engagement.
            </p>
          </div>
          <a
            href="/about/leadership"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white border border-gray-200 rounded-pill px-6 py-3 font-semibold text-navy-midnight shadow-sm hover:border-orange hover:text-orange transition-colors whitespace-nowrap"
          >
            Meet Our Leadership →
          </a>
        </div>
      </Section>

      <CTASection
        title="Let's build something stronger, together."
        body="Schedule a consultation and tell us about the mission you are working to advance."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}
