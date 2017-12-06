import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
  CommonModule,
    AppRoutingModule,
    FormsModule,
    MaterializeModule
   ],
  exports: [
    NavbarComponent
  ],
  providers: [],
})
export class NavbarModule {}
