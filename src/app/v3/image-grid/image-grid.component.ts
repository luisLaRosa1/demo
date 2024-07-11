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
}
