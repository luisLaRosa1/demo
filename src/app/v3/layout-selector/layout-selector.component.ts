import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgStyle} from "@angular/common";
import {LayoutComponent} from "../../layout/layout.component";

export interface LayoutTemplate {
  id: number;
  positions: {
    image: any;
    colSpan: number
    rowSpan: number;
  }[]
}

@Component({
  selector: 'app-layout-selector',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './layout-selector.component.html',
  styleUrl: './layout-selector.component.scss'
})
export class LayoutSelectorComponent {
  @Input() templates!: LayoutTemplate[];
  @Input() selectedTemplate!: LayoutTemplate;
  @Output() onSelectTemplate: EventEmitter<LayoutTemplate> = new EventEmitter();
}
