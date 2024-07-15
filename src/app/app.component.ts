import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from './shared/components/menu/menu.component';

const COMPONENTS = [
  MenuComponent,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    COMPONENTS,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
