import { Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PaletteTheme } from '../../types/palette-theme.type';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme: PaletteTheme = 'blue_dark';
  private themeSubject: BehaviorSubject<PaletteTheme> =
    new BehaviorSubject(this._theme);

  modeSwap(element: HTMLElement, renderer: Renderer2) {
    this.reset(element, renderer, () => {
      switch(this._theme) {
        case 'blue_dark' : this._theme = 'blue_light'; break;
        case 'blue_light' : this._theme = 'blue_dark'; break;
        case 'pink_dark' : this._theme = 'pink_light'; break;
        case 'pink_light' : this._theme = 'pink_dark'; break;
      }
    });

    this.themeSubject.next(this._theme);
  }

  themeSwap(element: HTMLElement, renderer: Renderer2) {
    this.reset(element, renderer, () => {
      switch(this._theme) {
        case 'blue_dark' : this._theme = 'pink_dark'; break;
        case 'blue_light' : this._theme = 'pink_light'; break;
        case 'pink_dark' : this._theme = 'blue_dark'; break;
        case 'pink_light' : this._theme = 'pink_light'; break;
      }
    });

    this.themeSubject.next(this._theme);
  }

  getThemeObservable() {
    return this.themeSubject.asObservable();
  }

  redefineClass(element: HTMLElement, renderer: Renderer2) {
    const themes: PaletteTheme[] = [
      'blue_light', 'blue_dark', 'pink_light', 'pink_dark'
    ];

    themes.forEach(theme => renderer.removeClass(element, theme));
    renderer.addClass(element, this._theme);
  }

  private reset(
    elemente: HTMLElement,
    renderer: Renderer2,
    fun: () => void
  ) {
    renderer.removeClass(elemente, this._theme);
    fun();
    renderer.addClass(elemente, this._theme);
  }

  get mode() {
    return this._theme.split('_')[1] + '_mode';
  }
}
