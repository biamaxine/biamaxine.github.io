import { Component, Input } from '@angular/core';

import { IconComponent } from '../icon/icon.component';
import { LogoformatComponent } from '../logoformat/logoformat.component';
import { PaletteTheme } from '../../types/palette-theme.type';

const COMPONENTS = [
  IconComponent,
  LogoformatComponent,
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [COMPONENTS],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({ required: true }) theme!: PaletteTheme;
}
