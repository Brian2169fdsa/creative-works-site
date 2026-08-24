import type { Metadata } from "next";
import { PhoneCall, ClipboardCheck, Rocket, Lock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import Button from "@/components/ui/Button";
import { STRIPE_PRODUCTS, usd } from "@/lib/constants";
import { FAQ_CONSULT } from "@/lib/site-content";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule a Consultation | Choose How to Begin",
  description:
    "Start with a free intro call, a paid Discovery and Operations Assessment, or a custom project deposit. Creative Works helps behavioral health organizations strengthen the systems behind care.",
  openGraph: {
    title: "Schedule a Consultation | Creative Works",
    description: "Choose how you'd like to begin, intro call, assessment, or project deposit.",
  },
};

const DISCUSS = [
  "Marketing",
  "SharePoint",
  "IT Services",
  "Staffing",
  "Operations",
  "Salesforce",
  "Licensure",
  "Multi-Service Support",
  "Growth or Transition",
];

export default function ScheduleConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Schedule a Consultation"
        title="Choose how you'd like to begin."
        lead="Whether you want a quick conversation or you're ready to dig in, there's a path that fits. Every option moves you toward stronger systems and better outcomes."
        tone="cloud"
        align="center"
      />

      {/* Options */}
      <Section pad="py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Free Intro Call */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-card p-8 flex flex-col gap-5">
            <div className="w-13 h-13 w-12 h-12 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
              <PhoneCall className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display font-bold text-xl text-navy-midnight">
              Free Intro Call
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-3xl text-orange">
                Free
              </span>
              <span className="text-sm text-gray-500">30 minutes</span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              A no-pressure conversation to understand your organization and see
              if we are a good fit.
            </p>
            <ul className="grid gap-2.5">
              {[
                "Understand your goals and challenges",
                "Explore where we can help",
                "No commitment required",
              ].map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full bg-orange/10 border border-orange/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange block" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <Button href="/contact" variant="secondary" size="lg" arrow className="w-full justify-center">
                Request Intro Call
              </Button>
            </div>
          </div>

          {/* Discovery Assessment - Featured */}
          <div className="bg-navy-midnight text-white rounded-xl shadow-lg p-8 flex flex-col gap-5 relative overflow-hidden">
            <div className="absolute top-5 right-5">
              <span className="text-xs font-bold uppercase tracking-[0.06em] text-white bg-gradient-to-r from-orange to-orange-burnt rounded-pill px-3 py-1.5">
                Most Popular
              </span>
            </div>
            <div className="w-12 h-12 rounded-md bg-white/10 border border-white/20 flex items-center justify-center">
              <ClipboardCheck className="w-6 h-6 text-orange-soft" aria-hidden="true" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Discovery and Operations Assessment
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-3xl text-orange-soft">
                {usd(STRIPE_PRODUCTS.discoveryAssessment.amount)}
              </span>
              <span className="text-sm text-white/60">One-time assessment</span>
            </div>
            <p className="text-white/70 text-base leading-relaxed">
              A thorough paid assessment of your systems, marketing, staffing,
              and operations, with a prioritized plan.
            </p>
            <ul className="grid gap-2.5">
              {[
                "Full review across all five areas",
                "Prioritized roadmap you can act on",
                "Findings session with our team",
              ].map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-white">
                  <span className="w-4 h-4 rounded-full bg-orange/20 border border-orange/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-soft block" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <Button href="/contact" size="lg" arrow className="w-full justify-center">
                Start Assessment
              </Button>
              <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-white/50">
                <Lock className="w-3 h-3" aria-hidden="true" />
                Online payment coming soon
              </div>
            </div>
          </div>

          {/* Project Deposit */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-card p-8 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
              <Rocket className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display font-bold text-xl text-navy-midnight">
              Custom Project Deposit
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-3xl text-orange">
                {usd(STRIPE_PRODUCTS.projectDeposit.amount)}
              </span>
              <span className="text-sm text-gray-500">Project deposit</span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              Ready to move on a defined project? Reserve your start and lock in
              scope with a project deposit.
            </p>
            <ul className="grid gap-2.5">
              {[
                "Secure your project timeline",
                "Applied toward your project total",
                "Kickoff scheduled on payment",
              ].map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full bg-orange/10 border border-orange/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange block" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <Button href="/contact" variant="secondary" size="lg" arrow className="w-full justify-center">
                Request Project Deposit
              </Button>
              <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-gray-400">
                <Lock className="w-3 h-3" aria-hidden="true" />
                Online payment coming soon
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6 max-w-lg mx-auto">
          A Professional Services Retainer is also available for ongoing
          partnerships.{" "}
          <a
            href="/contact"
            className="text-orange font-semibold hover:text-orange-burnt transition-colors"
          >
            Contact us
          </a>{" "}
          to discuss recurring support.
        </p>
      </Section>

      {/* What We Can Discuss */}
      <Section tone="cloud">
        <SectionHeading
          align="center"
          eyebrow="What We Can Discuss"
          title="Bring any challenge to the table."
          className="mb-8"
        />
        <div className="flex flex-wrap gap-3 justify-center">
          {DISCUSS.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-pill shadow-xs font-sans font-semibold text-sm text-navy-midnight"
            >
              <MessageCircle className="w-4 h-4 text-orange" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </Section>

      {/* Book on our calendar */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Prefer to Pick a Time?"
          title="Book directly on our calendar."
          lead="Pick a time that works for you and we'll take it from there."
          className="mb-8"
        />
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-gray-200 shadow-card bg-white">
          <iframe
            src="https://outlook.office.com/book/PCWMeeting@phxcw.com/"
            title="Schedule a consultation with Creative Works"
            className="w-full h-[900px] border-0"
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cloud">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Common questions."
          className="mb-9"
        />
        <FAQ items={FAQ_CONSULT} />
      </Section>

      <CTASection
        title="Still not sure which option fits?"
        body="Reach out and we'll point you to the right starting place, no pressure, no obligation."
        buttonLabel="Contact Us"
        href="/contact"
        tone="navy"
      />
    </>
  );
}
