import {initialSendEmailLettersState} from './email-state';
import {SEND_EMAIL_LETTER} from '../../action-types';

export function SendEmailLetterReducer(state = initialSendEmailLettersState, action) {
  switch (action.type) {
    case SEND_EMAIL_LETTER:
      return Object.assign({}, state, {success: action.result.success});
    default:
      return state;
  }
}
