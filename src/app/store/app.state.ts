import { IUsersState } from './users/user.state';
import { ICoreState } from './core/core-state';
import { IStatsState } from './stats/stats-state';
import { IAddLetterState, IGetLetterState, IGetLettersState } from './letter/letter-state';
import {ISendEmailLettersState} from './admin/email/email-state';
import {IIsAdminState} from './admin/admin.stats';

export interface IAppState {
  users: IUsersState;
  core: ICoreState;
  stats: IStatsState;
  addLetters: IAddLetterState;
  getLetter: IGetLetterState;
  getLetters: IGetLettersState;
  sendEmailLetters: ISendEmailLettersState;
  isAdmin: IIsAdminState;
}
