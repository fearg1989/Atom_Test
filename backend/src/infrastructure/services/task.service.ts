import { TaskRepository } from '../repositories/task.repository';
import { Task } from '../../domain/entities/task.entity';

const taskRepository = new TaskRepository();

export class TaskService {

  async getTasksByUserId(userId: string): Promise<Task[]> {
    const tasks = await taskRepository.getTasks(userId);
    return tasks.filter(task => task.userId === userId);
  }

  async addTask(task: Task): Promise<Task> {
    return await taskRepository.addTask(task);
  }

  async updateTask(id: string, task: Partial<Task>): Promise<Task> {
    return await taskRepository.updateTask(id, task);
  }

  async deleteTask(id: string): Promise<void> {
    await taskRepository.deleteTask(id);
  }
}
