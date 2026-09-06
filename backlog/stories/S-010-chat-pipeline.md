# S-010 — Embedding pipeline and chat API

**Epic:** E4 Differentiator · **Approval:** no

## Goal
The retrieval backend. No UI in this story.

## Scope
- `scripts/embed.ts` — chunk `src/content/*` at ~400 tokens with 60-token overlap, keep a
  `source` label per chunk, embed, write `public/embeddings.json`. Wired to `npm run embed`.
- `api/chat.ts` — Vercel Node function. Validate input (≤500 chars), embed the question,
  cosine similarity in memory, top 4 above a 0.35 floor, call Claude with a system prompt
  forbidding answers beyond the supplied context, stream the response.
- Return retrieval metadata: sources, scores, retrieval ms, generation ms, token counts.
- In-memory rate limit, 8 requests per IP per hour.
- No-match path returns the fixed string from `docs/04-content-rules.md` without calling
  the model.

## Constraints
- API key server-side only. Never reaches the client bundle.
- Single-turn. No history handling.
- The model must not answer from parametric knowledge when retrieval finds nothing —
  a confident wrong answer about your own CV is the worst possible failure here.

## Acceptance
- [ ] `npm run embed` produces a file under 400 kB
- [ ] Relevant question returns 4 scored chunks and a grounded answer
- [ ] Off-topic question returns the no-match string and makes no model call
- [ ] Ninth request in an hour returns the rate-limit string with the right status
- [ ] Key absent from the built client bundle — verify by grepping `dist/`
- [ ] Response streams rather than arriving whole
