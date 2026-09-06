export interface SectionEntry {
  id: string;
  /** 1-indexed position, used by the nav rail — a genuine sequence, not decoration. */
  number: number;
  label: string;
}

export const sections: SectionEntry[] = [
  { id: "hero", number: 1, label: "Hero" },
  { id: "about", number: 2, label: "About" },
  { id: "projects", number: 3, label: "Featured Projects" },
  { id: "skills", number: 4, label: "Skills" },
  { id: "contact", number: 5, label: "Contact" },
  { id: "footer", number: 6, label: "Footer" },
];
