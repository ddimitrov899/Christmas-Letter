import { combineReducers } from 'redux';
import { UsersReducer } from './users/user.reducer';
import { IAppState } from './app.state';
import { CoreReducer } from './core/core-reducer';
import { StatsReducer } from './stats/stats-reducer';
import { LettersReducer } from './letter/letter-reducer';

export const reducer = combineReducers<IAppState>({
  users: UsersReducer,
  core: CoreReducer,
  stats: StatsReducer,
  letters: LettersReducer,
});
