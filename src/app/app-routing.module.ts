import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateRoute } from './core/private.route';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { AddLetterComponent } from './letter/add-letter/add-letter.component';
import {CardListingLettersComponent} from './letter/card-listing-letters/card-listing-letters.component';
import {PrivateAuthRoute} from './core/private-auth.route';
import {ListAllLettersComponent} from './admin/list-all-letters/list-all-letters.component';

const routes: Routes = [
  { path: '', component: CardListingLettersComponent},
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'letter/add', component: AddLetterComponent, canActivate: [PrivateRoute] },
  { path: 'admin/list', component: ListAllLettersComponent, canActivate: [PrivateRoute, PrivateAuthRoute] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
