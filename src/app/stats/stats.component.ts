import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './../store/app.state';
import { StatsActions } from './../store/stats/stats-actions';
import { StatsService } from './stats.service';

@Component({
  selector: 'letter-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  userNumber = 0;
  letterNumber = 0;
  constructor(
    private statsActions: StatsActions,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    this.statsActions.getStats();
    this.ngRedux
      .select(state => state.stats)
      .subscribe(stats => {
        if (stats.statsSuccess) {
          this.userNumber = stats.users;
          this.letterNumber = stats.sendLetters;
        }
      });
  }
}
