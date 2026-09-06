# S-009 — Architecture diagrams and demo video

**Epic:** E3 Proof · **Approval:** no

## Goal
Fill the visual column of each project band.

## Scope
- Three hand-authored SVG architecture diagrams — real components, real edges, labels in
  `data`. Same visual language as the skills graph.
- `DemoVideo` component: muted, loop, `playsInline`, `preload="none"`, poster frame,
  `IntersectionObserver`-triggered, keyboard-reachable pause, `body-sm` caption.
- Graceful absence: if a project has no video, render the diagram alone. No placeholder box.

## Constraints
- Diagrams are schematics, not decoration. A reader should be able to trace a request.
- Video never autoplays with sound and never blocks LCP.
- No IDE screenshots, no browser-chrome mockups.

## Acceptance
- [ ] No video bytes fetched until the band nears the viewport
- [ ] Diagrams legible at 360px without horizontal scroll
- [ ] Video paused under reduced motion, with the poster shown and a play control
- [ ] Performance budget still met with all three bands rendered
