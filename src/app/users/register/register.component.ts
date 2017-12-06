import { Component, OnInit } from '@angular/core';
import { RegisterUser } from './register.user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'letter-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: RegisterUser = new RegisterUser();
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  register () {
    this.usersService.register(this.user).subscribe(res => {
      console.log(res);
    });
  }
}
