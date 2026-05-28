# Megadulces Logística

Sistema de gestión logística para Megadulces, incluyendo control de embarques, flotilla, costos, guías y personal.

## 🚀 Tecnologías

- **Backend:** NestJS (Node.js 20)
- **Frontend:** Angular 18 + PrimeNG
- **Base de Datos:** PostgreSQL
- **ORM:** Knex.js
- **Contenedores:** Docker

## 📋 Características

- Gestión de embarques y rutas
- Control de flotilla (unidades, mantenimiento)
- Registro de costos operativos
- Gestión de guías de transporte
- Control de personal (choferes, ayudantes)
- Reportes de rentabilidad
- Dashboard con KPIs en tiempo real

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp apps/logistica-api/.env.example apps/logistica-api/.env

# Ejecutar migraciones de base de datos
npm run migrate:latest

# Ejecutar seeds de datos iniciales
npm run seed:run
```

## 🏃 Ejecutar en desarrollo

```bash
# Iniciar API
npm run api

# Iniciar Frontend
npm run view

# O iniciar ambos simultáneamente
npm start
```

## 🐳 Docker

```bash
# Construir imagen
docker build -t megadulces-logistica .

# Ejecutar contenedor
docker run -p 80:80 megadulces-logistica
```

## 📦 Scripts disponibles

- `npm run api` - Iniciar API backend
- `npm run view` - Iniciar frontend
- `npm run build` - Construir aplicaciones
- `npm run migrate:latest` - Ejecutar migraciones
- `npm run migrate:rollback` - Revertir última migración
- `npm run seed:run` - Ejecutar seeds

## 📁 Estructura del proyecto

```
├── apps/
│   ├── logistica-api/          # Backend NestJS
│   └── logistica-view/         # Frontend Angular
├── database/
│   ├── migrations/             # Migraciones de BD
│   └── seeds/                  # Datos iniciales
├── libs/
│   └── shared-auth/            # Librería compartida de autenticación
├── Dockerfile
└── package.json
```

## 🔐 Autenticación

El sistema incluye autenticación JWT con roles y permisos:
- Roles: admin, supervisor, operador
- Permisos granulares por módulo

## 📊 Módulos

- **Shipments:** Gestión de embarques
- **Fleet:** Control de flotilla
- **Costs:** Registro de costos
- **Guides:** Gestión de guías
- **Staff:** Control de personal
- **Reports:** Reportes y análisis
- **Config:** Configuración del sistema

## 🌐 Producción

Para despliegue en producción:

1. Configurar variables de entorno
2. Ejecutar migraciones
3. Construir aplicaciones: `npm run build`
4. Usar Docker para contenedorización

## 📝 Licencia

Propiedad de Megadulces
