import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';

import { environment } from '../../../../environments/environment.development';
import { Project } from '../../../shared/interfaces/project.interface';
import { PaletteTheme } from '../../../shared/types/palette-theme.type';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ScrollService } from '../../../shared/services/scroll/scroll.service';

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
export class HomeProjectsComponent implements AfterViewInit {
  @Input({ required: true }) theme!: PaletteTheme;

  projects: Project[] = [];

  constructor(
    private readonly element: ElementRef,
    private readonly scrollService: ScrollService,
    private readonly http: HttpClient,
  ) {}

  ngAfterViewInit(): void {
    this.scrollService
      .saveScrollPosition('projects', this.element.nativeElement);

    this.http.get<Project[]>(environment.url_local + '/projects')
      .subscribe(projects => {
        this.projects = projects;
      });
  }
}