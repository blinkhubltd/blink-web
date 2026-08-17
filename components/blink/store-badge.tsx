import { cn } from "@/lib/utils";

const APPLE = (variant: "black" | "white") =>
  `https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/${variant}/en-us`;
const GOOGLE =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";

/** Store link using each store's OFFICIAL badge artwork — required by their
 * brand guidelines, never a typeset copy. Destination URLs are placeholders
 * until the real App Store / Play Store listings exist. */
export function StoreBadge({
  store = "ios",
  href,
  tone = "ink",
  size = "md",
  className,
}: {
  store?: "ios" | "android";
  href?: string;
  tone?: "ink" | "light";
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}) {
  const h = size === "xs" ? 34 : size === "sm" ? 42 : size === "lg" ? 60 : 52;
  const isIOS = store === "ios";
  const src = isIOS ? APPLE(tone === "light" ? "white" : "black") : GOOGLE;
  const fallback =
    href || (isIOS ? "https://apps.apple.com/" : "https://play.google.com/store");
  return (
    <a
      href={fallback}
      target="_blank"
      rel="noreferrer"
      aria-label={
        isIOS ? "Download Blink on the App Store" : "Get Blink on Google Play"
      }
      className={cn(
        "inline-flex items-center overflow-hidden rounded-[10px] leading-none transition-all duration-150 ease-out hover:-translate-y-px hover:opacity-85",
        className
      )}
      style={{ height: h }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={isIOS ? "Download on the App Store" : "Get it on Google Play"}
        style={
          isIOS
            ? { height: h, width: "auto", display: "block" }
            : {
                height: h * 1.42,
                width: "auto",
                display: "block",
                margin: `${-h * 0.21}px ${-h * 0.14}px`,
              }
        }
      />
    </a>
  );
}
