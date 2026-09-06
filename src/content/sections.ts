export interface SectionEntry {
  id: string;
  /** 1-indexed position, used by the nav rail — a genuine sequence, not decoration. */
  number: number;
  label: string;
}

export const sections: SectionEntry[] = [
  { id: "hero", number: 1, label: "Hero" },
  { id: "about", number: 2, label: "About" },
  { id: "experience", number: 3, label: "Experience" },
  { id: "projects", number: 4, label: "Featured projects" },
  { id: "ai-work", number: 5, label: "AI work" },
  { id: "skills", number: 6, label: "Skills" },
  { id: "contact", number: 7, label: "Contact" },
  { id: "footer", number: 8, label: "Footer" },
];
