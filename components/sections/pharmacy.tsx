"use client";

import Image from "next/image";
import { Reveal } from "@/components/blink/reveal";
import { DeliveryBadge } from "@/components/blink/delivery-badge";
import { Icon } from "@/components/blink/icon";
import { Button } from "@/components/ui/button";
import { useStoreCta } from "./store-context";

const FEATURES = [
  "Health & Wellness — everyday products for you and your family.",
  "First Aid — the essentials you want close at hand.",
  "Personal & Baby Care — everyday care products delivered with the rest of your Blink order.",
];

export function Pharmacy() {
  const openStore = useStoreCta();
  return (
    <section id="pharmacy" className="blink-dark bg-ink-950 py-20">
      <div className="blink-container grid items-center gap-10 lg:grid-cols-2">
        <Reveal direction="right">
          <span className="blink-eyebrow text-blink-400">Pharmacy</span>
          <h2 className="blink-display-3 mt-3 max-w-[20ch] text-white">
            Everyday health essentials, delivered fast.
          </h2>
          <p className="mt-4 max-w-[42ch] text-lg text-ink-300">
            From pain relief and first aid to baby care, hygiene and everyday
            wellness products, find the essentials you need without the extra
            trip.
          </p>
          <p className="mt-2 text-[15px] font-semibold text-white">
            Carefully prepared. Securely packed. Delivered to your door.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {FEATURES.map((f) => (
              <span key={f} className="flex items-center gap-2.5 text-[15px] text-ink-200">
                <Icon name="check" size={17} className="text-blink-400" />
                {f}
              </span>
            ))}
          </div>
          <div className="mt-[26px] flex flex-wrap items-center gap-3.5">
            <Button variant="primary" size="lg" icon="download" onClick={openStore}>
              Explore pharmacy
            </Button>
            <DeliveryBadge tone="brand" />
          </div>
        </Reveal>
        <Reveal delay={110}>
          <Image
            src="/imagery/cat-pharmaceuticals.jpg"
            alt="Blink pharmacy shelves"
            width={600}
            height={450}
            className="w-full rounded-[20px] object-cover"
            style={{ aspectRatio: "4/3" }}
          />
        </Reveal>
      </div>
    </section>
  );
}
