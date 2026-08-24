import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Image from "next/image";
import { CONTACT } from "@/lib/site-content";
import { CONSULT_HREF } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Contact | Talk With Our Team",
  description:
    "Tell us about your behavioral health organization and the support you need. Phoenix Creative Works is based in Phoenix, Arizona and ready to help.",
  openGraph: {
    title: "Contact | Phoenix Creative Works",
    description: "Tell us about your organization's needs, we'll take it from there.",
  },
};

const NEXT_STEPS = [
  "Submit the form with your needs.",
  "We review your organization and the fit.",
  "We schedule a conversation that works for you.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your organization."
        lead="Tell us where your team is feeling the strain, staffing, systems, marketing, IT, or operations. We'll review your needs and reach out to find the right next step."
        tone="cloud"
        align="center"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 items-start">
          {/* Form */}
          <ContactForm />

          {/* Info */}
          <div className="grid gap-6">
            {/* Navy contact card */}
            <div className="bg-navy-midnight text-white rounded-xl p-8 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-44 h-44 opacity-[0.08] pointer-events-none">
                <Image
                  src="/images/phoenix-mark.png"
                  alt=""
                  fill
                  className="object-contain object-right-bottom"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-display font-bold text-xl mb-6 relative">
                Reach us directly
              </h3>
              <div className="grid gap-5 relative">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-md bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-soft" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.08em] text-white/50 mb-1">
                      Location
                    </div>
                    <div className="text-white font-semibold">{CONTACT.city}</div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-md bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-soft" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.08em] text-white/50 mb-1">
                      Email
                    </div>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-white font-semibold hover:text-orange-soft transition-colors"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-md bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-soft" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.08em] text-white/50 mb-1">
                      Phone
                    </div>
                    <a
                      href={CONTACT.phoneHref}
                      className="text-white font-semibold hover:text-orange-soft transition-colors"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-md bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange-soft" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.08em] text-white/50 mb-1">
                      Business Hours
                    </div>
                    <div className="text-white font-semibold">{CONTACT.hours[0]}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="bg-cloud border border-gray-200 rounded-xl p-8">
              <Eyebrow>What Happens Next</Eyebrow>
              <div className="grid gap-4 mt-5">
                {NEXT_STEPS.map((step, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <span className="w-8 h-8 rounded-full flex-shrink-0 bg-gradient-to-br from-orange to-orange-burnt text-white flex items-center justify-center font-display font-extrabold text-sm">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 text-base">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Ready to move faster */}
      <Section tone="cloud" pad="py-14">
        <div className="text-center">
          <SectionHeading
            align="center"
            eyebrow="Ready to move faster?"
            title="Prefer to schedule a consultation directly?"
            className="mb-6"
          />
          <Button href={CONSULT_HREF} size="lg" arrow>
            Schedule a Consultation
          </Button>
        </div>
      </Section>
    </>
  );
}
