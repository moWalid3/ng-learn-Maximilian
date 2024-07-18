import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from '../tasks/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(task: Task) {
    this.tasks.update((oldTasks) => [...oldTasks, task]);
  }

  getTasksByStatus(status: TaskStatus) {
    return [...this.tasks()].filter((task) => task.status === status);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }
}
