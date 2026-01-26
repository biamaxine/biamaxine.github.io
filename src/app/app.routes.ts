import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/home/home').then(m => m.Home),
  },
  {
    path: 'skills',
    loadComponent: () => import('./views/skills/skills').then(m => m.Skills),
  },
];
