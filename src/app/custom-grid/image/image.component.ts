
// app.component.ts
import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'image-configuracion',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @ViewChild('container') containerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('image') imageRef!: ElementRef<HTMLImageElement>;

  @Input() width: string = '';
  @Input() height: string ='';
  @Input() url: string = '';

  private isDragging = false;
  private startX!: number;
  private startY!: number;
  private startLeft!: number;
  private startTop!: number;

  constructor() { }

  ngAfterViewInit() {
    const container = this.containerRef.nativeElement;
    const image = this.imageRef.nativeElement;

    container.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.startX = e.pageX;
      this.startY = e.pageY;
      this.startLeft = image.offsetLeft;
      this.startTop = image.offsetTop;
      // Evitar selección de texto durante el arrastre
      e.preventDefault();
    });

    document.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const deltaX = e.pageX - this.startX;
      const deltaY = e.pageY - this.startY;
      const left = this.startLeft + deltaX;
      const top = this.startTop + deltaY;
      image.style.left = `${left}px`;
      image.style.top = `${top}px`;
    });

    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      let scaleFactor = 1.1;
      if (delta < 0) {
        scaleFactor = 0.9;
      }
      const currentScale = parseFloat(image.style.transform.replace('scale(', '').replace(')', '')) || 1;
      const newScale = currentScale * scaleFactor;
      image.style.transform = `scale(${newScale})`;
    });
  }
}
