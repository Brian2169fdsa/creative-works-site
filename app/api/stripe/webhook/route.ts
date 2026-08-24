import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let stripe;
  try {
    const { stripe: stripeClient } = await import("@/lib/stripe");
    stripe = stripeClient;
  } catch {
    return NextResponse.json(
      { error: "Stripe not configured" },
      { status: 500 }
    );
  }

  const body = await req.text();
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Missing signature or secret" },
      { status: 400 }
    );
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
      // TODO: fulfill the order
      //   - send a confirmation email to the customer
      //   - notify the Phoenix Creative Works team (email / Slack / CRM)
      //   - record the lead/payment in your system
      console.log("Checkout completed:", productType, session.id);
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
