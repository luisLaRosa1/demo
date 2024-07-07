import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./custom-grid/custom-grid.component').then(c => c.CustomGridComponent)
  },
  {
    path: 'prime',
    loadComponent: () => import('./prime-ng/prime-ng.component').then(c => c.PrimeNgComponent)
  }
];
