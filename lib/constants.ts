// lib/constants.ts
// Stripe product catalog for Creative Works. Amounts are in cents (USD).
// Replace the placeholder priceId values with real Stripe Price IDs from your dashboard.

export type StripeProductKey =
  | "consultationDeposit"
  | "discoveryAssessment"
  | "projectDeposit";

export interface StripeProduct {
  name: string;
  amount: number; // in cents
  mode: "payment" | "subscription";
  priceId: string; // replace with real Stripe Price ID
  blurb: string;
}

export const STRIPE_PRODUCTS: Record<StripeProductKey, StripeProduct> = {
  consultationDeposit: {
    name: "Initial Consultation Deposit",
    amount: 25000, // $250
    mode: "payment",
    priceId: "price_REPLACE_consult",
    blurb: "Applied toward your engagement.",
  },
  discoveryAssessment: {
    name: "Discovery & Operations Assessment",
    amount: 150000, // $1,500
    mode: "payment",
    priceId: "price_REPLACE_discovery",
    blurb: "A full assessment of systems, marketing, staffing, and operations.",
  },
  projectDeposit: {
    name: "Custom Project Deposit",
    amount: 250000, // $2,500
    mode: "payment",
    priceId: "price_REPLACE_project",
    blurb: "Reserve your project start and lock in scope.",
  },
};

export function isValidProductKey(key: string): key is StripeProductKey {
  return key in STRIPE_PRODUCTS;
}

export function usd(cents: number): string {
  return "$" + (cents / 100).toLocaleString("en-US", { minimumFractionDigits: 0 });
}
