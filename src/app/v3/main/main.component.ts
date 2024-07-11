import { Component } from '@angular/core';
import {LayoutSelectorComponent, LayoutTemplate} from "../layout-selector/layout-selector.component";
import {JsonPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {ImageGridComponent} from "../image-grid/image-grid.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    LayoutSelectorComponent,
    NgStyle,
    JsonPipe,
    ImageGridComponent,
    NgClass
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  selectLayoutMode = false;
  selectedTemplate!: LayoutTemplate;
  templates: Record<number, LayoutTemplate[]> = {
    2: [
      {
        id: 1,
        positions: [
          {
            rowSpan: 12,
            colSpan: 6,
            image: '/assets/image-1.jpeg',
          },
          {
            rowSpan: 12,
            colSpan: 6,
            image: '/assets/image-2.jpeg',
          },
        ]
      },
      {
        id: 2,
        positions: [
          {
            rowSpan: 6,
            colSpan: 12,
            image: '/assets/image-1.jpeg',
          },
          {
            rowSpan: 6,
            colSpan: 12,
            image: '/assets/image-2.jpeg',
          },
        ]
      },
      {
        id: 3,
        positions: [
          {
            rowSpan: 12,
            colSpan: 4,
            image: '/assets/image-1.jpeg',
          },
          {
            rowSpan: 12,
            colSpan: 8,
            image: '/assets/image-2.jpeg',
          },
        ]
      },
      {
        id: 4,
        positions: [
          {
            rowSpan: 8,
            colSpan: 12,
            image: '/assets/image-1.jpeg',
          },
          {
            rowSpan: 4,
            colSpan: 12,
            image: '/assets/image-2.jpeg',
          },
        ]
      },
    ]
  }

}
