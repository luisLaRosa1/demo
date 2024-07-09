import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./custom-grid/custom-grid.component').then(c => c.CustomGridComponent)
  },
  {
    path: 'v2',
    loadComponent: () => import('./layouts/main/main.component').then(c => c.MainComponent)
  }
];
