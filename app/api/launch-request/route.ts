import { NextResponse } from "next/server";
import { z } from "zod";
import { DESTINATION_EMAIL, RESEND_FROM, getResend, isResendConfigured } from "@/lib/resend";

const schema = z.object({
  name: z.string().trim().min(1, "Tell us who to thank."),
  phone: z.string().trim().min(1, "We need a number to reach you on."),
  email: z.string().trim().optional(),
  area: z.string().trim().min(1, "Which estate, road or landmark?"),
  city: z.string().trim().default("Nairobi"),
  note: z.string().trim().optional(),
  updates: z.boolean().default(true),
});

export async function POST(request: Request) {
  if (!isResendConfigured()) {
    return NextResponse.json(
      { error: "Email service not configured — add RESEND_API_KEY to .env.local." },
      { status: 503 }
    );
  }

  const body = schema.safeParse(await request.json());
  if (!body.success) {
    return NextResponse.json(
      { error: body.error.issues[0]?.message ?? "Invalid request." },
      { status: 400 }
    );
  }
  const form = body.data;

  const resend = getResend()!;
  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: DESTINATION_EMAIL,
    subject: `Launch request — ${form.area}, ${form.city}`,
    text: [
      "New Blink launch request",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "—"}`,
      `Area: ${form.area}`,
      `City / town: ${form.city}`,
      `Wants updates: ${form.updates ? "yes" : "no"}`,
      "",
      "Note:",
      form.note || "—",
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
