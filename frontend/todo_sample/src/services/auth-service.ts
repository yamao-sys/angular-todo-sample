import { Injectable } from '@angular/core';
import { checkSignedIn } from 'apis/authApi';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  async isAuth() {
    return await checkSignedIn();
  }
}
