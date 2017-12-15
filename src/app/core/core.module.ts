import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './../app-routing.module';

import 'materialize-css';
import {MaterializeModule} from 'angular2-materialize';

import {AuthService} from './auth.service';
import {PrivateRoute} from './private.route';
import {AdminAction} from '../store/admin/admin.action';
import {PrivateAuthRoute} from './private-auth.route';
import {UserAction} from '../store/users/users.action';

import {NavbarComponent} from './navbar/navbar.component';
import {MessageHandlerComponent} from './message-handler/message-handler.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MessageHandlerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MaterializeModule
  ],
  exports: [
    NavbarComponent,
    MessageHandlerComponent,
  ],
  providers: [
    AuthService,
    AdminAction,
    PrivateAuthRoute,
    UserAction,
    PrivateRoute
  ],
})

export class CoreModule {
}
