import { cn } from "@/lib/utils";
import { Icon } from "./icon";

/** Metric tile: mono eyebrow, oversized display figure, signed delta. */
export function Stat({
  label,
  value,
  unit,
  delta,
  hint,
  className,
}: {
  label: string;
  value: string;
  unit?: string;
  delta?: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <span className="blink-eyebrow">{label}</span>
      <span className="flex items-baseline gap-1.5">
        <span className="blink-display-3 leading-none">{value}</span>
        {unit && <span className="text-[13px] text-[var(--text-muted)]">{unit}</span>}
      </span>
      {(delta || hint) && (
        <span className="flex items-center gap-2 text-[13px] text-[var(--text-muted)]">
          {delta && (
            <span className="inline-flex items-center gap-0.5 font-semibold text-success">
              <Icon name="trending-up" size={14} />
              {delta}
            </span>
          )}
          {hint}
        </span>
      )}
    </div>
  );
}
