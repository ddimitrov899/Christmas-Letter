import {combineReducers} from 'redux';
import {UsersReducer} from './users/user.reducer';
import {IAppState} from './app.state';
import {CoreReducer} from './core/core-reducer';
import {StatsReducer} from './stats/stats-reducer';
import {AddLettersReducer, GetLettersReducer, GetLetterReducer} from './letter/letter-reducer';
import {SendEmailLetterReducer} from './admin/email/email-reducer';
import {AdminReducer} from './admin/admin.reducer';

export const reducer = combineReducers<IAppState>({
  users: UsersReducer,
  core: CoreReducer,
  stats: StatsReducer,
  addLetters: AddLettersReducer,
  getLetters: GetLettersReducer,
  getLetter: GetLetterReducer,
  sendEmailLetter: SendEmailLetterReducer,
  isAdmin: AdminReducer
});
