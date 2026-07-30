import { Marquee } from "@/components/blink/marquee";

const ITEMS = [
  "Fresh produce", "Bread & bakery", "Milk & dairy", "Oils and fats", "Rice & grains",
  "Meat & fish", "Snacks", "Soft drinks", "Cleaning", "Baby care", "Pharmacy", "Airtime",
];

/** Yellow ticker of what's on the shelves. */
export function ShelfTicker() {
  return <Marquee items={ITEMS} />;
}
