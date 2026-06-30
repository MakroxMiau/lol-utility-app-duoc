import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'wave-manager',
    loadComponent: () => import('./wave-manager/wave-manager.page').then( m => m.WaveManagerPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'tempos',
    loadComponent: () => import('./tempos/tempos.page').then( m => m.TemposPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage),
    canActivate: [AuthGuard]
  },
];
