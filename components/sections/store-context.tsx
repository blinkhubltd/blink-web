"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { StoreDialog } from "./store-dialog";

const StoreCtaContext = createContext<() => void>(() => {});

/** Lifts the store-download dialog's open state to the root so every CTA
 * across every section can trigger it — mirrors the original demo's
 * `Site()` component, which held `store` state and passed `onCta` down. */
export function StoreCtaProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openStore = useMemo(() => () => setOpen(true), []);

  return (
    <StoreCtaContext.Provider value={openStore}>
      {children}
      <StoreDialog open={open} onOpenChange={setOpen} />
    </StoreCtaContext.Provider>
  );
}

export function useStoreCta() {
  return useContext(StoreCtaContext);
}
