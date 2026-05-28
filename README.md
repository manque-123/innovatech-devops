# Innovatech Chile - Proyecto de Contenedorización y CI/CD

## Descripción
Este proyecto implementa una arquitectura de microservicios (Frontend y Backend) dockerizada y desplegada automáticamente en AWS EC2.

## Tecnologías Utilizadas
* **Docker & Docker Compose:** Orquestación de servicios.
* **GitHub Actions:** Pipeline de CI/CD (Build -> Push -> Deploy).
* **Docker Hub:** Registro y versionamiento de imágenes.
* **AWS EC2:** Infraestructura en la nube.

## Cómo ejecutar localmente
1. Clonar el repositorio.
2. Ejecutar `docker-compose up -d --build`.
3. Acceder a `localhost:80`.

## Pipeline CI/CD
El flujo automatizado realiza las siguientes etapas:
1. **Build:** Construcción de imágenes multi-stage.
2. **Push:** Publicación en Docker Hub (usuario jajakaj).
3. **Deploy:** Actualización automática en la instancia EC2 mediante SSH.
