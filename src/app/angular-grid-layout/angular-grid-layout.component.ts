import { Component } from '@angular/core';
import {KtdGridLayout, KtdGridModule, ktdTrackById} from '@katoid/angular-grid-layout';

@Component({
  selector: 'app-angular-grid-layout',
  standalone: true,
  imports: [KtdGridModule],
  templateUrl: './angular-grid-layout.component.html',
  styleUrl: './angular-grid-layout.component.scss'
})
export class AngularGridLayoutComponent {
  cols: number = 6;
  rowHeight: number = 100;
  layout: KtdGridLayout = [
    {id: '0', x: 0, y: 0, w: 3, h: 6, minH: 6, maxH: 6},
    {id: '1', x: 3, y: 0, w: 3, h: 3},
    {id: '2', x: 3, y: 3, w: 3, h: 3, minW: 2, maxW: 3, minH: 2, maxH: 3},
  ];
  trackById = ktdTrackById

  onLayoutUpdated(event: KtdGridLayout) {
    console.log(event);
  }
}

