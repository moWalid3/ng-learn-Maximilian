import { Routes } from '@angular/router';
import { canLeaveEditPageGuard } from './can-leave-edit-page.guard';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: 'tasks',
    component: TasksComponent,
    // runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    // resolve: {
    // userTasks: resolveUserTasks
    // },
  },
  { 
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPageGuard]
  },
];
