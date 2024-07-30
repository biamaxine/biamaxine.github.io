import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { environment } from '../../../environments/environment.development';
import { AboutComponent } from '../../shared/components/about/about.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ImgLoaderComponent } from '../../shared/components/img-loader/img-loader.component';
import { ButtonDirective } from '../../shared/directives/button/button.directive';
import { Project, Server } from '../../shared/interfaces/project.interface';
import { ScrollService } from '../../shared/services/scroll/scroll.service';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { PaletteTheme } from '../../shared/types/palette-theme.type';

const COMPONENTS = [
  AboutComponent,
  HeaderComponent,
  IconComponent,
  ImgLoaderComponent,
];

const DIRECTIVES = [
  ButtonDirective,
];

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [COMPONENTS, DIRECTIVES],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  theme: PaletteTheme = 'blue_dark';
  project!: Project;

  constructor(
    private readonly themeService: ThemeService,
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
    private readonly route: ActivatedRoute,
    private readonly http: HttpClient,
    private readonly scrollService: ScrollService,
  ) {}

  ngOnInit(): void {
    this.themeService.getThemeObservable().subscribe(theme => {
      this.theme = theme;
      this.themeService
        .resetClass(this.element, this.renderer);
    })

    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<Server>(environment.url).subscribe(server => {
      const project = server.projects.find(project => project.id === id);
      if (project) this.project = project;
      console.log(this.project);
    });
  }

  scrollTo(componentName?: string) {
    this.scrollService
      .scrollToComponent(componentName ?? '');
  }
}
