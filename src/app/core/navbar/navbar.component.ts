import {Component, OnInit} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../../store';
import {AuthService} from '../auth.service';
import {UserAction} from '../../store/users/users.action';
import {AdminAction} from '../../store/admin/admin.action';


@Component({
  selector: 'letter-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  authenticated = false;
  specialAuth = false;
  familiar: string = null;
  img = 'assets/img/logo.png';

  constructor(private ngRedux: NgRedux<IAppState>,
              private adminAction: AdminAction,
              private usersAction: UserAction,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.ngRedux
      .select(state => state.users)
      .subscribe(users => {
        this.authenticated = users.userAuthenticate;
        this.familiar = users.familyName;
      });

    this.adminAction.isAdmin(this.authService.getEmail());
    this.ngRedux
      .select(state => state.isAdmin)
      .subscribe(auth => {
        if (auth.success) {
          this.specialAuth = auth.success;
        }
      });
  }

  logout() {
    this.usersAction.logout();
  }
}
