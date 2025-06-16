import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import axios from 'axios';  // ✅ Importa Axios solo una vez

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  server.use(express.json());  // ✅ Permite que Express procese JSON en las solicitudes

  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  server.post('/users/login', (req, res) => {
    res.json({ message: 'Login exitoso' });
  });

server.post('/users/register', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'El correo es obligatorio' });
  }

  try {
    const response = await axios.post('http://localhost:3000/users/register', { email });
    return res.json(response.data);  // ✅ Asegura que siempre haya un retorno
  } catch (error) {
    let errorMessage = 'Error al crear usuario';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return res.status(500).json({ message: errorMessage });  // ✅ Asegura que siempre haya un retorno
  }
});


  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;  // ✅ Usa el puerto correcto para `task-manager`

  const server = app();  // ✅ Llama a la función `app()` y guarda el resultado en `server`

  server.listen(port, () => {  // ✅ Usa `server.listen()` en lugar de `app.listen()`
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}

run();
