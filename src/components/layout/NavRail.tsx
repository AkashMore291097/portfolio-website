import { sections } from "@/content/sections";
import { strings } from "@/content/strings";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = sections.map((s) => s.id);

export function NavRail() {
  const activeId = useActiveSection(sectionIds);

  return (
    <nav
      aria-label={strings.sectionNavigationLabel}
      className="fixed left-0 top-1/2 z-10 hidden w-16 -translate-y-1/2 flex-col items-center gap-4 lg:flex"
    >
      {sections.map((section) => {
        const isActive = section.id === activeId;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={isActive ? "true" : undefined}
            className="group flex flex-col items-center gap-1.5 py-1"
          >
            <span
              className={`text-data font-mono tracking-data transition-colors duration-interaction ease-out ${
                isActive ? "text-ink" : "text-muted"
              }`}
            >
              {section.number}
            </span>
            <span
              aria-hidden="true"
              className={`h-4 w-px transition-colors duration-interaction ease-out ${
                isActive ? "bg-signal" : "bg-line"
              }`}
            />
            <span className="sr-only">{section.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
