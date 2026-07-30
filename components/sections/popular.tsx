"use client";

import { useState } from "react";
import { Reveal, RevealGroup } from "@/components/blink/reveal";
import { ProductCard } from "@/components/blink/product-card";
import { Tag } from "@/components/blink/tag";
import { Button } from "@/components/ui/button";
import { SectionHead } from "./section-head";
import { useStoreCta } from "./store-context";

const POPULAR = [
  {
    name: "Blueband Original",
    description: "Margarine/spread",
    price: "160.00",
    unit: "500 g",
    image: "/imagery/prod-blueband.jpg",
  },
  {
    name: "Avena Vegetable Oil",
    description: "Cooking oil is a liquid fat, often from plants or seeds.",
    price: "1,399.00",
    unit: "3 L",
    image: "/imagery/prod-avena.jpg",
  },
  {
    name: "Rina Vegetable Oil",
    description: "Cholesterol-free cooking oil.",
    price: "899.00",
    unit: "2 L",
    image: "/imagery/prod-rina.jpg",
  },
  { name: "Supa Loaf", description: "White bread", price: "70.00", unit: "400 g" },
];

const FILTERS = ["Oils and Fats", "Bread and Bakery", "Fresh produce", "Baby", "Pain relief"];

export function Popular() {
  const [filter, setFilter] = useState("Oils and Fats");
  const openStore = useStoreCta();

  return (
    <section className="border-y border-[var(--border-subtle)] bg-white py-20">
      <div className="blink-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Popular right now" title="What Nairobi is ordering today." />
          <Reveal delay={140}>
            <Button variant="ink" iconRight="arrow-right" onClick={openStore}>
              Shop in the app
            </Button>
          </Reveal>
        </div>
        <Reveal delay={80}>
          <div className="mt-[26px] flex flex-wrap gap-2.5">
            {FILTERS.map((t) => (
              <Tag key={t} selected={filter === t} onClick={() => setFilter(t)}>
                {t}
              </Tag>
            ))}
          </div>
        </Reveal>
        <RevealGroup step={70} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {POPULAR.map((p) => (
            <ProductCard key={p.name} {...p} onAdd={openStore} />
          ))}
        </RevealGroup>
        <p className="mt-[18px] text-[13px] text-[var(--text-subtle)]">
          Prices shown for Nairobi and updated daily. Adding to a basket happens in the app.
        </p>
      </div>
    </section>
  );
}
