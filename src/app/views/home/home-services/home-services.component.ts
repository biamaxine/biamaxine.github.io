import { Component } from '@angular/core';

import { Service } from '../../../shared/interfaces/service-card.interface';
import { ServiceCardComponent } from './service-card/service-card.component';

const COMPONENTS = [
  ServiceCardComponent,
];

@Component({
  selector: 'app-home-services',
  standalone: true,
  imports: [COMPONENTS],
  templateUrl: './home-services.component.html',
  styleUrl: './home-services.component.scss'
})
export class HomeServicesComponent {
  services: Service[] = [
    {
      title: 'Seu site, do seu jeito!',
      context: 'Transforme sua ideia em um site incrível: portfólios pessoais e e-commerces feitos sob medida, com tecnologia de ponta para um design irresistível e uma navegação perfeita.',
      ico: 'web',
    },
    {
      title: 'Design que fala a sua língua!',
      context: 'Desde wireframes e protótipos até sistemas de design e identidade visual. Crie uma marca marcante e uma experiência visual única que encanta e engaja.',
      ico: 'design_services',
    },
    {
      title: 'Soluções sob medida para você!',
      context: 'Desenvolvo aplicativos e softwares personalizados para atender às suas necessidades específicas. Do conceito à execução, entrego soluções robustas e eficientes que fazem a diferença.',
      ico: 'laptop_mac',
    }
  ];
}
