import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss']
})
export class FeedbackCardComponent {
  username="username";
  date = Date()
  salonName = "Salon Name";
  masterName= "Master Name";

  datePipe = new DatePipe('en-US');

  getFormattedDate() {
    return this.datePipe.transform(this.date, 'EEE, h:mm a');
  }
}
