import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { Icon } from '../../types/icon.type';
import { PaletteTheme } from '../../types/palette-theme.type';
import { IconComponent } from '../icon/icon.component';

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
  @Input() technologies?: {
    ico: Icon,
    link?: string,
  }[];

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    if (!this.technologies) this.technologies = [
      { ico: 'angular'    }, { ico: 'react'      },
      { ico: 'next.js'    }, { ico: 'vue.js'     },
      { ico: 'node.js'    }, { ico: 'nestjs'     },
      { ico: 'prisma'     }, { ico: 'swagger'    },
      { ico: 'javascript' }, { ico: 'typescript' },
      { ico: 'java'       }, { ico: 'python'     },
      { ico: 'git'        }, { ico: 'docker'     },
      { ico: 'html5'      }, { ico: 'css3'       },
      { ico: 'sass'       }, { ico: 'figma'      },
    ];

    if (this.animation || this.animation === '') this.renderer
      .addClass(this.element.nativeElement, 'RouletteTechAnimated');
  }
}
