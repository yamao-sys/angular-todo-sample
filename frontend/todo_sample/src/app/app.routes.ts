import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: 'auth/sign_up',
    component: SignUpComponent,
    title: '会員登録',
  },
  {
    path: 'auth/sign_in',
    component: SignInComponent,
    title: 'ログイン',
  },
];
