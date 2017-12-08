import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
import { LoginUser } from './login/login.user.model';
import { RegisterUser } from './register/register.user.model';
import { AuthService } from '../core/auth.service';
const registerUrlPath = 'auth/signup';
const loginUrlPath = 'auth/login';

@Injectable()
export class UsersService {

  constructor(
    protected _api: ApiService,
    protected authService: AuthService
  ) { }
  login(user: LoginUser) {
    return this._api.post(loginUrlPath, user);
  }

  register(user: RegisterUser) {
    return this._api.post(registerUrlPath, user);
  }

  logout() {
    this.authService.removeUser();
    this.authService.deauthenticateUser();
  }
}
