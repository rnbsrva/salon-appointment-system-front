import {Gender} from "../enum/gender";

export interface User {
  id: number;
  name: string;
  surname: string;
  phone: string;
  gender: Gender;
  email: string;
}
