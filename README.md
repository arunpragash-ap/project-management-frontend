# Project Management Frontend

A personal project management dashboard UI, built with Next.js, TypeScript, and shadcn-ui.

## Status: Prototype

This is an early-stage UI scaffold. The application shell (layout, sidebar, header, theming,
auth screens) is in place, but there is no backend integration yet: forms don't submit anywhere,
sidebar/breadcrumb links and the search dialog use placeholder or mock data, and there are no
tests or CI. See [Known limitations](./ARCHITECTURE.md#known-limitations) in ARCHITECTURE.md
for details.

## Overview

The goal of this project is a project-management app for tracking projects and organizing tasks.
Right now it implements the visual shell an app like that would be built on top of: a themeable
dashboard layout with a collapsible sidebar, a command-style search dialog, light/dark mode plus
several color themes, toast notifications, and login/signup screens. Actual project/task data and
any backend connection are not implemented yet.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack dev server), React 19
- **Language:** TypeScript
- **UI components:** shadcn-ui (`new-york` style) on top of Radix UI primitives
- **Styling:** Tailwind CSS v4, with CSS-variable-based color themes
- **Other libraries:** `next-themes` (light/dark mode), `sonner` (toasts), `date-fns` and
  `react-day-picker` (calendar UI component, not currently wired into any page),
  `lucide-react` (icons), `axios` (listed in `package.json`, not used anywhere in `src/` yet)
- **Package manager:** pnpm (lockfile is `pnpm-lock.yaml`)
- **Linting:** ESLint (`next/core-web-vitals`, `next/typescript`)

## Features

- **App shell / dashboard layout** — sidebar, header, and scrollable content area
  (`src/components/layout/app-layout.tsx`, `app-sidebar.tsx`, `header/app-header.tsx`)
- **Color theming** — switch between 8 color themes (orange, blue, red, violet, green, rose,
  yellow, default) via CSS classes on `<html>`, plus a separate light/dark/system mode toggle
  (`src/contexts/theme-context/`, `src/components/themes/`, `src/css/themes/`)
- **Command-style search dialog** — Ctrl/Cmd+K search modal with keyboard navigation
  (`src/components/layout/header/search-modal.tsx`); currently searches a hardcoded, docs-style
  mock dataset rather than real app content
- **Toast notifications** — a themed wrapper (`useCustomToast`) around `sonner`
  (`src/lib/toast-util.tsx`)
- **Login / signup screens** — a single dynamic route (`src/app/[auth]/`) renders either form
  based on the URL segment; forms are UI-only (no submit handler, validation, or API call)
- **Create Workspace dialog** — a modal form (`src/app/workspace/workspace-modal.tsx`) with no
  submit handler yet
- **Dashboard placeholder page** — `src/app/dashboard/page.tsx` renders empty skeleton blocks

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the component diagram and a folder-by-folder
breakdown.

## Folder Structure

```
src/
├── app/            Next.js App Router pages ([auth], dashboard, workspace, home)
├── components/     Layout (sidebar/header), theme controls, and shadcn-ui primitives
├── contexts/       React context providers (color theme, next-themes wrapper)
├── css/            Global styles and per-color-theme CSS variable files
├── hooks/          Custom hooks (e.g. use-mobile)
└── lib/            Utilities (toast helper, className helper)
```

## Getting Started

### Prerequisites

- Node.js
- pnpm (the repo ships a `pnpm-lock.yaml`; npm/yarn will also work but aren't the lockfile source)

### Installation

```bash
pnpm install
```

### Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Other Scripts

- `pnpm build` — production build
- `pnpm start` — start the production server
- `pnpm lint` — run ESLint

## Usage: Toast Notifications

```tsx
import { useCustomToast } from '@/lib/toast-util';

export default function MyComponent() {
  const showToast = useCustomToast();

  const handleClick = () => {
    showToast({
      title: 'Success!',
      description: 'Your action was successful.',
      level: 'success', // 'success' | 'error' | 'warning' (default: 'success')
    });
  };

  return <button onClick={handleClick}>Show Toast</button>;
}
```

- `title` (string): main message (required)
- `description` (string): optional subtext
- `level` (`'success' | 'error' | 'warning'`): toast type, default `'success'`
