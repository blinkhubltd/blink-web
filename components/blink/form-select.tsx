import { cn } from "@/lib/utils";
import { Icon } from "./icon";

type Option = string | { value: string; label: string };

/** Native select in Blink's control shell, with a custom chevron. */
export function FormSelect({
  options,
  placeholder,
  invalid = false,
  className,
  ...rest
}: {
  options: Option[];
  placeholder?: string;
  invalid?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative w-full">
      <select
        className={cn(
          "h-11 w-full appearance-none rounded-[var(--radius-md)] border bg-[var(--surface-card)] pr-9 pl-3 text-[15px] text-[var(--text-strong)] outline-none transition-shadow duration-150 ease-out focus:ring-3",
          invalid
            ? "border-danger focus:ring-danger-soft"
            : "border-ink-300 focus:border-ink-950 focus:ring-blink-200",
          className
        )}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => {
          const opt = typeof o === "string" ? { value: o, label: o } : o;
          return (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
      <Icon
        name="chevron-down"
        size={16}
        className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[var(--text-muted)]"
      />
    </div>
  );
}
