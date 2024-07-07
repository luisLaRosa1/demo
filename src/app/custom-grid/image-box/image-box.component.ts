import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Dimension, Template } from '../../app.component';
import { DOCUMENT, NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { AngularResizeEventModule, ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-image-box',
  standalone: true,
  imports: [NgStyle, NgOptimizedImage, NgClass, AngularResizeEventModule],
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

  onresized(event: ResizedEvent, activo?: boolean, index: number = 0){
    if(event.newRect != null && activo){
      this.valor.emit({height: event.newRect.height,  width: event.newRect.width, id: this.template.id})
    }
  }

  onImageChange(event: any, idx: number) {
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

  constructor(
    @Inject(DOCUMENT) document: Document
  ) {}

  showFileChooser(idx: number) {
    document.getElementById(`fileInput-${idx}`)?.click();
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
    const imagen2 = this.template.imagePositions[idx].image
    this.template.imagePositions[idx].image = this.template.imagePositions[this.inicio].image;
    this.template.imagePositions[this.inicio].image = imagen2;
  }

  espaciado(width:string): number{
    return 250 - parseFloat(width.replace('px',''))
  }
}
