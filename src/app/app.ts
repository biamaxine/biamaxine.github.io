import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

import {
  author,
  subtitle,
  description,
  email,
  github,
  linkedin,
  name,
  version,
} from '../../package.json';
import { DisplayService } from './shared/services/display.service';
import { ThemeService } from './shared/services/theme.service';
import { IconService } from './shared/services/icon.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <ng-template #pageTitle>
      <button matButton class="pageTitle">{{ title() }}</button>
    </ng-template>

    <ng-template #menuOptions>
      <button matButton>skills</button>
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
  readonly title = signal(name);
  readonly subtitle = signal(subtitle);
  readonly version = signal(version);
  readonly description = signal(description);
  readonly author = signal(author);
  readonly email = signal(email);
  readonly github = signal(github);
  readonly linkedin = signal(linkedin);

  protected readonly display = inject(DisplayService);
  protected readonly theme = inject(ThemeService);
  private readonly icons = inject(IconService);

  constructor() {
    this.icons.register();
  }
}
