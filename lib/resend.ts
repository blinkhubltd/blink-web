import { Resend } from "resend";

let client: Resend | null = null;

/** Lazily instantiated so a missing RESEND_API_KEY doesn't crash the build —
 * routes check `isResendConfigured()` and fail loudly instead. */
export function getResend() {
  if (!process.env.RESEND_API_KEY) return null;
  if (!client) client = new Resend(process.env.RESEND_API_KEY);
  return client;
}

export function isResendConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

export const RESEND_FROM =
  process.env.RESEND_FROM_EMAIL ?? "Blink <onboarding@resend.dev>";

export const DESTINATION_EMAIL = "blinkhubltd@gmail.com";
