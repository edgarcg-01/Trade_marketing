import { Routes } from '@angular/router';

export const FLEET_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./fleet.component').then(m => m.FleetComponent)
  },
  {
    path: 'check-in',
    loadComponent: () => import('./usage/check-in-form.component').then(m => m.CheckInFormComponent)
  },
  {
    path: 'check-out/:id',
    loadComponent: () => import('./usage/check-out-form.component').then(m => m.CheckOutFormComponent)
  }
];
