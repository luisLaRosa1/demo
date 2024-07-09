import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import {
  DOCUMENT,
  JsonPipe,
  NgClass,
  NgOptimizedImage,
  NgStyle,
} from '@angular/common';
import { AngularResizeEventModule, ResizedEvent } from 'angular-resize-event';
import { Dimension, DimensionImagen, Template } from '../custom-grid.component';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-image-box',
  standalone: true,
  imports: [
    NgStyle,
    NgOptimizedImage,
    NgClass,
    AngularResizeEventModule,
    JsonPipe,
    ImageComponent,
  ],
  templateUrl: './image-box.component.html',
  styleUrl: './image-box.component.scss',
})
export class ImageBoxComponent {
  @Input() template!: Template;
  @Input() templateIdx!: number;
  @Output() valor = new EventEmitter<Dimension>();

  cargoProceso: boolean = true;
  inicio: number = 0;
  isDragable: boolean = true;

  constructor(@Inject(DOCUMENT) document: Document) {}

  onresized(event: ResizedEvent, activo?: boolean, index: number = 0) {
    if (event.newRect != null && activo) {
      this.valor.emit({
        height: event.newRect.height,
        width: event.newRect.width,
        id: this.template.id,
        tipo: index,
      });
    }
  }

  nuevovalorEscala(event: number, idx: any) {
    var image = document.getElementById(`imagen-${idx}`);
    if (image != null) {
      this.template.imagePositions[idx].escala = event;
    }
  }

  nuevavalorimagen(event: DimensionImagen, idx: any) {
    var image = document.getElementById(`imagen-${idx}`);
    if (image != null) {
      this.template.imagePositions[idx].imagen.left = event.left;
      this.template.imagePositions[idx].imagen.top = event.top;
    }
  }

  onImageChange(event: any, idx: number) {
    if (!this.template.imagePositions[idx].image) {
      if (event.target.files && event.target.files.length) {
        var img = new Image();
        const reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function () {
          img.src = reader.result as string;
        };
        img.onload = () => {
          this.template.imagePositions[idx].image = img.src;
        };
      }
    }
  }

  showFileChooser(idx: number) {
    if (!this.template.imagePositions[idx].image) {
      document.getElementById(`fileInput-${idx}`)?.click();
    }
  }

  onDragStart(event: any, idx: any) {
    event.preventDefault();
    if (this.cargoProceso) {
      this.cargoProceso = false;
      this.inicio = idx;
    }
  }

  formatearmedida(valor: string) {
    return parseFloat(valor.replace('px', ''));
  }

  onDrop(event: any, idx: any) {
    event.preventDefault();
    this.cargoProceso = true;
    const imagen2 = this.template.imagePositions[idx].image;
    this.template.imagePositions[idx].image =
      this.template.imagePositions[this.inicio].image;
    this.template.imagePositions[this.inicio].image = imagen2;
  }

  espaciado(width: string): number {
    return 250 - parseFloat(width.replace('px', ''));
  }

  handleDrag(event: DragEvent, index: number = 0) {
    /* this.valor.emit({
      height: event.clientY,
      width: Math.abs(event.clientX - 570),
      id: this.template.id,
      tipo: index,
    });*/
  }

  retornarMargenArriba(template: Template, image: any): string {
    return (!image.resize &&
      (template.id == 2 || (template.id == 3 && image.id == 3))) ||
      (template.id == 4 && image.id != 1)
      ? this.espaciado(image.height) + 'px'
      : '0px';
  }

  retornarMargenIzquierdo(template: Template, image: any): string {
    return (!image.resize &&
      (template.id == 2 || (template.id == 3 && image.id == 3))) ||
      (template.id == 4 && image.id != 1)
      ? this.espaciado(image.height) + 'px'
      : '0px';
  }

  retornarResize(template: Template, image: any): string {
    return image.resize &&
      (template.id == 1 ||
        (template.id == 3 && image.id == 1) ||
        (template.id == 4 && image.id == 2))
      ? 'horizontal'
      : image.resize &&
        (template.id == 2 ||
          (template.id == 3 && image.id == 2) ||
          (template.id == 4 && image.id == 1))
      ? 'vertical'
      : 'none';
  }
}
