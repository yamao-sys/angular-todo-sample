import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NAVIGATION_LIST, NOT_NEEDS_SIGNED_IN_PAGE } from 'app/consts/route';
import { Observable } from 'rxjs';
import { AuthService } from 'services/auth-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isInNotNeedingAuthPage = NOT_NEEDS_SIGNED_IN_PAGE.includes(state.url);

    return new Promise((resolve, reject) => {
      this.authService
        .isAuth()
        .then((isAuth) => {
          if (isAuth && isInNotNeedingAuthPage) {
            this.router.navigate([NAVIGATION_LIST.todos.list]);
            return resolve(false);
          }
          if (!isAuth && !isInNotNeedingAuthPage) {
            this.router.navigate([NAVIGATION_LIST.auth.signIn]);
            return resolve(false);
          }

          return resolve(true);
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    });
  }
  /* eslint-anable @typescript-eslint/no-unused-vars */
}
