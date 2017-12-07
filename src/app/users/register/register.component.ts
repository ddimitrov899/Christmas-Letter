import { Component, OnInit } from '@angular/core';
import { RegisterUser } from './register.user.model';
import { UserAction } from '../../store/users/users.action';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
import { Router } from '@angular/router';

@Component({
  selector: 'letter-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: RegisterUser = new RegisterUser();
  constructor(
    private usersAction: UserAction,
    private router: Router,
    private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  register() {
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
