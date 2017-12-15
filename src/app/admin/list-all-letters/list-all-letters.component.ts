import {Component, OnInit} from '@angular/core';
import {LetterModel} from '../../letter/leter.model';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../../store';
import {LetterAction} from '../../store/letter/letter-action';
import {EmailAction} from '../../store/admin/email/email-action';
import {LetterToModel} from '../send-letter/letter-to.model';

@Component({
  selector: 'letter-list-all-letters',
  templateUrl: './list-all-letters.component.html',
  styleUrls: ['./list-all-letters.component.scss']
})
export class ListAllLettersComponent implements OnInit {
  letters: Array<LetterModel> = [new LetterModel()];

  constructor(private letterAction: LetterAction,
              private emailAction: EmailAction,
              private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
    this.letterAction.getAllLetters();
    this.ngRedux
      .select(state => state.getLetters)
      .subscribe(letters => {
        if (letters.getSuccess) {
          this.letters = letters.letters;
        }
      });
  }

  sendEmail(id, email, letter, createdBy) {
    const mail: LetterToModel = {content: `${letter} \nfrom: ${createdBy}`, email: email};
    this.emailAction.sendEmailLetter(mail);
  }
}
