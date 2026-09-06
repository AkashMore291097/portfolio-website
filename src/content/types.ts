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
  yearsExperience: string;
  updatedMonth: string;
  aboutParagraph: string;
  facts: [ProfileFact, ProfileFact, ProfileFact, ProfileFact];
  /** Whether the availability indicator in the hero shows as open. */
  available: boolean;
}

export interface Role {
  company: string;
  role: string;
  dates: string;
  /** 2–3 outcome-led bullets, per docs/04-content-rules.md. */
  bullets: [string, string] | [string, string, string];
  stack: string[];
}

export interface Metric {
  figure: string;
  label: string;
  /** How this figure was measured. Required — never optional. */
  condition: string;
}

export interface Project {
  name: string;
  order: number;
  problem: string;
  solution: string;
  metrics: Metric[];
  stack: string[];
  repoUrl: string;
  /**
   * "What breaks at scale" — 3 or 4 honest bullets naming the real bottleneck.
   * A project with fewer than 3 fails typecheck: this is required content,
   * not an optional disclosure.
   */
  limits: [string, string, string] | [string, string, string, string];
}

export interface SkillCategory {
  name: string;
  context: string;
  chips: string[];
}

export interface GraphNode {
  id: string;
  label: string;
  /** simple-icons slug, recoloured to --color-muted at rest. */
  icon: string;
}

export interface GraphEdge {
  source: string;
  target: string;
}

export interface Capability {
  title: string;
  description: string;
  /** Real libraries/tools used, named plainly. */
  libraries: string[];
  /** id of the Project (see projects.ts) that demonstrates this, if one exists. */
  relatedProjectId?: string;
}
