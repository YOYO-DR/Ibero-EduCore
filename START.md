# START.md — Guía para renombrar educore

Esta guía te ayuda a renombrar `educore` a tu nuevo proyecto en **5-10 minutos**.

---

## 0. Pre-requisitos

Define 3 variantes de tu nombre de proyecto:

| Variante | Valor ejemplo |
|----------|---------------|
| **kebab** (Docker, URL) | `mi-proyecto` |
| **snake** (Python, variables) | `mi_proyecto` |
| **Title** (humano) | `Mi Proyecto` |

---

## 1. Find-and-replace global

Ejecuta este comando desde la raíz del proyecto (reemplaza `mi-proyecto` y `mi_proyecto` con tus valores):

```bash
find . -type f \
  -not -path './.git/*' \
  -not -path './node_modules/*' \
  -not -path './.venv/*' \
  -not -path './**/__pycache__/*' \
  -not -path './dist/*' \
  -not -path './planes/*' \
  -not -path './.serena/*' \
  -not -path './.opencode/*' \
  -not -path './.claude/*' \
  -exec sed -i 's/educore/mi-proyecto/g' {} \; \
  -exec sed -i 's/educore/mi_proyecto/g' {} \;
```

---

## 2. Cambios manuales post-find-and-replace

### 2.1 Mover directorio de la app Django

```bash
mv backend/educore backend/mi_proyecto
```

### 2.2 Verificar `pyproject.toml`

En `backend/pyproject.toml`, verifica que `name` y el `include` de `tool.coverage.run` se actualizaron correctamente.

### 2.3 Verificar `celery_app.py`

En `backend/config/celery_app.py`, verifica que el nombre del broker sea correcto (debe coincidir con `mi_proyecto`).

### 2.4 Volúmenes Docker

En los 3 archivos `docker-compose.*.yml`, verifica que los nombres de volumenes se actualizaron:
- `educore_local_*` → `mi_proyecto_local_*`
- `production_django_*` → `mi_proyecto_django_*`

### 2.5 Variables de entorno (raíz del repo)

Las variables viven en la **raíz**, un archivo por entorno. Los `.example` sí se
versionan; los archivos reales no.

```bash
cp .env.local.example .env.local   # desarrollo  -> docker-compose.local.yml
cp .env.prod.example .env          # producción  -> docker-compose.{production,dokploy}.yml
```

En `.env` (producción) cambia:
- `DOMAIN=<tu-dominio>` → `mi-dominio.com`
- `DJANGO_ALLOWED_HOSTS=.<tu-dominio>` → `.mi-dominio.com`
- `DJANGO_CORS_ALLOWED_ORIGINS=https://<tu-dominio>` → `https://mi-dominio.com`
- `DJANGO_CSRF_TRUSTED_ORIGINS=https://<tu-dominio>` → `https://mi-dominio.com`

### 2.6 `frontend/package.json` y `frontend-A2/package.json`

Verifica que `name` se actualizó a `mi-proyecto` (y `mi-proyecto-a2` si conservas
el segundo frontend).

### 2.7 Regenerar `DJANGO_SECRET_KEY`

Genera una nueva clave segura:

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Actualiza `DJANGO_SECRET_KEY` en `.env.local` (desarrollo) y `.env` (producción).
El `.env.prod.example` trae el marcador `<generar>` a propósito.

### 2.8 `POSTGRES_DB` y password

En `.env.local` y `.env`:
- `POSTGRES_DB=mi_proyecto` (y `PGB_POSTGRES_DB` a mano: no se interpola `${VAR}`)
- Cambia `POSTGRES_PASSWORD` y `PGB_POSTGRES_PASSWORD` a un password seguro
- `DATABASE_URL` es una URL **concreta**: repite esos mismos valores

### 2.9 Reescribir `README.md`

Borra o reescribe el `README.md` con la información de tu proyecto.

### 2.10 `backend/.gitignore`

Verifica que la línea `<project_snake>/media/` esté correcta.

### 2.11 Sufijo de servicios Docker (`_plantilla`)

En `docker-compose.dokploy.yml`, **todos los servicios y volúmenes usan el sufijo `_plantilla`** para evitar colisiones de hostname en la red `dokploy-network`:

```yaml
services:
  django_plantilla:      # NO solo "django"
  pgbouncer_plantilla:
  redis_plantilla:
  traefik_plantilla:
  celeryworker_plantilla:
  celerybeat_plantilla:
  flower_plantilla:
  nginx_plantilla:
  frontend_plantilla:
```

Y en `backend/compose/production/traefik/traefik.template.yml`, los `loadBalancer.servers.url` apuntan a esos hostnames:

