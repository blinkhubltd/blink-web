"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/blink/reveal";
import { Icon } from "@/components/blink/icon";
import { SectionHead } from "./section-head";

const FAQS: [string, string][] = [
  ["Is it really 10 minutes?", "That is the promise and the average is nine. Our hubs sit inside the neighbourhoods they serve, so a rider is never more than a few minutes from your gate."],
  ["Where does Blink deliver?", "Nairobi today, hub by hub. Enter your address in the app and it will tell you instantly whether you are inside a delivery zone. If you're not, tell us where you are and we'll count the votes."],
  ["Can I order on this website?", "No — Blink runs entirely in the app, which is how we keep the timing tight. The website is for browsing, careers and support."],
  ["How do I pay?", "M-Pesa or card in the app, or pay the rider on delivery. VAT is shown as a separate line at checkout."],
  ["What if something is out of stock?", "The picker will message you with a substitute before packing it, and you can decline. You are never charged for something you did not get."],
  ["Is there a delivery fee or a minimum order?", "There is no minimum order. Delivery is a flat fee per order, shown before you pay — never a percentage of your basket."],
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="border-t border-[var(--border-subtle)] bg-white py-[120px]">
      <div className="blink-container grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHead eyebrow="Questions" title="Good to know." />
        <div className="flex flex-col">
          {FAQS.map(([q, a], i) => (
            <Reveal key={q} delay={i * 50} className="border-t border-[var(--border-subtle)]">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 border-0 bg-transparent py-5 text-left"
              >
                <span className="text-[18px] font-semibold text-[var(--text-strong)]">{q}</span>
                <span
                  className={cn(
                    "flex size-[34px] flex-none items-center justify-center rounded-full transition-transform duration-150 ease-out",
                    open === i ? "rotate-180 bg-blink-400" : "bg-ink-100"
                  )}
                >
                  <Icon name={open === i ? "minus" : "plus"} size={17} />
                </span>
              </button>
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-240 ease-out"
                style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
              >
                <p
                  className="min-h-0 max-w-[62ch] text-[15px] text-[var(--text-muted)] transition-[padding] duration-240 ease-out overflow-hidden"
                  style={{ paddingBottom: open === i ? 22 : 0 }}
                >
                  {a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
