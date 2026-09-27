# AGENTS.md

## Repo identity

This is a **starter template** (cookiecutter-django backend + Vite/React frontend), not a finished app. The default project name is `educore`. Before adding real features on top of a fresh clone, read **`START.md`** — it documents the mandatory find-and-replace + manual renames (kebab / snake / Title variants of the project name, Docker volume names, Celery app name, domain in `backend/.envs/.production/.django`, `DJANGO_SECRET_KEY`, `POSTGRES_PASSWORD`, etc.). Skipping it leaves stale references everywhere (compose volume names, `pyproject.toml` name, celery app label, swagger title, etc.).

The `planes/` and `.serena/` directories are local-only scratch space and can be deleted.

## Layout

Monorepo with two independent packages — there is no shared root build.

- `backend/` — Django 6.0 + DRF 3.17 + Celery 5.6 + Redis 7.2 + pgbouncer + Postgres 18 (cookiecutter-django fork).
  - `backend/apps/` — every business app lives here (`users/`, `custom_auth/`, `contrib/sites/`).
  - `backend/config/` — settings (`base.py` / `local.py` / `test.py` / `production.py`), root `urls.py`, `api_router.py`, `celery_app.py`, `asgi.py`/`wsgi.py`.
  - `backend/.envs/.local/` and `.envs/.production/` — env files split by concern (`.django`, `.postgres`).
  - `backend/compose/{local,production}/` — Dockerfiles + start scripts (one folder per service).
- `frontend/` — React 19 + Vite 8 + Zustand 5 + React Router 7, no UI lib. Alias `@/` → `frontend/src/`. Dev server on **:5173**. `frontend/.env` carries `VITE_API_URL`.
- `frontend-A2/` — a second, independent frontend (darker "A2" design) on **:5174**. Same architecture as `frontend/` (`src/routes/`, `src/presentation/{pages,components}/`), its own `package.json` (`name: frontend-a2`), `vite.config.js` port and `.env`. `just up` runs both. Dokploy/production pick one by setting `context: ./frontend` or `./frontend-A2`.
- `frontend/plantilla-claude/` — reference HTML/JSX the two frontends were ported from. Never imported; eslint ignores it.
- Root: `docker-compose.local.yml` (dev), `docker-compose.production.yml` (prod w/ traefik), `docker-compose.dokploy.yml` (Dokploy variant), `backend/docker-compose.docs.yml` (Sphinx). No root `docker-compose.yml`; `docker compose` is invoked against the file you want.

Env files live in the **repo root**, one per environment (see *Environment variables* below). `backend/.envs/` is gone.
- `backend/tests/` is an empty package placeholder (its one-off `merge_production_dotenvs_in_dotenv.py` test was removed when the env files were unified). Per-app tests live at `backend/apps/<app>/tests/`.

## Tooling

- **Python**: `uv` (already in lockfile). `backend/.python-version` pins `3.14` and `backend/pyproject.toml` requires `==3.14.*` — match exactly.
- **Task runner**: `just` (see `backend/justfile`). The justfile sets `COMPOSE_FILE=docker-compose.local.yml` for the whole shell, so plain `docker compose ...` after `just` also works.
- **Frontend package manager**: `pnpm` (lockfile is `pnpm-lock.yaml`). Do not run `npm install`.
- **Linters / formatters**: `ruff` (lint+format), `djlint` (Django templates), `pyproject-fmt`, `django-upgrade` to 6.0. All run via pre-commit (`backend/.pre-commit-config.yaml`) and in CI (`backend/.github/workflows/ci.yml`).

## Commands (run from `backend/` unless noted)

```bash
# Backend (always through the justfile — it handles the compose file)
just build                    # docker compose build
just up                       # bring up django, postgres, pgbouncer, redis, celery*, flower, frontend
just down                     # stop stack
just logs celeryworker        # follow logs
just manage +args             # docker compose run --rm django python manage.py <args>
just pytest +args             # docker compose run --rm django pytest <args>

# IMPORTANT: pgbouncer runs in pool_mode=transaction. These MUST bypass it:
just manage-direct-db createsuperuser
just manage-direct-db makemigrations
just manage-direct-db migrate
just pytest-direct-db         # use for any test that needs real DDL / schema work
```

The `-direct-db` variants pin `PGB_POSTGRES_HOST=postgres PGB_POSTGRES_PORT=5432` (the real backend, not the pgbouncer :6432 listener). Do not edit `pyproject.toml` settings to "fix" this — the bypass is the fix.

Bare `uv run` works **only** if you have created a venv and exported `DJANGO_SETTINGS_MODULE=config.settings.local`; almost all the time you want the docker path.

```bash
# Frontend (from frontend/ or frontend-A2/)
pnpm install --frozen-lockfile
pnpm dev          # :5173 (A3) / :5174 (A2)
pnpm build
pnpm lint
```

```bash
# Frontend (from frontend/)
pnpm install --frozen-lockfile
pnpm dev          # vite dev server on :5173
pnpm build        # production build → dist/
pnpm lint         # eslint .
```

## Things that will silently break if you miss them

