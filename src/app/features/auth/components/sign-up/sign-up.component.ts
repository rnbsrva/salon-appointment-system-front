import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidator} from "../../validate/password.validator";
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
      email: ['', [Validators.email, Validators.required]],
      password: ['', PasswordValidator()],
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
        localStorage.setItem('user',JSON.stringify(res))
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

  sendOtp() {
    console.log('f')
    let otp = {
      otp: this.getOtpFromForm(),
      email:JSON.parse(localStorage.getItem('user')!).email
    }
    console.log(otp)
    this._authService.emailConfirmation(otp)
    .subscribe(res => console.log(res))
  }

  getOtpFromForm(){
    let number1 = this.otpForm.get('number1')!.value!
    let number2 = this.otpForm.get('number2')!.value!
    let number3 = this.otpForm.get('number3')!.value!
    let number4 = this.otpForm.get('number4')!.value!
    let number5 = this.otpForm.get('number5')!.value!
    let number6 = this.otpForm.get('number6')!.value!
    let otp = +`${number1}${number2}${number3}${number4}${number5}${number6}`
    return otp;
  }

}
