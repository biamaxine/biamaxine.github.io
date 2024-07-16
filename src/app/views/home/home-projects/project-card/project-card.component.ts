import { Component, Input } from '@angular/core';

import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { ButtonDirective } from '../../../../shared/directives/button/button.directive';
import { Project } from '../../../../shared/interfaces/project.interface';
import { PaletteTheme } from '../../../../shared/types/palette-theme.type';
import { Router } from '@angular/router';

const COMPONENTS = [
  IconComponent,
];

const DIRECTIVES = [
  ButtonDirective,
];

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [COMPONENTS, DIRECTIVES],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input({ required: true }) theme!: PaletteTheme;
  @Input({ required: true }) project!: Project;

  constructor(private readonly router: Router) {}

  navigateTo(id: string) {
    return this.router.navigate([ '/projects/' + id ]);
  }
}
