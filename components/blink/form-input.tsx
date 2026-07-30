"use client";

import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./icon";

/** Single-line text input with optional leading icon, in Blink's control shell. */
export function FormInput({
  icon,
  invalid = false,
  className,
  ...rest
}: {
  icon?: IconName;
  invalid?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div
      className={cn(
        "flex h-11 w-full items-center gap-2 rounded-[var(--radius-md)] border bg-[var(--surface-card)] px-3 transition-shadow duration-150 ease-out focus-within:ring-3",
        invalid
          ? "border-danger focus-within:ring-danger-soft"
          : "border-ink-300 focus-within:border-ink-950 focus-within:ring-blink-200",
        className
      )}
    >
      {icon && <Icon name={icon} size={16} className="shrink-0 text-[var(--text-subtle)]" />}
      <input
        className="h-full min-w-0 flex-1 border-0 bg-transparent text-[15px] text-[var(--text-strong)] outline-none placeholder:text-[var(--text-subtle)]"
        {...rest}
      />
    </div>
  );
}
