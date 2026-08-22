# Portfolio Fix & Upgrade Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Clean up the portfolio, restore reliable brand icons, remove broken and privacy-sensitive code, strengthen professional positioning, and verify the Vite/TypeScript build.

**Architecture:** Preserve the existing single-page React composition, Framer Motion entrance animations, TechStackAnimation background, and useScrollTrigger skill-card behavior. Replace fragile skill image paths with local Simple Icons-style SVG data rendered through `react-icons/si`, remove unused auth/file-management modules that reference absent backend code, and keep all public contact actions functional without rendering the email address as text.

**Tech Stack:** Vite, React, TypeScript, Tailwind CSS, Framer Motion, wouter, lucide-react, react-icons, Vitest, pnpm.

---

### Task 1: Normalize the skill icon source

**Files:**
- Modify: `shared/const.ts`
- Modify: `client/src/components/SkillIcon.tsx`
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`

Install `react-icons` and add a typed mapping for the affected official Simple Icons components. Keep the existing `SkillIcon` API and dimensions so the Skills layout, entrance animations, scroll tilt, and fallback behavior remain intact. Prefer the icon component by skill name, falling back to the existing image source only for skills that do not have a local brand icon component. Remove the need for the mismatched paths in the four affected groups by updating those data entries to stable values while preserving image-backed assets for existing non-target skills.

### Task 2: Remove broken and genuinely orphaned modules

**Files:**
- Delete: `client/src/lib/trpc.ts`
- Delete: `client/src/_core/hooks/useAuth.ts`
- Delete: `client/src/components/AIChatBox.tsx`
- Delete: `client/src/components/FileUpload.tsx`
- Delete: `client/src/pages/FileManager.tsx`
- Delete: `client/src/components/Map.tsx`
- Delete: `client/src/components/ManusDialog.tsx`
- Delete: `client/src/pages/ComponentShowcase.tsx`
- Delete: `client/src/components/DashboardLayout.tsx`
- Delete: `client/src/components/DashboardLayoutSkeleton.tsx`
- Delete: `client/src/components/__tests__/FileUpload.test.tsx`

Verify each deletion target is absent from the live route graph before removal. Preserve `NewsletterSignup.tsx`, because the repository currently imports and renders it from `BlogPost.tsx`; deleting a live component would violate the no-breakage constraint. Remove any obsolete directories only after confirming they are empty.

### Task 3: Apply metadata, privacy, and secondary-site changes

**Files:**
- Modify: `client/index.html`
- Modify: `package.json`
- Modify: `shared/const.ts`
- Modify: `client/src/components/Contact.tsx`
- Modify: `client/src/components/Footer.tsx`

Remove the template comment and unresolved analytics script, update the document title and package name, remove the Facebook profile from `SOCIALS`, and remove the Facebook profile icon case from `Contact.tsx`. Keep the separate Facebook article-share button in `ShareButtons.tsx` because it is a distinct user action and has not been requested to be removed. Replace all visible email labels in `Contact.tsx` with a CTA label while keeping the `mailto:` href. Add a clearly labeled alternate-portfolio link to the footer.

### Task 4: Strengthen professional copy and responsive interactions

**Files:**
- Modify: `shared/const.ts`
- Modify: `client/src/components/Hero.tsx`
- Modify: `client/src/components/About.tsx`
- Modify: `client/src/components/Skills.tsx`

Lead the rotating hero identity with `Full-Stack Developer`, use supporting labels for `AI Explorer` and `Student`, and revise the subtitle and bio to communicate frontend, backend, tooling, and practical project experience. Preserve all existing animation structures. Add a responsive skill-grid safeguard for very narrow screens without changing the requested responsive breakpoints. Add a tap-to-toggle photo zoom interaction that also remains keyboard accessible, with a subtle ring treatment and reduced-motion-safe transitions.

### Task 5: Validate and review

Run `pnpm install --frozen-lockfile`, `pnpm run check`, `pnpm run build`, and targeted repository-wide searches confirming there are no missing imports, visible raw email text, Facebook profile entries, unresolved analytics placeholders, or stale orphan imports. Review the diff and commit the completed implementation with a descriptive message.
