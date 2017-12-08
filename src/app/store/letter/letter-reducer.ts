import { SEND_LETTER, GET_LETTERS, GET_LETTER } from '../action-types';
import { initialAddLetterState } from './letter-state';


export function LettersReducer(state = initialAddLetterState, action) {
  switch (action.type) {
    case SEND_LETTER:
      return Object.assign({}, state, {
        addSuccess: true
      });
    case GET_LETTERS:
      return Object.assign({}, state, {
        getSuccess: true,
        letters: action.resut.letters,
      });
    case GET_LETTER:
      const result = action.resut;
      return Object.assign({}, state, {
        getSuccess: true,
        letter: result.letter,
        name: result.name,
        age: result.age,
        city: result.city,
      });
    default:
      return state;
  }
}
