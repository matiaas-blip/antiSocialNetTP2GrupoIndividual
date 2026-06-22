# 📘 UnaHur Anti-Social Net – Backend API

## Descripción

Este proyecto es el backend de la red social "UnaHur Anti-Social Net", desarrollado con Node.js, Express y MongoDB (Docker).

Permite la gestión de usuarios, publicaciones, comentarios, etiquetas e imágenes asociadas a posts.

---

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB (Docker)
- Mongoose
- dotenv
- cors

---

## Instalación y ejecución

### 1. Clonar el repositorio

git clone URL_DEL_REPO
cd antiSocialNetTP2GrupoIndividual

---

### 2. Instalar dependencias

npm install

---

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz:

PORT=3000  
MONGO_URI=mongodb://admin:admin1234@localhost:27017/tienda?authSource=admin  
REDIS_URL=redis://localhost:6379  
COMMENT_MONTHS=6  

---

### 4. Levantar MongoDB y Redis con Docker

docker compose up -d

Verificar contenedores:

docker ps

---

### 5. Ejecutar el servidor

npm run dev

---

## 🌐 Servidor

http://localhost:3000

---

## 📁 Estructura del proyecto

src/
│
├── config/
│   └── database.js
│
├── models/
│   ├── user.model.js
│   ├── post.model.js
│   ├── comment.model.js
│   ├── tag.model.js
│   └── postImage.model.js
│
├── routes/
│   ├── user.routes.js
│   ├── post.routes.js
│   ├── comment.routes.js
│   ├── tag.routes.js
│   └── postImage.routes.js
│
├── controllers/
│   ├── user.controller.js
│   ├── post.controller.js
│   ├── comment.controller.js
│   ├── tag.controller.js
│   └── postImage.controller.js
│
├── app.js
├── server.js

---

## Funcionalidades

### Usuarios
- Crear usuario
- Obtener usuarios
- Obtener usuario por ID
- Actualizar usuario
- Eliminar usuario

---

### Posts
- Crear post
- Obtener posts
- Obtener post por ID
- Filtrar por usuario
- Actualizar post
- Eliminar post

---

### Comentarios
- Crear comentario
- Obtener comentarios por post

---

### Tags
- Listar etiquetas

---

### Post Images
- Agregar imágenes a un post
- Obtener imágenes por post

---

## Endpoints

### Users
GET /users  
POST /users  
GET /users/:id  
PUT /users/:id  
DELETE /users/:id  

---

### Posts
GET /posts  
POST /posts  
GET /posts/:id  
GET /posts?userId=  
PUT /posts/:id  
DELETE /posts/:id  

---

### Comments
POST /comments  
GET /comments/post/:postId  

---

### Post Images
POST /postimages  
GET /postimages/post/:postId  

---

### Tags
GET /tags  

---

## Ejemplos

### Crear usuario

{
  "usuario": "matias",
  "clave": "123456",
  "image": "https://img.com/perfil.jpg",
  "seguidores": [],
  "fechaRegistro": "2026-06-22"
}

---

### Crear post

{
  "descripcion": "Mi primer post",
  "usuario": "ID_USER",
  "tags": ["hola", "tp"]
}

---

### Agregar imagen

{
  "url": "https://img1.jpg",
  "postId": "ID_POST"
}

---

### Comentario

{
  "texto": "buen post",
  "postId": "ID_POST",
  "usuario": "ID_USER"
}

---

## Docker

docker compose up -d

---

## Notas

- CORS habilitado para frontend (http://localhost:5173)
- MongoDB corre en Docker
- Login simulado en frontend (no JWT)

---

## Autor

Miramon

---

## Estado

✔ Backend funcional  
✔ API REST completa  
✔ MongoDB conectado  
✔ Docker funcionando  
✔ Listo para frontend