import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component').then(c => c.LayoutComponent)
  },
  {
    path: 'v2',
    loadComponent: () => import('./layouts/main/main.component').then(c => c.MainComponent)
  },
  {
    path: 'v3',
    loadComponent: () => import('./v3/main/main.component').then(c => c.MainComponent)
  }
];
