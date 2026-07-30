import { NextResponse } from "next/server";
import { z } from "zod";
import { DESTINATION_EMAIL, RESEND_FROM, getResend, isResendConfigured } from "@/lib/resend";

const schema = z.object({
  name: z.string().trim().min(1, "We need your name."),
  phone: z.string().trim().min(1, "We'll SMS you here."),
  role: z.string().trim().min(1),
  area: z.string().trim().default(""),
  note: z.string().trim().optional(),
  terms: z.literal("true", { message: "Tick this so we can get back to you." }),
});

const CV_MAX_BYTES = 5 * 1024 * 1024;
const CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function POST(request: Request) {
  if (!isResendConfigured()) {
    return NextResponse.json(
      { error: "Email service not configured — add RESEND_API_KEY to .env.local." },
      { status: 503 }
    );
  }

  const formData = await request.formData();
  const body = schema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    role: formData.get("role"),
    area: formData.get("area"),
    note: formData.get("note"),
    terms: formData.get("terms"),
  });
  if (!body.success) {
    return NextResponse.json(
      { error: body.error.issues[0]?.message ?? "Invalid request." },
      { status: 400 }
    );
  }
  const form = body.data;
  const roleSingular = form.role.replace(/s$/, "");

  const cv = formData.get("cv");
  let attachments: { filename: string; content: Buffer }[] | undefined;
  if (cv instanceof File) {
    if (cv.size > CV_MAX_BYTES) {
      return NextResponse.json(
        { error: "That file is bigger than 5MB — try a smaller one." },
        { status: 400 }
      );
    }
    if (!CV_TYPES.includes(cv.type)) {
      return NextResponse.json({ error: "PDF or Word documents only." }, { status: 400 });
    }
    attachments = [{ filename: cv.name, content: Buffer.from(await cv.arrayBuffer()) }];
  }

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
      `CV attached: ${attachments ? "yes" : "no"}`,
      "",
      "Note:",
      form.note || "—",
    ].join("\n"),
    attachments,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
