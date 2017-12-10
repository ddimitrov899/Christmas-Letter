import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateRoute } from './core/private.route';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { AddLetterComponent } from './letter/add-letter/add-letter.component';
import {GetAllLetterComponent} from './letter/get-all-letter/get-all-letter.component';

const routes: Routes = [
  { path: '', component: GetAllLetterComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'letter/add', component: AddLetterComponent, canActivate: [PrivateRoute] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
