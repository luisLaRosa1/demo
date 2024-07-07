import { Component } from '@angular/core';
import {ImageBoxComponent} from "./image-box/image-box.component";
import {TemplateSelectorComponent} from "./template-selector/template-selector.component";
import {LayoutSelectorComponent} from "./layout-selector/layout-selector.component";
import {NgClass} from "@angular/common";

export interface Template {
  id: number;
  column: string;
  row: string;
  imagePositions: {
    image: any;
    rowStart: number;
    colStart: number;
    rowEnd: number;
    colEnd: number;
    id: number;
    right: boolean;
    left: boolean;
    top: boolean;
    bottom: boolean;
  }[];
}

@Component({
  selector: 'app-custom-grid',
  standalone: true,
  imports: [
    LayoutSelectorComponent,
    TemplateSelectorComponent,
    ImageBoxComponent,
    NgClass,
  ],
  templateUrl: './custom-grid.component.html',
  styleUrl: './custom-grid.component.scss'
})
export class CustomGridComponent {
  selectedLayout!: number;
  selectedTemplate: any;

  layouts: number[] = [2, 3, 4];
  templates: Template[][] = [
    [
      {
        id: 1,
        column: '1fr 1fr',
        row: '1fr',
        imagePositions: [
          {
            rowStart: 1,
            colStart: 1,
            rowEnd: 2,
            colEnd: 2,
            id: 1,
            image: '',
            right: true,
            left: false,
            bottom: false,
            top: false,
          },
          {
            rowStart: 1,
            colStart: 2,
            rowEnd: 2,
            colEnd: 3,
            id: 2,
            image: '',
            right: false,
            left: true,
            bottom: false,
            top: false,
          },
        ],
      },
      {
        id: 2,
        column: '1fr',
        row: '1fr 1fr',
        imagePositions: [
          {
            rowStart: 1,
            colStart: 1,
            rowEnd: 1,
            colEnd: 2,
            id: 1,
            image: '',
            right: false,
            left: false,
            bottom: true,
            top: false,
          },
          {
            rowStart: 2,
            colStart: 1,
            rowEnd: 2,
            colEnd: 2,
            id: 2,
            image: '',
            right: false,
            left: false,
            bottom: false,
            top: true,
          },
        ],
      },
    ],
    [
      {
        id: 3,
        column: '1fr',
        row: '1fr',
        imagePositions: [
          {
            rowStart: 1,
            colStart: 1,
            rowEnd: 3,
            colEnd: 1,
            id: 1,
            image: '',
            right: false,
            left: false,
            bottom: false,
            top: false,
          },
          {
            rowStart: 1,
            colStart: 2,
            rowEnd: 1,
            colEnd: 2,
            id: 1,
            image: '',
            right: false,
            left: false,
            bottom: false,
            top: false,
          },
          {
            rowStart: 2,
            colStart: 2,
            rowEnd: 2,
            colEnd: 3,
            id: 1,
            image: '',
            right: false,
            left: false,
            bottom: false,
            top: false,
          },
        ],
      },
      {
        id: 4,
        column: '1fr',
        row: '1fr',
        imagePositions: [
          {
            rowStart: 1,
            colStart: 1,
            rowEnd: 1,
            colEnd: 3,
            id: 1,
            image: '',
            right: false,
            left: false,
            bottom: false,
            top: false,
          },
          {
            rowStart: 2,
            colStart: 1,
            rowEnd: 2,
            colEnd: 2,
            id: 1,
            image: '',
            right: false,
            left: false,
            bottom: false,
            top: false,
          },
          {
            rowStart: 2,
            colStart: 2,
            rowEnd: 2,
            colEnd: 2,
            id: 1,
            image: '',
            right: false,
            left: false,
            bottom: false,
            top: false,
          },
        ],
      },
    ],
  ];
}
