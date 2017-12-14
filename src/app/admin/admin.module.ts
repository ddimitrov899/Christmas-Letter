import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import 'materialize-css';
import {MaterializeModule} from 'angular2-materialize';

import {ListAllLettersComponent} from './list-all-letters/list-all-letters.component';

import {ApiService} from '../core/api.service';
import {SendLetterService} from './send-letter/send-letter.service';
import {LetterService} from '../letter/letter.service';
import {PipeModule} from '../custom-pipes/pipe.module';
import {EmailAction} from '../store/admin/email/email-action';
import {LetterAction} from '../store/letter/letter-action';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    PipeModule
  ],
  declarations: [
    ListAllLettersComponent],
  providers: [
    ApiService,
    SendLetterService,
    LetterAction,
    EmailAction
  ]
})
export class AdminModule {
}
