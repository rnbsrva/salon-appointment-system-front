import {TreatmentType} from "../enum/treatment-type";

export interface TreatmentDto {
  salonId: number
  name: number
  price: number
  minutes: number
  treatmentType: TreatmentType
}
