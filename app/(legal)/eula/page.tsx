import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-doc";
import { EULA } from "@/content/legal/eula";

export const metadata: Metadata = {
  title: EULA.title,
  description: EULA.description,
  alternates: { canonical: "/eula" },
};

export default function EulaPage() {
  return <LegalDocument doc={EULA} />;
}
