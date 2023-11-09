export interface ResetPasswordDto {
  email:string
  oldPassword:string
  newPassword: string
  newPasswordConfirmation: string
}
