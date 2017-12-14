import {Injectable} from '@angular/core';
import {ApiService} from '../../core/api.service';
import {LetterToModel} from './letter-to.model';

const mailSend = 'mail/send';

@Injectable()
export class SendLetterService {

  constructor(private apiService: ApiService) {
  }

  sendMail(data: LetterToModel) {
    return this.apiService.post(mailSend, data, true);
  }
}
