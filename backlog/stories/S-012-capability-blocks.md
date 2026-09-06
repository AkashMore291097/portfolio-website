# S-012 — AI capability blocks

**Epic:** E4 Differentiator · **Approval:** no

## Goal
The lower half of the AI section.

## Scope
- 2×2 grid, single column below 768px. RAG pipelines, agents and tool use, voice,
  MCP tooling.
- Each: a small line diagram in `--color-muted`, `display-md` serif title, two lines of
  `body-sm`, the real libraries named, and a link to the project demonstrating it where
  one exists.

## Constraints
- Line diagrams, not icon glyphs. A lucide icon here would flatten this into a generic
  feature grid.
- Name specific libraries. "LangGraph, tool calling, retry with backoff" beats
  "advanced agentic workflows".
- No cards with shadows. Hairline separation only.

## Acceptance
- [ ] Four blocks, each naming real tooling
- [ ] Cross-links resolve to the correct project band
- [ ] Reads as continuous with the chat above, not as a separate feature section
