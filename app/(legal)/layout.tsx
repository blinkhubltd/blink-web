"use client";

import { SiteNav } from "@/components/sections/site-nav";
import { SiteFooter } from "@/components/sections/site-footer";
import { StoreCtaProvider } from "@/components/sections/store-context";

/** Chrome for the standalone legal pages. `SiteNav` needs the store-CTA
 * context that `SiteShell` provides on the homepage, so the provider is
 * mounted here too. Page content stays server-rendered — it arrives as
 * `children` and never crosses this client boundary. */
export default function LegalLayout({
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
