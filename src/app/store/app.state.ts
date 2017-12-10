import { IUsersState } from './users/user.state';
import { ICoreState } from './core/core-state';
import { IStatsState } from './stats/stats-state';
import { IAddLetterState, IGetLetterState, IGetLettersState } from './letter/letter-state';

export interface IAppState {
  users: IUsersState;
  core: ICoreState;
  stats: IStatsState;
  addLetters: IAddLetterState;
  getLetter: IGetLetterState;
  getLetters: IGetLettersState;
}
