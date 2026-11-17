# Starter issues

Small, real tasks for the class. Each one is a gap left in the app on purpose. Pick one, open a branch, fix it with Claude Code, and open a pull request.

Each issue is written so it can be pasted as a GitHub issue. Difficulty: 🟢 first PR · 🟡 some design work · 🔴 a full screen.

---

## 1. 🟢 Overdue dates use a raw hex color

**Where:** `app/(app)/page.tsx`, the "My tasks" panel.
**What's wrong:** overdue dates are red with `text-[#e5484d]`. That color isn't an Ordex token, and it isn't the same red as the "2 overdue tasks" stat above it.
**Done when:** the overdue date uses the `destructive` token, and there is no raw hex left in the file.
**You'll learn:** what a design token is in code, and why `CLAUDE.md` forbids raw hex.

## 2. 🟢 "Closed" cases have no badge style

**Where:** `components/app/status-badge.tsx`. See it on `/cases`, under the "Closed" filter.
**What's wrong:** open and waiting cases have their own badge colors. Closed falls back to the default style, a solid blue badge that looks more important than an open case.
**Done when:** closed cases have a quiet, neutral badge. Use an existing badge variant, or add one to `components/ui/badge.tsx`.
**You'll learn:** component variants, the code version of Figma's variant properties.

## 3. 🟡 Searching cases can show an empty table

**Where:** `components/app/cases-table.tsx`.
**What's wrong:** type "zzz" in the search on `/cases`. The table shows headers and nothing else.
**Done when:** a "no matching cases" state shows what was searched, with a way to clear the search. Design it in Figma first if you like.
**You'll learn:** designing states that only exist in code.

## 4. 🟡 The Monthly / Yearly toggle on pricing does nothing

**Where:** `app/(marketing)/pricing/page.tsx`.
**What's wrong:** the toggle is drawn, but clicking "Yearly" doesn't change anything.
**Done when:** the toggle switches, Yearly shows yearly prices (10× the monthly price, "2 months free"), and the selected option looks selected.
**You'll learn:** interaction state, the code version of a prototype's "on click".

## 5. 🟡 "New case" and "Add note" buttons do nothing

**Where:** `components/app/cases-table.tsx` (New case) and `app/(app)/cases/[id]/page.tsx` (Add note).
**What's wrong:** both buttons exist with no design behind them.
**Done when:** pick one. Clicking it opens a dialog or a side sheet with the fields you think a lawyer needs. It doesn't have to save anything yet.
**You'll learn:** adding a shadcn component (`npx shadcn@latest add dialog`) and composing a flow from it.

## 6. 🟡 Case rows can't be reached with the keyboard

**Where:** `components/app/cases-table.tsx`.
**What's wrong:** rows open the case on click, but you can't Tab to them or open one with Enter. Screen readers don't announce them as links.
**Done when:** every row can be reached and opened with the keyboard, and has a visible focus style.
**You'll learn:** accessibility issues a screenshot can't show.

## 7. 🔴 Design and build the Clients page

**Where:** `app/(app)/clients/page.tsx` (now a placeholder).
**What's needed:** a list of clients with their open matters and main contact. Add the data you need to `lib/data.ts`.
**You'll learn:** going from an empty route to a full screen with the existing components.

## 8. 🔴 Design and build the Tasks page

**Where:** `app/(app)/tasks/page.tsx` (now a placeholder).
**What's needed:** every task across cases, with filters for mine, overdue and done. Checking a task should move it to done.

## 9. 🔴 Design and build the Documents page

**Where:** `app/(app)/documents/page.tsx` (now a placeholder).
**What's needed:** every uploaded file, searchable by name and case, with the case it belongs to.

## 10. 🔴 Dark mode

**Where:** `app/globals.css`.
**What's needed:** Ordex has only light tokens. Add a `.dark` set of the same tokens, and a way to switch. Every screen should still work.
**You'll learn:** why tokens matter. If the screens only use tokens, dark mode is a color change in one file.
