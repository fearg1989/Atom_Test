import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./presentation/pages/login/login.component').then((m) => m.LoginComponent), // Lazy loading del componente
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./presentation/pages/tasks/tasks.component').then((m) => m.TasksComponent), // Lazy loading del componente
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full', // Redirige a 'login' si la ruta está vacía
  },
  {
    path: '**',
    redirectTo: 'login', // Redirige a 'login' si la ruta no existe
  },
];