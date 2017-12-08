import { initialState } from './core-state';
import { MESSAGE } from '../action-types';
function setMessage(state, action) {
  const result = action.result;

  if (result) {
    let message = result.message;
    const errors = result.errors;
    if (message) {
      if (errors) {
        const key = Object.keys(errors);
        if (key.length > 0) {
          message = errors[key[0]];
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

function clearMessage(state, action) {

  return Object.assign({}, state, {
    isSuccess: false,
    message: null
  });
}

export function CoreReducer(state = initialState, action) {
  if (action.type === MESSAGE) {
    return clearMessage(state, action);
  } else {
    return setMessage(state, action);
  }

}
