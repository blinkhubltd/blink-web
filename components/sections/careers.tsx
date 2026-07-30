"use client";

import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Reveal, RevealGroup } from "@/components/blink/reveal";
import { Card } from "@/components/blink/card";
import { Badge } from "@/components/ui/badge";
import { Icon, type IconName } from "@/components/blink/icon";
import { Field } from "@/components/blink/field";
import { FormInput } from "@/components/blink/form-input";
import { FormSelect } from "@/components/blink/form-select";
import { FormTextarea } from "@/components/blink/form-textarea";
import { FormCheckbox } from "@/components/blink/form-checkbox";
import { Marquee } from "@/components/blink/marquee";
import { DeliveryBadge } from "@/components/blink/delivery-badge";
import { Button } from "@/components/ui/button";

const CAREERS_EMAIL = "blinkhubltd@gmail.com";

const ROLES: {
  id: string;
  label: string;
  icon: IconName;
  openings: number;
  headline: string;
  blurb: string;
  facts: [string, string][];
  perks: [IconName, string, string][];
}[] = [
  {
    id: "riders", label: "Riders", icon: "bike", openings: 14,
    headline: "Ride the last five kilometres.",
    blurb: "You ride a Blink-owned bike, collecting from the hub and getting orders to the gate. Short hops inside one neighbourhood — no cross-town runs.",
    facts: [["Earnings", "Salary plus commission"], ["Shifts", "Flexible options available"], ["You need", "Licence, smartphone, 18+"]],
    perks: [
      ["bike", "Bike provided", "Ride a Blink-owned bike — no need to bring your own."],
      ["wallet", "Salary plus commission", "A steady salary, with commission on top of your deliveries."],
      ["graduation-cap", "Training included", "We get you road-ready before your first shift."],
      ["shield-check", "Looked after on shift", "Full details on cover and benefits are shared when you apply."],
    ],
  },
  {
    id: "pickers", label: "Pickers", icon: "shopping-basket", openings: 6,
    headline: "Own the shelves inside the hub.",
    blurb: "Read the order, walk the aisle, pack it right, hand it to the rider. Most baskets go out in under three minutes — accuracy matters as much as speed.",
    facts: [["Earnings", "Salary plus accuracy bonus"], ["Shifts", "Full-time, structured shifts"], ["You need", "KCSE, sharp eyes, 18+"]],
    perks: [
      ["thermometer-snowflake", "Indoor work", "You're inside the hub — out of the traffic and the rain."],
      ["trending-up", "Accuracy bonus", "Rewarded for getting orders right."],
      ["graduation-cap", "Paid training", "We train you before your first shift."],
      ["arrow-up-right", "Room to grow", "Many hub leads started on the shelves."],
    ],
  },
  {
    id: "hub", label: "Hub leads", icon: "store", openings: 2,
    headline: "Run the clock for one neighbourhood.",
    blurb: "Stock, staffing and the 10-minute promise for a single hub. You decide what's on the shelf and who's on shift.",
    facts: [["Earnings", "Salary plus performance bonus"], ["Shifts", "Full-time"], ["You need", "2 yrs retail or logistics"]],
    perks: [
      ["chart-no-axes-column", "Real ownership", "Your hub's numbers are yours to move."],
      ["users", "Build the team", "You hire and roster the hub's pickers and riders."],
      ["book-open", "Leadership track", "Ongoing coaching from the ops team."],
      ["banknote", "Performance pay", "A bonus tied to how your hub performs."],
    ],
  },
];

const JOIN_STEPS: [string, string][] = [
  ["Fill the form", "Two minutes. No CV needed for rider and picker roles."],
  ["Come to the hub", "A short chat and a walk-through. Bring your ID and licence."],
  ["Start earning", "Kit and training on day one. Most people start the same week."],
];

const CREW = [
  { q: "I ride a Blink bike on short runs in South B all day. It's a steady salary, with commission on top.", n: "Kevin O.", r: "Rider, 2 years", i: "KO" },
  { q: "Three minutes a basket sounds mad until you know the aisles. Now I beat it most shifts.", n: "Mercy A.", r: "Picker, 1 year", i: "MA" },
];

const HUBS = [
  { value: "mombasa-rd", label: "Mombasa Road" },
  { value: "westlands", label: "Westlands" },
  { value: "kasarani", label: "Kasarani" },
  { value: "langata", label: "Lang'ata" },
];

type ApplyForm = { name: string; phone: string; area: string; note: string; terms: boolean };
const INITIAL: ApplyForm = { name: "", phone: "", area: "mombasa-rd", note: "", terms: false };

