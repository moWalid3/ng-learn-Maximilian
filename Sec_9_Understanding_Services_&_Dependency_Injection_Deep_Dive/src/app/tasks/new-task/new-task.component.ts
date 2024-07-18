import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private tasksService = inject(TasksService);

  onAddTask(title: string, description: string) {
    let model: Task = {
      title,
      description,
      id: new Date().getTime().toString(),
      status: 'OPEN',
    }

    this.tasksService.addTask(model);
    
    this.formEl()?.nativeElement.reset();
  }
}
