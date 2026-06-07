import type { Metadata } from "next";
import { Undo2 } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Checkout Canceled | No Charge Made",
  description: "Your checkout was canceled. No charge was made.",
  robots: { index: false },
};

export default function CheckoutCancelPage() {
  return (
    <Section pad="py-24">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-cloud border border-gray-300 flex items-center justify-center mx-auto mb-6">
          <Undo2 className="w-10 h-10 text-navy-500" aria-hidden="true" />
        </div>

        <div className="flex justify-center mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-orange">
            Checkout Canceled
          </span>
        </div>

        <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-navy-midnight">
          No problem, you weren&apos;t charged.
        </h1>

        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
          Your checkout was canceled and no payment was processed. Whenever
          you&apos;re ready, you can pick up right where you left off, or reach
          out with any questions first.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Button href="/schedule-consultation" size="lg" arrow>
            Back to Consultation Options
          </Button>
          <Button href="/contact" variant="secondary" size="lg" arrow>
            Contact Us
          </Button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Not sure which option is right? We&apos;re happy to help you decide,
          no pressure.
        </p>
      </div>
    </Section>
  );
}
