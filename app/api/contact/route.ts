import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // TODO: wire to Resend / SendGrid / webhook / CRM
  console.log("Contact form submission:", body);
  return NextResponse.json({ success: true });
}
