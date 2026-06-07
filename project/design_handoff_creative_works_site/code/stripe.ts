// lib/stripe.ts
// Server-side Stripe client. NEVER import this into a client component.

import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  // Fail loudly in development if the key is missing.
  console.warn("STRIPE_SECRET_KEY is not set — Stripe calls will fail.");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-06-20",
  typescript: true,
});
