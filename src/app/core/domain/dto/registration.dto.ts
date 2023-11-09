import {Gender} from "../enum/gender";

export interface RegistrationDto {
  name: string
  age: number
  phone: string
  email: string
  gender: Gender
  password: string
}
