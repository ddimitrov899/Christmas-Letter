import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  saveUser(user) {
    window.localStorage.setItem('user', user);
  }

  getUser() {
    return window.localStorage.getItem('user');
  }

  removeUser() {
    window.localStorage.removeItem('user');
  }

  authenticateUser(token) {
    window.localStorage.setItem('token', token);
  }

  isUserAuthenticated() {
    return window.localStorage.getItem('token') !== null;
  }

  isUserAdmin() {
    const data = window.sessionStorage.getItem('a');
    const dataUser = data.split(' ');
    return dataUser[0] === 'true' && dataUser[1] === this.getToken();
  }

  removeUserAdmin() {
    window.sessionStorage.removeItem('a');
  }

  deauthenticateUser() {
    window.localStorage.removeItem('token');
  }

  getToken() {
    return window.localStorage.getItem('token');
  }
}
