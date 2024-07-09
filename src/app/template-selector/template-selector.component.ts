import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {NgStyle} from "@angular/common";
import { Template } from '../layout/layout.component';

@Component({
  selector: 'app-template-selector',
  standalone: true,
  imports: [
    NgStyle, TemplateSelectorComponent
  ],
  templateUrl: './template-selector.component.html',
  styleUrl: './template-selector.component.scss'
})
export class TemplateSelectorComponent {
  @Input() template!: Template;

  formatColumnPosition(colEnd: number): string {
    return `span ${colEnd}`
  }

  formatRowEnd(rowEnd: number): string {
    return `span ${rowEnd}`
  }
}
