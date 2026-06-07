"use client";
// components/CheckoutButton.tsx
// Client component that starts a Stripe Checkout session and redirects.

import { useState } from "react";
import type { StripeProductKey } from "@/lib/constants";

interface CheckoutButtonProps {
  productType: StripeProductKey;
  label?: string;
  className?: string;
}

export function CheckoutButton({
  productType,
  label = "Continue to Checkout",
  className,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    try {
      setLoading(true);
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: productType }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // redirect to Stripe-hosted Checkout
      } else {
        console.error(data.error ?? "No checkout URL returned");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <button onClick={handleClick} disabled={loading} className={className}>
      {loading ? "Redirecting…" : label}
    </button>
  );
}
