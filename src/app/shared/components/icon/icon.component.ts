import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Icon, SocialMediaIcon, TechnologyIcon } from '../../types/icon.type';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent implements OnInit {
  @Input({ required: true }) ico!: Icon;
  @Input() link?: string;

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    const element = this.element.nativeElement as HTMLElement
    element.onclick = () => { return this.onClick() }

    if (!this.link) {
      switch(this.ico) {
        case 'behance': this.link = 'https://behance.net/bianca_maxine_'; break
        case 'github': this.link = 'https://github.com/biamaxine'; break
        case 'gmail': this.link = 'mailto:bianca.maxine.dev@gmail.com'; break
        case 'instagram': this.link = 'https://instagram.com/biamaxine_'; break
        case 'linkedin': this.link = 'https://linkedin.com/in/biamaxine'; break
      }
    }

    if (this.link) {
      this.renderer.setStyle(element, 'cursor', 'pointer')
    }
  }

  onClick(): void {
    if (this.link)
      window.open(this.link, '_blank');
  }
}
