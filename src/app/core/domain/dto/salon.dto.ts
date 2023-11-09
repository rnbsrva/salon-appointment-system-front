import {AddressDto} from "./address.dto";

export interface SalonDto {
  ownerId: number
  name: string
  phone: string
  email: string
  description: string
  addressDTO: AddressDto
}
