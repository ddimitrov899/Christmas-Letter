import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, IAppState } from './store';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { UserModule } from './users/users.module';
import { NavbarModule } from './core/navbar.module';

import { ApiService } from './core/api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpModule,
    NgReduxModule,
    UserModule,
    NavbarModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.provideStore(store);
  }
}
