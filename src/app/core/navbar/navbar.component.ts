import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
import { UsersService } from '../../users/users.service';
import {AuthService} from '../auth.service';


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

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private usersService: UsersService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.ngRedux
      .select(state => state.users)
      .subscribe(users => {
        this.authenticated = users.userAuthenticate;
        this.familiar = users.familyName;
      });
    this.specialAuth = this.authService.isUserAdmin();
  }

  logout() {
    this.usersService.logout();
  }
}
