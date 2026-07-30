import { cn } from "@/lib/utils";
import { Icon } from "./icon";

/** Label + help/error scaffolding shared by every form control. */
export function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  className,
}: {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label htmlFor={htmlFor} className="text-[13px] font-semibold text-[var(--text-strong)]">
          {label}
          {required && <span className="ml-0.5 text-danger">*</span>}
        </label>
      )}
      {children}
      {(error || hint) && (
        <span
          className={cn(
            "inline-flex items-center gap-1 text-[13px]",
            error ? "text-danger" : "text-[var(--text-muted)]"
          )}
        >
          {error && <Icon name="triangle-alert" size={13} />}
          {error || hint}
        </span>
      )}
    </div>
  );
}
