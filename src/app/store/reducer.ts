import { combineReducers } from 'redux';
import { usersReducer } from './users/user.reducer';
import { IAppState } from './app.state';

export const reducer = combineReducers<IAppState> ({
  users: usersReducer
});
