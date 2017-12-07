import { Injectable } from '@angular/core';
import { UsersService } from './../../users/users.service';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './../app.state';
import { USER_REGISTER, USER_LOGIN } from './../action-types';
import { RegisterUser } from './../../users/register/register.user.model';
import { LoginUser } from '../../users/login/login.user.model';

@Injectable()
export class UserAction {
  constructor(private usersService: UsersService,
  private ngRedux: NgRedux<IAppState>) {
  }

  register(user: RegisterUser) {
    this.usersService
    .register(user)
    .subscribe(result => {
      this.ngRedux.dispatch({
        type: USER_REGISTER,
        result
      });
    });
  }

  login(user: LoginUser) {
    this.usersService
    .login(user)
    .subscribe(result => {
      this.ngRedux.dispatch({
        type: USER_LOGIN,
        result
      });
    });
  }
}
