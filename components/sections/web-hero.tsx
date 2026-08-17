"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/blink/reveal";
import { DeliveryBadge } from "@/components/blink/delivery-badge";
import { StoreBadge } from "@/components/blink/store-badge";
import { Icon, type IconName } from "@/components/blink/icon";

/** The "10 minutes" plate that counts 1→10 once, on load. */
function CountUp() {
  const [n, setN] = useState(1);
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount check, not a derived-state loop
      setN(10);
      return;
    }
    let v = 1;
    const id = setInterval(() => {
      v += 1;
      setN(v);
      if (v >= 10) clearInterval(id);
    }, 90);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="inline-block rounded-lg bg-ink-950 px-[0.12em] whitespace-nowrap text-blink-400">
      <span className="tabular-nums">{n}</span> minutes
    </span>
  );
}

function FloatingChip({
  icon,
  label,
  delay = "0s",
}: {
  icon: IconName;
  label: string;
  delay?: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2.5 text-[13px] font-semibold whitespace-nowrap text-ink-950 shadow-md"
      style={{ animation: "blink-float 6s var(--ease-in-out) infinite", animationDelay: delay }}
    >
      <Icon name={icon} size={15} className="text-blink-500" />
      {label}
    </span>
  );
}

function PhoneShot({
  src,
  width,
  className,
  style,
}: {
  src: string;
  width: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={`block flex-none rounded-[30px] bg-ink-950 p-[7px] shadow-lg ${className ?? ""}`}
      style={{ width: `min(${width}px, 100%)`, ...style }}
    >
      <Image src={src} alt="Blink app" width={width} height={Math.round(width * 2.1)} className="w-full rounded-[23px]" />
    </span>
  );
}

/** Yellow hero: the promise, store badges, floating phones. */
export function WebHero() {
  return (
    <section id="top" className="blink-brand relative overflow-hidden bg-blink-400">
      <div className="blink-container grid items-center gap-9 py-12 px-7 lg:grid-cols-[1.05fr_.95fr] lg:gap-9">
        <div className="min-w-0 lg:pb-12">
          <Reveal>
            <span className="blink-tagline text-[15px] text-blink-800">Faster than U.</span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="blink-display-1 mt-3 max-w-[16ch] text-ink-950">
              Everything you need.
              <br />
              At your door in <CountUp />.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-[40ch] text-lg leading-[1.5] text-ink-900">
              Groceries, fresh food, household essentials and pharmacy
              products — delivered from your nearest Blink hub straight to
              your door.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-[22px]">
              <DeliveryBadge size="lg" />
            </div>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-5 blink-tagline text-[15px] text-ink-950">
              The future of grocery shopping is instant.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <StoreBadge store="ios" />
              <StoreBadge store="android" />
            </div>
          </Reveal>
        </div>

        <div className="relative flex min-w-0 max-w-full items-end justify-center gap-[clamp(8px,2vw,18px)] pt-6">
          <PhoneShot
            src="/imagery/app-browse.png"
            width={206}
            style={{ marginBottom: "clamp(20px,4vw,44px)", animation: "blink-float 7s var(--ease-in-out) infinite" }}
          />
          <PhoneShot
            src="/imagery/app-home.png"
            width={264}
            style={{ animation: "blink-float 7s var(--ease-in-out) infinite", animationDelay: "-3.5s" }}
          />
          <span className="absolute top-[38px] left-1">
            <FloatingChip icon="bike" label="Rider assigned" delay="-1s" />
          </span>
          <span className="absolute right-0 bottom-24">
            <FloatingChip icon="circle-check" label="Packed in 2:41" delay="-4s" />
          </span>
        </div>
      </div>
    </section>
  );
}
