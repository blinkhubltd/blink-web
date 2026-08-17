import { Reveal } from "@/components/blink/reveal";
import { DeliveryBadge } from "@/components/blink/delivery-badge";
import { StoreBadge } from "@/components/blink/store-badge";

export function CtaBand() {
  return (
    <section className="blink-brand relative overflow-hidden bg-blink-400 py-20">
      <div className="blink-container relative flex flex-wrap items-center justify-between gap-10">
        <Reveal>
          <span className="blink-tagline text-[15px] text-blink-800">Faster than U.</span>
          <h2 className="blink-display-2 mt-3 max-w-[18ch] text-ink-950">
            Your shopping is 10 minutes away.
          </h2>
          <p className="mt-3 text-lg text-blink-800">
            Groceries. Essentials. Pharmacy. Whatever you need, Blink it.
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
