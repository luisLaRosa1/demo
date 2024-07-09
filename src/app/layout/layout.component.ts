import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CustomGridComponent } from '../custom-grid/custom-grid.component';
import { SelectorComponent } from '../custom-grid/selector/selector.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NgClass, CustomGridComponent, SelectorComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  imagesInput: string[] = ['',''];
  selectedTemplate: any;

  selectedTemplateSelect(event: any){
    this.selectedTemplate = event;
  }
}
