# Atom_Test

Proyecto de lista de tareas con **Node.js**, **Express**, **TypeScript** y **Firebase**.

---

## Estructura del Proyecto

```
Atom_Test/
│
├── backend/
│   ├── public/         # Frontend (HTML + JS con Firebase)
│   ├── src/            # Backend (API REST)
│   └── ...
└── ...
```

---

## 🚀 Instalación y configuración en local

### Backend

1. Abre tu terminal y navega a la carpeta del backend:
   ```bash
   cd backend
   ```
2. Inicializa el proyecto (si no lo hiciste antes):
   ```bash
   npm init -y
   ```
3. Instala las dependencias necesarias:
   ```bash
   npm install express cors firebase-admin dotenv
   npm install --save-dev typescript ts-node @types/express @types/cors
   ```
4. Configura las variables de entorno en `backend/.env`:
   ```
   PORT=3000
   FIREBASE_SERVICE_ACCOUNT=path/al/archivo/credenciales-firebase.json
   ```
5. Configura las variables de la base de datos enviada por correo:
```
Crea el Archivo 'firebase-service-account.json'
en la ruta:
backend/src/infrastructure/database/config/firebase-service-account.json
```

7. Compila TypeScript:
   ```bash
   npm run build
   ```
6. Ejecuta el backend en modo desarrollo:
   ```bash
   npm run dev
   ```

### Frontend

El frontend es una SPA (Single Page Application) básica en `backend/public` que usa Firebase para autenticación y base de datos. Para probarlo en local:

1. Instala el cliente Angular ejecutando 'npm install -g @angular/cli' en la ruta frontend.
2. Ejecutar el front con:
   ```
   ng serve
   ```

---

## 🛣️ Rutas principales del backend

- **Usuarios**
  - `POST /users/register` → Registra un usuario.
  - `POST /users/login` → Inicia sesión.

- **Tareas**
  - `GET /tasks/:userId` → Obtiene todas las tareas de un usuario.
  - `POST /tasks` → Agrega una tarea.
  - `PUT /tasks/:id` → Edita una tarea existente.
  - `DELETE /tasks/:id` → Elimina una tarea.

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- Firebase (Firestore)

---

## 🙌 Notas adicionales

- Debes tener las credenciales de Firebase (`credenciales-firebase.json`) para la conexión con Firestore.
- El archivo `.env` debe contener la ruta correcta al archivo de credenciales.
- El frontend está pensado para integrarse directamente con Firebase Hosting, pero puedes hacer pruebas locales desde `public/`.

---
