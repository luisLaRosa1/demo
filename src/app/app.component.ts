import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LayoutSelectorComponent} from "./layout-selector/layout-selector.component";
import {TemplateSelectorComponent} from "./template-selector/template-selector.component";
import {ImageBoxComponent} from "./image-box/image-box.component";
import {NgClass} from "@angular/common";

export interface Template {
  id: number;
  imagePositions: { image: any; rowStart: number; colStart: number; rowEnd: number, colEnd: number, id: number }[]
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutSelectorComponent, TemplateSelectorComponent, ImageBoxComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedLayout!: number;
  selectedTemplate: any;

  layouts: number[] = [2, 3, 4, 5, 6];
  templates: Template[][] = [
    [
      {
        id: 1,
        imagePositions: [
          {rowStart: 1, colStart: 1, rowEnd: 2, colEnd: 2, id: 1, image: ''},
          {rowStart: 1, colStart: 2, rowEnd: 2, colEnd: 3, id: 2, image: ''},
        ]
      },
      {
        id: 2,
        imagePositions: [
          {rowStart: 1, colStart: 1, rowEnd: 1, colEnd: 2, id: 1, image: ''},
          {rowStart: 2, colStart: 1, rowEnd: 2, colEnd: 2, id: 2, image: ''},
        ]
      },
    ],
    [
      {
        id: 3,
        imagePositions: [
          {rowStart: 1, colStart: 1, rowEnd: 3, colEnd: 1, id: 1, image: ''},
          {rowStart: 1, colStart: 2, rowEnd: 1, colEnd: 2, id: 1, image: ''},
          {rowStart: 2, colStart: 2, rowEnd: 2, colEnd: 3, id: 1, image: ''},
        ]
      },
      {
        id: 4,
        imagePositions: [
          {rowStart: 1, colStart: 1, rowEnd: 1, colEnd: 3, id: 1, image: ''},
          {rowStart: 2, colStart: 1, rowEnd: 2, colEnd: 2, id: 1, image: ''},
          {rowStart: 2, colStart: 2, rowEnd: 2, colEnd: 2, id: 1, image: ''},
        ]
      }
    ]
  ]

  handleImageChange(event: {templateIdx: number; imagePositionIdx: number}) {
    console.log(event);
  }
}
