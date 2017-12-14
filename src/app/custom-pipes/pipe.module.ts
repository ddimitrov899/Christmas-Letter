import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RemoveStringDearSantaPipe} from './remove-string-dear-santa.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RemoveStringDearSantaPipe
  ],
  exports: [
    RemoveStringDearSantaPipe
  ]
})
export class PipeModule {
}
