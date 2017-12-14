import {Component, OnInit} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../../store';
import {LetterModel} from '../leter.model';
import  * as imageArrow from './../../../assets/img/agel-2.png';

@Component({
  selector: 'letter-get-letter',
  templateUrl: './get-letter.component.html',
  styleUrls: ['./get-letter.component.scss']
})
export class GetLetterComponent implements OnInit {
  letter: LetterModel = new LetterModel();
  imageArrow = imageArrow;
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
    this.ngRedux
      .select(state => state.getLetter)
      .subscribe(letter => {
        if (letter.getSuccess) {
          this.letter = letter;
        }
      });
  }

}
