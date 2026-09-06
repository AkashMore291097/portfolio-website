import { Button } from "@/components/ui/Button";
import { CopyLink } from "@/components/ui/CopyLink";
import { profile } from "@/content/profile";

interface ContactProps {
  title: string;
}

export function Contact({ title }: ContactProps) {
  const headingId = "contact-heading";

  return (
    <section id="contact" aria-labelledby={headingId} className="py-section-mobile lg:py-section">
      <div className="mx-auto flex max-w-content flex-col items-center gap-8 px-6 text-center">
        <h2 id={headingId} className="sr-only">
          {title}
        </h2>
        <p className="max-w-2xl text-display-md font-serif text-ink">{profile.contactStatement}</p>
        <CopyLink href={`mailto:${profile.email}`} copyValue={profile.email}>
          {profile.email}
        </CopyLink>
        <Button
          variant="primary"
          href={profile.resumePath}
          download={`${profile.fullName.replace(/\s+/g, "-")}-Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download resume
        </Button>
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
        </div>
      </div>
    </section>
  );
}
