import {Injectable} from '@angular/core';
import {UsersService} from '../../users/users.service';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../app.state';
import {IS_ADMIN} from '../action-types';

@Injectable()
export class AdminAction {
  constructor(private userService: UsersService,
              private ngRedux: NgRedux<IAppState>) {
  }

  isAdmin(email) {
    this.userService.isAuthMe(email)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: IS_ADMIN,
          result
        });
      });
  }
}
