"use client";

import Image from "next/image";
import { Reveal } from "@/components/blink/reveal";
import { DeliveryBadge } from "@/components/blink/delivery-badge";
import { Icon } from "@/components/blink/icon";
import { Button } from "@/components/ui/button";
import { useStoreCta } from "./store-context";

const FEATURES = [
  "Licensed pharmacist on every shift",
  "Prescription items available on request",
  "Sealed, tamper-evident packing",
];

export function Pharmacy() {
  const openStore = useStoreCta();
  return (
    <section id="pharmacy" className="blink-dark bg-ink-950 py-20">
      <div className="blink-container grid items-center gap-10 lg:grid-cols-2">
        <Reveal direction="right">
          <span className="blink-eyebrow text-blink-400">Pharmacy</span>
          <h2 className="blink-display-3 mt-3 max-w-[20ch] text-white">
            Painkillers before the pain wins.
          </h2>
          <p className="mt-4 max-w-[40ch] text-lg text-ink-300">
            Over-the-counter medicine, first aid, baby care and hygiene —
            picked by a licensed pharmacist and delivered in the same 10
            minutes as your bread.
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
              Get the app
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
