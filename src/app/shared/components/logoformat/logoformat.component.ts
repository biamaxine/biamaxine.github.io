import { Component, Input } from '@angular/core';

import { Typography } from '../../types/typography.type';

@Component({
  selector: 'app-logoformat',
  standalone: true,
  imports: [],
  templateUrl: './logoformat.component.html',
  styleUrl: './logoformat.component.scss'
})
export class LogoformatComponent {
  @Input() title: [string, string] = ['bianca', 'maxine'];
  @Input() typography: Typography = 'display';
}
