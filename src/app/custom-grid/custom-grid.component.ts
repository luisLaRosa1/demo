import { Component, Input } from '@angular/core';
import { ImageBoxComponent } from './image-box/image-box.component';
import { NgClass } from '@angular/common';
import { Dimension } from '../layout/layout.component';

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

  layouts: number[] = [2, 3, 4];

  nuevadimension(dimen: Dimension) {
    switch (dimen.id) {
      case 1:
        this.templates[0][0].imagePositions[0].width = `${dimen.width}px`;
        this.templates[0][0].imagePositions[1].width = `${
          this.size - (dimen.width - this.size)
        }px`;
        break;
      case 2:
        this.templates[0][1].imagePositions[0].height = `${dimen.height}px`;
        this.templates[0][1].imagePositions[1].height = `${
          this.size - (dimen.height - this.size)
        }px`;
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
        break;
    }
  }
}
