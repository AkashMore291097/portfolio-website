# S-013 — Skills system graph

**Epic:** E5 Stack · **Approval:** yes — stop after the plan

## Goal
The memorable element. A settled dependency graph of the stack, not floating bubbles.

## Scope
- `d3-force` simulation, our own SVG renderer. Nodes carry monochrome `simple-icons`
  paths in `--color-muted`.
- Edges encode real relationships from `src/content/skills.ts`.
- Simulation runs on mount, settles in ~2s, then `stop()`s permanently. Cache the settled
  coordinates.
- Every 6s, a pulse traverses one genuine path, lighting nodes in sequence to
  `--color-signal`, with a caption naming the path.
- Hover: highlight connected edges, dim the rest. Drag: reheat, re-settle, stop again.
- Mobile: simplified 9-node variant, drag disabled, pulses retained.

## Constraints
- **Nodes never reposition after settling.** Only light moves. Continuous drift is the
  floating-logo pattern this design explicitly rejects — position must carry meaning and
  nothing may shift under a reader mid-sentence.
- Logos monochrome at rest, signal only when hovered or lit by a pulse. Brand colours
  would break the palette.
- Simulation pauses on `visibilitychange`.
- Import icons individually. The full `simple-icons` set must not enter the bundle.

## Acceptance
- [ ] Simulation stops after settling — verify no ongoing tick in the performance profile
- [ ] Reduced motion renders pre-settled with no pulses
- [ ] `role="img"` with a summarising label, plus a visually-hidden stack list
- [ ] Drag re-settles without nodes escaping the viewbox
- [ ] Bundle impact under 20 kB gzipped including icons
- [ ] Idle CPU near zero once settled
