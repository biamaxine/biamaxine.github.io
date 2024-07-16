import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProjectComponent } from './views/project/project.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'projects/:id', component: ProjectComponent },
];
