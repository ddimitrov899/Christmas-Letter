import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
import { LoginUser } from './login/login.user.model';
import { RegisterUser } from './register/register.user.model';
const registerUrlPath = 'auth/signup';
const loginUrlPath = 'auth/sigin';

@Injectable()
export class UsersService {

  constructor(protected _api: ApiService) { }
  login(user: LoginUser) {
    return this._api.post(loginUrlPath, user);
  }

  register(user: RegisterUser) {
    return this._api.post(registerUrlPath, user);
  }

  logout() {
    localStorage.clear();
  }
}
