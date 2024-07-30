import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { TechnologyIcon } from '../../types/icon.type';
import { IconComponent } from '../icon/icon.component';
import { PaletteTheme } from '../../types/palette-theme.type';

const COMPONENTS = [
  IconComponent,
];

@Component({
  selector: 'app-roulette-tech',
  standalone: true,
  imports: [COMPONENTS],
  templateUrl: './roulette-tech.component.html',
  styleUrl: './roulette-tech.component.scss'
})
export class RouletteTechComponent implements OnInit {
  @Input({ required: true }) theme!: PaletteTheme;
  @Input() animation: boolean | '' = false;
  @Input() technologies?: TechnologyIcon[];

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    if (!this.technologies) this.technologies = [
      'angular',    'react',      'next.js', 'vue.js',
      'node.js',    'nestjs',     'prisma',  'swagger',
      'javascript', 'typescript', 'java',    'python',
      'git',        'docker',     'html5',   'css3',
      'sass',       'figma',
    ];

    if (this.animation || this.animation === '') this.renderer
      .addClass(this.element.nativeElement, 'RouletteTechAnimated');
  }
}
