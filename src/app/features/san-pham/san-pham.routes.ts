import { Routes } from '@angular/router';

export const SAN_PHAM_ROUTES: Routes = [
  // Danh sách sản phẩm (Mặc định khi vào /admin/san-pham)
  {
    path: '',
    loadComponent: () => import('./pages/san-pham-list/san-pham-list.component').then(m => m.SanPhamListComponent)
  },
  // Thêm sản phẩm mới (Khi vào /admin/san-pham/create)
  {
    path: 'create',
    loadComponent: () => import('./pages/san-pham-create/san-pham-create.component').then(m => m.SanPhamCreateComponent)
  }
];