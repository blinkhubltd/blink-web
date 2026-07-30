import { Reveal, RevealGroup } from "@/components/blink/reveal";
import { Icon, type IconName } from "@/components/blink/icon";
import { SectionHead } from "./section-head";

const VALUES: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "map-pin",
    title: "Hubs, not warehouses",
    body: "Every hub sits inside the neighbourhood it serves, stocked like a corner shop, so a rider is never far from your gate.",
  },
  {
    icon: "users",
    title: "Real people, every order",
    body: "A picker packs your basket by hand and a rider brings it — not an algorithm, a crew.",
  },
  {
    icon: "smartphone",
    title: "App-only, on purpose",
    body: "Keeping ordering to one app, with no web checkout, is how we keep the 10-minute promise tight.",
  },
];

const BY_THE_NUMBERS: [string, string][] = [
  ["12", "hubs across Nairobi"],
  ["480+", "riders and pickers"],
  ["4,500+", "products on the shelves"],
  ["9 min", "average delivery time"],
];

/** Who Blink is — pulled from the brand's own facts (hero, proof band,
 * careers) rather than invented, since no dedicated "About" copy existed. */
export function About() {
  return (
    <section id="about" className="border-y border-[var(--border-subtle)] bg-white py-[120px]">
      <div className="blink-container grid items-start gap-10 lg:grid-cols-2">
        <div>
          <SectionHead
            eyebrow="About us"
            title="A corner shop that happens to run on an app."
          />
          <Reveal delay={140}>
            <p className="mt-5 max-w-[46ch] text-lg text-[var(--text-muted)]">
              Blink is a 10-minute delivery service for Nairobi. We carry what
              a supermarket carries — fresh produce, household basics, and a
              licensed pharmacy — and get it to your gate while the kettle is
              still boiling. Blink doesn&apos;t sell on the web: ordering
              happens only in the app, which is how we keep the timing tight.
              This site is here to explain the promise, show the shelves, and
              hire the riders, pickers and hub leads who make it happen.
            </p>
          </Reveal>
          <RevealGroup step={80} className="mt-8 grid grid-cols-2 gap-5">
            {BY_THE_NUMBERS.map(([value, label]) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="blink-display-3 text-[28px]">{value}</span>
                <span className="text-[13px] text-[var(--text-muted)]">{label}</span>
              </div>
            ))}
          </RevealGroup>
        </div>

        <RevealGroup step={90} delay={80} className="flex flex-col gap-5">
          {VALUES.map((v) => (
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
