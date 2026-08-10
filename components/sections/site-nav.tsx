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
  { label: "Pharmacy", href: "/#pharmacy" },
  { label: "How it works", href: "/#how" },
  { label: "About", href: "/#about" },
  { label: "Where we deliver", href: "/#launch" },
  { label: "Careers", href: "/#careers" },
  { label: "Help", href: "/#faq" },
];

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="group relative border-0 pb-[3px] text-[15px] font-medium whitespace-nowrap text-[var(--text-body)] transition-colors hover:text-ink-950"
    >
      {label}
      <i className="absolute bottom-0 left-0 h-0.5 w-0 rounded bg-blink-400 transition-[width] duration-160 ease-out group-hover:w-full" />
    </Link>
  );
}

/** White sticky top nav. Gains a hairline + shadow once you scroll. */
export function SiteNav() {
  const [stuck, setStuck] = useState(false);
  const openStore = useStoreCta();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white transition-shadow duration-160 ease-out",
        stuck ? "border-ink-200 shadow-sm" : "border-transparent"
      )}
    >
      <div
        className="blink-container flex items-center gap-5 lg:gap-8"
        style={{ height: "var(--web-nav-h)" }}
      >
        <Link href="/" className="flex flex-none border-0">
          <Logo size={28} className="lg:h-[30px]" />
        </Link>
        <nav className="hidden min-w-0 flex-1 items-center gap-5 overflow-hidden lg:flex lg:gap-6">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.label} {...l} />
          ))}
        </nav>
        <div className="ml-auto flex flex-none items-center gap-4">
          <DeliveryBadge size="sm" className="hidden lg:inline-flex" />
          <Button variant="primary" icon="download" size="sm" onClick={openStore} className="lg:h-11 lg:px-5 lg:text-[15px]">
            Get the app
          </Button>
        </div>
      </div>
    </header>
  );
}
