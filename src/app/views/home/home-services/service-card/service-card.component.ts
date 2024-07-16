import { Component, Input } from '@angular/core';

import { Service } from '../../../../shared/interfaces/service-card.interface';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: Service;
}
