import { Component, inject, Input, signal } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent{
  @Input({required: true}) userId!: string;
  @Input({required: true}) userName!: string; 

  private _TasksService = inject(TasksService);
  showAddNewTask = signal(false);

  get selectedUserTasks() {
    return this._TasksService.getUserTasks(this.userId);
  }

  onStartAddNewTask() {
    this.showAddNewTask.set(true);
  }

  onCloseAddNewTask() {
    this.showAddNewTask.set(false);
  }
}
