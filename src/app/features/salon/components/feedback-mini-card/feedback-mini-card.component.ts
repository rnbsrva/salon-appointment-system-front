import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-feedback-mini-card',
  templateUrl: './feedback-mini-card.component.html',
  styleUrls: ['./feedback-mini-card.component.scss']
})
export class FeedbackMiniCardComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  username="username";
  date = Date()
  masterName= "Master Name";

  datePipe = new DatePipe('en-US');

  getFormattedDate() {
    return this.datePipe.transform(this.date, 'EEE, h:mm a');
  }
}
