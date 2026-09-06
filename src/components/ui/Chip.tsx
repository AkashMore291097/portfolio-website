import type { ReactNode } from "react";

interface ChipProps {
  label: string;
  /** Optional 14px monochrome logo (e.g. a recoloured simple-icons SVG). */
  icon?: ReactNode;
}

export function Chip({ label, icon }: ChipProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-chip border border-line px-2.5 py-1 text-data text-muted tracking-data">
      {icon ? (
        <span className="flex size-3.5 shrink-0 items-center justify-center text-muted">
          {icon}
        </span>
      ) : null}
      {label}
    </span>
  );
}
