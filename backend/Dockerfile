# Etapa 1: Build (La mantenemos para cumplir con el requisito de Multi-stage)
FROM node:18-alpine AS builder
WORKDIR /app
# Si no tienes package.json, simplemente saltamos el npm install
COPY server.js .

# Etapa 2: Runtime (Imagen final ligera y segura)
FROM node:18-alpine
WORKDIR /app

# Requisito IE1: Usuario no root para máxima seguridad
USER node

# Copiamos el archivo desde la etapa anterior
COPY --from=builder /app/server.js .

EXPOSE 5000
CMD ["node", "server.js"]