import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-doc";
import { PRIVACY_POLICY } from "@/content/legal/privacy-policy";

export const metadata: Metadata = {
  title: PRIVACY_POLICY.title,
  description: PRIVACY_POLICY.description,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <LegalDocument doc={PRIVACY_POLICY} />;
}
