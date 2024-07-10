import {Component, Input} from '@angular/core';
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [
    NgStyle,
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss'
})
export class ThreeComponent {
  @Input() isDraggable!: boolean;
  value = 6;
  verticalValue = 6;

  get leftSide(){
    return this.value;
  }

  get rightSide() {
    return Math.abs(this.value - 12);
  }
  get upSide(){
    return this.verticalValue;
  }

  get downSide() {
    return Math.abs(this.verticalValue - 12);
  }
}
