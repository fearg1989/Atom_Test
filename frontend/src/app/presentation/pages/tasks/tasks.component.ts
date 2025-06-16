import { Component, OnInit } from '@angular/core';
import { Task } from '../../../core/models/task.model';
import { TaskService } from '../../../core/services/task.service';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';
  newTitle: string = '';
  email: string = '';
  editingTask: Task | null = null;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('userEmail') || '';
    console.log('Email del usuario:', this.email);
    if (this.email) {
      this.loadTasks();
    }
  }

  loadTasks(): void {
    if (!this.email) {
      console.error('El email del usuario no está definido');
      return;
    }

    this.taskService.getTasks(this.email).subscribe(
      (tasks) => {
        this.tasks = tasks;
      },
      (error) => {
        console.error('Error al obtener tareas:', error);
      }
    );
  }

  addTask(): void {
    if (this.newTitle.trim() && this.newTask.trim()) {
      const taskTitle = this.newTitle.trim();
      const taskDescription = this.newTask.trim();

      this.taskService.addTask(this.email, taskTitle, taskDescription).subscribe(
        (response) => {
          console.log('Tarea agregada con éxito:', response);
          this.tasks.push(response);
          this.newTitle = '';
          this.newTask = '';
        },
        (error) => {
          console.error('Error al agregar tarea:', error);
        }
      );
    }
  }

  toggleTaskCompletion(task: Task): void {
    const updatedTask = { ...task, completed: !task.completed };
    this.taskService.updateTask(task.id!, updatedTask).subscribe(() => {
      task.completed = updatedTask.completed;
    });
  }

  editTask(task: Task): void {
    this.editingTask = { ...task };
    this.newTitle = task.title;
    this.newTask = task.description;
  }

  saveTask(): void {
    if (this.editingTask) {
      const updatedTask = { ...this.editingTask, title: this.newTitle, description: this.newTask };
      this.taskService.updateTask(this.editingTask.id!, updatedTask).subscribe(() => {
        const index = this.tasks.findIndex((t) => t.id === this.editingTask!.id);
        this.tasks[index] = updatedTask;
        this.editingTask = null;
        this.newTitle = '';
        this.newTask = '';
      });
    }
  }

  cancelEdit(): void {
    this.editingTask = null;
    this.newTitle = '';
    this.newTask = '';
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    console.log('Cerrando sesión...');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login']);
  }
}