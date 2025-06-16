import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { TaskPort } from '../ports/task.port';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(@Inject('TaskPort') private taskPort: TaskPort) {}

  getTasks(email: string): Observable<Task[]> {
    return this.taskPort.getTasks(email);
  }

  addTask(email: string, title: string, description: string): Observable<Task> {
    return this.taskPort.createTask(email, title, description);
  }

  updateTask(id: string, task: Partial<Task>): Observable<Task> {
    return this.taskPort.updateTask(id, task);
  }

  deleteTask(id: string): Observable<void> {
    return this.taskPort.deleteTask(id);
  }
}