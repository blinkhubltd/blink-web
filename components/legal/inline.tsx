import { Fragment } from "react";
import type { Inline } from "@/lib/legal/types";

/** Renders an `Inline` — prose with optional bold and link runs. */
export function InlineText({ value }: { value: Inline }) {
  if (typeof value === "string") return <>{value}</>;
  return (
    <>
      {value.map((part, i) => {
        if (typeof part === "string") return <Fragment key={i}>{part}</Fragment>;
        if ("b" in part) return <strong key={i}>{part.b}</strong>;
        return (
          <a key={i} href={part.href}>
            {part.a}
          </a>
        );
      })}
    </>
  );
}
