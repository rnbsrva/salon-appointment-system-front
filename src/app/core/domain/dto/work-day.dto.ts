import {WeekDay} from "../enum/week-day";

export interface WorkDayDto {
  salonId: number
  masterId: number
  weekDay: WeekDay
  workStartTime: Date
  workEndTime: Date
  isHoliday: boolean
}
