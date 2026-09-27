# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Additions / corrections to AGENTS.md

- **Single test**: `just pytest apps/users/tests/api/test_views.py::TestUserViewSet::test_me` (from `backend/`). Same selector syntax works with `just pytest-direct-db`.
- **Two frontends, never mix them**: `frontend/` (cream/editorial "A3", dev on **:5173**) and `frontend-A2/` (navy "A2", dev on **:5174**). Same architecture, different CSS. `just up` runs both. Dokploy/production ship one of them by changing `context: ./frontend` vs `./frontend-A2`.
- **Frontend has a router** (`react-router-dom` 7). `App.jsx` wraps `BrowserRouter` → `src/routes/index.jsx`; paths live in `src/routes/routePaths.js` (`home`, `login`, `admin`, `pageNotFound`) — add new ones there, then register them in `routes/index.jsx`.
- **Frontend layout**: pages and UI live under `src/presentation/` (`pages/`, `components/<feature>/`). The stale duplicate `src/pages/LoginPage.jsx` is gone.
- **Landing / admin / login** in each frontend: `presentation/pages/{LandingPage,AdminPage,LoginPage}.jsx` compose `components/{landing,admin,login}/`. Class prefixes `mag-*` (landing), `adm-*` (admin), `log-*` (login). Breakpoints: A3 landing 1200/900/600, A2 landing 1100/860/640, both admins 1024/640. Ported from `frontend/plantilla-claude/` (reference only, eslint-ignored, never imported).
- **Tokens are global, not per-page**: `src/index.css` holds the `:root` palette (cream for A3, navy for A2). Don't redefine tokens inside `landing.css` / `admin.css` / `login.css` — `/admin` and `/login` load without the landing stylesheet and would render unstyled. `#root` is full-width on purpose; don't put a fixed-width container there.
- **Simulated session, no backend**: `src/store/authStore.js` exposes `demoLoggedIn` / `demoLogin()` / `demoLogout()` in `sessionStorage`. `/admin` is behind `RequireDemoAuth` in `routes/index.jsx`, which reads auth **at mount only** — a reactive guard plus logout-then-navigate races React Router's deferred navigation and lands on `/login` instead of `/`. Logout is the avatar button in the admin topbar (`AdminTopbar.jsx`); navigate first, then clear the session.
- **Screenshots** (Playwright MCP): save under `.playwright-mcp/`, not the repo root. Note the MCP's `browser_take_screenshot` can capture a stale frame — trust `browser_evaluate` / `browser_find` for what is actually rendered.
- **Env files are at the repo root**: `cp .env.local.example .env.local` (dev) / `cp .env.prod.example .env` (prod). `backend/.envs/` is gone. Never write `${VAR}` inside an `env_file` — it is not expanded.
