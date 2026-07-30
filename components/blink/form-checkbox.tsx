import { cn } from "@/lib/utils";
import { Icon } from "./icon";

/** Square checkbox — brand-yellow fill with an ink check when on. */
export function FormCheckbox({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  className,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <label
      className={cn(
        "inline-flex items-start gap-3",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="sr-only"
      />
      <span
        className={cn(
          "mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-[4px] border transition-colors duration-150 ease-out",
          checked ? "border-blink-600 bg-blink-400" : "border-ink-300 bg-white"
        )}
      >
        {checked && <Icon name="check" size={13} className="text-ink-950" />}
      </span>
      {(label || description) && (
        <span className="flex flex-col gap-0.5">
          {label && <span className="text-[15px] leading-[1.45] text-[var(--text-body)]">{label}</span>}
          {description && (
            <span className="text-[13px] text-[var(--text-muted)]">{description}</span>
          )}
        </span>
      )}
    </label>
  );
}
