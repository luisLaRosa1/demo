import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {DOCUMENT, JsonPipe, NgClass, NgOptimizedImage, NgStyle} from '@angular/common';
import { AngularResizeEventModule, ResizedEvent } from 'angular-resize-event';
import {Dimension, Template} from "../custom-grid.component";

@Component({
  selector: 'app-image-box',
  standalone: true,
  imports: [NgStyle, NgOptimizedImage, NgClass, AngularResizeEventModule, JsonPipe],
  templateUrl: './image-box.component.html',
  styleUrl: './image-box.component.scss',
})
export class ImageBoxComponent {
  @Input() template!: Template;
  @ViewChild('host', { static: false }) hosts!: ElementRef;
  @Input() templateIdx!: number;
  @Output() valor = new EventEmitter<Dimension>();

  cargoProceso: boolean = true;
  inicio: number = 0;

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

  handleDrag(event: DragEvent, idx: number) {
    this.valor.emit({
      height: event.clientY,
      width: Math.abs(event.clientX - 570),
      id: this.template.id,
    });
  }
}
