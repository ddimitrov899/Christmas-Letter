import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private _url = 'http://localhost:5000/';
  constructor(private _http: Http) { }
  get(path) {

  }

  post(path, data) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const requestOptions = new RequestOptions({
      headers: headers
    });

    return this._http
      .post(
      `${this._url}${path}`,
      JSON.stringify(data),
      requestOptions
    )
      .map(res => res.json());

  }
}
