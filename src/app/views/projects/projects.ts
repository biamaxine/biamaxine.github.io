import { Component, signal } from '@angular/core';

import { projects } from '../../../../db.json';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

export interface Project {
  title: string;
  description: string;
  path: string;
  stacks: string[];
}

@Component({
  selector: 'app-projects',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  template: `
    <h1>projetos</h1>

    @for (project of projects(); track project.title) {
      <mat-card>
        <mat-card-header>
          {{ project.title }}
          <button matIconButton routerLink="/projects/:{{ $index + 1 }}">
            <mat-icon>arrow_outward</mat-icon>
          </button>
        </mat-card-header>
        <mat-card-content>{{ project.description }}</mat-card-content>
        <mat-card-footer>
          @for (stack of project.stacks; track stack) {
            <mat-chip>{{ stack }}</mat-chip>
          }
        </mat-card-footer>
      </mat-card>
    }
  `,
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = signal<Project[]>(projects);
}