```yaml
services:
  django:
    loadBalancer:
      servers:
        - url: http://django_plantilla:5000
  django-media:
    loadBalancer:
      servers:
        - url: http://nginx_plantilla:80
  frontend:
    loadBalancer:
      servers:
        - url: http://frontend_plantilla:80
```

**Por qué:** cuando varios proyectos conviven en el mismo host con Dokploy, los contenedores comparten la red `dokploy-network`. Si dos proyectos definen un servicio `django` (mismo hostname), Traefik los confunde y termina resolviendo las peticiones contra el proyecto equivocado. El sufijo encapsula cada stack bajo su propio namespace DNS.

Después del find-and-replace de `educore` → `mi_proyecto`, **sustituye `_plantilla` por `_mi_proyecto`** en ambos archivos:

```bash
sed -i 's/_plantilla/_mi_proyecto/g' docker-compose.dokploy.yml backend/compose/production/traefik/traefik.template.yml
```

`docker-compose.production.yml` y `docker-compose.local.yml` se ejecutan aislados (sin red Dokploy compartida), por eso no necesitan sufijo.

### 2.12 Variables de entorno fuera del repo

`/.gitignore` ya ignora `.env`, `.env.local` y `.env.prod` y permite
`!.env.*.example`. Antes de producción verifica que ninguno de los archivos
reales esté trackeado:

```bash
git status --ignored | grep -E '^!!? .*\.env'
```

### 2.13 Ocultar `.envs/` del repo (legado)

En `backend/.gitignore`, **descomenta** las 2 líneas del bloque "PLANTILLA BASE":

```gitignore
.envs/*
!.envs/.local/
```

Nota legada: `backend/.envs/` ya no existe (Fase 4 del plan de frontends);
las variables se unificaron en la raíz. Este bloque queda por si un fork
viejo todavía las usa. Por que: en este repo base las `.envs/` estan comentadas a proposito
para que se commiteen y un dev que clona la plantilla vea que variables
existen. En un proyecto real nunca debes commitear `DJANGO_SECRET_KEY`,
`POSTGRES_PASSWORD`, `RESEND_API_KEY` ni ninguna credencial.

Despues de descomentar:

```bash
# Verifica que el .envs/.production/ ya no se trackea
git rm --cached -r backend/.envs/.production/
git status  # .envs/.production/ debe aparecer como ignored
```

### 2.14 Regenerar `uv.lock`

```bash
cd backend && uv lock
```

---

## 3. Apps Django internas

Esta plantilla incluye las siguientes apps Django:

| App | Descripción |
|-----|-------------|
| `users` | Modelo User con allauth + MFA |
| `custom_auth` | SimpleJWT: login, refresh, logout |

**Cómo añadir nuevas apps:**

```bash
cd backend
python manage.py startapp mi_app
# Luego añade a LOCAL_APPS en config/settings/base.py:
# "mi_proyecto.mi_app",
```

---

## 4. Verificación post-rename

Ejecuta estos comandos para confirmar que todo funciona:

```bash
# 1. Verificar que no quedan residuos de "plantilla"
grep -r "plantilla" --include="*.py" --include="*.js" --include="*.yml" backend/ frontend/ . | grep -v ".git" | grep -v "planes" | grep -v "START.md"

# 2. Verificar que Django arranca
cd backend && python manage.py check

# 3. Verificar que el compose es válido
docker compose -f docker-compose.local.yml config --quiet

# 4. Crear superusuario
just manage-direct-db createsuperuser

# 5. Login en navegador
# Abre http://localhost:5173 y verifica que el login funciona
```

---

## 5. Limpieza opcional

Después de verificar que todo funciona, puedes borrar:

```bash
rm START.md
rm -rf planes/
rm -rf .serena/
rm -rf .opencode/
rm -rf .claude/
```

---

## 6. Checklist final

- [ ] `grep -r "plantilla" backend/ frontend/` devuelve vacío (excepto archivos de docs)
- [ ] `docker compose -f docker-compose.local.yml config --quiet` pasa sin errores
- [ ] `docker compose -f docker-compose.production.yml config --quiet` pasa sin errores
- [ ] `docker compose -f docker-compose.dokploy.yml config --quiet` pasa sin errores
- [ ] `python manage.py check` pasa sin errores
- [ ] `uv lock` se ejecutó sin errores
- [ ] `DJANGO_SECRET_KEY` es nuevo y seguro
- [ ] `POSTGRES_DB`, `POSTGRES_PASSWORD` y `DATABASE_URL` están actualizados en `.env.local` y `.env`
- [ ] `DJANGO_ALLOWED_HOSTS` apunta al dominio correcto
- [ ] `frontend/package.json` tiene el nombre correcto
- [ ] `just manage-direct-db createsuperuser` funciona
- [ ] Login en http://localhost:5173 funciona con el superusuario creado
- [ ] `.env` / `.env.local` no estan trackeados (solo los `.env.*.example`)
