import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
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

  /* eslint-disable @typescript-eslint/no-unused-vars */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this.authService
        .isAuth()
        .then((isAuth) => {
          if (isAuth) return resolve(true);

          this.router.navigate(['auth/sign_in']);
          return resolve(false);
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    });
  }
  /* eslint-anable @typescript-eslint/no-unused-vars */
}
