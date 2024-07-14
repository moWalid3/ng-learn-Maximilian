import { Component, inject, input, output, signal } from '@angular/core';
import { TasksService } from '../tasks.service';
import { type NewTask } from '../../models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output<void>();
  private _TasksService = inject(TasksService);

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    let newTask: NewTask = {
      id: new Date().getTime().toString(),
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate(),
    };

    this._TasksService.addTask(newTask, this.userId());
    this.onClose();
  }
}
