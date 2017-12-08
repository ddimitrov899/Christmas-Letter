import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddLetterComponent } from './add-letter/add-letter.component';

@NgModule({
  declarations: [AddLetterComponent],
  imports: [
    CommonModule,
    FormsModule],
  exports: [],
  providers: [
    
  ],
})
export class LetterModule { }
