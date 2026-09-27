# Plan: dos frontends React separados (A3 y A2)

**Fecha:** 2026-09-27
**Estado:** v2, con las respuestas del usuario incorporadas. Pendiente de aprobación.

## Objetivo

Tener dos frontends React independientes para presentar, sin mezclar código ni estilos en un mismo proyecto. Son **solo frontend**: el login no llama al backend.

| Carpeta | Plantillas | Rutas | Puerto dev |
|---|---|---|---|
| `frontend/` | A3: `EduCore-3A` + `EduCoreAdmin-3A` | `/`, `/login`, `/admin` | 5173 |
| `frontend-A2/` | A2: `EduCore-2A` + `EduCoreA2Admin` | `/`, `/login`, `/admin` | 5174 |

## Plantillas (`frontend/plantilla-claude/`)

| Archivo | Estado |
|---|---|
| `EduCoreLanding-3A.jsx` / `EduCore-3A.html` | Ya portada a `src/presentation/components/landing/`. Hay que resincronizarla. |
| `EduCoreAdmin-3A.jsx` / `.html` | Por portar. Estilo crema, Newsreader + IBM Plex Mono, bordes negros y sombra dura, acento `#C2410C`. |
| `EduCoreLanding-2A.jsx` / `EduCore-2A.html` | Por portar. Fondo `#0a0e1a`, Inter 800 + Roboto Mono, acento `#3b82f6`. |
| `EduCoreA2Admin.jsx` / `.html` | Por portar. Slate `#0F172A`/`#0B1222`, Inter, acento sky `#0EA5E9`, bordes redondeados e iconos SVG. |
| Login | **No hay plantilla.** Lo derivo de los tokens de cada plantilla (ver "Login"). |

## Comportamiento común (los dos frontends)

- **Sesión simulada:**
  - En `authStore` (Zustand) añado `demoLoggedIn` + `demoLogin()` / `demoLogout()`, guardado en `sessionStorage` para que un recargo no te saque.
  - No se usa `authService`/`apiClient`. Esos archivos quedan en el repo sin uso, por si luego se conecta el backend.
- **Flujo:**
  - "Iniciar sesión" (landing) → `/login`.
  - En el login, el botón "Ingresar" llama a `demoLogin()` y navega a `/admin`, sin validar nada. Los campos pueden ir vacíos.
- **Guard:** `/admin` sin sesión redirige a `/login`. Es un `<RequireDemoAuth>` pequeño en `routes/index.jsx`.
- **Salir:** clic en el avatar/usuario del header del admin → `demoLogout()` → `/`. Es el único elemento nuevo en el admin.
- **Rutas:** en `routePaths.js` agrego `admin: { path: '/admin' }` junto a los que ya existen.
- **Limpieza:** borro `src/pages/LoginPage.jsx`, que es un duplicado muerto.

## Login (diseño derivado, dos columnas)

Estructura igual en ambos, estilos distintos:

```
┌──────────────────────────────┬─────────────────────┐
│ Marca EduCore                │                     │
│                              │   Iniciar sesión    │
│ Frase grande de la landing   │   [ Correo       ]  │
│ ("Del Excel al boletín…")    │   [ Contraseña   ]  │
│                              │   [  Ingresar  ]    │
│ Dato de apoyo (69,4% /       │   ← Volver al inicio│
│ "sin pagar por estudiante")  │                     │
└──────────────────────────────┴─────────────────────┘
   ≤900px: panel izquierdo compacto arriba, form abajo (una columna)
```

- **A3:**
  - Izquierda: fondo `#1E293B` con texto crema, titular Newsreader con cursiva `#C2410C` y etiquetas IBM Plex Mono.
  - Derecha: fondo crema punteado, inputs con borde de 2px `#1E293B` y botón `#C2410C` con sombra dura negra.
- **A2:**
  - Izquierda: `#0a0e1a` con titular Inter 800 y el tramo en azul `#3b82f6`, como el hero de la landing A2.
  - Derecha: tarjeta `#162033` con borde `#2A3650` y radio 8px, inputs `#0F172A` y botón `#0EA5E9`, como el admin A2.

---

## Fase 1: `frontend/` (A3)

1. **Resincronizar la landing A3.** Comparo `EduCoreLanding-3A.jsx` con los `Landing*.jsx` y aplico solo las diferencias. Conservo el ancho completo y el padding de `.mag-band`.
2. **Admin A3:**
   - `src/presentation/pages/AdminPage.jsx`
   - `src/presentation/components/admin/`: `AdminSidebar.jsx`, `AdminTopbar.jsx`, `AdminKpis.jsx`, `GradesSheet.jsx`, `admin.css` (prefijo `adm-*`)
   - Los estilos inline de la plantilla pasan a clases.
   - La clase pasa a función con `useState`, con la misma lógica: regex de entrada, definitiva 40/40/20, niveles, búsqueda, contador de cambios, promedio y prop `readOnly`.
   - Los datos son los 6 estudiantes mock de la plantilla.
