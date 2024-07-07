import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { LayoutSelectorComponent } from './custom-grid/layout-selector/layout-selector.component';
import { TemplateSelectorComponent } from './custom-grid/template-selector/template-selector.component';
import { ImageBoxComponent } from './custom-grid/image-box/image-box.component';

export interface Dimension {
  width: number;
  height: number;
  id: number;
}

export interface Template {
  id: number;
  imagePositions: {
    resize?: boolean,
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
  }[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutSelectorComponent,
    TemplateSelectorComponent,
    ImageBoxComponent,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  selectedLayout!: number;
  selectedTemplate: any;

  layouts: number[] = [2, 3, 4];
  templates: Template[][] = [
    [
      {
        id: 1,
        imagePositions: [
          {
            resize: true,
            rowStart: 1,
            colStart: 1,
            rowEnd: 2,
            colEnd: 2,
            id: 1,
            image: '',
            width: '250px',
            height: '500px',
            minwidth: '50px',
            minheight: '500px',
          },
          {
            rowStart: 1,
            colStart: 2,
            rowEnd: 2,
            colEnd: 3,
            id: 2,
            image: '',
            width: '250px',
            height: '500px',
            minwidth: '50px',
            minheight: '500px',
          },
        ],
      },
      {
        id: 2,
        imagePositions: [
          {
            resize: true,
            rowStart: 1,
            colStart: 1,
            rowEnd: 1,
            colEnd: 2,
            id: 1,
            image: '',
            width: '490px',
            height: '50px',
            minwidth: '490px',
            minheight: '250px',
          },
          {
            rowStart: 2,
            colStart: 1,
            rowEnd: 2,
            colEnd: 2,
            id: 2,
            image: '',
            width: '490px',
            height: '50px',
            minwidth: '490px',
            minheight: '250px',
          },
        ],
      },
    ],
    [
      {
        id: 3,
        imagePositions: [
          {
            rowStart: 1,
            colStart: 1,
            rowEnd: 3,
            colEnd: 1,
            id: 1,
            image: '',
            width: '490px',
            height: '50px',
            minwidth: '245px',
            minheight: '490px'
          },
          {
            rowStart: 1,
            colStart: 2,
            rowEnd: 1,
            colEnd: 2,
            id: 1,
            image: '',
            width: '490px',
            height: '50px',
            minwidth: '245px',
            minheight: '490px'
          },
          {
            rowStart: 2,
            colStart: 2,
            rowEnd: 2,
            colEnd: 3,
            id: 1,
            image: '',
            width: '490px',
            height: '50px',
            minwidth: '245px',
            minheight: '490px'
          },
        ],
      },
      {
        id: 4,
        imagePositions: [
          {
            rowStart: 1,
            colStart: 1,
            rowEnd: 1,
            colEnd: 3,
            id: 1,
            image: '',
            width: '490px',
            height: '50px',
            minwidth: '245px',
            minheight: '490px'
          },
          {
            rowStart: 2,
            colStart: 1,
            rowEnd: 2,
            colEnd: 2,
            id: 1,
            image: '',
            width: '490px',
            height: '50px',
            minwidth: '245px',
            minheight: '490px'
          },
          {
            rowStart: 2,
            colStart: 2,
            rowEnd: 2,
            colEnd: 2,
            id: 1,
            image: '',
            width: '490px',
            height: '50px',
            minwidth: '245px',
            minheight: '490px'
          },
        ],
      },
    ],
  ];

  nuevadimension(dimen: Dimension){
    console.log(dimen);
    const temp = this.templates[0].findIndex(p => p.id == dimen.id);
    this.templates[0][0].imagePositions[0].width = `${dimen.width}px`;
    this.templates[0][0].imagePositions[1].width =   `${250 - (dimen.width - 250)}px`;
    //console.log(this.templates[0][0].imagePositions)
  }
}
