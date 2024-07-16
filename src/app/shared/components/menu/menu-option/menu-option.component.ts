import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  standalone: true,
  imports: [],
  templateUrl: './menu-option.component.html',
  styleUrl: './menu-option.component.scss'
})
export class MenuOptionComponent implements OnInit {
  @Output() enter = new EventEmitter();
  @Output() leave = new EventEmitter();

  @Input({ required: true }) ico!: string;
  @Input() name?: string;
  @Input() reverse: boolean | '' = false;

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    if (this.reverse || this.reverse === '') this.renderer
      .addClass(this.element.nativeElement, '--menu-option-reverse');
  }

  onMouseEnter() {
    return this.enter.emit();
  }
  onMouseLeave() {
    return this.leave.emit();
  }
}
