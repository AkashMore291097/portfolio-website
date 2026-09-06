# S-011 — Resume chat UI and retrieval trace

**Epic:** E4 Differentiator · **Approval:** yes — stop after the plan

## Goal
The one live thing on the site, and the section's actual argument.

## Scope
- Centred `Panel`, max 720px. Layout per `docs/03-sections.md` §5.
- Input, `Ask` button, three suggested-question chips.
- Streamed answer region, `aria-live="polite"`, `aria-busy` while streaming.
- `Retrieval trace` disclosure: source labels with similarity scores in `data`, then
  retrieval ms, generation ms, token count. Expanded state persisted in `sessionStorage`.
- All six states from `docs/03-sections.md` §5, using the fixed strings.
- One line beneath the input noting that questions are answered independently.
- `embeddings.json` fetched only when the section first enters the viewport.

## Constraints
- The trace is not optional and not hidden behind a dev flag. It is the proof.
- Errors state what failed and what to do. No apologies, no "something went wrong".
- Suggested questions are required — an empty input with no prompt goes unused.
- No fake typing indicator beyond the real stream, no simulated latency.

## Acceptance
- [ ] All six states reachable and visually correct
- [ ] Screen reader announces the answer once complete, not per token
- [ ] Trace shows real scores from the API, never placeholder numbers
- [ ] Embeddings not fetched on initial page load
- [ ] Input disabled and clearly labelled while streaming
- [ ] Usable at 360px with the on-screen keyboard open
