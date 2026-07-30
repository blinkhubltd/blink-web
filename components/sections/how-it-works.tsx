import { Reveal, RevealGroup } from "@/components/blink/reveal";
import { DeliveryBadge } from "@/components/blink/delivery-badge";
import { Icon, type IconName } from "@/components/blink/icon";
import { SectionHead } from "./section-head";

const STEPS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "smartphone",
    title: "Order in the app",
    body: "Pick from thousands of items on the shelves of the hub nearest you. No minimum order.",
  },
  {
    icon: "shopping-basket",
    title: "A picker packs it",
    body: "Our picker walks the aisles the second you pay — most baskets are packed in under three minutes.",
  },
  {
    icon: "bike",
    title: "A rider brings it",
    body: "Riders leave the hub within seconds and cover the last five kilometres fast. Track them to your gate.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-white py-[120px]">
      <div className="blink-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead id="how" eyebrow="How it works" title="10 minutes, three steps." />
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
      </div>
    </section>
  );
}
