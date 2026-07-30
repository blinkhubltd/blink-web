"use client";

import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./icon";

const SIZES = { sm: 34, md: 44, lg: 52 } as const;

const TONES = {
  ink: "bg-ink-950 border-ink-950 text-white hover:bg-ink-800",
  brand: "bg-blink-400 border-blink-400 text-ink-950 hover:bg-blink-500",
  secondary: "bg-white border-ink-300 text-ink-950 hover:bg-ink-50",
  ghost: "bg-transparent border-transparent text-ink-600 hover:bg-ink-100",
  white: "bg-white border-transparent text-ink-950 shadow-sm hover:bg-ink-50",
} as const;

/** Icon-only control. `circle` + `ink` is the app's header button (search, cart). */
export function IconButton({
  icon,
  variant = "ghost",
  shape = "circle",
  size = "md",
  label,
  count,
  disabled = false,
  className,
  ...rest
}: {
  icon: IconName;
  variant?: keyof typeof TONES;
  shape?: "circle" | "square";
  size?: keyof typeof SIZES;
  label: string;
  count?: number;
  disabled?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const px = SIZES[size];
  return (
    <button
      aria-label={label}
      title={label}
      disabled={disabled}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center border p-0 transition-all duration-150 ease-out active:scale-[var(--press-scale)] disabled:cursor-not-allowed disabled:opacity-45",
        shape === "circle" ? "rounded-full" : "rounded-[var(--radius-md)]",
        TONES[variant],
        className
      )}
      style={{ width: px, height: px }}
      {...rest}
    >
      <Icon name={icon} size={size === "sm" ? 17 : size === "lg" ? 22 : 20} />
      {count != null && count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex h-[19px] min-w-[19px] items-center justify-center rounded-full border-2 border-white bg-danger px-[5px] text-[11px] leading-none font-bold text-white">
          {count}
        </span>
      )}
    </button>
  );
}
