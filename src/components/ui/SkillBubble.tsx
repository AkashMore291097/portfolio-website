import { skillIcons } from "@/content/skillIcons";
import type { Skill } from "@/content/types";

interface SkillBubbleProps extends Skill {
  /** Deterministic per-bubble variation so bubbles don't drift in lockstep. */
  seed: number;
  /** When false, the bubble renders in its rest position with no animation —
   * used for prefers-reduced-motion and while the section is off-screen. */
  floating: boolean;
}

const BUBBLE_SIZE = 64;

/**
 * A short in-circle mark for skills with no logo — initials for a multi-word
 * term ("Vector Databases" -> "VDB"), or the term itself if it's already
 * short enough to fit ("RAG", "MCP", "AWS"). Every bubble stays the same
 * fixed diameter regardless of icon vs. text content.
 */
function initials(label: string): string {
  const words = label.split(/\s+/);
  if (words.length === 1 && label.length <= 4) {
    return label.toUpperCase();
  }
  return words
    .map((word) => word[0] ?? "")
    .join("")
    .toUpperCase()
    .slice(0, 4);
}

export function SkillBubble({ label, icon, seed, floating }: SkillBubbleProps) {
  const skillIcon = icon ? skillIcons[icon] : undefined;
  const duration = 5 + (seed % 5); // 5–9s, varies per bubble
  const delay = -(seed % 7); // negative delay starts mid-cycle, staggering bubbles
  const amplitude = 6 + (seed % 4); // 6–9px of drift

  return (
    <div
      className="flex flex-col items-center gap-2"
      style={
        floating
          ? ({
              animation: `skill-float ${duration.toString()}s ease-in-out ${delay.toString()}s infinite`,
              "--skill-float-amplitude": `${amplitude.toString()}px`,
            } as React.CSSProperties)
          : undefined
      }
    >
      <div
        className="flex shrink-0 items-center justify-center rounded-full border border-line bg-surface"
        style={{ width: BUBBLE_SIZE, height: BUBBLE_SIZE }}
      >
        {skillIcon ? (
          <svg viewBox="0 0 24 24" width={28} height={28} fill={skillIcon.color} aria-hidden="true">
            <path d={skillIcon.path} />
          </svg>
        ) : (
          // No logo mark exists for this term (a concept like RAG/MCP, or a
          // brand simple-icons doesn't carry, e.g. AWS) — every bubble stays
          // the same circle size, so this shows a short initialism instead of
          // the full label, which is given in full beneath the circle.
          <span className="text-data-sm font-mono text-ink/70 tracking-data-sm">{initials(label)}</span>
        )}
      </div>
      <span className="max-w-20 text-center text-data-sm text-muted">{label}</span>
    </div>
  );
}
