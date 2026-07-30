import { Logo } from "@/components/blink/logo";
import { DeliveryBadge } from "@/components/blink/delivery-badge";
import { StoreBadge } from "@/components/blink/store-badge";
import { Icon, type IconName } from "@/components/blink/icon";

const FOOTER_COLS: [string, [string, string][]][] = [
  [
    "Shop",
    [
      ["Groceries", "#categories"],
      ["Fresh produce", "#categories"],
      ["Pharmacy", "#pharmacy"],
      ["Household", "#categories"],
      ["Baby", "#categories"],
      ["Snacks", "#categories"],
    ],
  ],
  [
    "Blink",
    [
      ["About us", "#about"],
      ["Careers", "#careers"],
      ["Hubs in Nairobi", "#launch"],
      ["Request a hub", "#launch"],
      ["Press", "#top"],
    ],
  ],
  [
    "Support",
    [
      ["Help centre", "#faq"],
      ["Delivery zones", "#launch"],
      ["Refunds", "#top"],
      ["Contact us", "#faq"],
    ],
  ],
];

const SOCIALS: IconName[] = ["instagram", "facebook", "twitter", "linkedin"];

export function SiteFooter() {
  return (
    <footer className="blink-dark bg-ink-950 pt-16 pb-8">
      <div className="blink-container">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Logo size={28} tone="white" />
            <p className="mt-4 max-w-[30ch] text-[13px] text-ink-400">
              Groceries, pharmacy and household basics delivered across
              Nairobi in 10 minutes.
            </p>
            <div className="mt-4">
              <DeliveryBadge size="sm" tone="brand" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <StoreBadge store="ios" size="sm" tone="light" />
              <StoreBadge store="android" size="sm" />
            </div>
            <div className="mt-[22px] flex gap-3.5">
              {SOCIALS.map((s) => (
                <a key={s} href="#top" aria-label={s} className="border-0 text-ink-500">
                  <Icon name={s} size={18} />
                </a>
              ))}
            </div>
          </div>
          {FOOTER_COLS.map(([title, items]) => (
            <div key={title}>
              <div className="text-[11px] font-bold tracking-[.08em] uppercase text-ink-500">
                {title}
              </div>
              <div className="mt-3.5 flex flex-col gap-2.5">
                {items.map(([label, href]) => (
                  <a key={label} href={href} className="border-0 text-[13px] text-ink-300">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-ink-800 pt-6 text-[11px] text-ink-500">
          <span>© 2026 Blink Kenya Ltd · Nairobi</span>
          <span className="flex gap-4.5">
            <a href="#top" className="border-0 text-ink-500">Privacy</a>
            <a href="#top" className="border-0 text-ink-500">Terms</a>
            <a href="#top" className="border-0 text-ink-500">VAT &amp; pricing</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
