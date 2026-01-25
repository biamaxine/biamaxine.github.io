import {
  computed,
  DOCUMENT,
  effect,
  inject,
  Injectable,
  RendererFactory2,
  signal,
  untracked,
} from '@angular/core';
import { isLiteral } from '../utils/string.utils';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly CLASS_NAME = 'dark-mode';
  private readonly THEME_KEY = '$THEME';
  private readonly OS_PREFERS_DARK = '(prefers-color-scheme: dark)';

  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(RendererFactory2).createRenderer(
    null,
    null,
  );

  private readonly themeOS = this.document.defaultView?.matchMedia(
    this.OS_PREFERS_DARK,
  );

  private readonly dirty = signal(false);
  private readonly _mode = signal<ThemeMode>(
    (() => {
      const mode = localStorage.getItem(this.THEME_KEY);
      if (mode && isLiteral<ThemeMode>(mode, 'light', 'dark')) return mode;

      return this.themeOS?.matches ? 'dark' : 'light';
    })(),
  );

  readonly mode = this._mode.asReadonly();
  readonly isDark = computed(() => this._mode() === 'dark');

  constructor() {
    effect(() => {
      const mode = this._mode();

      if (this.dirty())
        untracked(() => localStorage.setItem(this.THEME_KEY, mode));

      this.renderer[mode === 'dark' ? 'addClass' : 'removeClass'](
        this.document.body,
        this.CLASS_NAME,
      );
    });

    this.themeOS?.addEventListener('change', e => {
      if (!localStorage.getItem(this.THEME_KEY))
        this._mode.set(e.matches ? 'dark' : 'light');
    });
  }

  toggle(): void {
    this._mode.update(mode => (mode === 'light' ? 'dark' : 'light'));
    this.dirty.set(true);
  }
}
