import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  standalone: true,
  imports: [],
  templateUrl: './menu-option.component.html',
  styleUrl: './menu-option.component.scss'
})
export class MenuOptionComponent implements OnInit {
  @Input({ required: true }) ico!: string;
  @Input() name?: string;
  @Input() reverse: boolean | '' = false;
  @Input() href: string = '#';

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    if (this.reverse || this.reverse === '') this.renderer
      .addClass(this.element.nativeElement, '--menu-option-reverse');
  }
}
