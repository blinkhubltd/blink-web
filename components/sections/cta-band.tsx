import { Reveal } from "@/components/blink/reveal";
import { DeliveryBadge } from "@/components/blink/delivery-badge";
import { StoreBadge } from "@/components/blink/store-badge";

export function CtaBand() {
  return (
    <section className="blink-brand relative overflow-hidden bg-blink-400 py-20">
      <div className="blink-container relative flex flex-wrap items-center justify-between gap-10">
        <Reveal>
          <h2 className="blink-display-2 max-w-[18ch] text-ink-950">
            Your shopping is 10 minutes away.
          </h2>
          <p className="mt-3 text-lg text-blink-800">
            Download Blink and put the supermarket in your pocket.
          </p>
          <div className="mt-5">
            <DeliveryBadge />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-3">
            <StoreBadge store="ios" size="lg" />
            <StoreBadge store="android" size="lg" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
