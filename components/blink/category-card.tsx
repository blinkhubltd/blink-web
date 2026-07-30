"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";

/** Category tile: full-bleed photo, title, description, "View products" + arrow. */
export function CategoryCard({
  title,
  description,
  image,
  cta = "View products",
  onClick,
  count,
  className,
}: {
  title: string;
  description?: string;
  image?: string;
  cta?: string;
  onClick?: () => void;
  count?: number;
  className?: string;
}) {
  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      className={cn(
        "group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--surface-card)] shadow-xs transition-all duration-150 ease-out",
        onClick && "cursor-pointer hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-[16/7] bg-[var(--surface-thumb)]">
        {image && (
          <Image src={image} alt="" fill sizes="400px" className="object-cover" />
        )}
        {count != null && (
          <span className="absolute bottom-3 left-3 rounded-full bg-ink-950 px-2.5 py-1.5 text-[11px] font-semibold text-white">
            {count} items
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 px-[18px] pt-4 pb-3.5">
        <span className="font-sans text-[18px] font-semibold tracking-[-0.01em] text-[var(--text-strong)]">
          {title}
        </span>
        {description && (
          <span className="text-[13px] leading-[1.5] text-[var(--text-muted)]">
            {description}
          </span>
        )}
        <span className="mt-auto flex items-center justify-between gap-3 pt-3.5">
          <span className="text-[15px] font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-strong)]">
            {cta}
          </span>
          <span className="flex size-[38px] items-center justify-center rounded-full bg-ink-100 text-ink-950 transition-colors group-hover:bg-blink-400">
            <Icon name="arrow-right" size={18} />
          </span>
        </span>
      </div>
    </div>
  );
}
