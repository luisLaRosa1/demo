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
import { DOCUMENT, NgOptimizedImage, NgStyle } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-box',
  standalone: true,
  imports: [NgStyle, NgOptimizedImage],
  templateUrl: './image-box.component.html',
  styleUrl: './image-box.component.scss',
})
export class ImageBoxComponent {
  @Input() template!: Template;
  @ViewChild('host', { static: false }) hosts!: ElementRef;
  @Output() imageChange: EventEmitter<{
    templateIdx: number;
    imagePositionIdx: number;
  }> = new EventEmitter();
  @Input() templateIdx!: number;

  base64toFile(url: any, filename: any, mimeType: any) {
    return fetch(url)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], filename, { type: mimeType });
      });
  }

  onImageChange(event: any, idx: number) {
    if (event.target.files && event.target.files.length) {
      var img = new Image();
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
        reader.onload = function () {
          img.src = reader.result as string;
        };
        img.onload = () => {
        this.imageChange.emit({ imagePositionIdx: idx, templateIdx: this.templateIdx})
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
}
