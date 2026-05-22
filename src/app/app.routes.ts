import { Routes } from '@angular/router';

import { authGuard } from './core/auth/guards/auth.guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full'
  },

  // LOGIN
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login.component')
        .then(c => c.LoginComponent)
  },

  // ADMIN
  {
    path: 'admin',

    canActivate: [authGuard],

    loadComponent: () =>
      import('./layouts/admin-layout/admin-layout.component')
        .then(c => c.AdminLayoutComponent),

    children: [

      // DASHBOARD
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes')
            .then(r => r.DASHBOARD_ROUTES)
      },

      // SAN PHAM
      {
        path: 'san-pham',
        loadChildren: () =>
          import('./features/san-pham/san-pham.routes')
            .then(r => r.SAN_PHAM_ROUTES)
      },

      // DEFAULT ADMIN
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },

  // 404
  {
    path: '**',
    redirectTo: 'login'
  }
];