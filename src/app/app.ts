import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

import { meta, version } from '../../db.json';
import { DisplayService } from './shared/services/display.service';
import { IconService } from './shared/services/icon.service';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <ng-template #pageTitle>
      <button matButton class="pageTitle" routerLink="/">{{ title() }}</button>
    </ng-template>

    <ng-template #menuOptions>
      <button matButton routerLink="/skills">skills</button>
      <button matButton>projetos</button>
      <button matButton>contatos</button>
    </ng-template>

    <ng-template #themeButton>
      <button matIconButton (click)="theme.toggle()">
        <mat-icon>{{ theme.isDark() ? 'light_mode' : 'dark_mode' }}</mat-icon>
      </button>
    </ng-template>

    <ng-template #routerOutlet>
      <router-outlet />
    </ng-template>

    <!-- Mobile -->
    @if (display.isMobile()) {
      <mat-drawer-container>
        <!-- Menu -->
        <mat-drawer #drawer>
          <nav>
            <header>
              <button matIconButton (click)="drawer.close()">
                <mat-icon>menu_open</mat-icon>
              </button>
              <ng-container *ngTemplateOutlet="pageTitle" />
              <ng-container *ngTemplateOutlet="themeButton" />
            </header>
            <div class="menuOptions">
              <ng-container *ngTemplateOutlet="menuOptions" />
            </div>
            <p>{{ version() }}</p>
          </nav>
        </mat-drawer>

        <!-- Content -->
        <mat-drawer-content>
          <button matIconButton (click)="drawer.open()" class="menuButton">
            <mat-icon>menu</mat-icon>
          </button>
          <ng-container *ngTemplateOutlet="routerOutlet" />
        </mat-drawer-content>
      </mat-drawer-container>
    }
    <!-- Desktop -->
    @else {
      <mat-toolbar>
        <ng-container *ngTemplateOutlet="pageTitle" />
        <span class="space"></span>
        <ng-container *ngTemplateOutlet="menuOptions" />
        <ng-container *ngTemplateOutlet="themeButton" />
      </mat-toolbar>

      <ng-container *ngTemplateOutlet="routerOutlet" />
    }
  `,
  styleUrl: './app.scss',
})
export class App {
  readonly title = signal(meta.title);
  readonly subtitle = signal(meta.subtitle);
  readonly version = signal(version);
  readonly description = signal(meta.description);
  readonly author = signal(meta.author);
  readonly email = signal(meta.email);
  readonly github = signal(meta.github);
  readonly linkedin = signal(meta.linkedin);

  protected readonly display = inject(DisplayService);
  protected readonly theme = inject(ThemeService);
  protected readonly router = inject(Router);
  private readonly icons = inject(IconService);

  constructor() {
    this.icons.register();
  }
}
