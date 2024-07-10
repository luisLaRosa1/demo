import {Component, Input, OnInit} from '@angular/core';
import {NgxSliderModule, Options} from "@angular-slider/ngx-slider";
import {NgClass, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [
    NgxSliderModule,
    NgStyle,
    FormsModule,
    NgClass
  ],
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent implements OnInit {
  @Input() vertical!: boolean
  @Input() isDraggable!: boolean;
  value = 6;
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

  ngOnInit() {
    this.options.vertical = this.vertical
  }

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
