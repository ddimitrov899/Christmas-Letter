import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';

const sendLetterPath = 'letter/create';
const getAllLetterPath = 'letter/all';
const getLetterPath = 'letter/:id';

@Injectable()
export class LetterService {

  constructor(private api: ApiService) { }

  getAll() {
    return this.api.get(getAllLetterPath);
  }

  getById(id) {
    return this.api.get(`${getLetterPath.replace(':id', '')}${id}`);
  }

  send(letter) {
    return this.api.post(sendLetterPath, letter, true);
  }
}
