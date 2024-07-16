import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-btn]',
  standalone: true
})
export class ButtonDirective implements OnInit {

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'app-btn');
  }
}
