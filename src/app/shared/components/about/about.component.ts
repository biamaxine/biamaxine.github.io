import { Component, Input } from '@angular/core';

import { ButtonDirective } from '../../directives/button/button.directive';
import { RouletteTechComponent } from '../roulette-tech/roulette-tech.component';
import { PaletteTheme } from '../../types/palette-theme.type';
import { TechnologiesIcons } from '../../types/icon.type';

const COMPONENTS = [
  RouletteTechComponent,
];

const DIRECTIVES = [
  ButtonDirective,
];

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [COMPONENTS, DIRECTIVES],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input({ required: true }) theme!: PaletteTheme;
  @Input() buttonText?: string;
  @Input() rouletteTech: boolean | '' = false;
  @Input() rouletteAnimation: boolean | '' = false;
  @Input() rouletteTechnologies: TechnologiesIcons[] = [
    'angular', 'react',  'next.js',    'vue.js',
    'node.js', 'nestjs', 'javascript', 'typescript',
    'java',    'python', 'git',        'docker',
    'html5',   'css3',   'sass',       'figma',
  ];
}
