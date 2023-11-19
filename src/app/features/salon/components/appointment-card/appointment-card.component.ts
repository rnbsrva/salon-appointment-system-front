import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.scss']
})
export class AppointmentCardComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  treatmentName = "Treatment Name";
  salonName = "Salon Name"
  selectedTime: string;
  selectedMaster: string;
  selectedDate: string;

  onSubmit(): void {
    // @ts-ignore
    const selectedDate = this.secondFormGroup.get('secondCtrl').value;
    console.log('Selected Date:', selectedDate);
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
    ]

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
  ]

  constructor(private _formBuilder: FormBuilder) {}
}
