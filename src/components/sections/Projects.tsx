import { Section } from "@/components/layout/Section";
import { Chip } from "@/components/ui/Chip";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { strings, projectOfLabel } from "@/content/strings";
import { techIcons } from "@/content/techIcons";

interface ProjectsProps {
  title: string;
}

export function Projects({ title }: ProjectsProps) {
  return (
    <Section id="projects" title={title}>
      <div className="flex flex-col">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col gap-6 border-t border-line py-12 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-col gap-3">
              <p className="text-data-sm font-mono text-muted tracking-data-sm">
                {projectOfLabel(project.order, projects.length)}
              </p>
              <p className="text-display-md font-serif text-ink">{project.name}</p>
              <p className="text-body text-ink">{project.problem}</p>
              <p className="text-body text-muted">{project.solution}</p>
            </div>

            <ul className="flex flex-col gap-2">
              {project.features.map((feature) => (
                <li key={feature} className="text-body-sm text-ink">
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => {
                const iconPath = techIcons[tech];
                return (
                  <Chip
                    key={tech}
                    label={tech}
                    icon={
                      iconPath ? (
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d={iconPath} />
                        </svg>
                      ) : undefined
                    }
                  />
                );
              })}
            </div>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm text-ink underline decoration-line underline-offset-4 transition-[color,opacity] duration-interaction ease-out hover:text-signal hover:decoration-signal active:opacity-70"
            >
              {strings.viewRepositoryLabel}
            </a>
          </article>
        ))}
      </div>

      <a
        href={profile.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-body-sm text-ink underline decoration-line underline-offset-4 transition-[color,opacity] duration-interaction ease-out hover:text-signal hover:decoration-signal active:opacity-70"
      >
        {strings.githubProfileLabel}
      </a>
    </Section>
  );
}
