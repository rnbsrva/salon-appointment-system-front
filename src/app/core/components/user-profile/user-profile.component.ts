import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Gender} from "../../types";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  userForm: FormGroup

  constructor(fb: FormBuilder) {
    this.userForm = fb.group(
      {
        name: ['Name', [Validators.maxLength(64), Validators.required]],
        surname: ['Surname',[Validators.maxLength(64), Validators.required]],
        phone: ['Phone', Validators.required],
        gender: [Gender.FEMALE],
        email: ['example@gmail.com', Validators.email]
      }
    )
  }

}
