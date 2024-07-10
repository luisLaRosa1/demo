import {Component, Input} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [
    NgStyle,
    FormsModule,
    NgClass
  ],
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent {
  @Input() vertical!: boolean
  @Input() isDraggable!: boolean;
  value = 6;

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
