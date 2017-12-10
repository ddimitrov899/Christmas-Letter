import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';

@Component({
  selector: 'letter-message-handler',
  templateUrl: './message-handler.component.html',
  styleUrls: ['./message-handler.component.scss']
})
export class MessageHandlerComponent implements OnInit {
  message: string;
  alert: string;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.ngRedux
      .select(state => state.core)
      .subscribe(core => {
        this.message = core.message;
        this.alert = core.isSuccess ? 'alert-success' : 'alert-danger';
      });
  }

}
