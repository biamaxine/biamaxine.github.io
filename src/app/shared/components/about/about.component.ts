import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonDirective } from '../../directives/button/button.directive';
import { RouletteTechComponent } from '../roulette-tech/roulette-tech.component';
import { PaletteTheme } from '../../types/palette-theme.type';
import { TechnologyIcon } from '../../types/icon.type';

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
  @Input() buttonIco?: string;

  @Input() rouletteTech: boolean | '' = false;
  @Input() rouletteAnimation: boolean | '' = false;
  @Input() rouletteTechnologies?: TechnologyIcon[];

  @Output() button = new EventEmitter();

  onClick(): void {
    this.button.emit();
  }
}
