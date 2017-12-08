import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, IAppState } from './store';
import { Router, NavigationStart } from '@angular/router';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { UserModule } from './users/users.module';
import { NavbarModule } from './core/navbar.module';

import { AuthService } from './core/auth.service';
import { ApiService } from './core/api.service';
import { MESSAGE, USER_LOGIN } from './store/action-types';

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
  constructor(private ngRedux: NgRedux<IAppState>,
    private authServece: AuthService,
    private router: Router) {
    this.ngRedux.provideStore(store);
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.ngRedux.dispatch({
          type: MESSAGE
        });
      }
    });

    if (this.authServece.isUserAuthenticated()) {
      const token = this.authServece.getToken();
      const familyname = this.authServece.getUser();

      this.ngRedux.dispatch({
        type: USER_LOGIN,
        result: {
          success: true,
          token,
          user: {
            name: familyname
          }
        }
      });
    }
  }
}