- **Celery app label** is `config.celery_app` (set in `backend/config/celery_app.py` via `Celery("educore")` — the constructor string is the *broker label* and must be renamed alongside the project, otherwise Flower/log lines look wrong). Always invoke celery as `celery -A config.celery_app ...` (start scripts in `backend/compose/.../celery/*/start` already do this).
- **Adding a new app**: `cd backend && python manage.py startapp mi_app` (or `docker compose run --rm django python manage.py startapp mi_app`), put it under `apps/`, then add `"apps.mi_app"` to `LOCAL_APPS` in `backend/config/settings/base.py`. `manage.py` already appends `apps/` to `sys.path`, so imports inside app code are `from apps.<app>.models import …` and tests/factories follow the same `apps.<app>.tests.…` style.
- **Test settings**: pytest is pinned to `--ds=config.settings.test --reuse-db --import-mode=importlib` in `pyproject.toml` `[tool.pytest]`. Do not pass `--ds=` on the CLI; it will conflict. Test file patterns are `tests.py` and `test_*.py`.
- **Coverage** (`tool.coverage.run`): only `apps/**` is included. `config/`, `migrations/`, and `*/tests/*` are excluded. Adding code under `config/` won't move the coverage needle — that's by design.
- **CORS scope**: `CORS_URLS_REGEX = r"^/api/.*$"` in `backend/config/settings/base.py` — CORS headers are only attached to `/api/*`. Don't put non-API routes behind DRF and expect cookies to flow.
- **DRF defaults**: `IsAuthenticated` is the default permission; `JWTAuthentication` is the default auth class. Swagger UI at `/api/docs/` is admin-only (`SERVE_PERMISSIONS=["rest_framework.permissions.IsAdminUser"]`).
- **Auth model** (`apps.users.models.User`): email is the USERNAME_FIELD, `username`/`first_name`/`last_name` are all `None`. Tests use `apps.users.tests.factories.UserFactory` and a shared `user` fixture from `apps/conftest.py` (autouse `_media_storage` redirects `MEDIA_ROOT` to tmpdir). New models that need a `User` FK should reference `settings.AUTH_USER_MODEL`.
- **Frontend routes & demo session** (both frontends): `src/routes/routePaths.js` holds `home` `/`, `login` `/login`, `admin` `/admin`, `pageNotFound` `*`; `src/routes/index.jsx` registers them and wraps `/admin` in a `RequireDemoAuth` guard. `src/store/authStore.js` has a **simulated** session (`demoLoggedIn` + `demoLogin()`/`demoLogout()`) persisted in `sessionStorage`, so nothing calls the backend: "Ingresar" on `/login` calls `demoLogin()` and goes to `/admin` even with empty fields, and the avatar in the admin header calls `demoLogout()` and returns to `/`. The guard checks auth at **mount** (not reactively) — a live guard plus logout-then-navigate races React Router's deferred navigation and dumps you on `/login`.
- **JWT flow** (real auth, currently unused by the demo UI): refresh token is set as HttpOnly cookie (`JWT_COOKIE_NAME = "refresh_token"`, `Lax` samesite) by `apps.custom_auth.api.viewsets.token.CustomTokenObtainPairView`; access token is returned in the body and stored client-side in the Zustand `authStore` (`frontend/src/store/authStore.js`). Auto-refresh lives in `frontend/src/api/apiClient.js`. Endpoints are centralized in `frontend/src/api/apiEndpoints.js`.
- **Frontend env**: `VITE_API_URL` is read at **build** time (Vite). In dev it comes from `frontend/.env`; in prod the production Dockerfile (`frontend/compose/production/Dockerfile`) takes it as a `VITE_API_URL` build arg — there is no runtime override. Traefik in `backend/compose/production/traefik/traefik.template.yml` routes `/api/*` → django, `/api/media/*` → nginx, everything else → frontend, so the prod `VITE_API_URL` is `/` (relative).
- **Production server**: gunicorn/uvicorn-worker binds `0.0.0.0:5000` (not `:8000`). Traefik hits `django:5000`. Healthcheck/port mappings in `docker-compose.production.yml` reflect this.
- **Environment variables are unified at the repo root.** `/.env.local.example` and `/.env.prod.example` are committed; copy them to `.env.local` (dev) and `.env` (prod). Those two real files are gitignored. `docker-compose.local.yml` and `backend/docker-compose.docs.yml` read `../.env.local`; `docker-compose.production.yml` and `docker-compose.dokploy.yml` read `./.env`. CI does `cp .env.local.example .env.local` before building. Don't commit `.env`/`.env.local` — `DJANGO_SECRET_KEY`, `POSTGRES_PASSWORD` must not leak.
- **No shell interpolation in env files.** `DATABASE_URL` and the `PGB_POSTGRES_*` values must be written out concretely; `${VAR}` in an `env_file` is not reliably expanded and silently yields `postgres://:@:/`.
- **`VITE_API_URL` is per-frontend** and stays in `frontend/.env` / `frontend-A2/.env`, not in the root env files.

## CI

`.github/workflows/ci.yml` (repo root) is the only workflow. It (1) runs `pre-commit/action`, (2) builds the django + postgres images with `docker/bake-action` and GHA cache, (3) runs `makemigrations --check` then `migrate` then `pytest` inside the local compose stack, (4) tears it down. Trigger on PR/push to `main`; `docs/**` is path-ignored. There is no separate frontend CI yet.

## Docs

`backend/docs/` is Sphinx (`make livehtml` runs in the `docs` service from `backend/docker-compose.docs.yml` on port 9000).
