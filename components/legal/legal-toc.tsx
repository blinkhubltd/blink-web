"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/blink/icon";
import { sectionId, type Section } from "@/lib/legal/types";

/** Highlights whichever section is currently under the sticky nav. */
function useActiveSection(sections: Section[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = sections
      .map((s) => document.getElementById(sectionId(s.n)))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        // Follow the topmost section still in view; if the reader is between
        // sections, keep the last one they passed.
        const first = els.find((el) => visible.has(el.id));
        if (first) setActive(first.id);
      },
      // Top edge sits just under the sticky nav, bottom edge well up the
      // viewport, so the active entry tracks what you are actually reading.
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  return active;
}

function TocList({
  sections,
  active,
  onNavigate,
}: {
  sections: Section[];
  active: string | null;
  onNavigate?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <nav aria-label="Table of contents" className="flex flex-col">
      {sections.map((s) => {
        const id = sectionId(s.n);
        return (
          <a
            key={s.n}
            href={`#${id}`}
            className="legal-toc-link"
            data-active={active === id}
            onClick={onNavigate}
          >
            <span>{s.n}.</span>
            <span>{s.title}</span>
          </a>
        );
      })}
    </nav>
  );
}

export function LegalToc({ sections }: { sections: Section[] }) {
  const active = useActiveSection(sections);

  return (
    <>
      {/* Mobile: a disclosure above the document. */}
      <details className="legal-no-print mb-10 rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-white lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[13px] font-bold tracking-[.08em] text-ink-600 uppercase">
          Contents
          <Icon name="chevron-down" size={16} />
        </summary>
        <div className="border-t border-[var(--border-subtle)] px-3 py-3">
          <TocList
            sections={sections}
            active={active}
            onNavigate={(e) => {
              // Collapse after jumping, so the reader lands on the section.
              e.currentTarget.closest("details")?.removeAttribute("open");
            }}
          />
        </div>
      </details>

      {/* Desktop: a sticky sidebar. */}
      <aside
        className="legal-no-print sticky hidden self-start lg:block"
        style={{ top: "calc(var(--web-nav-h) + 32px)" }}
      >
        <div className="text-[11px] font-bold tracking-[.08em] text-ink-500 uppercase">
          Contents
        </div>
        <div
          className="mt-3 overflow-y-auto pr-2"
          style={{ maxHeight: "calc(100vh - var(--web-nav-h) - 160px)" }}
        >
          <TocList sections={sections} active={active} />
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="mt-6 flex items-center gap-2 border-0 text-[13px] font-medium text-ink-600 transition-colors hover:text-ink-950"
        >
          <Icon name="printer" size={15} />
          Print or save as PDF
        </button>
      </aside>
    </>
  );
}
