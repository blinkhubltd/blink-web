"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";
import { IconButton } from "./icon-button";

/** The app's product tile: cutout on a grey plate, wishlist heart floating
 * top-right, name, one-line description, gold price and a yellow "+" square.
 * On the website the "+" hands off to the store dialog instead of a cart. */
export function ProductCard({
  name,
  description,
  price,
  currency = "Ksh",
  image,
  unit,
  onAdd,
  className,
}: {
  name: string;
  description?: string;
  price: string;
  currency?: string;
  image?: string;
  unit?: string;
  onAdd?: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--surface-card)] shadow-xs transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      <div className="relative flex aspect-[1/0.86] items-center justify-center bg-[var(--surface-thumb)]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="260px"
            className="p-[9%] object-contain mix-blend-multiply"
          />
        ) : (
          <Icon name="image" size={30} className="text-ink-400" />
        )}
        <span className="absolute top-2 right-2">
          <IconButton icon="heart" label="Save to wishlist" variant="white" size="sm" onClick={onAdd} />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 px-3 pt-3 pb-3.5">
        <span className="text-[16px] leading-[1.3] font-semibold text-[var(--text-strong)]">
          {name}
        </span>
        {description && (
          <span className="line-clamp-2 text-[13px] text-[var(--text-muted)]">
            {description}
          </span>
        )}
        <div className="mt-auto flex items-end justify-between gap-2 pt-2.5">
          <span className="flex flex-col">
            <span className="blink-price">
              {currency} {price}
            </span>
            {unit && <span className="text-[11px] text-[var(--text-subtle)]">{unit}</span>}
          </span>
          <button
            onClick={onAdd}
            aria-label={`Add ${name} to cart`}
            className="flex size-[var(--add-btn,38px)] shrink-0 items-center justify-center rounded-[var(--radius-add)] bg-blink-400 text-ink-950 transition-transform duration-150 ease-out active:scale-[var(--press-scale)]"
          >
            <Icon name="plus" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
