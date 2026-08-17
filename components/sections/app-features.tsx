"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/blink/reveal";
import { Icon } from "@/components/blink/icon";
import { Button } from "@/components/ui/button";
import { useStoreCta } from "./store-context";

const FEATURES = [
  {
    eyebrow: "The Blink app",
    title: "A smarter way to shop, a faster way to live.",
    body: "No endless scrolling. No complicated checkout. Blink is designed to help you find what you need and place your order fast.",
    bullets: [
      "Find it fast — search instantly by product, category or brand.",
      "Smart substitutions — review alternatives when something you ordered is unavailable.",
      "Reorder in seconds — bring back your regulars without rebuilding your basket.",
      "Live order tracking — follow your order from the hub to your door.",
    ],
    shot: "/imagery/app-browse.png",
    flip: false,
  },
  {
    eyebrow: "Checkout",
    title: "From checkout to your doorstep, fast.",
    body: "Fast, secure checkout with clear pricing before you place your order.",
    bullets: [
      "M-Pesa — pay directly from your phone.",
      "Card — quick and secure card payments.",
      "Clear pricing — see product prices, delivery charges and applicable taxes before confirming your order.",
      "Saved details — save your address and delivery instructions for an even faster checkout next time.",
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
