interface MetricProps {
  figure: string;
  label: string;
  /**
   * How this figure was measured. Required — never optional. A metric with no
   * condition line is a content defect, not a display choice.
   * See docs/04-content-rules.md.
   */
  condition: string;
}

export function Metric({ figure, label, condition }: MetricProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-data font-mono text-signal tracking-data">{figure}</span>
      <span className="text-body-sm text-muted">{label}</span>
      <span className="text-data-sm font-mono text-muted tracking-data-sm">
        {condition}
      </span>
    </div>
  );
}
