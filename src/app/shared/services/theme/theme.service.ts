import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PaletteTheme } from '../../types/palette-theme.type';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme: PaletteTheme = 'blue_dark';
  private themeSubject: BehaviorSubject<PaletteTheme> =
    new BehaviorSubject(this._theme);

  resetMode(element: ElementRef, renderer: Renderer2): void {
    this.reset(element, renderer, () => { this.swapMode(); });
  }

  swapMode(): void {
    switch(this._theme) {
      case 'blue_dark' : this._theme = 'blue_light'; break;
      case 'blue_light' : this._theme = 'blue_dark'; break;
      case 'pink_dark' : this._theme = 'pink_light'; break;
      case 'pink_light' : this._theme = 'pink_dark'; break;
    }

    this.themeSubject.next(this._theme);
  }

  resetTheme(element: ElementRef, renderer: Renderer2): void {
    this.reset(element, renderer, () => { this.swapTheme(); });
  }

  swapTheme(): void {
    switch(this._theme) {
      case 'blue_dark' : this._theme = 'pink_dark'; break;
      case 'blue_light' : this._theme = 'pink_light'; break;
      case 'pink_dark' : this._theme = 'blue_dark'; break;
      case 'pink_light' : this._theme = 'blue_light'; break;
    }

    this.themeSubject.next(this._theme);

    console.log('theme redefined successfully!', this._theme);
  }

  getThemeObservable() {
    return this.themeSubject.asObservable();
  }

  resetClass(element: ElementRef, renderer: Renderer2) {
    const themes: PaletteTheme[] = [
      'blue_light', 'blue_dark', 'pink_light', 'pink_dark'
    ];

    themes.forEach(theme => renderer.removeClass(element.nativeElement, theme));
    renderer.addClass(element.nativeElement, this._theme);
  }

  private reset(
    elemente: ElementRef,
    renderer: Renderer2,
    fun: () => void
  ) {
    renderer.removeClass(elemente.nativeElement, this._theme);
    fun();
    renderer.addClass(elemente.nativeElement, this._theme);
  }

  get mode(): string {
    return this._theme.split('_')[1] + '_mode';
  }
}
