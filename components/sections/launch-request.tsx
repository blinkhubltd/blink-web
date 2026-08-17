"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/blink/reveal";
import { Card } from "@/components/blink/card";
import { DeliveryBadge } from "@/components/blink/delivery-badge";
import { Icon } from "@/components/blink/icon";
import { Field } from "@/components/blink/field";
import { FormInput } from "@/components/blink/form-input";
import { FormSelect } from "@/components/blink/form-select";
import { FormTextarea } from "@/components/blink/form-textarea";
import { FormCheckbox } from "@/components/blink/form-checkbox";
import { Button } from "@/components/ui/button";

const ADMIN_EMAIL = "blinkhubltd@gmail.com";

type FormState = {
  name: string;
  phone: string;
  email: string;
  area: string;
  city: string;
  people: string;
  note: string;
  updates: boolean;
};

const INITIAL: FormState = {
  name: "", phone: "", email: "", area: "", city: "Nairobi", people: "1-10", note: "", updates: true,
};

/** "Bring Blink to my area" — collects a request and emails the expansion team via Resend. */
export function LaunchRequest() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof FormState>(key: K) => (value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submitRequest = async () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Tell us who to thank.";
    if (!form.phone.trim()) next.phone = "We need a number to reach you on.";
    if (!form.area.trim()) next.area = "Which estate, road or landmark?";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/launch-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong.");
      }
      toast.success("Thanks — your request is in.", {
        description: "We'll let you know when Blink becomes available in your area.",
      });
      setForm(INITIAL);
    } catch (err) {
      toast.error("Couldn't send your request", {
        description: err instanceof Error ? err.message : "Try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="launch" className="bg-[var(--bg-page)] py-[120px]">
      <div className="blink-container grid items-start gap-10 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="blink-eyebrow">Where we deliver</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="blink-display-3 mt-3 max-w-[20ch]">
              Closer every day.
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-3.5 max-w-[42ch] text-lg text-[var(--text-muted)]">
              Blink is growing across Nairobi, one neighbourhood at a time.
              Enter your address to see whether Blink currently delivers to
              your location.
            </p>
          </Reveal>

          <Reveal delay={130}>
            <div className="mt-[22px]">
              <DeliveryBadge />
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <Card padding="lg">
            <div className="flex items-center gap-3">
              <span className="flex size-[46px] flex-none items-center justify-center rounded-full bg-blink-400 text-ink-950">
                <Icon name="map-pin-plus" size={22} />
              </span>
              <div>
                <h3 className="text-[22px]">Bring Blink closer.</h3>
                <span className="text-[13px] text-[var(--text-muted)]">
                  Tell us where you&apos;d like to see Blink next. The more
                  demand we see in an area, the better we can plan where to
                  expand.
                </span>
              </div>
            </div>

            <div className="mt-[22px] grid grid-cols-2 gap-3.5">
              <Field label="Your name" required error={errors.name}>
                <FormInput
                  value={form.name}
                  onChange={(e) => set("name")(e.target.value)}
                  placeholder="Wanjiku Kamau"
                  invalid={!!errors.name}
                />
              </Field>
              <Field label="Phone number" required error={errors.phone}>
                <FormInput
                  value={form.phone}
                  onChange={(e) => set("phone")(e.target.value)}
                  icon="phone"
                  placeholder="+254 712 345 678"
                  invalid={!!errors.phone}
                />
              </Field>
              <Field label="Email" hint="For the launch notice." className="col-span-2">
                <FormInput
                  value={form.email}
                  onChange={(e) => set("email")(e.target.value)}
                  icon="mail"
                  placeholder="you@example.com"
                />
              </Field>
              <Field
                label="Your area"
                required
                hint="Estate, road or a landmark we'd know."
                error={errors.area}
                className="col-span-2"
              >
                <FormInput
                  value={form.area}
                  onChange={(e) => set("area")(e.target.value)}
                  icon="map-pin"
                  placeholder="Ruaka, near Quickmart"
                  invalid={!!errors.area}
                />
              </Field>
              <Field label="City or town">
                <FormSelect
                  value={form.city}
                  onChange={(e) => set("city")(e.target.value)}
                  options={["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Other"]}
                />
              </Field>
              <Field label="Neighbours who'd order">
                <FormSelect
                  value={form.people}
                  onChange={(e) => set("people")(e.target.value)}
                  options={[
                    { value: "1-10", label: "Just my household" },
                    { value: "10-50", label: "10–50 nearby" },
                    { value: "50+", label: "A whole estate" },
                  ]}
                />
              </Field>
              <Field
                label="Anything else?"
                hint="Tell us anything that would help us understand your area."
                className="col-span-2"
              >
                <FormTextarea
                  rows={2}
                  value={form.note}
                  onChange={(e) => set("note")(e.target.value)}
                  placeholder="There are four apartment blocks here and no supermarket after 8pm."
                />
              </Field>
            </div>

            <div className="mt-4">
              <FormCheckbox
                checked={form.updates}
                onChange={(checked) => setForm((f) => ({ ...f, updates: checked }))}
                label="Let me know when Blink launches near me"
                description="One email, and only about your area."
              />
            </div>

            <div className="mt-5">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                iconRight="arrow-right"
                onClick={submitRequest}
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Request Blink"}
              </Button>
            </div>
            <p className="mt-3 text-center text-[11px] text-[var(--text-subtle)]">
              Sends to {ADMIN_EMAIL}. We reply within a week.
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
