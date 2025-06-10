# Backend de Lista de Tareas

Este es el backend de una aplicación de lista de tareas desarrollada con **Node.js**, **Express** y **TypeScript**.

## 🚀 Instalación y configuración en local

1. **Abre Visual Studio Code** y crea una carpeta llamada `backend`.  
2. **Copia y pega** todos los archivos y carpetas que te proporcioné en `backend/`.  
3. **Abre la terminal en Visual Studio Code** y navega a la carpeta `backend`:  
   ```bash
   cd backend
Inicializa el proyecto (esto ya lo hiciste):

bash
npm init -y
Instala las dependencias necesarias:

bash
npm install express cors firebase-admin dotenv
npm install --save-dev typescript ts-node @types/express @types/cors
Configura el archivo .env en la raíz del proyecto (backend/.env):

env
PORT=3000
Compila TypeScript:

bash
npm run build
Ejecuta el backend en modo desarrollo:

bash
npm run dev
📌 Endpoints disponibles
POST /users/register → Registra un usuario.

POST /users/login → Inicia sesión.

GET /tasks/:userId → Obtiene todas las tareas de usuario.

POST /tasks → Agrega una tarea.

PUT /tasks/:id → Edita una tarea.

DELETE /tasks/:id → Elimina una tarea.

🛠 Tecnologías utilizadas
Node.js

Express

TypeScript

Firebase Firestore