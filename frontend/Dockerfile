# 1. Usamos una imagen ligera de Nginx
FROM nginx:alpine

# 2. Copiamos el contenido de nuestra carpeta local al servidor de Nginx
# Asegúrate de que tus archivos (index.html, etc.) estén en la carpeta 'frontend'
COPY . /usr/share/nginx/html

# 3. Exponemos el puerto 80
EXPOSE 80

# 4. Arrancamos Nginx
CMD ["nginx", "-g", "daemon off;"]