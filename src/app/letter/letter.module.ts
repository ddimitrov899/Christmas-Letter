import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AddLetterComponent} from './add-letter/add-letter.component';


import 'materialize-css';
import {MaterializeModule} from 'angular2-materialize';

import {ApiService} from './../core/api.service';
import {LetterService} from './letter.service';
import {LetterAction} from '../store/letter/letter-action';
import {GetLetterComponent} from './get-letter/get-letter.component';
import { CardListingLettersComponent } from './card-listing-letters/card-listing-letters.component';
import { NguiMapModule} from '@ngui/map';
import {PipeModule} from '../custom-pipes/pipe.module';

@NgModule({
  declarations: [
    AddLetterComponent,
    GetLetterComponent,
    CardListingLettersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyC4NsUn8I2eN40AgJOOyNh9PyLlooClSwE'}),
    PipeModule
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
