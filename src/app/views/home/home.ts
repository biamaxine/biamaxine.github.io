import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { App } from '../../app';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatIconModule],
  template: `
    <h1 class="title">{{ app.author() }}</h1>
    <p class="subtitle">{{ app.subtitle() }}</p>

    <div class="interactions">
      <div class="social-medias">
        @for (media of socialMedia; track $index) {
          <a
            matIconButton
            [href]="app[media]()"
            target="_blank"
            class="social-media {{ media }}"
            ><mat-icon [svgIcon]="media"></mat-icon
          ></a>
        }
      </div>

      <button matButton="filled" class="call-to-cation">
        Conheça meus trabalhos
      </button>
    </div>

    <p class="description">{{ app.description() }}</p>
  `,
  styleUrl: './home.scss',
})
export class Home {
  protected readonly app = inject(App);

  protected socialMedia: ['github', 'linkedin', 'email'] = [
    'github',
    'linkedin',
    'email',
  ];
}
