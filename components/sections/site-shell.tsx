"use client";

import { StoreCtaProvider } from "./store-context";
import { SiteNav } from "./site-nav";
import { WebHero } from "./web-hero";
import { ShelfTicker } from "./shelf-ticker";
import { Categories } from "./categories";
import { HowItWorks } from "./how-it-works";
import { AppFeatures } from "./app-features";
import { Popular } from "./popular";
import { Pharmacy } from "./pharmacy";
import { Voices } from "./voices";
import { About } from "./about";
import { LaunchRequest } from "./launch-request";
import { Careers } from "./careers";
import { Faq } from "./faq";
import { CtaBand } from "./cta-band";
import { SiteFooter } from "./site-footer";

/** Composes the full one-page site, matching the order of the original
 * design system's `Site()` component in ui_kits/website/index.html. */
export function SiteShell() {
  return (
    <StoreCtaProvider>
      <SiteNav />
      <WebHero />
      <ShelfTicker />
      <Categories />
      <HowItWorks />
      <AppFeatures />
      <Popular />
      <Pharmacy />
      <Voices />
      <About />
      <LaunchRequest />
      <Careers />
      <Faq />
      <CtaBand />
      <SiteFooter />
    </StoreCtaProvider>
  );
}
