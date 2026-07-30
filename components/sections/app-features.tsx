"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/blink/reveal";
import { Icon } from "@/components/blink/icon";
import { Button } from "@/components/ui/button";
import { useStoreCta } from "./store-context";

const FEATURES = [
  {
    eyebrow: "In the app",
    title: "The whole shop, two taps deep.",
    body: "Departments across the top, refine below, and a basket that keeps the running total in front of you. Prices are the shelf prices — no delivery mark-up hidden in the products.",
    bullets: [
      "Search by product or brand",
      "Substitutions you approve before packing",
      "Reorder your last basket in one tap",
    ],
    shot: "/imagery/app-browse.png",
    flip: false,
  },
  {
    eyebrow: "Checkout",
    title: "Pay how Nairobi pays.",
    body: "M-Pesa prompt straight to your phone, card if you prefer, or pay the rider on delivery. VAT is broken out at 16% so you can see exactly what you're paying for.",
    bullets: [
      "M-Pesa, card, or cash on delivery",
      "VAT shown as its own line",
      "Delivery instructions saved for next time",
    ],
    shot: "/imagery/app-checkout.png",
    flip: true,
  },
];

export function AppFeatures() {
  const openStore = useStoreCta();
  return (
    <section id="app" className="py-[120px] pb-20">
      <div className="blink-container flex flex-col gap-[120px]">
        {FEATURES.map((f) => (
          <div key={f.title} className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal direction={f.flip ? "left" : "right"} className={cn(f.flip && "lg:order-2")}>
              <span className="blink-eyebrow">{f.eyebrow}</span>
              <h2 className="blink-display-3 mt-3 max-w-[22ch]">{f.title}</h2>
              <p className="mt-4 max-w-[42ch] text-lg text-[var(--text-muted)]">{f.body}</p>
              <div className="mt-[22px] flex flex-col gap-[11px]">
                {f.bullets.map((b) => (
                  <span key={b} className="flex items-center gap-2.5 text-[15px] text-[var(--text-body)]">
                    <Icon name="check" size={17} className="text-blink-600" />
                    {b}
                  </span>
                ))}
              </div>
              <div className="mt-[26px]">
                <Button variant="ink" iconRight="arrow-right" onClick={openStore}>
                  Get the app
                </Button>
              </div>
            </Reveal>
            <Reveal delay={100} className={cn("flex justify-center", f.flip && "lg:order-1")}>
              <span className="block flex-none rounded-[30px] bg-ink-950 p-[7px] shadow-lg" style={{ width: "min(286px, 100%)" }}>
                <Image src={f.shot} alt="Blink app" width={286} height={601} className="w-full rounded-[23px]" />
              </span>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
