
import { db } from '../database/config/firebase'; 
import { Task } from '../../domain/entities/task.entity'; 

export class TaskRepository {

  async getTasks(userId: string): Promise<Task[]> {
    try {
      const snapshot = await db.collection('tasks').where('userId', '==', userId).get();
      return snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt && typeof data.createdAt.toDate === 'function'
            ? data.createdAt.toDate()
            : data.createdAt || null, 
        } as Task;
      });
    } catch (error) {
      console.error('Error al obtener tareas:', error);
      throw new Error('No se pudieron obtener las tareas');
    }
  }

  async addTask(task: Task): Promise<Task> {
    try {
      const docRef = await db.collection('tasks').add(task);
      return { ...task, id: docRef.id };
    } catch (error) {
      console.error('Error al agregar tarea:', error);
      throw new Error('No se pudo agregar la tarea');
    }
  }

  async updateTask(id: string, task: Partial<Task>): Promise<Task> {
    try {
      await db.collection('tasks').doc(id).update(task);
      return { id, ...task } as Task;
    } catch (error) {
      console.error('Error al actualizar tarea:', error);
      throw new Error('No se pudo actualizar la tarea');
    }
  }

  async deleteTask(id: string): Promise<void> {
    try {
      await db.collection('tasks').doc(id).delete();
    } catch (error) {
      console.error('Error al eliminar tarea:', error);
      throw new Error('No se pudo eliminar la tarea');
    }
  }
}
