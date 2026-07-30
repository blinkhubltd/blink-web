import { icons, type LucideProps } from "lucide-react";

function toPascalCase(kebab: string) {
  return kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("") as keyof typeof icons;
}

export type IconName = string;

/** Thin wrapper around lucide-react, keyed by the same kebab-case glyph
 * names the design system uses (e.g. "map-pin", "shopping-basket"). */
export function Icon({
  name,
  size = 18,
  ...rest
}: { name: IconName } & Omit<LucideProps, "ref">) {
  const Cmp = icons[toPascalCase(name)];
  if (!Cmp) return null;
  return <Cmp size={size} strokeWidth={2} {...rest} />;
}
