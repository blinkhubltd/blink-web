import { Marquee } from "@/components/blink/marquee";

const ITEMS = [
  "Fresh Produce", "Bread & Bakery", "Dairy & Eggs", "Meat & Poultry", "Fish & Seafood",
  "Pantry", "Snacks", "Drinks", "Household", "Baby Care", "Personal Care", "Pharmacy",
];

/** Ink ticker of what's on the shelves. */
export function ShelfTicker() {
  return <Marquee items={ITEMS} tone="ink" />;
}
