import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './../app.state';
import { GET_STATS } from '../action-types';
import { StatsService } from '../../stats/stats.service';

@Injectable()
export class StatsActions {
  constructor(
    private statsService: StatsService,
    private ngRedux: NgRedux<IAppState>
  ) {
  }

  getStats() {
    this.statsService
      .getAllStats()
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: GET_STATS,
          result
        });
      });
  }
}
