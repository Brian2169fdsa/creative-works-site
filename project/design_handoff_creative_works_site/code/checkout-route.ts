// app/api/stripe/checkout/route.ts
// Creates a Stripe Checkout Session server-side and returns its URL.
// The client POSTs { type } and redirects to the returned url.

import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { STRIPE_PRODUCTS, isValidProductKey } from "@/lib/constants";

export async function POST(req: NextRequest) {
  try {
    const { type } = await req.json();

    // Validate the requested checkout type server-side.
    if (!type || !isValidProductKey(type)) {
      return NextResponse.json({ error: "Invalid product type" }, { status: 400 });
    }

    const product = STRIPE_PRODUCTS[type];
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: product.mode,
      line_items: [{ price: product.priceId, quantity: 1 }],
      // If you prefer ad-hoc pricing instead of dashboard Price IDs, swap line_items for:
      // line_items: [{
      //   price_data: {
      //     currency: "usd",
      //     unit_amount: product.amount,
      //     product_data: { name: product.name, description: product.blurb },
      //   },
      //   quantity: 1,
      // }],
      success_url: `${siteUrl}/checkout/success?type=${type}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel?type=${type}`,
      metadata: { productType: type },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Unable to create checkout session" }, { status: 500 });
  }
}
