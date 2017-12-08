import { IUsersState } from './users/user.state';
import { ICoreState } from './core/core-state';
import { IStatsState } from './stats/stats-state';
import { IAddLetterState, IGetLetterState } from './letter/letter-state';

export interface IAppState {
  users: IUsersState;
  core: ICoreState;
  stats: IStatsState;
  addLetter: IAddLetterState;
  getLetters: IGetLetterState;
}
