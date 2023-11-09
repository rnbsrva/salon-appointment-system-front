import {Gender} from "../enum/gender";

export interface UserDto {
  name: string
  surname: string
  phone: string
  gender: Gender
  email: string
}
