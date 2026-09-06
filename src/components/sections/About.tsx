import { Section } from "@/components/layout/Section";
import { profile } from "@/content/profile";

interface AboutProps {
  title: string;
}

export function About({ title }: AboutProps) {
  return (
    <Section id="about" title={title}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <figure className="flex w-full justify-start md:col-span-3">
          {profile.photoPath ? (
            <img
              src={profile.photoPath}
              alt={profile.fullName}
              width={256}
              height={256}
              className="aspect-square w-full max-w-64 rounded-full object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="aspect-square w-full max-w-64 rounded-full border border-line bg-surface"
            />
          )}
        </figure>
        <div className="flex flex-col gap-8 md:col-span-8 md:col-start-5">
          <p className="w-about-prose max-w-full text-body-lg text-ink">
            {profile.aboutParagraph}
          </p>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {profile.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1">
                <dd className="text-data text-ink">{fact.value}</dd>
                <dt className="text-body-sm text-muted">{fact.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
