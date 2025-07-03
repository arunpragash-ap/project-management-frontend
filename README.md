# Project Management UI

A modern, customizable project management dashboard built with [Next.js](https://nextjs.org), [Radix UI](https://www.radix-ui.com/), and [Tailwind CSS](https://tailwindcss.com/).

## Features

- **Dashboard Layout:** Responsive sidebar, header, and content area for scalable project management UIs.
- **Theme Switching:** Easily toggle between multiple color themes and light/dark/system modes.
- **Calendar Demo:** Interactive date picker component on the main page.
- **Modern UI Components:** Built with Radix UI primitives and Tailwind CSS for accessibility and rapid development.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn/bun)

### Installation

Clone the repository and install dependencies:

```bash
pnpm install
# or
yarn install
# or
npm install
```

### Running the Development Server

```bash
pnpm dev
# or
yarn dev
# or
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

- `dev` – Start the development server
- `build` – Build for production
- `start` – Start the production server
- `lint` – Run ESLint

## Project Structure

- `src/app/` – Application routes and pages
- `src/components/` – UI and layout components
- `src/contexts/` – Theme and other React context providers
- `src/hooks/` – Custom React hooks
- `src/lib/` – Utility functions

## Customization

- **Themes:** Change color themes using the theme switcher in the header.
- **Dark/Light Mode:** Toggle using the mode button in the header.
- **Sidebar:** Add or modify navigation items in `src/components/layout/app-sidebar.tsx`.

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js.

## License

This project is for demonstration and rapid prototyping purposes. Extend it to fit your needs!
