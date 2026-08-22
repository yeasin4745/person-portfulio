# Portfolio Polish Design and Implementation Plan

## Scope

Apply the polish pass to `yeasin4745/person-portfulio`. The second named repository, `my-portfolio4745`, was inspected separately and already has a compact Skills grid plus a globally mounted ParticleBackground, so no changes are required there.

## Design

Keep one subtle Three.js ambient background instance mounted from `Home.tsx` behind every live section. Remove the redundant section-local `TechStackAnimation` and Projects-only `CodingAnimation` instances so the page has one animation loop rather than multiple continuous WebGL loops. Make the ambient scene transparent, cap it at 30 FPS, pause it when the document is hidden, and render a static frame when `prefers-reduced-motion` is enabled.

Compact the active Skills cards with smaller padding, typography, hover displacement, and a denser responsive grid. Tighten the profile crop with a centered default scale and a stronger tap/hover zoom while retaining the accessible button behavior. Remove the exact obsolete footer credit paragraph with no replacement credit text.

Use a shared `brand-gradient` CSS utility for the navbar and Hero name. Add a restrained gradient-position animation with a reduced-motion fallback, and use existing Framer Motion entrance transitions for the name elements. Preserve the existing factual Hero, About, and Skills content because it already matches the current site direction; no unclear factual details were changed.

## Verification

Run Prettier, TypeScript validation, the production Vite build, repo-wide `Built with` and privacy checks, and responsive visual checks at desktop and mobile sizes. Confirm the global background mount, reduced-motion/visibility/frame safeguards, compact grid classes, and clean working tree before pushing.
