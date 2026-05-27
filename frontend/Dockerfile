# ETAPA 1: Construcción (Multi-stage)
FROM nginx:alpine AS build
WORKDIR /usr/share/nginx/html
COPY . .

# ETAPA 2: Ejecución (Mínimo privilegio)
FROM nginx:alpine
COPY --from=build /usr/share/nginx/html /usr/share/nginx/html
EXPOSE 80