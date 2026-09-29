"use client";

import { SiteNav } from "@/components/sections/site-nav";
import { SiteFooter } from "@/components/sections/site-footer";
import { StoreCtaProvider } from "@/components/sections/store-context";

/** Same chrome as the legal pages: `SiteNav` needs the store-CTA context. */
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreCtaProvider>
      <SiteNav />
      <main className="flex-1 bg-white">{children}</main>
      <SiteFooter />
    </StoreCtaProvider>
  );
}
