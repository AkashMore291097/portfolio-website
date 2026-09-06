import { useEffect, useState } from "react";

/**
 * Tracks which section id is nearest the viewport midline, using an
 * IntersectionObserver with a rootMargin that collapses the viewport to a
 * thin band at 45% from top and bottom — so the active state changes at the
 * midline, not when a section's top edge crosses into view.
 */
export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeId;
}
