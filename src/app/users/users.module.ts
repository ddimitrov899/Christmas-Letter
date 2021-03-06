import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserAction } from './../store/users/users.action';
import { UsersService } from './users.service';
import {AdminAction} from '../store/admin/admin.action';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule
  ],
  exports: [],
  providers: [
    UsersService,
    AdminAction,
    UserAction
  ],
})
export class UserModule { }
