import { useEffect, useRef, useState } from "react";
import { SkillBubble } from "@/components/ui/SkillBubble";
import { skillCategories } from "@/content/skills";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function SkillBubbles() {
  const reducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, []);

  const floating = !reducedMotion && isVisible;
  let seed = 0;

  return (
    <div ref={containerRef} className="flex flex-col gap-10">
      {skillCategories.map((category) => (
        <div key={category.name} className="flex flex-col gap-4 border-t border-line pt-8 first:border-t-0 first:pt-0">
          <p className="text-display-md font-serif text-ink">{category.name}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-8">
            {category.skills.map((skill) => {
              seed += 1;
              return <SkillBubble key={skill.label} {...skill} seed={seed} floating={floating} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
