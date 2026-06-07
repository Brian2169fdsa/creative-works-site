// app/api/stripe/webhook/route.ts
// Verifies Stripe webhook signatures and handles completed checkouts.
// Configure the endpoint URL + signing secret in your Stripe dashboard.

import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";

// Stripe needs the raw body for signature verification.
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Missing signature or secret" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const productType = session.metadata?.productType;
      // TODO: fulfill the order —
      //   - send a confirmation email to the customer
      //   - notify the Creative Works team (email / Slack / CRM)
      //   - record the lead/payment in your system
      console.log("Checkout completed:", productType, session.id);
      break;
    }
    default:
      // Unhandled event types are fine to ignore.
      break;
  }

  return NextResponse.json({ received: true });
}
