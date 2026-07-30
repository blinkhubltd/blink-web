"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const TONES = {
  brand: "bg-blink-400 text-ink-950",
  ink: "bg-ink-950 text-white",
  plain: "bg-transparent text-[var(--text-strong)]",
} as const;

/** Continuously scrolling row — the yellow category/careers ticker. Pauses on hover. */
export function Marquee({
  items,
  speed = 34,
  separator = "·",
  tone = "brand",
  reverse = false,
  className,
}: {
  items: string[];
  speed?: number;
  separator?: string;
  tone?: keyof typeof TONES;
  reverse?: boolean;
  className?: string;
}) {
  const [paused, setPaused] = useState(false);

  const run = (key: string) => (
    <span
      key={key}
      aria-hidden={key !== "a"}
      className="flex flex-none items-center gap-7 px-3.5"
    >
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center gap-7 whitespace-nowrap">
          <span>{it}</span>
          <span className="opacity-40">{separator}</span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={cn(
        "flex overflow-hidden py-3.5 font-sans text-[17px] font-bold tracking-[-0.01em]",
        TONES[tone],
        className
      )}
      style={{
        maskImage: "linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)",
      }}
    >
      <div
        className="flex flex-none"
        style={{
          animation: `blink-marquee ${speed}s linear infinite ${reverse ? "reverse" : "normal"}`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {run("a")}
        {run("b")}
      </div>
    </div>
  );
}
