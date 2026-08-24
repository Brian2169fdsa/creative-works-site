import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Monitor, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import Eyebrow from "@/components/ui/Eyebrow";
import { CUSTOMERS } from "@/lib/customers";
import { CONSULT_HREF } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Customers | Creative Works",
  description:
    "Organizations that trust Creative Works to build their digital infrastructure, automate their operations, and strengthen the systems behind their mission.",
  openGraph: {
    title: "Customers | Creative Works",
    description: "Real partnerships. Real results. Organizations we are proud to serve.",
  },
};

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Customers"
        title="Organizations we are proud to serve."
        lead="We partner with behavioral health organizations and mission-driven firms to build the digital infrastructure, automation, and AI solutions that let their teams focus on the work that matters most."
        primary={{ label: "Schedule a Consultation", href: CONSULT_HREF }}
        secondary={{ label: "Our Services", href: "/services" }}
        tone="cloud"
      />

      <Section>
        <div className="grid grid-cols-1 gap-20">
          {CUSTOMERS.map((customer, idx) => (
            <div
              key={customer.name}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Odd rows: screenshot on left */}
              {idx % 2 === 1 && (
                <div className="hidden lg:block">
                  <ScreenshotFrame customer={customer} />
                </div>
              )}

              {/* Content */}
              <div>
                {/* Mobile screenshot */}
                <div className="lg:hidden mb-8">
                  <ScreenshotFrame customer={customer} />
                </div>

                <Eyebrow>{customer.category}</Eyebrow>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-snug text-navy-midnight mt-3 mb-1">
                  {customer.name}
                </h2>
                {customer.fullName && (
                  <p className="text-sm text-gray-500 mb-4">{customer.fullName}</p>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {customer.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-semibold bg-orange/10 text-orange border border-orange/20 rounded-full px-3 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-base text-gray-600 leading-relaxed mb-7">{customer.bio}</p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/customers/${customer.slug}`}
                    className="inline-flex items-center gap-2 bg-orange text-white font-semibold rounded-pill px-5 py-2.5 text-sm hover:bg-orange/90 transition-colors"
                  >
                    View Our Work <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  {customer.primaryHref && customer.primaryHref !== "#" && (
                    <a
                      href={customer.primaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-gray-200 text-navy-midnight font-semibold rounded-pill px-5 py-2.5 text-sm hover:border-orange hover:text-orange transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      {customer.primaryLabel}
                    </a>
                  )}
                  {customer.secondaryHref && (
                    <a
                      href={customer.secondaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-gray-200 text-navy-midnight font-semibold rounded-pill px-5 py-2.5 text-sm hover:border-orange hover:text-orange transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      {customer.secondaryLabel}
                    </a>
                  )}
                </div>
              </div>

              {/* Even rows: screenshot on right */}
              {idx % 2 === 0 && (
                <div className="hidden lg:block">
                  <ScreenshotFrame customer={customer} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="cloud">
        <SectionHeading
          align="center"
          eyebrow="Growing Every Year"
          title="More partnerships coming soon."
          lead="We are proud to work alongside organizations across behavioral health, certification, and consulting. More client stories are on the way."
          className="mb-0"
        />
      </Section>

      <CTASection
        title="Ready to become a customer?"
        body="Schedule a consultation and let us show you what we can build together."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}

function ScreenshotFrame({
  customer,
}: {
  customer: (typeof CUSTOMERS)[0];
}) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-[3px] border-orange opacity-50 pointer-events-none z-10"
      />
      <div className="rounded-xl overflow-hidden shadow-card border border-gray-200">
        <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 font-mono truncate border border-gray-200">
            {customer.primaryHref && customer.primaryHref !== "#"
              ? customer.primaryHref.replace("https://www.", "").replace("https://", "")
              : customer.name.toLowerCase().replace(/\s+/g, "") + ".com"}
          </div>
        </div>
        <div className="relative bg-gradient-to-br from-cloud to-gray-100 aspect-[16/10] flex flex-col items-center justify-center gap-3">
          <div className="w-20 h-20 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center">
            <Monitor className="w-10 h-10 text-orange/50" aria-hidden="true" />
          </div>
          <p className="text-sm font-semibold text-gray-400">{customer.name}</p>
        </div>
      </div>
    </div>
  );
}
