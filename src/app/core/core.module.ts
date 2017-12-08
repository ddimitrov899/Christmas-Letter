import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AuthService } from './auth.service';
import { PrivateRoute } from './private.route';

import { NavbarComponent } from './navbar/navbar.component';
import { MessageHandlerComponent } from './message-handler/message-handler.component';
import { StatsModule } from './../stats/stats.module';

@NgModule({
  declarations: [
    NavbarComponent,
    MessageHandlerComponent
  ],
  imports: [
CommonModule,
    AppRoutingModule,
    FormsModule,
    MaterializeModule,
    StatsModule
  ],
  exports: [
    NavbarComponent,
    MessageHandlerComponent,
  ],
  providers: [
    AuthService,
    PrivateRoute,
  ],
})

export class CoreModule { }
