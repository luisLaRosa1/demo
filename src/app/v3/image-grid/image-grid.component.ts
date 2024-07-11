import {Component, Input} from '@angular/core';
import {LayoutTemplate} from "../layout-selector/layout-selector.component";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.scss'
})
export class ImageGridComponent {
  @Input() selectedTemplate!: LayoutTemplate;
  cargoProceso: boolean = true;
  inicio: number = 0;


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
    const imagen2 = this.selectedTemplate.positions[idx].image;
    this.selectedTemplate.positions[idx].image =
      this.selectedTemplate.positions[this.inicio].image;
    this.selectedTemplate.positions[this.inicio].image = imagen2;
  }
}
