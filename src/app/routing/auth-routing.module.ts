import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from '../pages/login/login.page';
import { SignupPage } from '../pages/signup/signup.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginPage,
    // loadChildren: () => import('./components/pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'signup',
    component: SignupPage,
    // loadChildren: () => import('./components/pages/signup/signup.page').then(m => m.SignupPage)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }