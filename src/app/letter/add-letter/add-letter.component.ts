import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddLetterModel } from './add-leter.model';
import { LetterAction } from '../../store/letter/letter-action';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';

@Component({
  selector: 'letter-add-letter',
  templateUrl: './add-letter.component.html',
  styleUrls: ['./add-letter.component.scss']
})
export class AddLetterComponent {
  message: AddLetterModel =
    new AddLetterModel('Dear Santa, ', 0);
  constructor(
    private letterAction: LetterAction,
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) { }

  sendLetter() {
    this.letterAction.sendLetter(this.message);
    this.ngRedux
      .select(state => state.addLetter)
      .subscribe(addLetter => {
        if (addLetter.addSuccess) {
          this.router.navigateByUrl('');
        }
      });
  }
}
