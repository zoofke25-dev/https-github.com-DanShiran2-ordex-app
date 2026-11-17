# Ordex — rules for working on this codebase

Ordex is a case-management product for small law firms. This repo is the Ordex web app: a dashboard, a cases list, a case page, and the public pricing page. It is the shared project for the AI Product Design Masterclass. The people working here are product designers, so explain what you change in plain language.

Read this file before you generate, edit, or translate any UI.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix) · lucide-react icons.

Run it: `npm install` once, then `npm run dev`, and open http://localhost:3000.

## Where things live

| What | Where |
|---|---|
| Design tokens (colors, radius, fonts) | `app/globals.css` |
| shadcn primitives (Button, Badge, Card, Table…) | `components/ui/` |
| Ordex building blocks (Panel, StatusBadge, AppHeader, AppSidebar) | `components/app/` |
| Pages inside the product (with the sidebar) | `app/(app)/` |
| Public pages (pricing) | `app/(marketing)/` |
| All the fake data | `lib/data.ts` |

## Non-negotiables

1. **Never invent a color.** Every color comes from a token in `app/globals.css`: `bg-primary`, `text-muted-foreground`, `bg-card`, `border`, `bg-warning`, `text-destructive`… No raw hex, no `text-[#...]`, no Tailwind palette colors like `text-red-500`.
2. **Need a new color?** Add it as a token in `globals.css` (in `:root` and in `@theme inline`), with a comment that says which Figma variable it comes from. Then use the token.
3. **Reuse before you build.** Check `components/ui/` and `components/app/` first. If a component almost fits, add a variant to it (with `cva`, like `brand` and `warning` in `badge.tsx`) instead of making a near-copy.
4. **Use `cn()`** from `@/lib/utils` to combine class names.
5. **Icons are lucide-react only.** Don't paste SVGs from Figma when a lucide icon exists.
6. **Data comes from `lib/data.ts`.** Don't hard-code names, numbers or dates inside a page.
7. **Import with the `@/` alias:** `@/components/ui/button`, `@/lib/data`.

## The Ordex look

- Page background is warm stone (`bg-background`). Content sits on white panels (`bg-card`, `rounded-2xl`, `border`, `p-6`). Use the `Panel` component for dashboard blocks.
- Ordex blue (`primary`, #2f64e8) is for the one main action and for "active" states. Don't use it for decoration.
- Status colors: open → `brand` badge, waiting → `warning` badge, errors and overdue → `destructive`.
- Type is Plus Jakarta Sans. Headings are bold with tight tracking. Body text is 15px.
- Radius: panels `rounded-2xl`, buttons and inputs `rounded-lg`, badges round.

## Working from Figma

The design source is two Figma files:
- "Ordex - Design system": the library. Variables (named like the comments in `globals.css`), text styles, icons and components.
- "Ordex - Designs": the screens. Home, Cases, Case, Pricing and Tasks, built from the library's components.

When you implement a frame from Figma:
1. Map every Figma variable to the token with the same meaning in `globals.css`. If none exists, stop and ask before adding one.
2. Map Figma components to `components/ui` and `components/app`. Don't rebuild a button that already exists.
3. Match spacing to Tailwind's scale (4px steps). If Figma uses an off-scale value, round it and say so.
4. After the change, open the page in the browser and compare it to the frame.

## How we work

- One change per branch. Branch names: `yourname/what-you-change` (for example `dana/cases-empty-state`).
- Before opening a pull request, run `npm run build` and fix any errors.
- In the pull request, say what you changed, why, and attach a screenshot before and after.
- Starter tasks for the class are in `STARTER-ISSUES.md`.

## Next.js version notes

@AGENTS.md
