import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children?: ReactNode;
  /**
   * Hero is the page's one h1 (its name, styled display-xl per
   * docs/03-sections.md — the real name lands in S-005). Every other section
   * is an h2. Defaults to h2.
   */
  headingLevel?: "h1" | "h2";
}

export function Section({ id, title, children, headingLevel = "h2" }: SectionProps) {
  const headingId = `${id}-heading`;
  const Heading = headingLevel;
  const headingSize = headingLevel === "h1" ? "text-display-xl tracking-display-xl" : "text-display-lg tracking-display-lg";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="py-section-mobile lg:py-section"
    >
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6">
        <div className="flex flex-col gap-4">
          <Heading id={headingId} className={`${headingSize} font-serif text-ink`}>
            {title}
          </Heading>
          <hr className="border-t border-line" />
        </div>
        {children}
      </div>
    </section>
  );
}
