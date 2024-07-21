import { Routes } from '@angular/router';
import {
  resolveTitle,
  resolveUsername,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { routes as userRoutes } from './users.routes';
import { testGuard } from './test.guard';

export const routes: Routes = [
  { path: '', component: NoTaskComponent, title: 'app' },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    canMatch: [testGuard], // it's like canActivate but this modern and better i think (canMatch)
    data: {
      // static data it sended with each call
      message: 'Hello',
    },
    resolve: {
      // dynamic data (observable) and it will send with each call
      username: resolveUsername,
    },
    title: resolveTitle // dynamic title
  },
  { path: '**', component: NotfoundComponent },
];
