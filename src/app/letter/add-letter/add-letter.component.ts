import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddLetterModel } from './add-leter.model';
import { LetterAction } from '../../store/letter/letter-action';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
import * as disableImageSubmit from './../../../assets/img/air1.png';
import * as enableImageSubmit from './../../../assets/img/air2.png';

@Component({
  selector: 'letter-add-letter',
  templateUrl: './add-letter.component.html',
  styleUrls: ['./add-letter.component.scss']
})
export class AddLetterComponent {
  message: AddLetterModel =
    new AddLetterModel('Dear Santa, ');
  imgSubmit = enableImageSubmit;
  imgDisable = disableImageSubmit;
  constructor(
    private letterAction: LetterAction,
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) { }

  sendLetter() {
    const {letter, age, createdBy, city, country} = this.message;
    if  (!letter || (typeof Number(age) !== 'number' || isNaN(Number(age))) || !createdBy || !city || !country) {
      return false;
    }
    const message = {
      letter: letter,
      age: age,
      createdBy: createdBy,
      location: `${country}, ${city}`
    };

    this.letterAction.sendLetter(message);
    this.ngRedux
      .select(state => state.addLetters )
      .subscribe(addLetter => {
        console.log(addLetter);
        if (addLetter.getSuccess) {
          this.router.navigateByUrl('');
        }
      });
  }
}
