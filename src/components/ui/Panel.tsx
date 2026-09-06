import type { HTMLAttributes, ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "className">;

export function Panel({ children, ...rest }: PanelProps) {
  return (
    <div className="rounded-panel border border-line bg-surface" {...rest}>
      {children}
    </div>
  );
}
