import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router: Router) {

  }

  saveUser(user) {
    window.localStorage.setItem('user', user);
  }

  getUser() {
    return window.localStorage.getItem('user');
  }

  saveEmail(email) {
    window.localStorage.setItem('email', email);
  }

  getEmail() {
    return window.localStorage.getItem('email');
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
    if (data) {
      const dataUser = data.split(' ');
      return dataUser[0] === 'true' && dataUser[1] === this.getToken();
    } else {
      this.router.navigateByUrl('');
      return false;
    }
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
