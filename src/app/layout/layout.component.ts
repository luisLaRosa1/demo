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
  imagesInput: string[] = [
    'https://2.bp.blogspot.com/-gjOEnFz1tCE/U97Oe_XzaFI/AAAAAAACQ1A/vwNDLPhU2UM/s1600/paisajes+naturales+de+bosques+y+%C3%A1rboles+verdes+(10).jpg',
    'https://1.bp.blogspot.com/-dm4acG73ZWk/VDQmRt-O9nI/AAAAAAACU9A/AwOrCZFeiTc/s1600/los%2Bmejores%2Bpaisajes%2Bdel%2Bmundo%2By%2Bnaturaleza%2Bcon%2Bcascadas%2C%2Bmonta%C3%B1as%2C%2Bpastizales%2By%2Boto%C3%B1o%2B(5).jpg',
    'https://4.bp.blogspot.com/-s5nlQK14mDc/UtL0TEeJ9RI/AAAAAAAAY2U/LYDmcixgR1M/s1600/187959.jpg'
  ];
  selectedTemplate: any;

  selectedTemplateSelect(event: any) {
    this.selectedTemplate = event;
  }
}
