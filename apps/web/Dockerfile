ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine AS base
RUN apk update
RUN apk add git

FROM base AS pruner
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=@misterdonut/web --docker

FROM base AS builder
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
COPY --from=pruner /app/out/full/ .
COPY .gitignore .gitignore
COPY turbo.json turbo.json
COPY apps/web/.env apps/web/.env
RUN yarn install
RUN yarn turbo run build --scope=@misterdonut/web

FROM base as runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=builder /app/apps/web/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone/ ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
ENV PORT 3000 \
    NODE_ENV production
EXPOSE 3000
CMD ["node", "apps/web/server.js"]



