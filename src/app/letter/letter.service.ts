import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';

const sendLetterPath = '/letter/send';
const getAllLetterPath = '/letter/get';
const getLetterPath = '/letter/get?id=';

@Injectable()
export class LetterService {

  constructor(private api: ApiService) { }

  getAll() {
    return this.api.get(getAllLetterPath);
  }

  getById(id) {
    return this.api.get(`${getLetterPath}${id}`);
  }

  send(letter) {
    return this.api.post(sendLetterPath, letter);
  }
}
