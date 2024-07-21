import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  // don't make this lazy loading, use it with any thing else not show in start up page
  // and don't use it with any component in start page ==> that's bad practice
  { path: '', component: HomeComponent },

  {path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  {path: 'articles', loadComponent: () => import('./articles/articles.component').then(m => m.ArticlesComponent)},
  {path: 'deferrable', loadComponent: () => import('./deferrable/welcome/welcome.component').then(m => m.WelcomeComponent)},
  
];
