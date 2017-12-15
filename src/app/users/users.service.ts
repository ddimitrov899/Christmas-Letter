import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {ApiService} from '../core/api.service';
import {LoginUser} from './login/login.user.model';
import {RegisterUser} from './register/register.user.model';
import {AuthService} from '../core/auth.service';

const registerUrlPath = 'auth/signup';
const loginUrlPath = 'auth/login';
const AuthMe = 'auth/me';

@Injectable()
export class UsersService {

  constructor(private _api: ApiService,
              private router: Router,
              private authService: AuthService) {
  }

  login(user: LoginUser) {
    return this._api.post(loginUrlPath, user);
  }

  register(user: RegisterUser) {
    return this._api.post(registerUrlPath, user);
  }

  isAuthMe(email) {
    return this._api.post(AuthMe, {email: email}, true);
  }

  logout() {
    this.authService.deauthenticateUser();
    this.authService.removeUser();
    this.authService.removeUserAdmin();
    this.router.navigateByUrl('users/login');
  }
}

