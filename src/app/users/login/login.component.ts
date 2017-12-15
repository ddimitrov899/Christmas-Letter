import {Component, OnInit} from '@angular/core';
import {LoginUser} from './login.user.model';
import {UserAction} from '../../store/users/users.action';
import {NgRedux} from 'ng2-redux';
import {IAppState} from './../../store/app.state';
import {Router} from '@angular/router';
import {AuthService} from '../../core/auth.service';
import {AdminAction} from '../../store/admin/admin.action';

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
              private adminAction: AdminAction,
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
          this.authService.saveEmail(user.email);
          this.userMe(user.email);
          this.router.navigateByUrl('');
        }
      });
  }

  private userMe(email) {
    this.adminAction.isAdmin(email);
    this.ngRedux
      .select(state => state.isAdmin)
      .subscribe(auth => {
        if (auth.success) {
          window.sessionStorage.setItem('a', `${auth.success} ${this.authService.getToken()}`);
        }
      });
  }
}
