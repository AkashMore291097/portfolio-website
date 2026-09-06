export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface ProfileFact {
  value: string;
  label: string;
}

export interface Profile {
  fullName: string;
  professionalTitle: string;
  positioningStatement: string;
  email: string;
  social: SocialLinks;
  resumePath: string;
  location: string;
  /** Display label, e.g. "IST". */
  timezone: string;
  /** IANA zone identifier used to compute the live time, e.g. "Asia/Kolkata". */
  timezoneId: string;
  updatedMonth: string;
  aboutParagraph: string;
  /** Path to a real photo, once one exists. Omitted renders a plain muted
   * placeholder circle instead of inventing a stand-in image — see
   * docs/03-sections.md §2 and docs/04-content-rules.md's placeholder-token
   * rule. Per the documented photo rule: grayscale, ≤160px, sentence-case
   * caption beneath, when a real one is added. */
  photoPath?: string;
  /** Contact section's centred statement — 2 lines max, active voice, specific
   * about what you want. Not a documented placeholder token in
   * docs/04-content-rules.md; added in S-015, flagged in ICEBOX. */
  contactStatement: string;
  facts: [ProfileFact, ProfileFact, ProfileFact, ProfileFact];
  /** Whether the availability indicator in the hero shows as open. */
  available: boolean;
}

export interface Project {
  name: string;
  order: number;
  problem: string;
  solution: string;
  /** 3-5 short feature/capability statements — what it actually does. */
  features: string[];
  stack: string[];
  repoUrl: string;
}

export interface Skill {
  label: string;
  /** Key into src/content/skillIcons.ts. Omitted for concepts/tools with no
   * real logo mark (e.g. RAG, Prompt Engineering, AWS). */
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}
