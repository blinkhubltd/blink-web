import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Icon, type IconName } from "@/components/blink/icon"

/**
 * Blink's button. Variants and sizing follow the design system's
 * components/core/Button.jsx: primary (brand yellow), ink (black),
 * secondary (white + hairline), ghost, danger. 12px radius by default,
 * pill (999px) when the `pill` prop is set.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-[var(--radius-md)] border font-sans text-sm font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:scale-[var(--press-scale)] disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1.1em]",
  {
    variants: {
      variant: {
        primary:
          "border-blink-400 bg-blink-400 text-ink-950 hover:border-blink-500 hover:bg-blink-500 hover:shadow-[var(--shadow-brand)]",
        ink: "border-ink-950 bg-ink-950 text-white hover:border-ink-800 hover:bg-ink-800",
        secondary:
          "border-ink-300 bg-white text-ink-950 hover:border-ink-950 hover:bg-ink-50",
        ghost:
          "border-transparent bg-transparent text-ink-800 hover:bg-ink-100",
        danger:
          "border-danger bg-danger text-white hover:border-[#c22f27] hover:bg-[#c22f27]",
      },
      size: {
        sm: "h-[34px] gap-1.5 px-3.5 text-[13px]",
        md: "h-11 px-5 text-[15px]",
        lg: "h-[52px] gap-2.5 px-[26px] text-base",
        icon: "size-11 p-0",
      },
      pill: {
        true: "rounded-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      pill: false,
    },
  }
)

function Button({
  className,
  variant,
  size,
  pill,
  fullWidth,
  icon,
  iconRight,
  children,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    fullWidth?: boolean;
    icon?: IconName;
    iconRight?: IconName;
  }) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, pill, className }),
        fullWidth && "flex w-full"
      )}
      {...props}
    >
      {icon && <Icon name={icon} />}
      {children}
      {iconRight && <Icon name={iconRight} />}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
