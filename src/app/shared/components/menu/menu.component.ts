import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { MenuOptionComponent } from './menu-option/menu-option.component';
import { ThemeService } from '../../services/theme/theme.service';
import { PaletteTheme } from '../../types/palette-theme.type';

const COMPONENTS = [
  MenuOptionComponent,
];

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [COMPONENTS],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  theme: PaletteTheme = 'blue_dark';

  constructor(
    private readonly themeService: ThemeService,
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.themeService.getThemeObservable().subscribe(theme => {
      this.theme = theme;

      this.themeService.redefineClass(this.element.nativeElement, this.renderer);
    });
  }

  modeSwap() {
    return this.themeService
      .modeSwap(this.element.nativeElement, this.renderer);
  }

  modeReturn() {
    return this.themeService.mode;
  }
}
