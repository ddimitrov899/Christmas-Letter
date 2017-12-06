import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private _url = 'http://localhost:5000/';
  constructor(private _http: Http) { }
  get(path) {

  }

  post(path, data) {
    return this._http
      .post(`${this._url}${path}`, JSON.stringify(data))
      .map(res => res.json());

  }
}
