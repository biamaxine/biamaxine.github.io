import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { MenuOptionComponent } from './menu-option/menu-option.component';
import { ThemeService } from '../../services/theme/theme.service';
import { PaletteTheme } from '../../types/palette-theme.type';
import { ScrollService } from '../../services/scroll/scroll.service';
import { Router } from '@angular/router';

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
    private readonly scrollService: ScrollService,
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
    private readonly router: Router,
  ) {}

  menu = {
    left: {
      status: true,
      mouseEnter: () => { this.menu.left.status = false; },
      mouseLeave: () => { this.menu.left.status = true; },
    },
    right: {
      status: true,
      mouseEnter: () => { this.menu.right.status = false; },
      mouseLeave: () => { this.menu.right.status = true; },
    },
  }

  ngOnInit(): void {
    this.themeService.getThemeObservable().subscribe(theme => {
      this.theme = theme;
      this.themeService.resetClass(this.element, this.renderer);
    });
  }

  modeSwap() {
    return this.themeService.resetMode(this.element, this.renderer);
  }

  modeReturn() {
    return this.themeService.mode;
  }

  scrollTo(componentName?: string) {
    if (this.router.url !== '/home') {
      this.router.navigate(['/home']);
    }
    setTimeout(() => {
      this.scrollService.scrollToComponent(componentName || '');
    }, 300);
  }
}
