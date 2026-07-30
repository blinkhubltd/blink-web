import Image from "next/image";

const LOCKUP = {
  ink: "/logo/logo-blink-ink.png",
  white: "/logo/logo-blink-white.png",
  brand: "/logo/logo-blink-onbrand.png",
} as const;

const RATIO = 3.806;

/** The real Blink lockup — no tagline, transparent background. Pick the file
 * by surface: `tone="ink"` on white/grey, `tone="white"` on ink, `tone="brand"`
 * on yellow. Never re-typeset the wordmark. */
export function Logo({
  size = 30,
  tone = "ink",
  className,
}: {
  size?: number;
  tone?: keyof typeof LOCKUP;
  className?: string;
}) {
  return (
    <Image
      src={LOCKUP[tone]}
      alt="Blink"
      height={size}
      width={Math.round(size * RATIO)}
      priority
      className={className}
      style={{ height: size, width: "auto" }}
    />
  );
}
