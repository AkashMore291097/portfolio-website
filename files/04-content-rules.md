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

**Instead:** frame each project as an engineering problem solved, quantify what was
actually measured, and state the limits explicitly.

### Metric rule

Every metric group carries a condition line naming how it was measured.

- Correct: `340 ms — p95 retrieval` / condition: `Local benchmark, 500 documents, M2 Air`
- Wrong: `340 ms — p95 retrieval in production`
- Wrong: any metric with no condition line

The condition does not weaken the number. It shows it was measured rather than invented,
which is exactly what makes it believable.

### "What breaks at scale"

Required for every featured project. 3–4 bullets naming the real bottleneck and what
would be needed to pass it. Specific, not modest — "flat FAISS index becomes the
bottleneck past ~10k documents; would need IVF or a managed vector store", not "could be
optimised further". Knowing where your system breaks is the clearest available marker of
production thinking, and it communicates scope without needing a disclaimer badge.

## Voice

Plain verbs, sentence case, active voice, no filler. Write like an engineer explaining
something to another engineer they respect.

Banned throughout: "passionate about", "cutting-edge", "leveraging", "seamless",
"robust", "innovative solutions", "tech enthusiast", "I love to code", exclamation marks,
emoji, `→` appended to link text, and any headline with a single word coloured or
italicised for emphasis.

Bullets in Experience state outcomes, not duties. Lead with the number when one exists.

## Placeholder tokens

Where real data is missing, use the token — never invent a plausible substitute. Invented
employers and dates are the one failure mode that cannot be quietly fixed later.

```
{{FULL_NAME}} {{PROFESSIONAL_TITLE}} {{POSITIONING_STATEMENT}}
{{EMAIL}} {{GITHUB_URL}} {{LINKEDIN_URL}} {{RESUME_PATH}} {{LOCATION}}
{{YEARS_EXPERIENCE}} {{ABOUT_PARAGRAPH}}
{{COMPANY_N_NAME}} {{COMPANY_N_ROLE}} {{COMPANY_N_DATES}}
{{COMPANY_N_BULLET_1..3}} {{COMPANY_N_STACK}}
{{PROJECT_N_NAME}} {{PROJECT_N_PROBLEM}} {{PROJECT_N_SOLUTION}}
{{PROJECT_N_METRIC_1..3}} {{PROJECT_N_METRIC_CONDITION}}
{{PROJECT_N_STACK}} {{PROJECT_N_REPO_URL}} {{PROJECT_N_LIMITS_1..4}}
```

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
