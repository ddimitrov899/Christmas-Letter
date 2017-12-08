import { IUsersState } from './users/user.state';
import { ICoreState } from './core/core-state';
import { IStatsState } from './stats/stats-state';

export interface IAppState {
  users: IUsersState;
  core: ICoreState;
  stats: IStatsState;
}
