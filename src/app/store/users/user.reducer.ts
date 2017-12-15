import {initialState} from './user.state';
import {USER_REGISTER, USER_LOGIN, LOGOUT} from '../action-types';

export function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER:
      return registrationUser(state, action);
    case USER_LOGIN:
      return loginUser(state, action);
    case LOGOUT:
      return logout(state, action);
    default:
      return state;
  }
}

function registrationUser(state, action) {
  const result = action.result;
  return Object.assign({}, state, {
    userRegister: result.success
  });
}

function loginUser(state, action) {
  const result = action.result;
  const success = result.success;
  if (success) {
    return Object.assign({}, state, {
      userAuthenticate: success,
      token: result.token,
      familyName: result.user.name,
      email: result.user.email
    });
  }
  return Object.assign({}, state, {
    userRegister: result.success
  });
}

function logout(state, action) {
  return Object.assign({}, state, {
    userAuthenticate: false,
    token: null,
    familyName: null,
});
}
