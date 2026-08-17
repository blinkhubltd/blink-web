import { Reveal, RevealGroup } from "@/components/blink/reveal";
import { DeliveryBadge } from "@/components/blink/delivery-badge";
import { Icon, type IconName } from "@/components/blink/icon";
import { SectionHead } from "./section-head";

const STEPS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "smartphone",
    title: "Choose what you need",
    body: "Open Blink and shop thousands of products available from your nearest hub.",
  },
  {
    icon: "shopping-basket",
    title: "We pick & pack",
    body: "Your order is sent directly to the hub, where our team carefully picks and prepares it.",
  },
  {
    icon: "bike",
    title: "We deliver",
    body: "A Blink rider collects your order and heads straight to you.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-white py-[120px]">
      <div className="blink-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            id="how"
            eyebrow="How it works"
            title="Order. We pack. We deliver."
            sub="Three simple steps between you and what you need."
          />
          <Reveal delay={140}>
            <DeliveryBadge size="lg" />
          </Reveal>
        </div>
        <RevealGroup step={100} className="mt-11 grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.title} className="flex flex-col gap-3.5">
              <span className="flex size-14 items-center justify-center rounded-full bg-blink-400 text-ink-950">
                <Icon name={s.icon} size={26} />
              </span>
              <span className="text-[11px] font-bold tracking-[.08em] text-[var(--text-subtle)]">
                STEP {i + 1}
              </span>
              <h3 className="text-[22px]">{s.title}</h3>
              <p className="max-w-[34ch] text-[15px] text-[var(--text-muted)]">{s.body}</p>
            </div>
          ))}
        </RevealGroup>
        <Reveal delay={220}>
          <p className="mt-11 text-[13px] text-[var(--text-subtle)]">
            Track every step from the app.
          </p>
          <p className="mt-1.5 text-[18px] font-semibold text-[var(--text-strong)]">
            Your order. Your door. In 10 minutes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
