import { initialState } from './core-state';
import { MESSAGE } from '../action-types';
export function CoreReducer(state = initialState, action) {
  const result = action.result;

  if (result) {
    let message = result.message;
    const errors = result.errors;
    if (message) {
      if (errors) {
        const key = Object.keys(errors);
        if (key.length > 0) {
          message = key[0];
        }
      }
      return Object.assign({}, state, {
        message: message,
        isSuccess: result.success
      });
    }
  }
  return state;
}
