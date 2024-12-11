# Этап сборки
FROM node:18-alpine AS builder
WORKDIR /app

# Установка pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Копирование файлов зависимостей
COPY pnpm-lock.yaml ./
COPY package.json ./

# Установка зависимостей
RUN pnpm install --frozen-lockfile

# Копирование исходного кода
COPY . .

# Сборка приложения
RUN pnpm build

# Продакшен образ
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Установка pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Создание системного пользователя
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копирование собранного приложения
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Установка только production зависимостей
RUN pnpm install --prod --frozen-lockfile

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]