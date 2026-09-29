"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Card } from "@/components/blink/card";
import { Field } from "@/components/blink/field";
import { FormInput } from "@/components/blink/form-input";
import { FormSelect } from "@/components/blink/form-select";
import { FormTextarea } from "@/components/blink/form-textarea";
import { Button } from "@/components/ui/button";

type FormState = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const INITIAL: FormState = {
  name: "", email: "", phone: "", topic: "General question", message: "",
};

const TOPICS = [
  "General question",
  "Order or delivery issue",
  "Refund",
  "Feedback",
  "Partnership",
  "Press",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Contact form — posts to /api/contact, which emails the team via Resend. */
export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof FormState>(key: K) => (value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = async () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Tell us your name.";
    if (!EMAIL_RE.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Write us a short message.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong.");
      }
      toast.success("Message sent.", {
        description: "Thanks for reaching out — we'll reply by email.",
      });
      setForm(INITIAL);
    } catch (err) {
      toast.error("Couldn't send your message", {
        description: err instanceof Error ? err.message : "Try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card padding="lg">
      <h2 className="text-[22px]">Send us a message.</h2>

      <div className="mt-[22px] grid grid-cols-2 gap-3.5">
        <Field label="Your name" required error={errors.name}>
          <FormInput
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Wanjiku Kamau"
            invalid={!!errors.name}
          />
        </Field>
        <Field label="Phone number" hint="Optional.">
          <FormInput
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            icon="phone"
            placeholder="+254 712 345 678"
          />
        </Field>
        <Field label="Email" required error={errors.email} className="col-span-2">
          <FormInput
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            icon="mail"
            placeholder="you@example.com"
            invalid={!!errors.email}
          />
        </Field>
        <Field label="Topic" className="col-span-2">
          <FormSelect
            value={form.topic}
            onChange={(e) => set("topic")(e.target.value)}
            options={TOPICS}
          />
        </Field>
        <Field label="Message" required error={errors.message} className="col-span-2">
          <FormTextarea
            rows={5}
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="How can we help?"
            invalid={!!errors.message}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          iconRight="arrow-right"
          onClick={submit}
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </Card>
  );
}
