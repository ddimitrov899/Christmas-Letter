import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import {AuthService} from './auth.service';

@Injectable()
export class ApiService {
  private _url = 'http://localhost:8080/';

  constructor(private _http: HttpClient,
              private authService: AuthService) {
  }

  get(path) {
    return this._http.get(`${this._url}${path}`);
  }

  post(path, data, auth = false) {
    return this._http
      .post(
        `${this._url}${path}`,
        JSON.stringify(data),
        {headers: auth ? new HttpHeaders().set('Authorization', `Basic ${this.authService.getToken()}`) : new HttpHeaders()}
      );

  }
}
