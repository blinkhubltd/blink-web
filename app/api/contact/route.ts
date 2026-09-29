import { NextResponse } from "next/server";
import { z } from "zod";
import { DESTINATION_EMAIL, RESEND_FROM, getResend, isResendConfigured } from "@/lib/resend";

const schema = z.object({
  name: z.string().trim().min(1, "Tell us your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().optional(),
  topic: z.string().trim().default("General"),
  message: z.string().trim().min(1, "Write us a short message."),
});

export async function POST(request: Request) {
  if (!isResendConfigured()) {
    return NextResponse.json(
      { error: "Email service not configured — add RESEND_API_KEY to .env.local." },
      { status: 503 }
    );
  }

  const body = schema.safeParse(await request.json().catch(() => null));
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
    replyTo: form.email,
    subject: `Contact — ${form.topic} — ${form.name}`,
    text: [
      "New message from the Blink contact page",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "—"}`,
      `Topic: ${form.topic}`,
      "",
      "Message:",
      form.message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
