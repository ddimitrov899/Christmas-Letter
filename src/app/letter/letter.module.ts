import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddLetterComponent } from './add-letter/add-letter.component';

import { ApiService } from './../core/api.service';
import { LetterService } from './letter.service';
import { LetterAction } from '../store/letter/letter-action';

@NgModule({
  declarations: [AddLetterComponent],
  imports: [
  CommonModule,
    FormsModule
  ],
  exports: [],
  providers: [
    ApiService,
    LetterService,
    LetterAction,
  ],
})
export class LetterModule { }
