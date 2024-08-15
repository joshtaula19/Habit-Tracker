import request from 'superagent'
import type { Habit, HabitWeekday } from '../../models/add-habits'

const rootUrl = '/api/v1'

export async function getHabits(): Promise<Habit[]> {
  const response = await request.get(rootUrl + '/habits')
  return response.body
}

export async function getHabitWeekdays(
  habitId: number,
): Promise<HabitWeekday[]> {
  const response = await request.get(rootUrl + `/habits/${habitId}/weekdays`)
  return response.body
}

export async function updateHabit(updateHabit: Habit): Promise<Habit> {
  const response = await request
    .patch(rootUrl + `/habits/${updateHabit.id}`)
    .send(updateHabit)
  return response.body
}

export async function addHabitWeekday(
  habitId: number,
  weekday: string,
): Promise<HabitWeekday> {
  const response = await request
    .post(rootUrl + `/habits/${habitId}/weekdays`)
    .send({ weekday })
  return response.body
}

export async function removeHabitWeekday(
  habitWeekdayId: number,
): Promise<void> {
  await request.delete(rootUrl + `/habit_weekdays/${habitWeekdayId}`)
}
