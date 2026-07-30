"use client";

import { useId, useRef } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";

/** File picker in Blink's control shell — shows the chosen filename with a
 * clear button, or a "Choose file" prompt when empty. */
export function FormFile({
  value,
  onChange,
  accept,
  invalid = false,
  className,
}: {
  value: File | null;
  onChange: (file: File | null) => void;
  accept?: string;
  invalid?: boolean;
  className?: string;
}) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn(
        "flex h-11 w-full items-center gap-2 rounded-[var(--radius-md)] border bg-[var(--surface-card)] pr-2 pl-3 transition-shadow duration-150 ease-out",
        invalid ? "border-danger" : "border-ink-300",
        className
      )}
    >
      <Icon name="paperclip" size={16} className="shrink-0 text-[var(--text-subtle)]" />
      <span
        className={cn(
          "min-w-0 flex-1 truncate text-[15px]",
          value ? "text-[var(--text-strong)]" : "text-[var(--text-subtle)]"
        )}
      >
        {value ? value.name : "No file chosen"}
      </span>
      {value && (
        <button
          type="button"
          onClick={() => {
            onChange(null);
            if (inputRef.current) inputRef.current.value = "";
          }}
          aria-label="Remove file"
          className="flex size-6 flex-none items-center justify-center rounded-full text-[var(--text-subtle)] hover:bg-ink-100"
        >
          <Icon name="x" size={14} />
        </button>
      )}
      <label
        htmlFor={inputId}
        className="flex h-8 flex-none cursor-pointer items-center rounded-[var(--radius-sm)] bg-ink-100 px-3 text-[13px] font-medium text-ink-950 hover:bg-ink-200"
      >
        Choose file
      </label>
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept={accept}
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
        className="sr-only"
      />
    </div>
  );
}