3. **Responsive del admin** (la plantilla solo usa `clamp` y no tiene breakpoints):
   - ≤1024px: el sidebar pasa a drawer con botón ☰ en el header, y los KPIs a 2 columnas.
   - ≤640px: KPIs en 1 columna, `h1` más pequeño y paddings de 20px.
   - La tabla mantiene su scroll horizontal interno.
4. **Login A3** (`presentation/pages/LoginPage.jsx` + `components/login/login.css`), según el diseño de arriba.
5. **Enlaces:** "Iniciar sesión" y "Crear mi colegio" de la landing apuntan a `/login`.

## Fase 2: `frontend-A2/`

1. **Clonar** `frontend/` terminado a `frontend-A2/`, sin copiar `node_modules/`, `dist/`, `.playwright-mcp/`, `*.png` ni `plantilla-claude/`.
2. **Ajustes del clon:**
   - `package.json` → `"name": "frontend-a2"`
   - `vite.config.js` → `port: 5174`
   - `index.html`: fuentes Inter 300–800 + Roboto Mono, y nuevo `<title>`
   - `src/index.css`: fondo `body` `#0a0e1a`, `#root` a ancho completo
   - `pnpm install`
3. **Landing A2:**
   - Reemplazo `components/landing/` por los bloques de `EduCoreLanding-2A.jsx`: Nav, Hero, StatsBar, Costos, Cómo funciona, Roles, Seguridad, Piloto y Footer.
   - `landing.css` con los breakpoints de la plantilla (1100/860/640).
   - Quito `max-width: 1280px` para que ocupe todo el ancho.
   - Agrego un menú ☰ en ≤860px, porque la plantilla solo oculta los links.
   - Añado el botón "Iniciar sesión" junto a "Hablar con el equipo".
4. **Admin A2** desde `EduCoreA2Admin.jsx`:
   - Misma estructura de componentes que A3; `GradesSheet` usa la misma lógica.
   - Mantiene los iconos SVG, los badges redondeados, el chip "A2-ADMIN" y los botones de la plantilla.
   - Mismo responsive que el admin A3 (drawer ≤1024px y KPIs apilados).
5. **Login A2**, según el diseño de arriba.

## Fase 3: Docker y documentación

1. **Local: dos contenedores.** `just up` levanta los dos frontends a la vez. En `docker-compose.local.yml`:
   - El servicio `frontend` queda igual: `./frontend`, puerto 5173.
   - Agrego el servicio `frontend-a2`:
     - `context: ./frontend-A2`, `dockerfile: ./compose/local/Dockerfile`
     - Imagen y `container_name`: `educore_local_frontend_a2`
     - Volúmenes `./frontend-A2:/app` + `/app/node_modules`
     - `env_file: ./frontend-A2/.env`
     - Puertos `5174:5174`, `depends_on: django`
   - En el clon, `compose/local/Dockerfile` pasa a `EXPOSE 5174`. El puerto real lo fija `vite.config.js`.
2. **Dokploy y producción: sin cambios.** `docker-compose.dokploy.yml` (servicio `frontend_educore`) y `docker-compose.production.yml` siguen con `context: ./frontend`.
   - Para desplegar A2 basta con cambiar esa línea a `context: ./frontend-A2`.
   - Para que funcione, el clon conserva su `compose/production/` (el Dockerfile y la configuración de nginx), igual que `frontend/`.
3. Actualizo `CLAUDE.md`: menciono `frontend-A2/`, el puerto 5174, la sesión simulada y la ruta `/admin`.

## Fase 4: variables de entorno unificadas en la raíz

**Situación actual:**
- Local lee `backend/.envs/.local/{.django,.postgres}`.
- `docker-compose.production.yml` lee `backend/.envs/.production/{.django,.postgres}`.
- `docker-compose.dokploy.yml` ya lee `./.env` en la raíz.
- `backend/docker-compose.docs.yml` lee `.envs/.local/.django`.
- `merge_production_dotenvs_in_dotenv.py` junta los de producción en un solo archivo.

**Objetivo:** un solo archivo por entorno en la raíz, con todas las variables del backend, Postgres, pgbouncer, Redis, Flower, JWT, Traefik y los límites de Dokploy. Los frontends conservan su `.env` en su carpeta, así que `VITE_API_URL` de desarrollo sigue en `frontend/.env` y `frontend-A2/.env`.

| Archivo en la raíz | En git | Lo usa |
|---|---|---|
| `.env.local.example` | sí | Plantilla de local: se copia a `.env.local` |
| `.env.prod.example` | sí | Plantilla de producción: se copia a `.env` o se pega en Dokploy |
| `.env.local` | **no** | `docker-compose.local.yml` y `backend/docker-compose.docs.yml` |
| `.env` | **no** | `docker-compose.production.yml` y `docker-compose.dokploy.yml`. Compose también lo lee solo para interpolar `${VITE_API_URL}`, `${DJANGO_CPU}`, etc. |

**Pasos:**
1. **Crear `.env.local.example`:**
   - Uno `.envs/.local/.django` + `.postgres` en un archivo con secciones (General, Postgres, pgbouncer, Redis, Flower, JWT).
   - Los valores de desarrollo se quedan tal cual, porque son los de debug de la plantilla.
   - Creo `.env.local` a partir de ese ejemplo para las pruebas.
