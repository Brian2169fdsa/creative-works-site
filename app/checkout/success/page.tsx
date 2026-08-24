import type { Metadata } from "next";
import { Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { STRIPE_PRODUCTS } from "@/lib/constants";
import { CONTACT } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Payment Received | Thank You",
  description: "Your payment was received. Phoenix Creative Works will follow up shortly.",
  robots: { index: false },
};

const NEXT_STEPS = [
  "You'll receive an email confirmation and receipt.",
  "Our team reviews your information and prepares for next steps.",
  "We reach out within one business day to schedule your time.",
];

interface Props {
  searchParams: Promise<{ type?: string }>;
}

export default async function CheckoutSuccessPage({ searchParams }: Props) {
  const { type } = await searchParams;
  const product = type ? STRIPE_PRODUCTS[type as keyof typeof STRIPE_PRODUCTS] : null;

  return (
    <Section pad="py-24">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 border border-green-200 flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" aria-hidden="true" />
        </div>

        <div className="flex justify-center mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-orange">
            Payment Received
          </span>
        </div>

        <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-navy-midnight">
          Thank you, your payment is confirmed.
        </h1>

        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
          {product ? (
            <>
              We&apos;ve received your payment for the{" "}
              <strong className="text-navy-midnight">{product.name}</strong>.{" "}
            </>
          ) : null}
          Phoenix Creative Works will follow up shortly to get started.
        </p>

        <div className="bg-cloud border border-gray-200 rounded-xl p-8 mt-8 text-left">
          <div className="text-xs font-bold uppercase tracking-[0.08em] text-gray-400 mb-5">
            What happens next
          </div>
          <div className="grid gap-4">
            {NEXT_STEPS.map((step, i) => (
              <div key={i} className="flex gap-4 items-center">
                <span className="w-8 h-8 rounded-full flex-shrink-0 bg-gradient-to-br from-orange to-orange-burnt text-white flex items-center justify-center font-display font-extrabold text-sm">
                  {i + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button href="/" size="lg" arrow>
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg" arrow>
            Contact Us
          </Button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Questions about your payment? Email{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-orange font-semibold hover:text-orange-burnt"
          >
            {CONTACT.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
