import {initialIsAdminState} from './admin.stats';
import {IS_ADMIN} from '../action-types';

export function AdminReducer(state = initialIsAdminState, action) {

  switch (action.type) {
    case IS_ADMIN:
      return Object.assign({}, state, action.result);
    default:
      return state;
  }
}
