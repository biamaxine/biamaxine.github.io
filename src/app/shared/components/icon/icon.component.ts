import { Component, Input } from '@angular/core';
import { Icon, SocialMediaIcon, TechnologyIcon } from '../../types/icon.type';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input({ required: true }) ico!: Icon;
}
