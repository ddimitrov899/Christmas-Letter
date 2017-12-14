import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../../app.state';
import {SEND_EMAIL_LETTER} from '../../action-types';
import {SendLetterService} from '../../../admin/send-letter/send-letter.service';

@Injectable()
export class EmailAction {
  constructor(private adminService: SendLetterService,
              private ngRedux: NgRedux<IAppState>) {

  }

  sendEmailLetter(id, email) {
    this.adminService.sendMail({id: id, email: email})
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: SEND_EMAIL_LETTER,
          result
        });
      });
  }
}
