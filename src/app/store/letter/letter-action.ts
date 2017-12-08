import { Injectable } from '@angular/core';
import { LetterService } from './../../letter/letter.service';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './../app.state';
import { SEND_LETTER, GET_LETTER, GET_LETTERS } from './../action-types';

@Injectable()
export class LetterAction {
  constructor(
    private letterService: LetterService,
    private ngRedux: NgRedux<IAppState>
  ) { }

  getAllLetters() {
    this.letterService
      .getAll()
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: GET_LETTERS,
          result
        });
      });
  }

  getLetter(id) {
    this.letterService
      .getById(id)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: GET_LETTER,
          result
        });
      });
  }

  sendLetter(letter) {
    this.letterService
      .send(letter)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: SEND_LETTER,
          result
        });
      });
  }
}
