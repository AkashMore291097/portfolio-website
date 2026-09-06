# S-014 — Skills category list

**Epic:** E5 Stack · **Approval:** no

## Goal
The scannable half of the skills section, beneath the graph.

## Scope
- Six hairline-separated rows. Category name in `display-md` serif on columns 1–3, a
  one-line context sentence beneath in `body-sm`, chips filling columns 4–12.
- Categories: backend, frontend, databases, GenAI and LLM, cloud and DevOps, tools.

## Constraints
- No proficiency bars, percentages, or star ratings.
- The context sentence is required per category — it is what makes this a statement about
  how you work rather than a tag dump.

## Acceptance
- [ ] Six rows, each with a context sentence
- [ ] Chips wrap cleanly at every breakpoint
- [ ] Category set matches the graph's node set — no skill in one and missing from the other
