import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.scss']
})
export class AppointmentCardComponent {
  treatmentName = "Treatment Name";
  salonName = "Salon Name"
  selectedMaster: string;
  selectedDate: Date;
  selectedTime: string;
  comment: string;

  masters: string[] = ['Master 1', 'Master 2', 'Master 3']; // Replace with your master data
  availableTimes: string[] = ['10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM']; // Replace with your available times

  makeAppointment() {
    // Logic to handle appointment creation
    console.log('Appointment details:', {
      salonName: this.salonName,
      treatmentName: this.treatmentName,
      selectedMaster: this.selectedMaster,
      selectedDate: this.selectedDate,
      selectedTime: this.selectedTime,
      comment: this.comment
    });
  }

   list = [
    {
      id: 1,
      name: "Alisson Sweet"
    },
    {
      id: 2,
      name: "Roberto Ethan"
    },
    {
      id: 3,
      name: "Nathaniel Ramen"
    }
    ];

   workTimes = [
    {
      value: "13:00"
    },
    {
      value: "13:30"
    },
    {
      value: "14:00"
    },
    {
      value: "14:30"
    },
    {
      value: "15:00"
    },
    {
      value: "16:00"
    },
  ];

}
