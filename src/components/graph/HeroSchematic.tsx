import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Abstract system schematic — 6 hand-authored nodes, no labels. It must read
 * as an architecture graph, not generic geometry, but stays unlabelled: the
 * labelled version of this idea lives in the Skills graph (S-013), and two
 * labelled graphs on one page would compete.
 */
const NODES = [
  { x: 40, y: 30 },
  { x: 140, y: 20 },
  { x: 220, y: 70 },
  { x: 60, y: 120 },
  { x: 160, y: 150 },
  { x: 230, y: 170 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [4, 5],
  [1, 4],
];

// The pulse traces one path end to end: node 0 → 1 → 4 → 5.
const PULSE_PATH = "M40 30 L140 20 L160 150 L230 170";

export function HeroSchematic() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <svg
      viewBox="0 0 260 200"
      role="img"
      aria-label="Abstract diagram of a layered system architecture"
      className="h-full w-full"
    >
      {EDGES.map(([from, to]) => {
        const a = NODES[from];
        const b = NODES[to];
        if (!a || !b) {
          return null;
        }
        return (
          <line
            key={`${from.toString()}-${to.toString()}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--color-line)"
            strokeWidth={1}
          />
        );
      })}

      {!reducedMotion && (
        <path
          d={PULSE_PATH}
          fill="none"
          stroke="var(--color-signal)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="40 400"
          className="animate-hero-pulse"
        />
      )}

      {NODES.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={4}
          fill="var(--color-base)"
          stroke="var(--color-muted)"
          strokeWidth={1.5}
        />
      ))}
    </svg>
  );
}
