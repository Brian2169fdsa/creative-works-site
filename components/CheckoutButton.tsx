"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import type { StripeProductKey } from "@/lib/constants";

interface CheckoutButtonProps {
  productType: StripeProductKey;
  label?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function CheckoutButton({
  productType,
  label = "Get Started",
  className = "",
  variant = "primary",
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productType }),
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await res.json();
      if (url) {
        window.location.href = url;
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-pill transition-all duration-200 active:scale-[0.98] px-7 py-3.5 text-base w-full";

  const variants = {
    primary: "bg-orange hover:bg-orange-burnt text-white shadow-cta disabled:opacity-50",
    secondary: "bg-white text-navy-midnight border border-navy-500 hover:bg-cloud disabled:opacity-50",
  };

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Processing...
          </>
        ) : (
          <>
            {label} <span aria-hidden="true">→</span>
          </>
        )}
      </button>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
