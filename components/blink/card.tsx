"use client";

import { cn } from "@/lib/utils";

const PADS = { none: "p-0", sm: "p-3", md: "p-5", lg: "p-7" } as const;

/** Base surface: white, 1px hairline, 14px corners, whisper of shadow. Lifts
 * 2px and deepens its shadow on hover when `interactive`. */
export function Card({
  children,
  padding = "md",
  interactive = false,
  className,
  style,
  ...rest
}: {
  children: React.ReactNode;
  padding?: keyof typeof PADS;
  interactive?: boolean;
  className?: string;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--surface-card)] shadow-xs transition-all duration-150 ease-out",
        interactive && "cursor-pointer hover:-translate-y-0.5 hover:shadow-md",
        PADS[padding],
        className
      )}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
