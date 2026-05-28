# ============================================================
# STAGE 1: Dependencias — compartido por todos
# ============================================================
FROM node:20.12.2-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN --mount=type=cache,id=s/d33bf9cc-6129-498d-a638-62273a7620d4-npm,target=/root/.npm \
    npm ci


# ============================================================
# STAGE 2: Build ALL apps — un solo nx build para todo
# ============================================================
FROM node:20.12.2-alpine AS builder
WORKDIR /app

ENV NX_DAEMON=false \
    CI=true \
    NODE_OPTIONS="--max-old-space-size=4096"

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN --mount=type=cache,id=s/d33bf9cc-6129-498d-a638-62273a7620d4-nx,target=/app/.nx/cache \
    npm run build


# ============================================================
# STAGE 3: Prod node_modules — compartido por apis
# ============================================================
FROM node:20.12.2-alpine AS prod-deps
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN --mount=type=cache,id=s/d33bf9cc-6129-498d-a638-62273a7620d4-npm,target=/root/.npm \
    npm ci --omit=dev


# ============================================================
# TARGET: main-app  (view + api + nginx juntos)
# Railway: docker build --target main-app .
# ============================================================
FROM node:20.12.2-slim AS main-app

RUN apt-get update && apt-get install -y nginx gettext-base && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
ENV NODE_ENV=production \
    API_PORT=3333 \
    API_PREFIX=api

COPY --from=builder /app/dist/apps/view ./dist/apps/view
COPY --from=builder /app/dist/apps/api ./dist/apps/api
COPY --from=builder /app/database ./database
COPY --from=prod-deps /app/node_modules ./node_modules

COPY nginx.conf /etc/nginx/sites-available/default
COPY start.sh ./start.sh
RUN chmod +x ./start.sh

RUN mkdir -p /usr/share/nginx/html && \
    cp -r dist/apps/view/browser/* /usr/share/nginx/html/

EXPOSE 10000
CMD ["./start.sh"]


# ============================================================
# TARGET: logistica-view  (Angular estático en nginx)
# Railway: docker build --target logistica-view .
# ============================================================
FROM nginx:1.27-alpine AS logistica-view

COPY --from=builder /app/dist/apps/logistica-view/browser /usr/share/nginx/html
COPY apps/logistica-view/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# ============================================================
# TARGET: logistica-api  (NestJS)
# Railway: docker build --target logistica-api .
# ============================================================
FROM node:20.12.2-alpine AS logistica-api

WORKDIR /app
ENV NODE_ENV=production

COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist/apps/logistica-api ./dist
COPY --from=builder /app/dist/apps/logistica-view/browser ./public

COPY --from=builder /app/package.json ./package.json

# Copy database & script for migrations
COPY database ./database
COPY start.sh ./start.sh
RUN chmod +x ./start.sh

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000
CMD ["sh", "./start.sh"]