import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: 'auth/sign_up',
    component: SignUpComponent,
    title: '会員登録',
  },
];
