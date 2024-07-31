import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonDirective } from '../../directives/button/button.directive';
import { Icon } from '../../types/icon.type';
import { PaletteTheme } from '../../types/palette-theme.type';
import { RouletteTechComponent } from '../roulette-tech/roulette-tech.component';

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

  @Output() button = new EventEmitter();
  @Input() buttonText?: string;
  @Input() buttonIco?: string;

  @Input() rouletteTech: boolean | '' = false;
  @Input() rouletteAnimation: boolean | '' = false;
  @Input() rouletteTechnologies?: {
    ico: Icon,
    link?: string,
  }[];


  onClick(): void {
    this.button.emit();
  }
}
