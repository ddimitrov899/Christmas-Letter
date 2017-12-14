import {Component, OnInit} from '@angular/core';
import {LoginUser} from './login.user.model';
import {UserAction} from '../../store/users/users.action';
import {NgRedux} from 'ng2-redux';
import {IAppState} from './../../store/app.state';
import {Router} from '@angular/router';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'letter-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginUser = new LoginUser();

  constructor(private userAction: UserAction,
              private authService: AuthService,
              private router: Router,
              private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
  }

  login() {
    this.userAction.login(this.user);
    this.ngRedux
      .select(state => state.users)
      .subscribe(user => {
        if (user.userAuthenticate) {
          this.authService.saveUser(user.familyName);
          this.authService.authenticateUser(user.token);
          this.userMe(user.email);
          this.router.navigateByUrl('');
        }
      });
  }

  private userMe(email) {
    this.userAction.isAuthMe(email).subscribe(auth => {
      if (auth.success) {
        window.sessionStorage.setItem('a', `${auth.success} ${this.authService.getToken()}`);
      }
    });
  }
}
