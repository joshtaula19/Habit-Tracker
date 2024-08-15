export const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const

export interface DrinkWater {
  id: number
  weekday: string
  completed: boolean
  glassIndex: number
}
