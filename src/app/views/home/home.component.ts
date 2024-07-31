import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { AboutComponent } from '../../shared/components/about/about.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { LogoformatComponent } from '../../shared/components/logoformat/logoformat.component';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { PaletteTheme } from '../../shared/types/palette-theme.type';
import { HomeProjectsComponent } from './home-projects/home-projects.component';
import { HomeServicesComponent } from './home-services/home-services.component';

const COMPONENTS = [
  AboutComponent,
  HeaderComponent,
  IconComponent,
  LogoformatComponent,
  HomeServicesComponent,
  HomeProjectsComponent,
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [COMPONENTS, LogoformatComponent],
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
      this.themeService
        .resetClass(this.element, this.renderer);
    });
  }

  onNavigate(): void {
    const curriculum = 'https://drive.google.com/file/d/1uaj5ZXFv7N9kr2Wr0y_2YMea04wZrPad/view?usp=sharing'
    window.open(curriculum, '_blank')
  }
}
