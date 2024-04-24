import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    //path with two parameters
    path: 'contentDetail/:type/:id',
    loadComponent: () => import('./content-detail/content-detail.page').then( m => m.ContentDetailPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];
