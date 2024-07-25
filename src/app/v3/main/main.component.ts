import { Component } from '@angular/core';
import {LayoutSelectorComponent, LayoutTemplate} from "../layout-selector/layout-selector.component";
import {JsonPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {ImageGridComponent} from "../image-grid/image-grid.component";
import { toPng } from "html-to-image";

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
  resultImage = '';
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

  customPrintV2() {
    const node = document.getElementById('template-container');
    toPng(node!)
      .then((dataUrl) => {
        console.log(dataUrl);
        this.resultImage = dataUrl;
      })
  }

  customPrint() {
    const gridContainer = document.getElementById('template-container');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match the grid container
    canvas.width = gridContainer?.offsetWidth ?? 500;
    canvas.height = gridContainer?.offsetHeight ?? 500;

    // Get all images within the grid container
    const images = gridContainer?.querySelectorAll('img');

    console.log(images);

    // Function to get the absolute position of an element
    function getAbsolutePosition(element: any) {
      let rect = element.getBoundingClientRect();
      console.log(rect);
      return {
        left: rect.left,
        top: rect.top
      };
    }


    function drawImageCover(image: any) {

      // Image and canvas dimensions
      const imageWidth = image.naturalWidth;
      const imageHeight = image.naturalHeight;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Calculate aspect ratios
      const imageAspectRatio = imageWidth / imageHeight;
      const canvasAspectRatio = canvasWidth / canvasHeight;

      // Determine scaling factor
      let scale;
      if (imageAspectRatio > canvasAspectRatio) {
        scale = canvasWidth / imageWidth;
      } else {
        scale = canvasHeight / imageHeight;
      }

      // Calculate new image dimensions
      const newWidth = imageWidth * scale;
      const newHeight = imageHeight * scale;

      // Calculate position to center the image
      const x = (canvasWidth - newWidth) / 2;
      const y = (canvasHeight - newHeight) / 2;

      // Draw the image
      context?.drawImage(image, 0, 0, imageWidth, imageHeight, x, y, newWidth, newHeight);
    }

    // Draw each image onto the canvas
    // images?.forEach(image => {
    //   context?.drawImage(image, 0, 0, image.width, image.height, image.offsetLeft, image.offsetHeight, image.width, image.height);
    // });

      context?.drawImage(images![0], 0, 0, 202, 420, 40, 40, 202, 420);
      context?.drawImage(images![1], 0, 0, 202, 420, 212, 40, 202, 420);
      // context?.drawImage(images![1], 100, 50, 202, 420, 230, 0, 230, 420 );


    // Convert canvas to image data
    const imageData = canvas.toDataURL('image/png');

    this.resultImage = imageData;

    // console.log(imageData);


  }
}
