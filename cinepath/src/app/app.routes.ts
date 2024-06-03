import { Routes,PreloadAllModules, RouterModule  } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    //path with two parameters
    path: 'contentDetail/:type/:id',
    loadComponent: () => import('./content-detail/content-detail.page').then( m => m.ContentDetailPage),
    ...canActivate(redirectUnauthorizedToLogin) // Use spread operator to include canActivate logic
   
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];
