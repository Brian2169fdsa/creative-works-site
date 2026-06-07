import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { Info } from "lucide-react";
import { CONTACT } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Creative Works terms of service governing use of our website and professional services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Section tone="cloud" pad="py-14">
        <div className="max-w-3xl mx-auto">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-navy-midnight mt-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 mt-3">Last updated: June 6, 2026</p>
        </div>
      </Section>

      <Section pad="py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-4 items-start bg-soft-blue border border-navy-500/12 rounded-md p-5 mb-10">
            <Info className="w-5 h-5 text-navy-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-navy-700 leading-relaxed">
              This is placeholder legal language provided as a starting point.
              It should be reviewed and finalized by qualified legal counsel
              before publication.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              By accessing or using the Creative Works website
              (creativeworksaz.com), you agree to be bound by these Terms of
              Service. Please read them carefully before using our website or
              engaging our services.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              1. Use of the Website
            </h2>
            <p>
              You may use this website for lawful purposes only. You agree not
              to use the site in any manner that could damage, disable, or
              impair the website or interfere with any other party&apos;s use of
              the site.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              2. Services
            </h2>
            <p>
              Creative Works provides professional services including marketing,
              SharePoint setup, Salesforce build-outs, IT services, staffing
              support, operational support, business process services,
              consulting, and licensure services. The terms governing specific
              service engagements are set out in separate service agreements.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              3. Payments
            </h2>
            <p>
              Payments made through this website are processed by Stripe. By
              making a payment, you agree to Stripe&apos;s terms of service. All
              sales are subject to the terms in your service agreement.
              Consultation deposits and assessment fees are non-refundable
              unless otherwise specified in writing.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              4. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, and
              images, is the property of Creative Works and is protected by
              applicable intellectual property laws. You may not reproduce,
              distribute, or create derivative works without our express written
              permission.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p>
              This website and its content are provided &ldquo;as is&rdquo;
              without warranties of any kind. Creative Works does not warrant
              that the website will be uninterrupted, error-free, or free of
              viruses or other harmful components.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              Creative Works shall not be liable for any indirect, incidental,
              special, or consequential damages arising from your use of the
              website or our services. Our liability is limited to the amount
              paid for the specific service giving rise to the claim.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              7. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the State of Arizona,
              without regard to its conflict of law provisions. Any disputes
              shall be resolved in the courts of Maricopa County, Arizona.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be posted on this page with an updated date. Continued use of
              the website after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              9. Contact
            </h2>
            <p>
              Questions about these Terms of Service may be directed to{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-orange font-semibold hover:text-orange-burnt"
              >
                {CONTACT.email}
              </a>{" "}
              or {CONTACT.phone}, {CONTACT.city}.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
