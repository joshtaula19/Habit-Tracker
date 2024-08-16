import request from 'superagent'
import type { Habit, HabitWeekday } from '../../models/add-habits'

const rootUrl = '/api/v1'

export async function getHabits(): Promise<Habit[]> {
  try {
    const response = await request.get(rootUrl + '/habits')
    return response.body
  } catch (error) {
    throw new Error('Failed to fetch habits')
  }
}

export async function addHabit(name: string): Promise<Habit> {
  const response = await request.post(rootUrl + '/habits').send({ name })
  return response.body
}

export async function updateHabit(id: number, name: string): Promise<Habit> {
  const response = await request.patch(rootUrl + `/habits/${id}`).send({ name })
  return response.body
}

export async function removeHabit(id: number): Promise<void> {
  await request.delete(rootUrl + `/habits/${id}`)
}

export async function getHabitWeekdays(
  habitId: number,
): Promise<HabitWeekday[]> {
  const response = await request.get(rootUrl + `/habits/${habitId}/weekdays`)
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

export async function removeHabitWeekday(id: number): Promise<void> {
  await request.delete(rootUrl + `/habit_weekdays/${id}`)
}
