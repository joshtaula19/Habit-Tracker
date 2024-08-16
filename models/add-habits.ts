export interface Habit {
  id: number
  name: string
  created_at?: string
  updated_at?: string
}

export interface HabitWeekday {
  id: number
  habit_id: number
  weekday: string
  created_at?: string
  updated_at?: string
}
