import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../core/models/task.model';
import { TaskPort } from '../../core/ports/task.port';

@Injectable({
  providedIn: 'root',
})
export class TaskHttpAdapter implements TaskPort {
  private apiUrl = 'http://localhost:3000'; // URL base de la API

  constructor(private http: HttpClient) {}

  getTasks(email: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks/${email}`);
  }

  createTask(email: string, title: string, description: string): Observable<Task> {
    const body = { userId: email, title, description };
    return this.http.post<Task>(`${this.apiUrl}/tasks`, body);
  }

  updateTask(id: string, task: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/tasks/${id}`, task);
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/tasks/${id}`);
  }
}