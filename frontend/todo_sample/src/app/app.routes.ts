import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { TodosListComponent } from './pages/todos/todos-list/todos-list.component';
import { AuthGuard } from 'guards/auth-guard';
import { TodosNewComponent } from './pages/todos/todos-new/todos-new.component';
import { TodosEditComponent } from './pages/todos/todos-edit/todos-edit.component';
import { NAVIGATION_LIST } from './consts/route';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: NAVIGATION_LIST.top,
    component: AppComponent,
    title: 'TODOリスト',
    canActivate: [AuthGuard],
  },
  {
    path: NAVIGATION_LIST.auth.signUp,
    component: SignUpComponent,
    title: '会員登録',
    canActivate: [AuthGuard],
  },
  {
    path: NAVIGATION_LIST.auth.signIn,
    component: SignInComponent,
    title: 'ログイン',
    canActivate: [AuthGuard],
  },
  {
    path: NAVIGATION_LIST.todos.list,
    component: TodosListComponent,
    title: 'TODO一覧',
    canActivate: [AuthGuard],
  },
  {
    path: NAVIGATION_LIST.todos.new,
    component: TodosNewComponent,
    title: 'TODO作成',
    canActivate: [AuthGuard],
  },
  {
    path: NAVIGATION_LIST.todos.edit,
    component: TodosEditComponent,
    title: 'TODO編集',
    canActivate: [AuthGuard],
  },
];
