import { cn } from "@/lib/utils";
import { Reveal } from "@/components/blink/reveal";

export function SectionHead({
  eyebrow,
  title,
  sub,
  id,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  id?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      id={id}
      className={cn(
        "max-w-[660px]",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="blink-eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2 className="blink-display-3 mt-3">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={110}>
          <p className="mt-3.5 text-lg text-[var(--text-muted)]">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
