import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { ScrollService } from '../../services/scroll/scroll.service';
import { LoadingComponent } from '../loading/loading.component';

const COMPONENTS = [
  LoadingComponent
];

@Component({
  selector: 'app-img-loader',
  standalone: true,
  imports: [COMPONENTS],
  templateUrl: './img-loader.component.html',
  styleUrl: './img-loader.component.scss'
})
export class ImgLoaderComponent implements OnInit {
  @Input({ required: true }) url!: string;

  status = false;

  private img = new Image();
  private intervalId: any;

  constructor(
    private readonly scrollService: ScrollService,
    private readonly element: ElementRef,
  ) {}

  ngOnInit(): void {
    this.scrollService
      .saveScrollPosition('img', this.element.nativeElement);

    this.loadImage();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private loadImage() {
    this.img.src = this.url;
    this.img.onload = () => {
      this.status = true;
      this.stopLoader();
    };
    this.img.onerror = () => {
      console.error('Failed to load image');
      this.stopLoader();
    };
  }

  private stopLoader() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  onImageLoad() {
    this.status = true;
    this.stopLoader();
  }

  onImageError() {
    console.error('Error loading image');
    this.stopLoader();
  }
}
