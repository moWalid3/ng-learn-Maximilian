import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../../services/tasks.service';
import { Task, TaskStatus } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  private tasksService = inject(TasksService);
  tasks = computed(() => {
    if (this.selectedFilter() === 'all') {
      return this.tasksService.allTasks();
    } else {
      return this.tasksService
        .allTasks()
        .filter(
          (task) =>
            task.status ===
            this.selectedFilter().toUpperCase().replace('-', '_')
        );
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
