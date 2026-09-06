# 04 — Content rules

All copy lives in `src/content/`. Sections import it. A hardcoded sentence in a component
is a bug.

## The honesty constraint

The featured projects are proofs-of-concept. They are presented with production-grade
craft and POC-honest substance. This is a tactical choice, not just an ethical one:
"how many users?" is the second question in every interview, and a claim that collapses
costs more than the credibility it borrowed. A reviewer can also identify a POC from the
repository in under a minute.

**Never write:** "in production", "serving X users", "99.9% uptime", "at scale",
"battle-tested", "handles millions of requests", or any traffic, revenue, or user figure
that did not happen.

**Instead:** frame each project as an engineering problem solved.

### Metric rule — REMOVED

Featured projects no longer carry a numeric metrics row at all (removed by direct user
request in S-033 — see `backlog/BACKLOG.md`'s changelog entry; `Project.metrics` no
longer exists in `content/types.ts`). The rule that used to govern that row — every
metric group carries a condition line naming how it was measured, since an unconditioned
number reads as invented rather than measured — is kept here in case a metrics row is
ever reintroduced; it is not currently enforced anywhere in the codebase.

### "What breaks at scale" — REMOVED

This block (3–4 bullets naming the real bottleneck per featured project) was removed by
direct user request in S-032 — see `backlog/BACKLOG.md`'s changelog entry.
`Project.limits` no longer exists in `content/types.ts`. Kept here as a struck section
rather than deleted outright, since the reasoning it originally documented (knowing
where a system breaks is a marker of production thinking) may be worth reviving in a
different form later.

## Voice

Plain verbs, sentence case, active voice, no filler. Write like an engineer explaining
something to another engineer they respect.

Banned throughout: "passionate about", "cutting-edge", "leveraging", "seamless",
"robust", "innovative solutions", "tech enthusiast", "I love to code", exclamation marks,
emoji, `→` appended to link text, and any headline with a single word coloured or
italicised for emphasis.

Bullets in Featured projects' feature lists state outcomes, not duties.

## Placeholder tokens

Where real data is missing, use the token — never invent a plausible substitute. Invented
employers and dates are the one failure mode that cannot be quietly fixed later.

```
{{FULL_NAME}} {{PROFESSIONAL_TITLE}} {{POSITIONING_STATEMENT}}
{{EMAIL}} {{GITHUB_URL}} {{LINKEDIN_URL}} {{RESUME_PATH}} {{LOCATION}}
{{ABOUT_PARAGRAPH}} {{PHOTO_PATH}}
{{PROJECT_N_NAME}} {{PROJECT_N_PROBLEM}} {{PROJECT_N_SOLUTION}}
{{PROJECT_N_STACK}} {{PROJECT_N_REPO_URL}}
```

(`{{PROJECT_N_METRIC_*}}` and `{{PROJECT_N_LIMITS_*}}` are gone with the metrics row and
the "What breaks at scale" block — see S-032/S-033. `N` currently runs 1–4, since
Featured projects carries four projects as of S-036.)

(`{{YEARS_EXPERIENCE}}` and the `{{COMPANY_N_*}}` tokens are gone along with the
Experience section — see `docs/03-sections.md` §3 and `backlog/BACKLOG.md`'s S-020
changelog entry. `{{PHOTO_PATH}}` is genuinely optional, unlike every other token here —
`Profile.photoPath` is `undefined` until a real photo exists, and About renders a plain
muted placeholder circle rather than a literal `{{PHOTO_PATH}}` string in that case. As
of S-023, `Profile.photoPath` is filled in with a real path
(`public/assets/avatar.png`), so this token is now resolved — see `docs/03-sections.md`
§2 for the current, confirmed grayscale exception this specific avatar carries.)

Render tokens literally and visibly. Do not style them to look like finished copy — the
author needs to see at a glance what is still unfilled.

## Fixed strings

These are product copy and are specified here so they are not improvised per-story.

- Chat empty state: `Ask about my experience, projects, or stack.`
- Chat no-match: `That is not covered in what I have indexed here. For anything else,
  email me directly.`
- Chat rate limit: `Limit reached — 8 questions an hour. Try again later, or email me.`
- Chat error: `The request failed to reach the model. Refresh and try again.`
- Chat single-turn note: `Each question is answered on its own — this does not remember
  the last one.`
- Copy confirmation: `Copied`
- Availability: `Available for work`
- Disclosure label: `What breaks at scale`

Errors do not apologise and are never vague about what happened.
