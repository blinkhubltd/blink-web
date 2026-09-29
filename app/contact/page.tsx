import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { Icon } from "@/components/blink/icon";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Questions, feedback or a delivery issue? Get in touch with the Blink team.",
  alternates: { canonical: "/contact" },
};

const EMAIL = "blinkhubltd@gmail.com";

export default function ContactPage() {
  return (
    <section className="bg-[var(--bg-page)] py-[120px]">
      <div className="blink-container grid items-start gap-10 lg:grid-cols-2">
        <div>
          <span className="blink-eyebrow">Contact us</span>
          <h1 className="blink-display-3 mt-3 max-w-[20ch]">
            We&apos;re here to help.
          </h1>
          <p className="mt-3.5 max-w-[42ch] text-lg text-[var(--text-muted)]">
            Questions about an order, feedback, or partnership ideas — send us
            a message and the Blink team will get back to you.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 border-0 text-[15px]"
            >
              <span className="flex size-[40px] flex-none items-center justify-center rounded-full bg-blink-400 text-ink-950">
                <Icon name="mail" size={18} />
              </span>
              {EMAIL}
            </a>
            <div className="flex items-center gap-3 text-[15px]">
              <span className="flex size-[40px] flex-none items-center justify-center rounded-full bg-blink-400 text-ink-950">
                <Icon name="map-pin" size={18} />
              </span>
              Nairobi, Kenya
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
