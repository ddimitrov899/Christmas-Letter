import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
import { UsersService } from '../../users/users.service';
import * as logo from './../../resurces/logo_santa.svg';

@Component({
  selector: 'letter-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  authenticated = false;
  familyname: string = null;
  img = logo;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.ngRedux
      .select(state => state.users)
      .subscribe(users => {
        this.authenticated = users.userAuthenticate;
        this.familyname = users.lastname;
      });
  }

  logout() {
    this.usersService.logout();
  }
}