2. **Crear `.env.prod.example`:**
   - Uno `.envs/.production/.django` + `.postgres` con sus comentarios (Traefik/Domain, `VITE_API_URL=/`, límites de Dokploy).
   - Los secretos van como marcadores: `DJANGO_SECRET_KEY=<generar>`, `POSTGRES_PASSWORD=<cambiar>`, etc.
   - El `DJANGO_ADMIN_URL` real **no** se copia.
3. **Compose:**
   - `docker-compose.local.yml`: django, postgres y pgbouncer (y los servicios que heredan de `*django`) pasan a `env_file: ./.env.local`. `frontend` y `frontend-a2` siguen con su `.env` propio.
   - `docker-compose.production.yml`: todos los `env_file` pasan a `./.env`.
   - `docker-compose.dokploy.yml`: ya usa `./.env`, **no se toca**.
   - `backend/docker-compose.docs.yml`: pasa a `env_file: ../.env.local`.
4. **`.gitignore` en la raíz** (nuevo): `.env`, `.env.local` y `.env.prod`, permitiendo `!.env.*.example`.
5. **Limpieza** (se borra, está en git si hace falta volver):
   - `backend/.envs/`
   - `backend/merge_production_dotenvs_in_dotenv.py` y `backend/tests/test_merge_production_dotenvs_in_dotenv.py`, que ya no hacen falta porque el `.env` de producción viene unificado.
   - Las reglas `.envs` de `backend/.gitignore` y `backend/.dockerignore`.
6. **`justfile`:** `COMPOSE_FILE := "docker-compose.local.yml"` es relativo a `backend/`, pero el compose está en la raíz. Compruebo que `just up` funcione desde `backend/`. Si no funciona, lo cambio a `../docker-compose.local.yml`.
7. **CI** (`backend/.github/workflows/ci.yml`): añado el paso `cp .env.local.example .env.local` antes del build, porque `.env.local` no se sube a git.
8. **Documentación:** en `START.md` cambio las secciones de `.envs` (2.x y 2.12 y el checklist) por "copia el `.example` y cambia X". Actualizo `AGENTS.md` y `CLAUDE.md`.

**QA de contenedores:**
- **Local:**
  - Desde cero: `cp .env.local.example .env.local`, luego `just build` y `just up`.
  - `docker compose ps` muestra **todos** en `running`: django, postgres, pgbouncer, redis, celeryworker, celerybeat, flower, frontend y frontend-a2.
  - En los logs no hay errores de variables faltantes.
  - `just manage-direct-db migrate` funciona.
  - Responden: `curl :8002/api/` (django), `:5555` (flower), `:5173` (A3) y `:5174` (A2).
  - Un login real contra la API sigue funcionando, lo que confirma CORS y JWT con las variables nuevas.
- **Producción:**
  - Desde la plantilla: `cp .env.prod.example .env` (con valores de prueba).
  - `docker compose -f docker-compose.production.yml config` y `-f docker-compose.dokploy.yml config` salen sin errores ni variables vacías.
  - `docker compose -f docker-compose.production.yml build` pasa.
  - Levanto con ese compose django, postgres, pgbouncer, redis, celeryworker y frontend, y verifico que queden `running`. Traefik y Dokploy no se prueban en local porque necesitan el dominio y los certificados reales.
  - Al final borro ese `.env` de prueba.

## Verificación

- En cada frontend: `pnpm lint` y `pnpm build` sin errores.
- `just up` levanta `educore_local_frontend` (:5173) y `educore_local_frontend_a2` (:5174), y los dos responden.
- `docker build` de `frontend-A2/compose/production/Dockerfile` pasa, así que cambiar el `context` en Dokploy funciona.
- Playwright en 1920, 1280, 768 y 390 px, en los dos frontends:
  - `/`: ancho completo, sin scroll horizontal y con el menú ☰ funcionando.
  - `/admin` sin sesión redirige a `/login`.
  - En `/login`, "Ingresar" con los campos vacíos lleva a `/admin`, y la sesión sobrevive a un recargo.
  - `/admin`: al editar una nota se recalculan la definitiva y el nivel, la búsqueda filtra, "Guardar" limpia el contador y el drawer funciona en ≤1024px.
  - Clic en el usuario → vuelve a `/`, y `/admin` vuelve a pedir login.
- Capturas en `.playwright-mcp/` de cada frontend.

## Decisiones cerradas

1. El Admin A2 sale de la plantilla `EduCoreA2Admin`, no se deriva.
2. `/admin` sin sesión → `/login`.
3. Login y admin con el estilo exacto de cada plantilla. Diseño del login en dos columnas.
4. Todo es frontend: login simulado, sin backend.
5. Local levanta los dos frontends en dos contenedores. En Dokploy y producción el frontend se elige cambiando el `context`.
6. Un `.env` unificado en la raíz por entorno (`.env.local.example` y `.env.prod.example`). Los frontends conservan su `.env`.

## Orden de ejecución

Fases 1 → 2 → 3 → 4. La fase 4 va al final para que su QA de contenedores ya incluya `frontend-a2`. Después, la verificación completa.
