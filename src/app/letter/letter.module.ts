import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AddLetterComponent} from './add-letter/add-letter.component';


import 'materialize-css';
import {MaterializeModule} from 'angular2-materialize';

import {ApiService} from './../core/api.service';
import {LetterService} from './letter.service';
import {LetterAction} from '../store/letter/letter-action';
import {GetAllLetterComponent} from './get-all-letter/get-all-letter.component';
import {RemoveStringDearSantaPipe} from '../custom-pipes/remove-string-dear-santa.pipe';

@NgModule({
  declarations: [
    AddLetterComponent,
    GetAllLetterComponent,
    RemoveStringDearSantaPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule
  ],
  exports: [],
  providers: [
    ApiService,
    LetterService,
    LetterAction,
  ],
})
export class LetterModule {
}
