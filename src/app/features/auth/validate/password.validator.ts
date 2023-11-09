import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function PasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value
    if (!password) {
      return null; // No validation error if the field is empty
    }

    const digitPattern = /\d/;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const specialCharacterPattern = /[!@#$%^&*()\-_=+]/;
    const minLength = 8;

    const isDigitValid = digitPattern.test(password);
    const isUppercaseValid = uppercasePattern.test(password);
    const isLowercaseValid = lowercasePattern.test(password);
    const isSpecialCharacterValid = specialCharacterPattern.test(password);
    const isLengthValid = password.length >= minLength;

    if (
      isDigitValid &&
      isUppercaseValid &&
      isLowercaseValid &&
      isSpecialCharacterValid &&
      isLengthValid
    ) {
      return null; // Password is valid
    }

    return {'passwordInvalid': true};
  }
}
