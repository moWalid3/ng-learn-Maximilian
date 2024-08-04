import { Routes } from '@angular/router';
import { AraComponent } from './ara/ara.component';
import { MaxComponent } from './max/max.component';
import { DocComponent } from './doc/doc.component';
import { animation } from '@angular/animations';

export const routes: Routes = [
  { path: '', redirectTo: 'ara', pathMatch: 'full' },
  {
    path: 'ara',
    component: AraComponent,
    data: { animation: 'araPage' },
  },
  { path: 'max', component: MaxComponent, data: { animation: 'maxPage' } },
  { path: 'doc', component: DocComponent, data: { animation: 'docPage' } },
];
