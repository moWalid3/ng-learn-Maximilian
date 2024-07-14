import { Component, inject, input } from '@angular/core';
import { Task } from '../../models/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = input.required<Task>();  
  private _TasksService = inject(TasksService);

  onCompletedTask() {
    this._TasksService.removeTask(this.task().id);
  }
}
