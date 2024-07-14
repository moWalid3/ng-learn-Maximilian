import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../../models/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
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
