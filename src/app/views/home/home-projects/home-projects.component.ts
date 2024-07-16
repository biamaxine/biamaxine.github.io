import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { environment } from '../../../../environments/environment.development';
import { Project } from '../../../shared/interfaces/project.interface';
import { ProjectCardComponent } from './project-card/project-card.component';
import { PaletteTheme } from '../../../shared/types/palette-theme.type';

const COMPONENTS = [
  ProjectCardComponent,
];

@Component({
  selector: 'app-home-projects',
  standalone: true,
  imports: [COMPONENTS],
  templateUrl: './home-projects.component.html',
  styleUrl: './home-projects.component.scss'
})
export class HomeProjectsComponent implements OnInit {
  @Input({ required: true }) theme!: PaletteTheme;

  projects: Project[] = [];

  constructor(
    private readonly http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.http.get<Project[]>(environment.url_local + '/projects')
      .subscribe(projects => {
        this.projects = projects;
      });
  }
}
