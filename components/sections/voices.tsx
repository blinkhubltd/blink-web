import { RevealGroup } from "@/components/blink/reveal";
import { Card } from "@/components/blink/card";
import { Icon } from "@/components/blink/icon";
import { SectionHead } from "./section-head";

const VOICES = [
  {
    q: "Ordered nappies at 11pm on a Tuesday. Eight minutes. I have not been to a supermarket since.",
    n: "Achieng' O.",
    w: "South B",
    i: "AO",
  },
  {
    q: "The picker messaged me about a substitute before packing it. Small thing, but nobody else does that.",
    n: "Brian M.",
    w: "Kilimani",
    i: "BM",
  },
  {
    q: "Panadol and a cold Fanta at the gate before my headache got serious. Worth it.",
    n: "Faith W.",
    w: "Westlands",
    i: "FW",
  },
];

export function Voices() {
  return (
    <section className="py-[120px]">
      <div className="blink-container">
        <SectionHead eyebrow="From the gate" title="10 minutes, in their words." />
        <RevealGroup step={90} className="mt-11 grid gap-5 md:grid-cols-3">
          {VOICES.map((v) => (
            <Card key={v.n} padding="lg" interactive>
              <Icon name="quote" size={22} className="text-blink-400" />
              <p className="mt-3.5 text-[18px] leading-[1.45] font-medium text-[var(--text-strong)]">
                {v.q}
              </p>
              <div className="mt-5 flex items-center gap-2.5 border-t border-[var(--border-subtle)] pt-4">
                <span className="flex size-[34px] items-center justify-center rounded-full bg-blink-400 text-[12px] font-bold text-ink-950">
                  {v.i}
                </span>
                <span className="text-[13px]">
                  <b className="block text-[var(--text-strong)]">{v.n}</b>
                  <span className="text-[var(--text-muted)]">{v.w}</span>
                </span>
              </div>
            </Card>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
