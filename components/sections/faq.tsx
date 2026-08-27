"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/blink/reveal";
import { Icon } from "@/components/blink/icon";
import { SectionHead } from "./section-head";

const FAQS: [string, string][] = [
  ["Is Blink really a 10-minute delivery service?", "Blink is designed for ultrafast delivery from neighbourhood hubs located close to the customers they serve. Our target is around 10 minutes, although actual delivery times can vary depending on your location, order size, demand, traffic and other conditions."],
  ["Where does Blink deliver?", "Blink currently serves selected areas of Nairobi. Enter your delivery address in the Blink app to instantly check whether you're within a Blink delivery zone."],
  ["Can I order from the website?", "Not yet. Orders are placed through the Blink app, where you can browse products, check live availability, pay and track your delivery."],
  ["How can I pay?", "Available payment methods are shown at checkout and may include M-PESA and card payments."],
  ["What if something I ordered is unavailable?", "If an item you ordered is unavailable, you can choose to receive a refund for the unavailable item or select an available alternative."],
  ["Is there a minimum order?", "Any minimum order requirement and delivery charge will be clearly displayed before you confirm your order."],
  ["How do I contact Blink?", "Visit the Help Centre or use the support options available through the Blink app."],
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="border-t border-[var(--border-subtle)] bg-white py-[120px]">
      <div className="blink-container grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHead eyebrow="Help centre" title="Questions? We've got you." />
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
