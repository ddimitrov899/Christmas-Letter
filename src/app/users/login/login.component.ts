import { Component, OnInit } from '@angular/core';
import { LoginUser } from './login.user.model';
import { UserAction } from '../../store/users/users.action';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './../../store/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'letter-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginUser = new LoginUser();

  constructor(
    private userAction: UserAction,
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
  }

  login() {
    this.userAction.login(this.user);
    this.ngRedux
      .select(state => state.users)
      .subscribe(user => {
        if (user.userAuthenticate) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('family-name', user.lastname);
          this.router.navigateByUrl('');
        }
      });
  }
}
