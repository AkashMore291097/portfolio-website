# S-004 — Content layer and types

**Epic:** E1 Foundation · **Approval:** no

## Goal
Every string the site will render, typed and in one place, populated with the placeholder
tokens from `docs/04-content-rules.md`.

## Scope
- `src/content/types.ts` — `Profile`, `Role`, `Project`, `Metric`, `SkillCategory`,
  `GraphNode`, `GraphEdge`, `Capability`.
- One file per section: `profile.ts`, `experience.ts`, `projects.ts`, `skills.ts`,
  `capabilities.ts`, `strings.ts` (the fixed UI strings).
- Populate with tokens: three roles, three projects, six skill categories, four capabilities.

## Constraints
- `Project` requires `limits: [string, string, string]` minimum — a project without a
  "what breaks at scale" block must not typecheck.
- `Metric` requires `condition: string`.
- No invented employers, dates, metrics, or URLs. Tokens only.
- `strings.ts` holds the exact fixed strings from `docs/04-content-rules.md`, verbatim.

## Acceptance
- [ ] A project missing `limits` fails typecheck
- [ ] No English prose exists in any component after this story
- [ ] Every token renders literally and is visually obvious as unfilled
