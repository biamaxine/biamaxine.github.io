import { BreakpointObserver } from '@angular/cdk/layout';
import { computed, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, map } from 'rxjs';

export type DisplayMode = 'mobile' | 'tablet' | 'desktop';

export const BREAKPOINTS: Record<DisplayMode, string> = {
  mobile: '(max-width: 599.98px)',
  tablet: '(min-width: 600px) and (max-width: 959.98px)',
  desktop: '(min-width: 960px)',
};

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  private readonly breakpoints = inject(BreakpointObserver);

  private readonly _mode = signal<DisplayMode>(
    (() => {
      if (this.breakpoints.isMatched(BREAKPOINTS.mobile)) return 'mobile';
      if (this.breakpoints.isMatched(BREAKPOINTS.tablet)) return 'tablet';
      return 'desktop';
    })(),
  );

  readonly mode = this._mode.asReadonly();
  readonly isMobile = computed(() => this._mode() === 'mobile');
  readonly isTablet = computed(() => this._mode() === 'tablet');
  readonly isDesktop = computed(() => this._mode() === 'desktop');

  constructor() {
    this.breakpoints
      .observe(Object.values(BREAKPOINTS))
      .pipe(
        takeUntilDestroyed(),
        map(({ breakpoints }): DisplayMode => {
          if (breakpoints[BREAKPOINTS.mobile]) return 'mobile';
          if (breakpoints[BREAKPOINTS.tablet]) return 'tablet';
          return 'desktop';
        }),
        distinctUntilChanged(),
      )
      .subscribe({
        next: mode => this._mode.set(mode),
        error: err => console.error(err),
      });
  }
}
