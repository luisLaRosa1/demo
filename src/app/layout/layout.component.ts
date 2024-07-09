import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { CustomGridComponent } from '../custom-grid/custom-grid.component';
import { TemplateSelectorComponent } from '../template-selector/template-selector.component';

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
  selector: 'app-layout',
  standalone: true,
  imports: [NgClass, CustomGridComponent, TemplateSelectorComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @Input() size: number = 225;
  @Input() imagesInput: string[] = [];
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
            image: this.imagesInput.length >= 1 ? this.imagesInput[0] : '',
            width: `${this.size}px`,
            height: `${2 * this.size}px`,
            minwidth: '50px',
            minheight: `${2 * this.size}px`,
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
          },
          {
            rowStart: 1,
            colStart: 2,
            rowEnd: 2,
            colEnd: 3,
            id: 2,
            image: this.imagesInput.length >= 2 ? this.imagesInput[1] : '',
            width: `${this.size}px`,
            height: `${2 * this.size}px`,
            minwidth: '50px',
            minheight: `${2 * this.size}px`,
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
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
            image: this.imagesInput.length >= 1 ? this.imagesInput[0] : '',
            width: `${2 * this.size}px`,
            height: `${this.size}px`,
            minwidth: `${2 * this.size}px`,
            minheight: '50px',
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
          },
          {
            rowStart: 2,
            colStart: 1,
            rowEnd: 2,
            colEnd: 2,
            id: 2,
            image: this.imagesInput.length >= 2 ? this.imagesInput[1] : '',
            width: `${2 * this.size}px`,
            height: `${this.size}px`,
            minwidth: `${2 * this.size}px`,
            minheight: '50px',
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
          },
        ],
      },
    ],
    [
      {
        id: 3,
        imagePositions: [
          {
            resize: true,
            rowStart: 1,
            colStart: 1,
            rowEnd: 3,
            colEnd: 1,
            id: 1,
            image: this.imagesInput.length >= 1 ? this.imagesInput[0] : '',
            width: `${this.size}px`,
            height: `${2 * this.size}px`,
            minwidth: '50px',
            minheight: '50px',
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
          },
          {
            resize: true,
            rowStart: 1,
            colStart: 2,
            rowEnd: 1,
            colEnd: 2,
            id: 2,
            image: this.imagesInput.length >= 2 ? this.imagesInput[1] : '',
            width: `${this.size}px`,
            height: `${this.size}px`,
            minwidth: '50px',
            minheight: '50px',
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
          },
          {
            rowStart: 2,
            colStart: 2,
            rowEnd: 2,
            colEnd: 3,
            id: 3,
            image: this.imagesInput.length >= 3 ? this.imagesInput[2] : '',
            width: `${this.size}px`,
            height: `${this.size}px`,
            minwidth: '50px',
            minheight: '50px',
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
          },
        ],
      },
      {
        id: 4,
        imagePositions: [
          {
            resize: true,
            rowStart: 1,
            colStart: 1,
            rowEnd: 1,
            colEnd: 3,
            id: 1,
            image: this.imagesInput.length >= 1 ? this.imagesInput[0] : '',
            width: `${2 * this.size}px`,
            height: `${this.size}px`,
            minwidth: '50px',
            minheight: '50px',
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
          },
          {
            resize: true,
            rowStart: 2,
            colStart: 1,
            rowEnd: 2,
            colEnd: 2,
            id: 2,
            image: this.imagesInput.length >= 2 ? this.imagesInput[1] : '',
            width: `${this.size}px`,
            height: `${this.size}px`,
            minwidth: '50px',
            minheight: '50px',
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
          },
          {
            rowStart: 2,
            colStart: 2,
            rowEnd: 2,
            colEnd: 2,
            id: 3,
            image: this.imagesInput.length >= 3 ? this.imagesInput[2] : '',
            width: `${this.size}px`,
            height: `${this.size}px`,
            minwidth: '50px',
            minheight: '50px',
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
          },
        ],
      },
    ],
    [
      {
        id: 5,
        imagePositions: [
          {
            resize: true,
            rowStart: 1,
            colStart: 1,
            rowEnd: 1,
            colEnd: 1,
            id: 1,
            image: this.imagesInput.length >= 1 ? this.imagesInput[0] : '',
            width: `${this.size}px`,
            height: `${this.size}px`,
            minwidth: '50px',
            minheight: '50px',
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
          },
          {
            resize: true,
            rowStart: 1,
            colStart: 2,
            rowEnd: 1,
            colEnd: 2,
            id: 2,
            image: this.imagesInput.length >= 2 ? this.imagesInput[1] : '',
            width: `${this.size}px`,
            height: `${this.size}px`,
            minwidth: '50px',
            minheight: '50px',
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
          },
          {
            resize: true,
            rowStart: 2,
            colStart: 1,
            rowEnd: 2,
            colEnd: 1,
            id: 3,
            image: this.imagesInput.length >= 3 ? this.imagesInput[2] : '',
            width: `${this.size}px`,
            height: `${this.size}px`,
            minwidth: '50px',
            minheight: '50px',
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
          },
          {
            rowStart: 2,
            colStart: 2,
            rowEnd: 2,
            colEnd: 2,
            id: 4,
            image: this.imagesInput.length >= 4 ? this.imagesInput[3] : '',
            width: `${this.size}px`,
            height: `${this.size}px`,
            minwidth: '50px',
            minheight: '50px',
            imagen: {
              left: 0,
              top: 0,
            },
            escala: 1,
          },
        ],
      },
    ],
  ];

  regresarFuncionInicial(template: Template) {
    this.selectedTemplate = null;
    this.templates = [
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
              image: this.imagesInput.length >= 1 ? this.imagesInput[0] : '',
              width: `${this.size}px`,
              height: `${2 * this.size}px`,
              minwidth: '50px',
              minheight: `${2 * this.size}px`,
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
            },
            {
              rowStart: 1,
              colStart: 2,
              rowEnd: 2,
              colEnd: 3,
              id: 2,
              image: this.imagesInput.length >= 2 ? this.imagesInput[1] : '',
              width: `${this.size}px`,
              height: `${2 * this.size}px`,
              minwidth: '50px',
              minheight: `${2 * this.size}px`,
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
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
              image: this.imagesInput.length >= 1 ? this.imagesInput[0] : '',
              width: `${2 * this.size}px`,
              height: `${this.size}px`,
              minwidth: `${2 * this.size}px`,
              minheight: '50px',
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
            },
            {
              rowStart: 2,
              colStart: 1,
              rowEnd: 2,
              colEnd: 2,
              id: 2,
              image: this.imagesInput.length >= 2 ? this.imagesInput[1] : '',
              width: `${2 * this.size}px`,
              height: `${this.size}px`,
              minwidth: `${2 * this.size}px`,
              minheight: '50px',
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
            },
          ],
        },
      ],
      [
        {
          id: 3,
          imagePositions: [
            {
              resize: true,
              rowStart: 1,
              colStart: 1,
              rowEnd: 3,
              colEnd: 1,
              id: 1,
              image: this.imagesInput.length >= 1 ? this.imagesInput[0] : '',
              width: `${this.size}px`,
              height: `${2 * this.size}px`,
              minwidth: '50px',
              minheight: '50px',
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
            },
            {
              resize: true,
              rowStart: 1,
              colStart: 2,
              rowEnd: 1,
              colEnd: 2,
              id: 2,
              image: this.imagesInput.length >= 2 ? this.imagesInput[1] : '',
              width: `${this.size}px`,
              height: `${this.size}px`,
              minwidth: '50px',
              minheight: '50px',
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
            },
            {
              rowStart: 2,
              colStart: 2,
              rowEnd: 2,
              colEnd: 3,
              id: 3,
              image: this.imagesInput.length >= 3 ? this.imagesInput[2] : '',
              width: `${this.size}px`,
              height: `${this.size}px`,
              minwidth: '50px',
              minheight: '50px',
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
            },
          ],
        },
        {
          id: 4,
          imagePositions: [
            {
              resize: true,
              rowStart: 1,
              colStart: 1,
              rowEnd: 1,
              colEnd: 3,
              id: 1,
              image: this.imagesInput.length >= 1 ? this.imagesInput[0] : '',
              width: `${2 * this.size}px`,
              height: `${this.size}px`,
              minwidth: '50px',
              minheight: '50px',
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
            },
            {
              resize: true,
              rowStart: 2,
              colStart: 1,
              rowEnd: 2,
              colEnd: 2,
              id: 2,
              image: this.imagesInput.length >= 2 ? this.imagesInput[1] : '',
              width: `${this.size}px`,
              height: `${this.size}px`,
              minwidth: '50px',
              minheight: '50px',
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
            },
            {
              rowStart: 2,
              colStart: 2,
              rowEnd: 2,
              colEnd: 2,
              id: 3,
              image: this.imagesInput.length >= 3 ? this.imagesInput[2] : '',
              width: `${this.size}px`,
              height: `${this.size}px`,
              minwidth: '50px',
              minheight: '50px',
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
            },
          ],
        },
      ],
      [
        {
          id: 5,
          imagePositions: [
            {
              resize: true,
              rowStart: 1,
              colStart: 1,
              rowEnd: 1,
              colEnd: 1,
              id: 1,
              image: this.imagesInput.length >= 1 ? this.imagesInput[0] : '',
              width: `${this.size}px`,
              height: `${this.size}px`,
              minwidth: '50px',
              minheight: '50px',
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
            },
            {
              resize: true,
              rowStart: 1,
              colStart: 2,
              rowEnd: 1,
              colEnd: 2,
              id: 2,
              image: this.imagesInput.length >= 2 ? this.imagesInput[1] : '',
              width: `${this.size}px`,
              height: `${this.size}px`,
              minwidth: '50px',
              minheight: '50px',
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
            },
            {
              resize: true,
              rowStart: 2,
              colStart: 1,
              rowEnd: 2,
              colEnd: 1,
              id: 3,
              image: this.imagesInput.length >= 3 ? this.imagesInput[2] : '',
              width: `${this.size}px`,
              height: `${this.size}px`,
              minwidth: '50px',
              minheight: '50px',
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
            },
            {
              rowStart: 2,
              colStart: 2,
              rowEnd: 2,
              colEnd: 2,
              id: 4,
              image: this.imagesInput.length >= 4 ? this.imagesInput[3] : '',
              width: `${this.size}px`,
              height: `${this.size}px`,
              minwidth: '50px',
              minheight: '50px',
              imagen: {
                left: 0,
                top: 0,
              },
              escala: 1,
            },
          ],
        },
      ],
    ];
    var ind = 0;
    var templ = this.templates[ind].findIndex((p) => p.id == template.id);
    if (templ == -1) {
      ind = 1;
      templ = this.templates[ind].findIndex((p) => p.id == template.id);
      if (templ == -1) {
        ind = 2;
        templ = this.templates[ind].findIndex((p) => p.id == template.id);
      }
    }

    this.selectedTemplate = this.templates[ind][templ];
  }
}
