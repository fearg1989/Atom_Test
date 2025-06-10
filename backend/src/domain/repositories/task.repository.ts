import { Task } from '../entities/task.entity';

export interface TaskRepository {
  getTasks(userId: string): Promise<Task[]>;
  createTask(task: Task): Promise<Task>;
  deleteTask(taskId: string): Promise<void>;
  updateTask(taskId: string, task: Partial<Task>): Promise<Task>;
}