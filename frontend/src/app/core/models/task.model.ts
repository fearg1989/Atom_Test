export interface Task {
  id?: string; // ID generado por el backend o Firestore
  title: string; // Título de la tarea
  description: string; // Descripción de la tarea
  completed: boolean; // Estado de la tarea (completada o pendiente)
  createdAt: Date; // Fecha de creación de la tarea
}