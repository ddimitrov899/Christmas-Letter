import { Component, OnInit } from '@angular/core';
import { LoginUser } from './login.user.model';
import { UsersService } from './../users.service';

@Component({
  selector: 'letter-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginUser = new LoginUser();

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user);
  }
}
