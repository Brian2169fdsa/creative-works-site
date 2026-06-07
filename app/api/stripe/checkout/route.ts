import { NextRequest, NextResponse } from "next/server";
import { STRIPE_PRODUCTS, isValidProductKey } from "@/lib/constants";

export async function POST(req: NextRequest) {
  // Lazy import to avoid build-time errors when STRIPE_SECRET_KEY is not set
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

  const body = await req.json();
  const { productType } = body;

  if (!isValidProductKey(productType)) {
    return NextResponse.json({ error: "Invalid product type" }, { status: 400 });
  }

  const product = STRIPE_PRODUCTS[productType];
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: product.mode,
      line_items: [
        {
          price: product.priceId,
          quantity: 1,
        },
      ],
      metadata: {
        productType,
      },
      success_url: `${siteUrl}/checkout/success?type=${productType}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
