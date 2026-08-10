/**
 * Content model for Blink's legal documents.
 *
 * The source of truth for the wording is the mobile app (`blink-ecommerce`),
 * where each document is hand-written React Native JSX. Here the same prose is
 * stored as data so a single renderer owns the typography and the table of
 * contents can be derived rather than maintained by hand.
 */

/** A bold run inside a paragraph — the app's `<Text className="font-semibold">`. */
export type Bold = { b: string };
/** An inline link. `href` carries the scheme (`mailto:`, `tel:`, `https:`). */
export type Link = { a: string; href: string };

/** Prose with optional bold/link runs. A bare string is the common case. */
export type Inline = string | (string | Bold | Link)[];

export type ListMarker = "bullet" | "roman" | "alpha" | "decimal";

export type Block =
  /** A plain paragraph. */
  | { t: "p"; text: Inline }
  /** A numbered clause, e.g. `1.1`, rendered with a hanging indent. */
  | { t: "clause"; n: string; text: Inline }
  /** A titled sub-heading within a section. */
  | { t: "sub"; title: string }
  /** A run of list items. Consecutive items in the source collapse into one. */
  | { t: "list"; marker?: ListMarker; items: Inline[] }
  /** A definition-style list — term plus explanation. */
  | { t: "defs"; items: { term: string; text: Inline }[] }
  /** A data table. Scrolls horizontally on narrow viewports. */
  | { t: "table"; head: string[]; rows: string[][] }
  /** A highlighted aside, matching the amber boxes in the app. */
  | { t: "callout"; title?: string; text: Inline };

export type Section = {
  /** Section number as displayed, e.g. `"14"`. Also forms the anchor id. */
  n: string;
  title: string;
  blocks: Block[];
};

export type LegalDoc = {
  /** Route segment, e.g. `"privacy-policy"`. */
  slug: string;
  /** Short name for nav, breadcrumbs and `<title>`. */
  title: string;
  /** Formal name as printed at the head of the document. */
  legalTitle: string;
  /** Document version, mirroring `platform_settings` in the app. */
  version: string;
  /** Meta description. */
  description: string;
  /** One-line summary shown under the title. */
  summary: string;
  /** Preamble rendered before section 1. */
  intro?: Block[];
  sections: Section[];
};

/** Anchor id for a section — derived so it survives title rewording. */
export function sectionId(n: string) {
  return `section-${n}`;
}
