import {Component, OnInit} from '@angular/core';
import {LetterAction} from '../../store/letter/letter-action';
import {IAppState} from '../../store';
import {NgRedux} from 'ng2-redux';
import {Router} from '@angular/router';
import {StatsActions} from '../../store/stats/stats-actions';

@Component({
  selector: 'letter-card-listing-letters',
  templateUrl: './card-listing-letters.component.html',
  styleUrls: ['./card-listing-letters.component.scss']
})
export class CardListingLettersComponent implements OnInit {
  public positions = [];

  constructor(
    private statsActions: StatsActions,
    private letterAction: LetterAction,
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) {
  }

  ngOnInit() {
    this.statsActions.getStats();
    this.letterAction.getAllLetters();
    this.ngRedux
      .select(state => state.getLetters)
      .subscribe(letters => {
        if (letters.getSuccess) {
          this.positions = letters.letters;
        }
      });
  }

  public onMapClick(id) {
    this.letterAction.getLetter(id);
  }
}
