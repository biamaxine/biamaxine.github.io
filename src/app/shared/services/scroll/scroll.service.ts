import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private elements: { [key: string]: HTMLElement } = {};

  constructor(private router: Router) { }

  saveScrollPosition(componentName: string, element: HTMLElement) {
    this.elements[componentName] = element;
  }

  scrollToComponent(componentName: string) {
    if (componentName === '')
      return this.scrollToY(0);

    const element = this.elements[componentName];
    if (element !== undefined) {
      this.scrollToY(element.offsetTop - 40);
    }
  }

  updateUrlWithComponent(componentName: string) {
    this.router.navigate([], {
      fragment: componentName,
      replaceUrl: true
    });
  }

  private scrollToY(targetY: number, duration: number = 500): void {
    const startY = window.scrollY;
    const startTime = performance.now();

    function animateScroll(currentTime: number) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easeInOutQuad = (t: number) => {
          return t < 0.5
              ? 2 * t * t
              : -1 + (4 - 2 * t) * t;
      };

      const newY = startY + (targetY - startY) * easeInOutQuad(progress);
      window.scrollTo(0, newY);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }
}
