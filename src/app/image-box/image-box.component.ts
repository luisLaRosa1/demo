import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Template} from "../app.component";
import {NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'app-image-box',
  standalone: true,
  imports: [
    NgStyle,
    NgOptimizedImage
  ],
  templateUrl: './image-box.component.html',
  styleUrl: './image-box.component.scss'
})
export class ImageBoxComponent {
  @Input() template!: Template;
  @ViewChild('host') host!: ElementRef;
  @Output() imageChange: EventEmitter<{ templateIdx: number; imagePositionIdx: number }> = new EventEmitter();
  @Input() templateIdx!: number

  onImageChange(event: any, idx: number) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.imageChange.emit({ imagePositionIdx: idx, templateIdx: this.templateIdx})
        this.template.imagePositions[idx].image = event.target.result;
      }
    }
  }

  showFileChooser(idx: number) {
    console.log(this.host.nativeElement?.getElementById(`fileInput-${idx}`));
  }

}
