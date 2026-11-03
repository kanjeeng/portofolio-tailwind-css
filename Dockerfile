# STAGE 1: dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# STAGE 2: builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Secret ASLI tidak boleh masuk saat build. Placeholder hanya agar `next build` tidak error.
# Nilai asli disuntik saat runtime dari Kubernetes Secret (portofolio-secrets).
ENV RESEND_API_KEY=build-placeholder
ENV CONTACT_TO_EMAIL=build@example.com
ENV NEXT_TELEMETRY_DISABLED=1
ARG APP_VERSION=1.0.0
ENV NEXT_PUBLIC_APP_VERSION=$APP_VERSION
RUN npm run build

# STAGE 3: runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOSTNAME="0.0.0.0" NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/ >/dev/null 2>&1 || exit 1
CMD ["node", "server.js"]