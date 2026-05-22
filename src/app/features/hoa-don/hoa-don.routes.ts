import { Routes } from '@angular/router';

export const HOA_DON_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/hoa-don-list/hoa-don-list.component').then(m => m.HoaDonListComponent)
  },
  {
    path: 'detail',
    loadComponent: () => import('./pages/hoa-don-detail/hoa-don-detail.component').then(m => m.HoaDonDetailComponent)
  }
];