import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Gender} from '../../domain/enum/gender';
import {AddressService} from "../../service/address.service";
import {User} from "../../domain/model/user";
import {UserDto} from "../../domain/dto/user.dto";
import {UserService} from "../../service/user.service";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  userForm: FormGroup
  addressForm: FormGroup
  user:User

  constructor(
    private readonly fb: FormBuilder,
    private readonly addressService:AddressService,
    private readonly userService:UserService
  ) {
    this.addressForm = fb.group({
      houseNumber: [],
      city: [''],
      state: [''],
      street: ['']
    })

    this.userForm = fb.group(
      {
        name: ['', [Validators.maxLength(64), Validators.required]],
        surname: ['', [Validators.maxLength(64), Validators.required]],
        phone: ['', Validators.required],
        gender: [Gender.FEMALE],
        email: ['', Validators.email],
      }
    )

  }

  saveProfile(){

    let form = this.userForm;

    let userDto:UserDto = {
      name: form.get('name')?.value as string,
      surname: form.get('surname')?.value as string,
      email: form.get('email')?.value as string,
      phone: form.get('phone')?.value as string,
      gender: form.get('gender') as unknown as Gender
    }

    this.userService.update(
      userDto,this.user.id
    ).subscribe(res => {

    },)

  }
}
