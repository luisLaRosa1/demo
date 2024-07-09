import { Component } from '@angular/core';
import {ImageBoxComponent} from "../../custom-grid/image-box/image-box.component";
import {TemplateSelectorComponent} from "../../custom-grid/template-selector/template-selector.component";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {TwoComponent} from "../two/two.component";


export interface NewTemplate {
  id: number;
  imagePositions: {
    resize?: boolean;
    image: any;
    rowStart: number;
    colStart: number;
    rowEnd: number;
    colEnd: number;
    id: number;
  }[];
}
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ImageBoxComponent,
    TemplateSelectorComponent,
    NgClass,
    NgOptimizedImage,
    TwoComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  selectedLayout = 2;
  selectedTemplate!: NewTemplate;
  isDraggable = true;


  layouts: number[] = [2, 3, 4];
  templates: Record<number, NewTemplate[]> = {
    2: [
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
          },
          {
            rowStart: 1,
            colStart: 2,
            rowEnd: 2,
            colEnd: 3,
            id: 2,
            image: '',
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
          },
          {
            rowStart: 2,
            colStart: 1,
            rowEnd: 2,
            colEnd: 2,
            id: 2,
            image: '',
          },
        ],
      },
    ],
  }




}
