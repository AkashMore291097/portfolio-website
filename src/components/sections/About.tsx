import { Section } from "@/components/layout/Section";
import { profile } from "@/content/profile";

interface AboutProps {
  title: string;
}

export function About({ title }: AboutProps) {
  return (
    <Section id="about" title={title}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <p className="w-about-prose max-w-full text-body-lg text-ink md:col-span-5">
          {profile.aboutParagraph}
        </p>
        <dl className="divide-y divide-line md:col-span-5 md:col-start-7">
          {profile.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 py-4 first:pt-0">
              <dd className="text-data text-ink">{fact.value}</dd>
              <dt className="text-body-sm text-muted">{fact.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
