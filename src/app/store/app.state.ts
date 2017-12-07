import { IUsersState } from './users/user.state';
import { ICoreState } from './core/core-state';

export interface IAppState {
  users: IUsersState;
  core: ICoreState;
}
