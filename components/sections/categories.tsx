"use client";

import { RevealGroup } from "@/components/blink/reveal";
import { CategoryCard } from "@/components/blink/category-card";
import { SectionHead } from "./section-head";
import { useStoreCta } from "./store-context";

const CATS = [
  {
    title: "Essentials",
    image: "/imagery/cat-essentials.jpg",
    count: 1240,
    description:
      "Everyday items you need at home, like groceries, cleaning supplies, and personal care products.",
  },
  {
    title: "Pharmaceuticals",
    image: "/imagery/cat-pharmaceuticals.jpg",
    count: 340,
    description:
      "Over-the-counter medicine, first aid and everyday health, picked by a licensed pharmacist.",
  },
  {
    title: "Groceries",
    image: "/imagery/cat-essentials.jpg",
    count: 2100,
    description:
      "Fresh produce, bread, dairy, oils and fats, meat and pantry staples.",
  },
];

export function Categories() {
  const openStore = useStoreCta();
  return (
    <section className="py-[120px]">
      <div className="blink-container">
        <SectionHead
          id="categories"
          eyebrow="Shop"
          title="Everything a supermarket has. None of the queue."
          sub="Browse the aisles here, then finish your order in the app."
        />
        <RevealGroup step={90} className="mt-11 grid gap-5 md:grid-cols-3">
          {CATS.map((c) => (
            <CategoryCard key={c.title} {...c} cta="See what's in stock" onClick={openStore} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
