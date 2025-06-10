import { Request, Response } from 'express';
import { Task } from '../../domain/entities/task.entity';
import { TaskService } from '../../infrastructure/services/task.service';  

const taskService = new TaskService();

export class TaskController {
  async getTasks(req: Request, res: Response) {
    try {
    const { userId } = req.params; 
    if (!userId) {
      return res.status(400).json({ message: 'El userId es requerido' });
    }

    const tasks = await taskService.getTasksByUserId(userId);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tareas', error });
  }
  }

  async addTask(req: Request, res: Response) {
  try {
    const { userId, title, description } = req.body; 
    if (!userId || !title || !description) {
      return res.status(400).json({ message: 'El userId, título y descripción son requeridos' });
    }

    const task: Task = {
      userId,
      title, 
      description,
      completed: false,
      createdAt: new Date(), 
    };

    const newTask = await taskService.addTask(task); 
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar tarea', error });
  }
}

  async updateTask(req: Request, res: Response) {
    try {
      const task = await taskService.updateTask(req.params.id, req.body);
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar tarea', error });
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      await taskService.deleteTask(req.params.id);
      res.json({ message: 'Tarea eliminada' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar tarea', error });
    }
  }
}
