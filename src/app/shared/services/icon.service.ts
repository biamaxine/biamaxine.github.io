import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { icons } from '../../../../db.json';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);

  register() {
    Object.entries(icons).forEach(([k, v]) => {
      this.iconRegistry.addSvgIconLiteral(
        k,
        this.sanitizer.bypassSecurityTrustHtml(v),
      );
    });
  }
}
