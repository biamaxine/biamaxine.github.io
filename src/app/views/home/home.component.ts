import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { AboutComponent } from '../../shared/components/about/about.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { PaletteTheme } from '../../shared/types/palette-theme.type';
import { HomeServicesComponent } from './home-services/home-services.component';

const COMPONENTS = [
  AboutComponent,
  HeaderComponent,
  HomeServicesComponent,
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [COMPONENTS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
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
}
