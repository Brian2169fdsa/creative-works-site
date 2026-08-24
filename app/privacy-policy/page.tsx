import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { Info } from "lucide-react";
import { CONTACT } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Phoenix Creative Works privacy policy, how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section tone="cloud" pad="py-14">
        <div className="max-w-3xl mx-auto">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-navy-midnight mt-4">
            Privacy Policy
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
              Phoenix Creative Works (&ldquo;Phoenix Creative Works,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
              This Privacy Policy explains how we collect, use, and protect
              information when you visit our website or engage our services.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              1. Information We Collect
            </h2>
            <p>
              We may collect information you provide directly, such as your
              name, organization, role, email address, phone number, website,
              and the details you share in our contact and consultation forms.
              We may also collect limited technical information automatically,
              such as browser type and pages visited.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              2. How We Use Information
            </h2>
            <p>
              We use the information we collect to respond to inquiries, provide
              and improve our services, schedule consultations, process
              payments, and communicate with you about your engagement. We do
              not sell your personal information.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              3. Contact Form Data
            </h2>
            <p>
              Information submitted through our contact and consultation forms
              is used solely to follow up on your request and to understand how
              we may support your organization. We retain this information only
              as long as necessary for these purposes.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              4. Payment Processing
            </h2>
            <p>
              Payments are processed securely through Stripe, a third-party
              payment processor. Phoenix Creative Works does not store full payment card
              details on its own systems. Your use of Stripe is subject to
              Stripe&apos;s own privacy policy and terms.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              5. Cookies and Analytics
            </h2>
            <p>
              We may use cookies and analytics tools to understand how visitors
              use our website and to improve the experience. You can control
              cookies through your browser settings. [Placeholder, describe
              specific analytics tools in use.]
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              6. Data Sharing
            </h2>
            <p>
              We share information only with trusted service providers who help
              us operate our business (such as payment processing and email
              delivery), or when required by law. These providers are bound by
              appropriate confidentiality obligations.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              7. Data Security
            </h2>
            <p>
              We take reasonable administrative, technical, and physical
              measures to protect your information. However, no method of
              transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              8. Your Rights
            </h2>
            <p>
              Depending on your location, you may have the right to access,
              correct, or request deletion of your personal information. To
              exercise these rights, please contact us using the details below.
            </p>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-10 mb-4">
              9. Contact Information
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
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
