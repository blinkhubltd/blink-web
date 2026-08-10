import Link from "next/link";
import { Icon } from "@/components/blink/icon";
import { COMPANY } from "@/lib/legal/company";
import { sectionId, type Block, type LegalDoc } from "@/lib/legal/types";
import { InlineText } from "./inline";
import { LegalToc } from "./legal-toc";

const ALL_DOCS: { slug: string; title: string }[] = [
  { slug: "privacy-policy", title: "Privacy Policy" },
  { slug: "terms", title: "Terms & Conditions" },
  { slug: "eula", title: "End User Licence Agreement" },
];

const LIST_CLASS = {
  bullet: "legal-list-bullet",
  roman: "legal-list-roman",
  alpha: "legal-list-alpha",
  decimal: "legal-list-decimal",
} as const;

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return (
        <p className="legal-block">
          <InlineText value={block.text} />
        </p>
      );

    case "clause":
      return (
        <div className="legal-block legal-clause">
          <span className="legal-num">{block.n}</span>
          <p>
            <InlineText value={block.text} />
          </p>
        </div>
      );

    case "sub":
      return <h3 className="legal-h3">{block.title}</h3>;

    case "list":
      return (
        <ul
          className={`legal-block legal-list ${LIST_CLASS[block.marker ?? "bullet"]}`}
        >
          {block.items.map((item, i) => (
            <li key={i}>
              <InlineText value={item} />
            </li>
          ))}
        </ul>
      );

    case "defs":
      return (
        <dl className="legal-block legal-defs">
          {block.items.map((item, i) => (
            <div key={i}>
              <dt>{item.term}</dt>
              <dd>
                <InlineText value={item.text} />
              </dd>
            </div>
          ))}
        </dl>
      );

    case "table":
      return (
        <div className="legal-block legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "callout":
      return (
        <div className="legal-block legal-callout">
          {block.title ? <strong>{block.title}</strong> : null}
          <InlineText value={block.text} />
        </div>
      );
  }
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(10,14,22,.14)] bg-white/70 px-3 py-1 text-[12px] font-semibold text-ink-800">
      {children}
    </span>
  );
}

/** Registered-entity card — the amber info box from the app, restyled. */
function CompanyCard({ withOdpc }: { withOdpc?: boolean }) {
  return (
    <div className="mb-10 flex gap-3 rounded-[var(--radius-card)] border border-[var(--border-brand)] bg-[var(--surface-accent)] p-5">
      <Icon
        name="building-2"
        size={18}
        className="mt-0.5 flex-none text-ink-950"
      />
      <div className="text-[14px] leading-6 text-ink-800">
        <div className="font-bold text-ink-950">{COMPANY.name}</div>
        {COMPANY.addressLines.map((line) => (
          <div key={line}>{line}</div>
        ))}
        <div>Company Registration No: {COMPANY.registrationNo}</div>
        {withOdpc ? (
          <div>ODPC Data Controller Registration No: {COMPANY.odpcNo}</div>
        ) : null}
      </div>
    </div>
  );
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  const others = ALL_DOCS.filter((d) => d.slug !== doc.slug);

  return (
    <>
      {/* Brand band */}
      <section className="blink-brand border-b border-[rgba(10,14,22,.12)] bg-blink-400 pt-14 pb-16">
        <div className="blink-container">
          <div className="blink-eyebrow">Legal</div>
          <h1 className="blink-display-3 mt-3 max-w-[20ch]">{doc.title}</h1>
          <p className="mt-4 max-w-[62ch] text-[17px] leading-7 text-ink-900">
            {doc.summary}
          </p>
          <div className="legal-no-print mt-6 flex flex-wrap gap-2">
            <Chip>Version {doc.version}</Chip>
            <Chip>Governed by the laws of Kenya</Chip>
            <Chip>{doc.sections.length} sections</Chip>
          </div>
        </div>
      </section>

      {/* Document */}
      <div className="blink-container grid gap-10 py-16 lg:grid-cols-[248px_minmax(0,1fr)] lg:gap-16 lg:py-20">
        <LegalToc sections={doc.sections} />

        <article className="legal-doc min-w-0">
          <CompanyCard withOdpc={doc.slug === "privacy-policy"} />

          {doc.intro?.length ? (
            <div className="mb-12">
              {doc.intro.map((block, i) => (
                <BlockView key={i} block={block} />
              ))}
            </div>
          ) : null}

          {doc.sections.map((section) => {
            const id = sectionId(section.n);
            return (
              <section key={section.n} id={id} className="legal-section">
                <h2 className="legal-h2">
                  <span className="legal-num">{section.n}</span>
                  <span>{section.title}</span>
                  <a
                    href={`#${id}`}
                    className="legal-anchor legal-no-print"
                    aria-label={`Link to section ${section.n}`}
                  >
                    #
                  </a>
                </h2>
                {section.blocks.map((block, i) => (
                  <BlockView key={i} block={block} />
                ))}
              </section>
            );
          })}

          <div className="legal-no-print mt-14 border-t border-[var(--border-subtle)] pt-8">
            <div className="text-[11px] font-bold tracking-[.08em] text-ink-500 uppercase">
              Related documents
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              {others.map((d) => (
                <Link
                  key={d.slug}
                  href={`/${d.slug}`}
                  className="legal-plain inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-4 py-2 text-[14px] font-medium text-ink-800 no-underline transition-colors hover:border-ink-950"
                >
                  {d.title}
                  <Icon name="arrow-right" size={15} />
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
