import {Component, Input} from '@angular/core';
import {NgxSliderModule, Options} from "@angular-slider/ngx-slider";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [
    NgxSliderModule,
    NgStyle
  ],
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss'
})
export class ThreeComponent {
  @Input() isDraggable!: boolean;
  value = 6;
  verticalValue = 6;
  verticalOptions: Options = {
    vertical: true,
    stepsArray: [
      { value: 1},
      { value: 2},
      { value: 3},
      { value: 4},
      { value: 5},
      { value: 6},
      { value: 7},
      { value: 8},
      { value: 9},
      { value: 10},
      { value: 11},
    ]
  }
  options: Options = {
    stepsArray: [
      { value: 1},
      { value: 2},
      { value: 3},
      { value: 4},
      { value: 5},
      { value: 6},
      { value: 7},
      { value: 8},
      { value: 9},
      { value: 10},
      { value: 11},
    ]
  };

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
