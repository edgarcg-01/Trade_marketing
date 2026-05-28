import { Route } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { driverGuard } from './core/guards/driver.guard';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'projects',
    canActivate: [authGuard],
    loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./core/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'dashboard',
        canActivate: [driverGuard],
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'config',
        canActivate: [driverGuard],
        loadComponent: () => import('./features/config/config.component').then(m => m.ConfigComponent)
      },
      {
        path: 'staff',
        canActivate: [driverGuard],
        loadComponent: () => import('./features/staff/staff.component').then(m => m.StaffComponent)
      },
      {
        path: 'fleet',
        canActivate: [driverGuard],
        loadChildren: () => import('./features/fleet/fleet.routes').then(m => m.FLEET_ROUTES)
      },
      {
        path: 'shipments',
        canActivate: [driverGuard],
        loadComponent: () => import('./features/shipments/shipments.component').then(m => m.ShipmentsComponent)
      },
      {
        path: 'guides',
        canActivate: [driverGuard],
        loadComponent: () => import('./features/guides/guides.component').then(m => m.GuidesComponent)
      },
      {
        path: 'costs',
        canActivate: [driverGuard],
        loadComponent: () => import('./features/costs/costs.component').then(m => m.CostsComponent)
      },
      {
        path: 'reports',
        canActivate: [driverGuard],
        loadComponent: () => import('./features/reports/reports.component').then(m => m.ReportsComponent)
      },
      {
        path: 'driver-assignments',
        loadComponent: () => import('./features/driver-assignments/driver-assignments.component').then(m => m.DriverAssignmentsComponent)
      },
      {
        path: 'profile',
        canActivate: [driverGuard],
        loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: 'profile/password',
        canActivate: [driverGuard],
        loadComponent: () => import('./features/profile/password/password.component').then(m => m.PasswordComponent)
      },
      {
        path: 'admin/users',
        canActivate: [driverGuard],
        loadComponent: () => import('./features/admin/users/users.component').then(m => m.UsersComponent)
      },
      {
        path: 'admin/settings',
        canActivate: [driverGuard],
        loadComponent: () => import('./features/admin/settings/settings.component').then(m => m.SettingsComponent)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
