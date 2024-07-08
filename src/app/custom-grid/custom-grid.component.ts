import { Component } from '@angular/core';
import { ImageBoxComponent } from './image-box/image-box.component';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';
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
  imports: [ImageBoxComponent, TemplateSelectorComponent, NgClass],
  templateUrl: './custom-grid.component.html',
  styleUrl: './custom-grid.component.scss',
})
export class CustomGridComponent {
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
            image: '',
            width: '250px',
            height: '500px',
            minwidth: '50px',
            minheight: '500px',
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
            image: '',
            width: '500px',
            height: '250px',
            minwidth: '500px',
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
            image: '',
            width: '500px',
            height: '250px',
            minwidth: '500px',
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
            image: '',
            width: '250px',
            height: '500px',
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
            image: '',
            width: '250px',
            height: '250px',
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
            image: '',
            width: '250px',
            height: '250px',
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
            image: '',
            width: '500px',
            height: '250px',
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
            image: '',
            width: '250px',
            height: '250px',
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
            image: '',
            width: '250px',
            height: '250px',
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

  nuevadimension(dimen: Dimension) {
    switch (dimen.id) {
      case 1:
        this.templates[0][0].imagePositions[0].width = `${dimen.width}px`;
        this.templates[0][0].imagePositions[1].width = `${
          250 - (dimen.width - 250)
        }px`;
        break;
      case 2:
        this.templates[0][1].imagePositions[0].height = `${dimen.height}px`;
        this.templates[0][1].imagePositions[1].height = `${
          250 - (dimen.height - 250)
        }px`;
        break;
      case 3:
        if (dimen.tipo == 1) {
          this.templates[1][0].imagePositions[0].width = `${dimen.width}px`;
          this.templates[1][0].imagePositions[1].width = `${
            250 - (dimen.width - 250)
          }px`;
          this.templates[1][0].imagePositions[2].width = `${
            250 - (dimen.width - 250)
          }px`;
        }
        if (dimen.tipo == 2) {
          this.templates[1][0].imagePositions[1].height = `${dimen.height}px`;
          this.templates[1][0].imagePositions[2].height = `${
            250 - (dimen.height - 250)
          }px`;
        }
        break;
      case 4:
        if (dimen.tipo == 1) {
          this.templates[1][1].imagePositions[0].height = `${dimen.height}px`;
          this.templates[1][1].imagePositions[1].height = `${
            250 - (dimen.height - 250)
          }px`;
          this.templates[1][1].imagePositions[2].height = `${
            250 - (dimen.height - 250)
          }px`;
        }
        if (dimen.tipo == 2) {
          this.templates[1][1].imagePositions[1].width = `${dimen.width}px`;
          this.templates[1][1].imagePositions[2].width = `${
            250 - (dimen.width - 250)
          }px`;
        }
        break;
    }
  }

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
              image: '',
              width: '250px',
              height: '500px',
              minwidth: '50px',
              minheight: '500px',
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
              image: '',
              width: '250px',
              height: '500px',
              minwidth: '50px',
              minheight: '500px',
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
              image: '',
              width: '500px',
              height: '250px',
              minwidth: '500px',
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
              image: '',
              width: '500px',
              height: '250px',
              minwidth: '500px',
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
              image: '',
              width: '250px',
              height: '500px',
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
              image: '',
              width: '250px',
              height: '250px',
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
              image: '',
              width: '250px',
              height: '250px',
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
              image: '',
              width: '500px',
              height: '250px',
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
              image: '',
              width: '250px',
              height: '250px',
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
              image: '',
              width: '250px',
              height: '250px',
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
    }

    this.selectedTemplate = this.templates[ind][templ];
  }
}
