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
      "Everyday household, cleaning and personal-care essentials, ready when you need them.",
    cta: "Shop essentials",
  },
  {
    title: "Pharmacy",
    image: "/imagery/cat-pharmaceuticals.jpg",
    count: 340,
    description:
      "Everyday health, wellness, first-aid and over-the-counter essentials.",
    cta: "Shop pharmacy",
  },
  {
    title: "Groceries",
    image: "/imagery/cat-essentials.jpg",
    count: 2100,
    description:
      "Fresh produce, bakery, dairy, meat, pantry staples, snacks, drinks and more.",
    cta: "Shop groceries",
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
          title="The supermarket, minus the trip."
          sub="Everything you need for home, all in one app — ready to be picked, packed and delivered in minutes."
        />
        <RevealGroup step={90} className="mt-11 grid gap-5 md:grid-cols-3">
          {CATS.map((c) => (
            <CategoryCard key={c.title} {...c} onClick={openStore} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
