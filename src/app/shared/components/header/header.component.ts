import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { Icon } from '../../types/icon.type';
import { PaletteTheme } from '../../types/palette-theme.type';
import { IconComponent } from '../icon/icon.component';
import { LogoformatComponent } from '../logoformat/logoformat.component';

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
export class HeaderComponent implements OnInit {
  @Input({ required: true }) theme!: PaletteTheme;
  @Input() addSocialMedia: boolean | '' = false;
  @Input() icons: Icon[] = [];
  @Input() subtitle?: string;

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    if (this.addSocialMedia || this.addSocialMedia === '') {
      this.icons = ['github', 'linkedin', 'behance', 'instagram', 'gmail'];
    }
  }
}
