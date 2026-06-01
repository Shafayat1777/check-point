# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Checkpoint Cloud Systems** is an Electron desktop app for cloud save management. It's a TypeScript monorepo with two packages:
- `backend/` — Hono.js API server (runs on Bun, port 3000)
- `electron/` — Electron shell + React frontend (Vite dev server on port 5123)

## Commands

### Backend (`backend/`)
```sh
bun run dev          # Start API server with hot reload
bun run db:generate  # Generate Drizzle migrations after schema changes
bun run db:migrate   # Apply pending migrations
bun run db:studio    # Open interactive DB explorer
```

### Electron Frontend (`electron/`)
```sh
npm run dev          # Start Vite + Electron concurrently (full dev mode)
npm run dev:react    # Vite only (React dev server at :5123)
npm run build        # Compile TypeScript + Vite build → dist-react/
npm run lint         # ESLint
npm run dist:win     # Build Windows installer (x64)
npm run dist:mac     # Build macOS app (arm64)
npm run dist:linux   # Build Linux AppImage (x64)
```

### Environment Setup
Backend requires a `.env` file (see `backend/.env.example`):
- `DATABASE_URL` — PostgreSQL connection string
- `BETTER_AUTH_SECRET` — generate with `bunx @better-auth/cli@latest secret`
- `BETTER_AUTH_URL` — `http://localhost:3000`
- `RESEND_API_KEY` — for transactional email

Electron reads `electron/.env.development`:
- `VITE_BACKEND_API=http://localhost:3000/api`
- `VITE_AUTH_API=http://localhost:3000/api/auth`

## Architecture

### Backend
- **Entry:** `backend/src/index.ts` — mounts routes under `/api`, enables CORS for :3000 and :5123
- **Auth:** `backend/src/lib/auth.ts` — better-auth with email verification, JWT sessions, Drizzle adapter
- **Email:** `backend/src/lib/email.ts` — Resend integration for transactional emails
- **DB Schema:** `backend/src/db/schema/` — Drizzle ORM tables (`users`, `session`, `account`, `verification`, `games`). Use snake_case naming. All schema changes need `db:generate` + `db:migrate`.
- **Routes:** `backend/src/routes/` — `games`, `save-file`, `user`
- **Auth middleware:** `backend/src/middlewares/auth-middleware.ts` — validates session for protected routes

### Frontend / Electron
- **Electron main:** `electron/src/electron/main.ts` — creates BrowserWindow, loads Vite in dev or `dist-react/` in prod
- **Preload:** `electron/src/electron/preload.cts` — context bridge exposing `window.electronAPI` (window controls, folder picker, auth)
- **IPC handlers:** `electron/src/electron/register-ipc-handelers.ts` — handles auth flows in main process for security
- **React root:** `electron/src/ui/main.tsx`
- **Routing:** `electron/src/ui/routes/index.tsx` — React Router with protected routes (Dashboard, Games) and public routes (SignIn, SignUp)
- **Auth client:** `electron/src/lib/auth-client.ts` — better-auth client connecting to backend
- **Forms:** React Hook Form + Zod schemas in `electron/src/ui/schema/`
- **State:** Zustand for client state, React Context for theme (`electron/src/ui/context/`)

### Key IPC Flow
The renderer calls `window.electronAPI.auth.*` → preload relays to main process via IPC → main process handles the HTTP request to the backend. This keeps credentials off the renderer process.

### Build Pipeline
Electron has two separate TypeScript compilation steps:
1. `tsc --project src/electron/tsconfig.json` — compiles Electron main process
2. `vite build` — compiles React renderer → `dist-react/`

electron-builder then packages both into platform installers using `electron-builder.json`.

## Tech Stack at a Glance

| Layer | Technology |
|---|---|
| Backend runtime | Bun |
| API framework | Hono 4.x |
| ORM | Drizzle + PostgreSQL |
| Auth | better-auth 1.3.x |
| Desktop | Electron 38.x |
| Frontend | React 19 + React Router 7 |
| Build | Vite 7 + electron-builder |
| Styling | TailwindCSS 4 + shadcn/ui |
| Forms | React Hook Form + Zod |
| State | Zustand |