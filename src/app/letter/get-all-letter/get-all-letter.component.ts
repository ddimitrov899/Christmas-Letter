import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../../store';
import {LetterAction} from '../../store/letter/letter-action';
import {LetterModel} from '../leter.model';

@Component({
  selector: 'letter-get-all-letter',
  templateUrl: './get-all-letter.component.html',
  styleUrls: ['./get-all-letter.component.scss']
})
export class GetAllLetterComponent implements OnInit {
  letters: Array<LetterModel> = [new LetterModel()];

  constructor(private letterAction: LetterAction,
              private router: Router,
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

}
