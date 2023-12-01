import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Gender} from "../../../../core/domain/enum/gender";
import {PasswordValidator} from "../../validate/password.validator";
import {UserDto} from "../../../../core/domain/dto/user.dto";
import {AuthService} from "../../../../core/service/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  {

  registrationForm: FormGroup;
  otpForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService
  ) {
    this.registrationForm = _fb.group({
      name: ['', [Validators.maxLength(64), Validators.required]],
      surname: ['', [Validators.maxLength(64), Validators.required]],
      phoneNumber: ['', Validators.required],
      // gender: [Gender.FEMALE],
      email: ['', [Validators.email, Validators.required]],
      password: ['', PasswordValidator()],
      // address: _fb.group({
      //   state: ["", Validators.required],
      //   city: ["", Validators.required],
      //   street: ["", Validators.required],
      //   houseNumber: ["", Validators.required]
      // })
    })
    this.otpForm = _fb.group({
      number1: [undefined, Validators.required, Validators.min(0), Validators.max(9)],
      number2: [undefined, Validators.required, Validators.min(0), Validators.max(9)],
      number3: [undefined, Validators.required, Validators.min(0), Validators.max(9)],
      number4: [undefined, Validators.required, Validators.min(0), Validators.max(9)],
      number5: [undefined, Validators.required, Validators.min(0), Validators.max(9)],
      number6: [undefined, Validators.required, Validators.min(0), Validators.max(9)],
    })
  }

  requestToRegister() {
    let r = this.registrationForm.value
    this._authService.register(r)
      .subscribe(res => {
        console.log(res)
      })
  }

  get form() {
    return this.registrationForm;
  }

  get addressForm() {
    return this.registrationForm.get("address") as FormGroup;
  }

  canContinue(): boolean {
    return this.registrationForm.get("name")!.valid &&
      this.registrationForm.get("surname")!.valid;
  }

}
