FROM node:18-alpine

# Crear carpeta de trabajo
WORKDIR /app

# Copiar SOLO el archivo del servidor
COPY server.js .

# Exponer el puerto
EXPOSE 5000

# Arrancar el servidor
CMD ["node", "server.js"]