import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Panel } from "@/components/ui/Panel";
import { Metric } from "@/components/ui/Metric";
import { CopyLink } from "@/components/ui/CopyLink";
import { Disclosure } from "@/components/ui/Disclosure";

const colors = [
  { name: "base", var: "--color-base" },
  { name: "surface", var: "--color-surface" },
  { name: "line", var: "--color-line" },
  { name: "ink", var: "--color-ink" },
  { name: "muted", var: "--color-muted" },
  { name: "signal", var: "--color-signal" },
];

const typeSteps = [
  { name: "display-xl", className: "text-display-xl tracking-display-xl font-serif" },
  { name: "display-lg", className: "text-display-lg tracking-display-lg font-serif" },
  { name: "display-md", className: "text-display-md font-serif" },
  { name: "body-lg", className: "text-body-lg font-sans" },
  { name: "body", className: "text-body font-sans" },
  { name: "body-sm", className: "text-body-sm font-sans" },
  { name: "data", className: "text-data font-mono tracking-data" },
  { name: "data-sm", className: "text-data-sm font-mono tracking-data-sm" },
];

interface StyleSectionProps {
  title: string;
  children: ReactNode;
}

function StyleSection({ title, children }: StyleSectionProps) {
  return (
    <section className="flex flex-col gap-6 border-t border-line py-10">
      <h2 className="text-display-md font-serif text-ink">{title}</h2>
      {children}
    </section>
  );
}

export function Styleguide() {
  return (
    <main className="mx-auto flex max-w-content flex-col gap-4 px-6 py-16">
      <h1 className="text-display-lg font-serif tracking-display-lg text-ink">
        Styleguide
      </h1>
      <p className="text-body text-muted">
        Dev-only view. Every token, every primitive, every state. Absent from the
        production bundle.
      </p>

      <StyleSection title="Colour">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {colors.map((c) => (
            <div key={c.name} className="flex flex-col gap-2">
              <div
                className="h-16 rounded-panel border border-line"
                style={{ backgroundColor: `var(${c.var})` }}
              />
              <span className="text-data-sm font-mono text-muted">{c.name}</span>
            </div>
          ))}
        </div>
      </StyleSection>

      <StyleSection title="Type">
        <div className="flex flex-col gap-4">
          {typeSteps.map((step) => (
            <div key={step.name} className="flex items-baseline gap-4">
              <span className="w-28 shrink-0 text-data-sm font-mono text-muted">
                {step.name}
              </span>
              <span className={step.className}>The quick brown fox</span>
            </div>
          ))}
        </div>
      </StyleSection>

      <StyleSection title="Button">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" disabled>
            Primary disabled
          </Button>
          <Button variant="ghost" disabled>
            Ghost disabled
          </Button>
        </div>
        <p className="text-body-sm text-muted">
          Tab to each button above to inspect the focus ring.
        </p>
      </StyleSection>

      <StyleSection title="Chip">
        <div className="flex flex-wrap gap-2">
          <Chip label="TypeScript" />
          <Chip label="React" />
        </div>
      </StyleSection>

      <StyleSection title="Panel">
        <Panel>
          <div className="p-6 text-body text-ink">Panel content sits on surface.</div>
        </Panel>
      </StyleSection>

      <StyleSection title="Metric">
        <div className="flex flex-wrap gap-12">
          <Metric
            figure="340 ms"
            label="p95 retrieval"
            condition="Local benchmark, 500 documents, M2 Air"
          />
          <Metric
            figure="12"
            label="chunks embedded"
            condition="Build-time embedding pass, src/content"
          />
        </div>
      </StyleSection>

      <StyleSection title="CopyLink">
        <CopyLink text="akash.more@openspaceservices.com">Copy email</CopyLink>
      </StyleSection>

      <StyleSection title="Disclosure">
        <Disclosure label="What breaks at scale">
          Flat in-memory similarity search becomes the bottleneck past a few thousand
          chunks; would need a managed vector store or an IVF index to pass it.
        </Disclosure>
      </StyleSection>
    </main>
  );
}
