import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'app-four',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage,
    NgStyle
  ],
  templateUrl: './four.component.html',
  styleUrl: './four.component.scss'
})
export class FourComponent {
  @Input() vertical!: boolean
  @Input() isDraggable!: boolean;
  value = 6;
  verticalValue = 6;

  get leftSide(){
    return  this.value;
  }

  get rightSide() {
    return Math.abs(this.value - 12);
  }
  get upSide(){
    return this.value;
  }

  get downSide() {
    return Math.abs(this.value - 12);
  }
}
