import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

export interface TaskPort {
  getTasks(email: string): Observable<Task[]>;
  createTask(email: string, title: string, description: string): Observable<Task>;
  updateTask(id: string, task: Partial<Task>): Observable<Task>;
  deleteTask(id: string): Observable<void>;
}