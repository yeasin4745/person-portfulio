# Repo Cleanup, README & Vercel Configuration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove obsolete platform scaffolding, document the frontend-only portfolio, and make Vercel serve all wouter routes through the Vite SPA entry point.

**Architecture:** Keep the existing Vite root at `client/` and production output at the repository-root `dist/`. Retain the current React, Tailwind, Framer Motion, and wouter application while simplifying only deployment metadata and development-only configuration. Add a Vercel catch-all rewrite to `/index.html` so direct blog URLs resolve to the client router.

**Tech Stack:** Vite, React, TypeScript, Tailwind CSS, Framer Motion, wouter, pnpm, Vercel.

---

### Task 1: Remove platform and scaffold leftovers

**Files:**
- Delete: `.netlifyignore`
- Delete: `public/_redirects`
- Delete: `.gitkeep`
- Delete: `client/public/.gitkeep`
- Modify: `.vercelignore`
- Modify: `vite.config.ts`
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`

Remove Netlify-only files and placeholder files from directories that already contain tracked assets. Keep the legitimate `.gitignore`, `.prettierignore`, and `.prettierrc`. Remove the unused `@assets` alias, Manus runtime plugin, and Manus-only `allowedHosts`, while retaining Vite's React, Tailwind, and JSX-location plugins. Remove the now-unused runtime dependency from the manifest and lockfile. Scope `.vercelignore` to current dependency, build, environment, log, and OS exclusions without excluding `README.md`.

### Task 2: Add concise repository documentation

**Files:**
- Create: `README.md`

Document the project identity, both portfolio URLs, confirmed pnpm scripts, tech stack, `client/` and `shared/` structure, static frontend-only architecture, and MIT license. Do not add contribution guidelines or unnecessary badges.

### Task 3: Configure SPA fallback routing

**Files:**
- Modify: `vercel.json`

Add `outputDirectory: "dist"` to match the existing Vite build output and add a catch-all rewrite from `/(.*)` to `/index.html` so direct `/blog/:slug` navigation is handled by wouter.

### Task 4: Validate local and public behavior

Run `pnpm install --frozen-lockfile`, `pnpm run build`, formatting checks, and route checks. Start a local preview and verify the homepage and direct blog URL. After pushing, check the public homepage and direct blog URL; report clearly if Vercel has not yet propagated the new commit.
