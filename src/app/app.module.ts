import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {NgReduxModule, NgRedux} from 'ng2-redux';
import {store, IAppState} from './store';
import {Router} from '@angular/router';

import 'materialize-css';
import {MaterializeModule} from 'angular2-materialize';

import {AppComponent} from './app.component';

import {UserModule} from './users/users.module';
import {CoreModule} from './core/core.module';

import {AuthService} from './core/auth.service';
import {ApiService} from './core/api.service';
import {config} from './core/config';
import {LetterModule} from './letter/letter.module';
import { StatsModule } from './stats/stats.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpClientModule,
    NgReduxModule,
    UserModule,
    CoreModule,
    LetterModule,
    StatsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              private authServece: AuthService,
              private router: Router) {
    config(store, this.ngRedux, this.authServece, this.router);
  }
}
