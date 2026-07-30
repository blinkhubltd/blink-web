"use client";

import { cn } from "@/lib/utils";

/** Pill-shaped filter chip. Selected state is solid ink black. */
export function Tag({
  children,
  selected = false,
  onClick,
  className,
}: {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex h-[34px] items-center gap-1.5 rounded-full border px-4 text-[13px] font-medium leading-none transition-colors duration-150 ease-out",
        selected
          ? "border-ink-950 bg-ink-950 text-white"
          : "border-[var(--border-subtle)] bg-[var(--surface-card)] text-[var(--text-body)] hover:bg-ink-100",
        className
      )}
    >
      {children}
    </button>
  );
}
