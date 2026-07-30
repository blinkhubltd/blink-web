import { cn } from "@/lib/utils";

/** Multi-line input. Same shell as FormInput, top-aligned. */
export function FormTextarea({
  invalid = false,
  className,
  ...rest
}: {
  invalid?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full resize-y rounded-[var(--radius-md)] border bg-[var(--surface-card)] px-3 py-2.5 text-[15px] leading-[1.55] text-[var(--text-strong)] outline-none transition-shadow duration-150 ease-out placeholder:text-[var(--text-subtle)] focus:ring-3",
        invalid
          ? "border-danger focus:ring-danger-soft"
          : "border-ink-300 focus:border-ink-950 focus:ring-blink-200",
        className
      )}
      {...rest}
    />
  );
}
