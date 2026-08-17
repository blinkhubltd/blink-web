import Link from "next/link";
import { Logo } from "@/components/blink/logo";
import { DeliveryBadge } from "@/components/blink/delivery-badge";
import { StoreBadge } from "@/components/blink/store-badge";
import { Icon, type IconName } from "@/components/blink/icon";

// Root-relative so the footer also works from the standalone legal pages.
const FOOTER_COLS: [string, [string, string][]][] = [
  [
    "Shop",
    [
      ["Groceries", "/#categories"],
      ["Fresh Produce", "/#categories"],
      ["Bakery", "/#categories"],
      ["Pharmacy", "/#pharmacy"],
      ["Household", "/#categories"],
      ["Baby Care", "/#categories"],
      ["Snacks & Drinks", "/#categories"],
    ],
  ],
  [
    "Blink",
    [
      ["About Us", "/#about"],
      ["Careers", "/#careers"],
      ["Where We Deliver", "/#launch"],
      ["Request a Hub", "/#launch"],
      ["Press", "/#top"],
    ],
  ],
  [
    "Support",
    [
      ["Help Centre", "/#faq"],
      ["Contact Us", "/#faq"],
      ["Delivery Information", "/#launch"],
      ["Refunds", "/terms#section-4"],
    ],
  ],
  [
    "Legal",
    [
      ["Privacy Policy", "/privacy-policy"],
      ["Terms & Conditions", "/terms"],
      ["EULA", "/eula"],
    ],
  ],
];

const SOCIALS: IconName[] = ["instagram", "facebook", "twitter", "linkedin"];

export function SiteFooter() {
  return (
    <footer className="blink-dark bg-ink-950 pt-16 pb-8">
      <div className="blink-container">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr_.9fr]">
          <div>
            <Logo size={28} tone="white" />
            <p className="mt-4 blink-tagline text-[13px] text-blink-400">
              Faster than U.
            </p>
            <p className="mt-2 max-w-[30ch] text-[13px] text-ink-400">
              Groceries, everyday essentials and pharmacy products delivered
              fast across Nairobi.
            </p>
            <div className="mt-4">
              <DeliveryBadge size="sm" tone="brand" />
            </div>
            <div className="mt-5 flex flex-nowrap items-center gap-2.5">
              <StoreBadge store="ios" size="xs" tone="light" />
              <StoreBadge store="android" size="xs" />
            </div>
            <div className="mt-[22px] flex gap-3.5">
              {SOCIALS.map((s) => (
                <Link
                  key={s}
                  href="/#top"
                  aria-label={s}
                  className="border-0 text-ink-500"
                >
                  <Icon name={s} size={18} />
                </Link>
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
                  <Link
                    key={label}
                    href={href}
                    className="border-0 text-[13px] text-ink-300"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-ink-800 pt-6 text-[11px] text-ink-500">
          <span>© 2026 Blink Hub Ltd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
