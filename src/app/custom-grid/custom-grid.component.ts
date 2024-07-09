import { Component, Input } from '@angular/core';
import { ImageBoxComponent } from './image-box/image-box.component';
import { NgClass } from '@angular/common';
export interface Dimension {
  width: number;
  height: number;
  id: number;
  tipo: number;
}

export interface DimensionImagen {
  left: number;
  top: number;
}

export interface TemplateImagen {
  left: number;
  top: number;
}

export interface Template {
  id: number;
  imagePositions: {
    resize?: boolean;
    image: any;
    rowStart: number;
    colStart: number;
    rowEnd: number;
    colEnd: number;
    id: number;
    width: string;
    height: string;
    minwidth: string;
    minheight: string;
    imagen: TemplateImagen;
    escala: number;
  }[];
}

@Component({
  selector: 'app-custom-grid',
  standalone: true,
  imports: [ImageBoxComponent, NgClass],
  templateUrl: './custom-grid.component.html',
  styleUrl: './custom-grid.component.scss',
})
export class CustomGridComponent {
  @Input() size!: number;
  @Input() imagesInput: string[] = [];
  @Input() selectedTemplate: any;
  @Input() templates: any;

  nuevadimension(dimen: Dimension) {
    this.selectedTemplate = null;
    switch (dimen.id) {
      case 1:
        this.templates[0][0].imagePositions[0].width = `${dimen.width}px`;
        this.templates[0][0].imagePositions[0].width = `${dimen.width}px`;
        this.templates[0][0].imagePositions[1].width = `${
          this.size - (dimen.width - this.size)
        }px`;
        this.selectedTemplate = this.templates[0][0];
        break;
      case 2:
        this.templates[0][1].imagePositions[0].height = `${dimen.height}px`;
        this.templates[0][1].imagePositions[1].height = `${
          this.size - (dimen.height - this.size)
        }px`;
        this.selectedTemplate = this.templates[0][1];
        break;
      case 3:
        if (dimen.tipo == 1) {
          this.templates[1][0].imagePositions[0].width = `${dimen.width}px`;
          this.templates[1][0].imagePositions[1].width = `${
            this.size - (dimen.width - this.size)
          }px`;
          this.templates[1][0].imagePositions[2].width = `${
            this.size - (dimen.width - this.size)
          }px`;
        }
        if (dimen.tipo == 2) {
          this.templates[1][0].imagePositions[1].height = `${dimen.height}px`;
          this.templates[1][0].imagePositions[2].height = `${
            this.size - (dimen.height - this.size)
          }px`;
        }
        this.selectedTemplate = this.templates[1][0];
        break;
      case 4:
        if (dimen.tipo == 1) {
          this.templates[1][1].imagePositions[0].height = `${dimen.height}px`;
          this.templates[1][1].imagePositions[1].height = `${
            this.size - (dimen.height - this.size)
          }px`;
          this.templates[1][1].imagePositions[2].height = `${
            this.size - (dimen.height - this.size)
          }px`;
        }
        if (dimen.tipo == 2) {
          this.templates[1][1].imagePositions[1].width = `${dimen.width}px`;
          this.templates[1][1].imagePositions[2].width = `${
            this.size - (dimen.width - this.size)
          }px`;
        }
        this.selectedTemplate = this.templates[1][1];
        break;
      case 5:
        if (dimen.tipo == 1) {
          this.templates[2][0].imagePositions[0].width = `${dimen.width}px`;
          this.templates[2][0].imagePositions[1].width = `${
            this.size - (dimen.width - this.size)
          }px`;
        }
        if (dimen.tipo == 3) {
          this.templates[2][0].imagePositions[2].width = `${dimen.width}px`;
          this.templates[2][0].imagePositions[3].width = `${
            this.size - (dimen.width - this.size)
          }px`;
        }
        if (dimen.tipo == 2) {
          this.templates[2][0].imagePositions[0].height = `${dimen.height}px`;
          this.templates[2][0].imagePositions[1].height = `${dimen.height}px`;
          this.templates[2][0].imagePositions[2].height = `${
            this.size - (dimen.height - this.size)
          }px`;
          this.templates[2][0].imagePositions[3].height = `${
            this.size - (dimen.height - this.size)
          }px`;
        }
        this.selectedTemplate = this.templates[2][0];
        break;
    }
  }
}
