import { Reveal, RevealGroup } from "@/components/blink/reveal";
import { Icon, type IconName } from "@/components/blink/icon";
import { SectionHead } from "./section-head";

const BLINK_MODEL: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "map-pin",
    title: "Neighbourhood hubs",
    body: "Stocked close to the customers they serve, so your order doesn't have to travel across Nairobi to reach you.",
  },
  {
    icon: "shopping-basket",
    title: "Carefully picked",
    body: "Every basket is prepared by a real person who checks your items before they leave the hub.",
  },
  {
    icon: "bike",
    title: "Fast delivery",
    body: "Once packed, your order is handed to a Blink rider for the final journey to your door.",
  },
  {
    icon: "smartphone",
    title: "Built around the app",
    body: "From finding a product to tracking your rider, the Blink experience is designed to keep every step simple.",
  },
];

export function About() {
  return (
    <section id="about" className="border-y border-[var(--border-subtle)] bg-white py-[120px]">
      <div className="blink-container grid items-start gap-10 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="About Blink" title="Built for life at full speed." />
          <Reveal delay={140}>
            <div className="mt-5 flex max-w-[46ch] flex-col gap-3.5 text-lg text-[var(--text-muted)]">
              <p>
                Your day shouldn&apos;t stop because you ran out of milk,
                forgot an ingredient or need something from the pharmacy.
                That&apos;s why Blink exists.
              </p>
              <p>
                We bring groceries, fresh food, household essentials and
                everyday pharmacy products closer to you through a network of
                neighbourhood hubs across Nairobi.
              </p>
              <p>You open the app. You order. We handle the rest.</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 max-w-[46ch] border-t border-[var(--border-subtle)] pt-8">
              <h3 className="text-[20px]">Faster starts closer.</h3>
              <p className="mt-2.5 text-[15px] text-[var(--text-muted)]">
                Instead of sending every order across the city, Blink operates
                from hubs positioned close to the neighbourhoods they serve.
                That means less distance between your order and your door.
                And a much faster way to shop.
              </p>
            </div>
          </Reveal>
        </div>

        <RevealGroup step={90} delay={80} className="flex flex-col gap-5">
          {BLINK_MODEL.map((v) => (
            <div key={v.title} className="flex gap-4 rounded-[var(--radius-card)] border border-[var(--border-subtle)] p-5">
              <span className="flex size-11 flex-none items-center justify-center rounded-full bg-blink-400 text-ink-950">
                <Icon name={v.icon} size={20} />
              </span>
              <div>
                <h3 className="text-[18px]">{v.title}</h3>
                <p className="mt-1.5 text-[15px] text-[var(--text-muted)]">{v.body}</p>
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
