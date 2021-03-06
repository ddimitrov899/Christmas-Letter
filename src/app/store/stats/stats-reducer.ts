import { initialState } from './stats-state';
import { GET_STATS } from '../action-types';

export function StatsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STATS:
      return Object.assign({}, state, {
        statsSuccess: true,
        users: action.result.users,
        sendLetters: action.result.sendLetters
      });

    default:
      return state;
  }
}
