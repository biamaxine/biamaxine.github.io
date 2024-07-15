import { Component } from '@angular/core';

import { MenuOptionComponent } from './menu-option/menu-option.component';

const COMPONENTS = [
  MenuOptionComponent,
];

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [COMPONENTS],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {}
