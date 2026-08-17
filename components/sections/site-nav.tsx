"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/blink/logo";
import { DeliveryBadge } from "@/components/blink/delivery-badge";
import { Button } from "@/components/ui/button";
import { useStoreCta } from "./store-context";

// Root-relative so the nav also works from the standalone legal pages.
const NAV_LINKS = [
  { label: "Shop", href: "/#categories" },
  { label: "How it works", href: "/#how" },
  { label: "Pharmacy", href: "/#pharmacy" },
  { label: "About", href: "/#about" },
  { label: "Where we deliver", href: "/#launch" },
  { label: "Careers", href: "/#careers" },
  { label: "Help", href: "/#faq" },
];

function NavLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative border-0 pb-[3px] text-[15px] font-medium whitespace-nowrap transition-colors duration-240 ease-out",
        active ? "text-ink-950" : "text-[var(--text-body)] hover:text-ink-950",
      )}
    >
      {label}
      <i
        className={cn(
          "absolute bottom-0 left-0 h-0.5 rounded bg-blink-400 transition-[width] duration-300 ease-out",
          active ? "w-full" : "w-0 group-hover:w-full",
        )}
      />
    </Link>
  );
}

/** Section ids tracked by the scrollspy, in page order — must match the
 * `#hash` on each NAV_LINKS href. */
const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("/#", ""));

/** White sticky top nav. Gains a hairline + shadow once you scroll, and
 * underlines whichever section is currently in view. */
export function SiteNav() {
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const openStore = useStoreCta();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!els.length) return;

    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        const first = els.find((el) => visible.has(el.id));
        setActive(first?.id ?? null);
      },
      // Top edge sits just under the sticky nav; bottom edge well up the
      // viewport, so the link tracks whichever section fills most of it.
      { rootMargin: "-90px 0px -60% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white transition-shadow duration-160 ease-out",
        stuck ? "border-ink-200 shadow-sm" : "border-transparent",
      )}
    >
      <div
        className="blink-container flex items-center gap-5 lg:gap-8"
        style={{ height: "var(--web-nav-h)" }}
      >
        <Link href="/" className="flex flex-none border-0">
          <Logo size={30} />
        </Link>
        <nav className="hidden min-w-0 flex-1 items-center gap-5 overflow-hidden lg:flex lg:gap-6">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.label}
              {...l}
              active={active === l.href.replace("/#", "")}
            />
          ))}
        </nav>
        <div className="ml-auto flex flex-none items-center gap-4">
          <DeliveryBadge size="sm" className="hidden lg:inline-flex" />
          <Button
            variant="primary"
            icon="download"
            size="sm"
            onClick={openStore}
            className="lg:h-11 lg:px-5 lg:text-[15px]"
          >
            Get the app
          </Button>
        </div>
      </div>
    </header>
  );
}
