import { Component, OnInit } from '@angular/core';
import { AddLetterModel } from './add-leter.model';

@Component({
  selector: 'letter-add-letter',
  templateUrl: './add-letter.component.html',
  styleUrls: ['./add-letter.component.scss']
})
export class AddLetterComponent implements OnInit {
  message: AddLetterModel =
    new AddLetterModel('Dear Santa, ', 0);
  constructor() { }

  ngOnInit() {
  }

  sendLetter() {
  }
}
