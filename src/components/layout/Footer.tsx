import { profile } from "@/content/profile";

interface FooterProps {
  id: string;
  title: string;
}

export function Footer({ id, title }: FooterProps) {
  const headingId = `${id}-heading`;

  return (
    <footer id={id} aria-labelledby={headingId} className="border-t border-line">
      <h2 id={headingId} className="sr-only">
        {title}
      </h2>
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 px-6 py-8">
        <p className="text-body-sm text-muted">© {new Date().getFullYear()} {profile.fullName}</p>

        <div className="flex items-center gap-6 text-body-sm text-muted">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-[color,opacity] duration-interaction ease-out hover:text-signal active:opacity-70"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-[color,opacity] duration-interaction ease-out hover:text-signal active:opacity-70"
          >
            LinkedIn
          </a>
          {/* mailto: invokes the mail client, not a browser tab — target="_blank"
              would only leave a stray blank tab behind, so it's intentionally omitted
              here (same reasoning applies to CopyLink in Contact.tsx). */}
          <a href={`mailto:${profile.email}`} className="transition-[color,opacity] duration-interaction ease-out hover:text-signal active:opacity-70">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
