// Fixed UI strings, verbatim from docs/04-content-rules.md. Not editorial —
// do not paraphrase these.
export const strings = {
  chatEmptyState: "Ask about my experience, projects, or stack.",
  chatNoMatch:
    "That is not covered in what I have indexed here. For anything else, email me directly.",
  chatRateLimit: "Limit reached — 8 questions an hour. Try again later, or email me.",
  chatError: "The request failed to reach the model. Refresh and try again.",
  chatSingleTurnNote:
    "Each question is answered on its own — this does not remember the last one.",
  copyConfirmation: "Copied",
  availability: "Available for work",
  disclosureLabel: "What breaks at scale",
  skipToContent: "Skip to content",
  sectionNavigationLabel: "Section navigation",
  scrollProgressLabel: "Page scroll progress",
} as const;
