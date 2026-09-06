import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { HeroSchematic } from "@/components/graph/HeroSchematic";
import { profile } from "@/content/profile";
import { strings } from "@/content/strings";
import { formatLocalTime } from "@/lib/time";

const TIME_TICK_MS = 30_000;

// Path data copied verbatim from simple-icons' github.svg (MIT-style CC0
// brand asset). simple-icons carries no LinkedIn mark — LinkedIn had it
// removed from the library — so that one path is hand-authored instead.
const GITHUB_ICON_PATH =
  "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12";
const LINKEDIN_ICON_PATH =
  "M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.75h3.48V21H3.4V8.75Zm6.02 0h3.34v1.68h.05c.47-.87 1.6-1.79 3.3-1.79 3.53 0 4.18 2.32 4.18 5.34V21h-3.48v-5.4c0-1.29-.02-2.94-1.79-2.94-1.8 0-2.08 1.4-2.08 2.85V21H9.42V8.75Z";

export function Hero() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, TIME_TICK_MS);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const time = formatLocalTime(now, profile.timezoneId, profile.timezone);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="flex min-h-hero-min flex-col justify-center"
    >
      <div className="mx-auto grid w-full max-w-content flex-1 grid-cols-1 items-center gap-12 px-6 pt-16 pb-8 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <h1
            id="hero-heading"
            className="animate-hero-reveal text-display-xl tracking-display-xl font-serif text-ink"
          >
            {profile.fullName}
          </h1>
          <p
            className="animate-hero-reveal text-body-lg text-signal"
            style={{ animationDelay: "80ms" }}
          >
            {profile.professionalTitle}
          </p>
          <p
            className="animate-hero-reveal w-hero-statement max-w-full text-body text-muted"
            style={{ animationDelay: "160ms" }}
          >
            {profile.positioningStatement}
          </p>
          <div
            className="animate-hero-reveal flex flex-wrap items-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Button variant="primary" href="#projects">
              View work
            </Button>
            <Button
              variant="ghost"
              href={profile.resumePath}
              download={`${profile.fullName.replace(/\s+/g, "-")}-Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download resume
            </Button>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-[color,opacity] duration-interaction ease-out hover:text-signal active:opacity-70"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
                <path d={GITHUB_ICON_PATH} />
              </svg>
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-[color,opacity] duration-interaction ease-out hover:text-signal active:opacity-70"
              aria-label="LinkedIn"
            >
              {/* simple-icons has no LinkedIn mark (removed from their library by
                  LinkedIn's own request) and lucide-react carries no brand icons.
                  Hand-authored path, the one sanctioned exception. */}
              <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
                <path d={LINKEDIN_ICON_PATH} />
              </svg>
            </a>
          </div>
          <p
            className="animate-hero-reveal text-body-sm text-muted"
            style={{ animationDelay: "320ms" }}
          >
            Updated {profile.updatedMonth}
          </p>
        </div>

        <div
          className="animate-hero-reveal order-first h-48 lg:order-none lg:col-span-5 lg:h-64"
          style={{ animationDelay: "400ms" }}
        >
          <HeroSchematic />
        </div>
      </div>

      <div className="mx-auto w-full max-w-content border-t border-line px-6 py-4">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-data text-muted tracking-data">
          {profile.available ? (
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-signal motion-safe:animate-pulse"
              />
              {strings.availability}
            </span>
          ) : null}
          <span>{profile.location}</span>
          <span>{time}</span>
        </div>
      </div>
    </section>
  );
}
