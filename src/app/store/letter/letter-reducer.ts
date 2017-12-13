import { SEND_LETTER, GET_LETTERS, GET_LETTER } from '../action-types';
import { initialAddLetterState, initialGetLettersState, initialGetLetterState } from './letter-state';

export function AddLettersReducer(state = initialAddLetterState, action) {
  switch (action.type) {
    case SEND_LETTER:
      return Object.assign({}, state, {
        getSuccess: action.result.success
      });
    default:
      return state;
  }
}

export function GetLettersReducer(state = initialGetLettersState, action) {
  switch (action.type) {
    case GET_LETTERS:
      return Object.assign({}, state, {
        getSuccess: true,
        letters: action.result,
      });
    default:
      return state;
  }
}

export function GetLetterReducer(state = initialGetLetterState, action) {
  switch (action.type) {
    case GET_LETTER:
      const result = action.result;
      return Object.assign({}, state, {
        getSuccess: true,
        letter: result.letter,
        createdBy: result.createdBy,
        age: result.age,
        location: result.location,
      });
    default:
      return state;
  }
}
