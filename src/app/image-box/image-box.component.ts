import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Template } from '../app.component';
import {DOCUMENT, NgClass, NgOptimizedImage, NgStyle} from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-box',
  standalone: true,
  imports: [NgStyle, NgOptimizedImage, NgClass],
  templateUrl: './image-box.component.html',
  styleUrl: './image-box.component.scss',
})
export class ImageBoxComponent {
  @Input() template!: Template;
  @ViewChild('host', { static: false }) hosts!: ElementRef;
  @Input() templateIdx!: number;

  onImageChange(event: any, idx: number) {
    if (event.target.files && event.target.files.length) {
      var img = new Image();
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
        reader.onload = function () {
          img.src = reader.result as string;
        };
        img.onload = () => {
        this.template.imagePositions[idx].image = img.src;
      }
    }
  }

  constructor(
    @Inject(DOCUMENT) document: Document,
    private sanitizer: DomSanitizer
  ) {}

  showFileChooser(idx: number) {
    document.getElementById(`fileInput-${idx}`)?.click();
  }

  onDragStart(event: any) {
    event.preventDefault()
    event.dataTransfer?.setData('imageSrc', event.target?.currentSrc); // Set dragged image ID
  }

  onDrop(event: any) {
    event.preventDefault();
    // if (event.target === event.currentTarget) { // Don't emit if dropped within the same box
    //   return;
    // }
    console.log(event.dataTransfer)
    const draggedImage = event.dataTransfer.getData('imageSrc');
    console.log(draggedImage)

  }
}
