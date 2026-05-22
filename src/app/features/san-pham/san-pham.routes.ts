import { Routes } from '@angular/router';

export const SAN_PHAM_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/san-pham-list/san-pham-list.component')
        .then(c => c.SanPhamListComponent)
  }
];