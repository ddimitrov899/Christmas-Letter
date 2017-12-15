import {Component} from '@angular/core';
import {RegisterUser} from './register.user.model';
import {UserAction} from '../../store/users/users.action';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../../store';
import {Router} from '@angular/router';
import {StatsActions} from '../../store/stats/stats-actions';

@Component({
  selector: 'letter-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user: RegisterUser = new RegisterUser();

  constructor(private statsActions: StatsActions,
              private usersAction: UserAction,
              private router: Router,
              private ngRedux: NgRedux<IAppState>) {
  }

  register() {
    this.statsActions.getStats();
    this.usersAction.register(this.user);
    this.ngRedux
      .select(state => state.users.userRegister)
      .subscribe(userRegister => {
        if (userRegister) {
          this.router.navigateByUrl('/users/login');
        }
      });
  }
}
