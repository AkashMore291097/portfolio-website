// Fixed UI strings, verbatim from docs/04-content-rules.md. Not editorial —
// do not paraphrase these.
export const strings = {
  copyConfirmation: "Copied",
  availability: "Available for work",
  disclosureLabel: "What breaks at scale",
  skipToContent: "Skip to content",
  sectionNavigationLabel: "Section navigation",
  scrollProgressLabel: "Page scroll progress",
  viewRepositoryLabel: "View repository",
  githubProfileLabel: "See more on GitHub",
  commandPaletteLabel: "Command palette",
  commandPalettePlaceholder: "Type a command",
  commandPaletteEmpty: "No matching commands",
} as const;

/** `Project 1 of 3` — a genuine sequence number, not decoration. Not a fixed
 * string since it depends on project count, but specified here rather than
 * composed inline in the component per the content-layer rule. */
export function projectOfLabel(order: number, total: number): string {
  return `Project ${order.toString()} of ${total.toString()}`;
}
