import { Section } from "@/components/layout/Section";
import { SkillBubbles } from "@/components/sections/SkillBubbles";

interface SkillsProps {
  title: string;
}

export function Skills({ title }: SkillsProps) {
  return (
    <Section id="skills" title={title}>
      <SkillBubbles />
    </Section>
  );
}
