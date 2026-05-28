# Import: Megadulces-Logistica

**Source:** https://github.com/edgarcg-01/Megadulces-Logistica
**Branch:** main
**Commit imported:** `14d7fe087a496d03550f5798398cbde74ece12ce`
**Import date:** 2026-05-27
**Method:** `git archive` (no subtree link — repo importado como snapshot)
**Importado por:** Edgar via Claude Code session

## Stack confirmado (idéntico al nuestro)

- NestJS 11 + Knex + PostgreSQL + Passport JWT
- Angular 18 + PrimeNG 18 + NgRx + Capacitor (mobile)
- Tailwind + Spartan UI
- Nx 20 monorepo (apps + libs)

## Estructura origen

```
apps/
  logistica-api/   Backend NestJS
  logistica-view/  Frontend Angular (usa features/ no modules/)
libs/
  shared-auth/     Lib JWT/permissions/auth.guard reutilizable
database/
  migrations/  62 archivos (¡los 9 primeros son del fork Trade Marketing original!)
  seeds/       ~20 archivos
```

## Módulos backend (apps/logistica-api/src/app/modules/ + app/auth/)

Por inspección y README: shipments, fleet, costs, guides, staff, reports, config, auth, cron.

## Features frontend (apps/logistica-view/src/app/features/)

admin, auth, config, costs, dashboard, driver-assignments, fleet, guides, profile, projects, reports, shipments, staff

## DB Schema (12 tablas logistica_*, SINGLE-TENANT)

| Tabla | Función |
|---|---|
| `logistica_catalogo_destinos` | Catálogo rutas/destinos + comisiones |
| `logistica_colaboradores` | Choferes/ayudantes/cargadores (con NSS) |
| `logistica_unidades` | Vehículos (placa, modelo, rendimiento km/l, capacidad) |
| `logistica_periodos` | Catorcenales (períodos de pago) |
| `logistica_embarques` | Embarques (folio, unidad, ruta, km, flete, valor carga) |
| `logistica_guias` | Guías de entrega (chofer + 2 ayudantes, comisiones, viáticos) |
| `logistica_guias_destinatarios` | Clientes destinatarios por guía |
| `logistica_costos` | Costos del viaje (combustible, casetas, hospedaje, maniobras) |
| `logistica_detalles_carga` | Tarifas por colaborador en carga |
| `logistica_detalles_descarga` | Montos descarga (regreso/lab) |
| `logistica_liquidaciones` | Liquidaciones por colaborador y período |
| `logistica_config_finanzas` | Factores y costos por km, tarifas |

**⚠️ Sin tenant_id, sin RLS, sin schema (todo en `public`).** Migración a nuestro multi-tenant requiere:
- Mover a schema `logistics.*`
- Agregar `tenant_id UUID NOT NULL` + composite FK a `(tenant_id, id)` propio + FK a `public.tenants`
- RLS forzado + policy `tenant_isolation` + grants a `app_runtime`
- Refactor referencias internas (ej: `embarque_id` → composite FK)

## Conflictos potenciales con repo destino

### Backend
- `auth/` lib: este repo tiene su propia `shared-auth` lib → debemos elegir: adoptar `shared-auth` para todo OR descartar y usar nuestra `auth-mt` actual
- `cron`: ambos tienen scheduler activo — coexistencia OK pero hay que verificar nombres de jobs
- `users` table: las 9 migraciones iniciales del fork crearían `users` ya existente

### Frontend
- Distinta convención: ellos usan `features/`, nosotros usamos `modules/`
- NgRx (@ngrx/store, @ngrx/router-store) — no lo tenemos actualmente
- `motion`, `jspdf-autotable`, `puppeteer`, `pg-dump`, `streamifier`, `sharp` — deps adicionales

### Migraciones a DESCARTAR del origen (duplican lo que ya tenemos)
- `20260330165441_init_auth_schema`
- `20260330165442_init_captures_schema`
- `20260330165443_init_daily_captures_schema`
- `20260330165444_init_planograma_schema`
- `20260330165445_init_catalogs_schema`
- `20260330165446_init_scoring_schema`
- `20260330165447_init_field_operations_schema`
- `20260331000000_v2_daily_captures_schema`
- `20260331000001_v3_add_scores_to_catalogs`
- `20260331231959_add_gps_to_captures`

### Migraciones logística que SÍ migran (re-escritas para multi-tenant)
- `20260501000000_init_logistics_schema` y subsecuentes (~50 más)

## Próximos pasos (no ejecutados todavía)

1. Decidir estrategia: **A)** merge en `apps/api` + `apps/view` (consistente con trade/comercial) vs **B)** mantener `apps/logistica-api` + `apps/logistica-view` separadas.
2. Re-escribir migraciones logística-específicas para multi-tenant (`logistics.*` + `tenant_id` + RLS).
3. Reescribir services/controllers para usar `TenantKnexService`.
4. Definir permisos `LOGISTICS_*` en `Permission` enum (backend + frontend).
5. Agregar entry a `/projects` landing con card "Logística" → ruta `/logistica/*`.
6. Documentar en `docs/IMPLEMENTACION/FASES/FASE_J_LOGISTICA.md` (sprint nuevo).