/** Glovo-style careers: role tabs, perks grid, join steps, crew voices, apply form. */
export function Careers() {
  const [role, setRole] = useState("riders");
  const r = ROLES.find((x) => x.id === role)!;
  const [form, setForm] = useState<ApplyForm>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof ApplyForm>(key: K) => (value: ApplyForm[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const apply = async () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "We need your name.";
    if (!form.phone.trim()) next.phone = "We'll SMS you here.";
    if (!form.terms) next.terms = "Tick this so we can get back to you.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/careers-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role: r.label }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong.");
      }
      toast.success("Application sent", {
        description: `${r.label} — we'll SMS you within two working days.`,
      });
      setForm(INITIAL);
    } catch (err) {
      toast.error("Couldn't send your application", {
        description: err instanceof Error ? err.message : "Try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section id="careers" className="blink-dark bg-ink-950 pt-20 pb-16">
        <div className="blink-container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <Reveal>
                <span className="blink-eyebrow text-blink-400">Work with Blink</span>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="blink-display-2 mt-3 max-w-[16ch] text-white">
                  10 minutes takes <span className="text-blink-400">a team</span>.
                </h2>
              </Reveal>
              <Reveal delay={110}>
                <p className="mt-[18px] max-w-[44ch] text-lg text-ink-300">
                  Riders, pickers and hub leads across Nairobi. Apply in two
                  minutes — no CV needed for rider and picker roles, and most
                  people start the same week.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-[22px]">
                  <DeliveryBadge tone="brand" />
                </div>
              </Reveal>
              <Reveal delay={190}>
                <div className="mt-[22px] flex flex-wrap gap-2.5">
                  {ROLES.map((x) => (
                    <button
                      key={x.id}
                      onClick={() => setRole(x.id)}
                      className={cn(
                        "inline-flex h-11 items-center gap-2 rounded-full border px-[18px] text-[15px] font-semibold transition-colors duration-150 ease-out",
                        role === x.id
                          ? "border-blink-400 bg-blink-400 text-ink-950"
                          : "border-ink-700 bg-transparent text-ink-200"
                      )}
                    >
                      <Icon name={x.icon} size={17} />
                      {x.label}
                      <span className="text-[11px] font-bold opacity-70">{x.openings}</span>
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["users", "480+", "riders and pickers"],
                  ["store", "12", "hubs in Nairobi"],
                  ["banknote", "Salary", "plus commission"],
                  ["clock", "Flexible", "shifts you choose"],
                ].map(([icon, big, small]) => (
                  <div key={small} className="rounded-[14px] border border-ink-800 bg-ink-900 p-[18px]">
                    <Icon name={icon as IconName} size={20} className="text-blink-400" />
                    <div className="blink-display-3 mt-3 text-[26px] text-white">{big}</div>
                    <div className="text-[13px] text-ink-400">{small}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee
        tone="brand"
        speed={38}
        items={["Riders wanted", "Pickers wanted", "Hub leads wanted", "Salary plus commission", "Bike provided", "Paid training", "Start this week"]}
      />

      <section className="bg-white py-20">
        <div className="blink-container">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <Reveal key={r.id + "-copy"}>
              <div className="flex items-center gap-3.5">
                <span className="flex size-[52px] flex-none items-center justify-center rounded-full bg-blink-400 text-ink-950">
                  <Icon name={r.icon} size={25} />
                </span>
                <div>
                  <h2 className="text-[28px]">{r.label}</h2>
                  <span className="text-[13px] text-[var(--text-muted)]">
                    Nairobi · {r.openings} openings
                  </span>
                </div>
                <Badge className="ml-auto bg-blink-400 text-ink-950">Hiring now</Badge>
              </div>
              <h3 className="blink-display-3 mt-6 text-[30px]">{r.headline}</h3>
              <p className="mt-3 max-w-[46ch] text-lg text-[var(--text-muted)]">{r.blurb}</p>
              <div className="mt-[26px] grid grid-cols-3 gap-4 border-t border-[var(--border-subtle)] pt-[22px]">
                {r.facts.map(([k, v]) => (
                  <span key={k} className="flex flex-col gap-1">
                    <span className="text-[11px] font-bold tracking-[.08em] uppercase text-[var(--text-subtle)]">
                      {k}
                    </span>
                    <span className="text-[15px] font-medium text-[var(--text-strong)]">{v}</span>
                  </span>
                ))}
              </div>
            </Reveal>

            <RevealGroup key={r.id + "-perks"} step={70} className="grid grid-cols-2 gap-3.5">
              {r.perks.map(([icon, title, body]) => (
                <Card key={title} padding="md" interactive>
                  <Icon name={icon} size={21} className="text-ink-950" />
                  <h4 className="mt-3.5">{title}</h4>
                  <p className="mt-1.5 text-[13px] text-[var(--text-muted)]">{body}</p>
                </Card>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="py-20 pb-[120px]">
        <div className="blink-container">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="blink-eyebrow">How to join</span>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="blink-display-3 mt-3">Three steps, one week.</h2>
              </Reveal>
              <div className="mt-[30px] flex flex-col">
                {JOIN_STEPS.map(([title, body], i) => (
                  <Reveal key={title} delay={i * 80}>
                    <div className="flex gap-[18px] pb-6.5">
                      <span className="relative flex flex-none flex-col items-center">
                        <span className="flex size-10 items-center justify-center rounded-full bg-ink-950 text-[17px] font-bold text-blink-400">
                          {i + 1}
                        </span>
                        {i < JOIN_STEPS.length - 1 && (
                          <span className="mt-1.5 w-0.5 flex-1 bg-[var(--border-subtle)]" />
                        )}
                      </span>
                      <span>
                        <h3>{title}</h3>
                        <p className="mt-1.5 max-w-[38ch] text-[15px] text-[var(--text-muted)]">{body}</p>
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>

              <RevealGroup step={90} className="mt-2 flex flex-col gap-3">
                {CREW.map((c) => (
                  <Card key={c.n} padding="md">
                    <p className="text-[16px] leading-[1.5] font-medium text-[var(--text-strong)]">
                      &quot;{c.q}&quot;
                    </p>
                    <div className="mt-3.5 flex items-center gap-2.5">
                      <span className="flex size-8 items-center justify-center rounded-full bg-ink-950 text-[12px] font-bold text-blink-400">
                        {c.i}
                      </span>
                      <span className="text-[13px]">
                        <b className="text-[var(--text-strong)]">{c.n}</b>
                        <span className="text-[var(--text-muted)]"> · {c.r}</span>
                      </span>
                    </div>
                  </Card>
                ))}
              </RevealGroup>
            </div>

            <Reveal delay={100}>
              <Card padding="lg" className="shadow-md lg:sticky lg:top-[100px]">
                <h3 className="text-[22px]">
                  Apply to be a {r.label.toLowerCase().replace(/s$/, "")}
                </h3>
                <p className="mt-1.5 text-[13px] text-[var(--text-muted)]">
                  We reply by SMS within two working days.
                </p>
                <div className="mt-5 flex flex-col gap-3.5">
                  <Field label="Full name" required error={errors.name}>
                    <FormInput
                      value={form.name}
                      onChange={(e) => set("name")(e.target.value)}
                      placeholder="Wanjiku Kamau"
                      invalid={!!errors.name}
                    />
                  </Field>
                  <Field
                    label="Phone number"
                    required
                    hint="An SMS with the next step comes here."
                    error={errors.phone}
                  >
                    <FormInput
                      value={form.phone}
                      onChange={(e) => set("phone")(e.target.value)}
                      icon="phone"
                      placeholder="+254 712 345 678"
                      invalid={!!errors.phone}
                    />
                  </Field>
                  <Field label="Role">
                    <FormSelect
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      options={ROLES.map((x) => ({ value: x.id, label: x.label.replace(/s$/, "") }))}
                    />
                  </Field>
                  <Field label="Nearest hub">
                    <FormSelect value={form.area} onChange={(e) => set("area")(e.target.value)} options={HUBS} />
                  </Field>
                  <Field label="Anything we should know?">
                    <FormTextarea
                      rows={2}
                      value={form.note}
                      onChange={(e) => set("note")(e.target.value)}
                      placeholder="I've ridden delivery routes before and I know South B well."
                    />
                  </Field>
                  <FormCheckbox
                    checked={form.terms}
                    onChange={(checked) => setForm((f) => ({ ...f, terms: checked }))}
                    label="I'm happy for Blink to contact me about this role"
                    description={errors.terms}
                  />
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    iconRight="arrow-right"
                    onClick={apply}
                    disabled={submitting}
                  >
                    {submitting ? "Sending…" : "Send application"}
                  </Button>
                  <p className="text-center text-[11px] text-[var(--text-subtle)]">
                    Sends to {CAREERS_EMAIL}.
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
