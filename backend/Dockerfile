# ETAPA 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .

# ETAPA 2: Run
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 5000
CMD ["node", "server.js"]