import { RevealGroup } from "@/components/blink/reveal";
import { Card } from "@/components/blink/card";
import { SectionHead } from "./section-head";

const VOICES = [
  {
    q: "Delivered before I expected it. The whole process was incredibly easy.",
    n: "Customer Name",
    w: "South B",
    i: "CN",
  },
  {
    q: "Everything arrived fresh and exactly as ordered.",
    n: "Customer Name",
    w: "Kilimani",
    i: "CN",
  },
  {
    q: "Blink has become my go-to when I need something quickly.",
    n: "Customer Name",
    w: "Westlands",
    i: "CN",
  },
];

export function Voices() {
  return (
    <section className="py-[120px]">
      <div className="blink-container">
        <SectionHead eyebrow="From our customers" title="Blink, in their words." />
        <RevealGroup step={90} className="mt-11 grid gap-5 md:grid-cols-3">
          {VOICES.map((v) => (
            <Card key={v.n + v.w} padding="lg" interactive>
              <span aria-hidden className="text-[15px] tracking-[2px] text-blink-400">
                ★★★★★
              </span>
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
