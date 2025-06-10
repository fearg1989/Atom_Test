import express from 'express';
import cors from 'cors';
import taskRoutes from './interfaces/routes/task.routes';
import userRoutes from './interfaces/routes/user.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes); 
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('✅ API funcionando correctamente en el puerto 3000');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('✅ Servidor corriendo en el puerto ${PORT}'));
