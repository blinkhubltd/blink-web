import { NextResponse } from "next/server";
import { z } from "zod";
import { DESTINATION_EMAIL, RESEND_FROM, getResend, isResendConfigured } from "@/lib/resend";

const schema = z.object({
  name: z.string().trim().min(1, "We need your name."),
  phone: z.string().trim().min(1, "We'll SMS you here."),
  role: z.string().trim().min(1),
  area: z.string().trim().default(""),
  note: z.string().trim().optional(),
  terms: z.literal(true, { message: "Tick this so we can get back to you." }),
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
  const roleSingular = form.role.replace(/s$/, "");

  const resend = getResend()!;
  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: DESTINATION_EMAIL,
    subject: `Application — ${form.role}`,
    text: [
      `New ${roleSingular} application`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Role: ${form.role}`,
      `Nearest hub: ${form.area}`,
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
