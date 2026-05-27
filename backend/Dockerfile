# Etapa 1: Build (Construcción)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

# Etapa 2: Runtime (Imagen ligera y segura)
FROM node:18-alpine
WORKDIR /app
# Crear usuario no root (Requisito IE1)
USER node
COPY --from=builder /app/node_modules ./node_modules
COPY server.js .
EXPOSE 5000
CMD ["node", "server.js"]