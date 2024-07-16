import { Component, Input } from '@angular/core';

import { ButtonDirective } from '../../directives/button/button.directive';
import { RouletteTechComponent } from '../roulette-tech/roulette-tech.component';
import { PaletteTheme } from '../../types/palette-theme.type';

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
}
