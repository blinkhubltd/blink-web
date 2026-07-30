import { cn } from "@/lib/utils";

const SIZES = {
  sm: { h: 30, fs: "text-[11px]", px: "px-[11px]", icon: 17 },
  md: { h: 38, fs: "text-[13px]", px: "px-[15px]", icon: 21 },
  lg: { h: 46, fs: "text-[15px]", px: "px-5", icon: 26 },
} as const;

const TONES = {
  ink: { pill: "bg-ink-950 text-white", icon: "bg-blink-400" },
  brand: { pill: "bg-blink-400 text-ink-950", icon: "bg-ink-950" },
  outline: {
    pill: "bg-transparent text-ink-950 border-[1.5px] border-ink-950",
    icon: "bg-ink-950",
  },
} as const;

/** The black "10 MINUTES DELIVERY" pill with the scooter courier — Blink's
 * core promise, reproduced from the app header. Copy and casing are fixed.
 * The rider glyph is real brand artwork, rendered as a CSS mask so it can
 * take on the tone's icon color the same way the app header does. */
export function DeliveryBadge({
  minutes = 10,
  size = "md",
  tone = "ink",
  className,
}: {
  minutes?: number;
  size?: keyof typeof SIZES;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  const s = SIZES[size];
  const t = TONES[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-sans font-bold uppercase leading-none tracking-[0.01em] whitespace-nowrap",
        s.fs,
        s.px,
        t.pill,
        className
      )}
      style={{ height: s.h }}
    >
      <span
        aria-hidden
        className={cn("inline-block shrink-0", t.icon)}
        style={{
          width: Math.round(s.icon * 1.036),
          height: s.icon,
          WebkitMaskImage: "url(/logo/icon-rider.png)",
          maskImage: "url(/logo/icon-rider.png)",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
      {minutes} minutes delivery
    </span>
  );
}
