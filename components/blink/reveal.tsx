"use client";

import { Children, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

const OFFSETS = {
  up: (d: number) => `translate3d(0,${d}px,0)`,
  down: (d: number) => `translate3d(0,${-d}px,0)`,
  left: (d: number) => `translate3d(${d}px,0,0)`,
  right: (d: number) => `translate3d(${-d}px,0,0)`,
};

/** Fades and lifts its children in once, the first time they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  distance = 14,
  direction = "up",
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  direction?: keyof typeof OFFSETS;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount check, not a derived-state loop
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    // Safety net: a backgrounded/hidden tab can throttle IntersectionObserver
    // indefinitely (it never fires while `document.hidden`), which would
    // otherwise leave content permanently invisible. Force it in once the
    // page has clearly had time to render.
    const fallback = setTimeout(() => setShown(true), 1500);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : OFFSETS[direction](distance),
        transition: `opacity 520ms var(--ease-out) ${delay}ms, transform 520ms cubic-bezier(.16,1,.3,1) ${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Staggers Reveal over a list of children. */
export function RevealGroup({
  children,
  step = 70,
  delay = 0,
  distance = 14,
  className,
  style,
}: {
  children: React.ReactNode;
  step?: number;
  delay?: number;
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={cn(className)} style={style}>
      {Children.map(children, (child, i) => (
        <Reveal delay={delay + i * step} distance={distance}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
