import db from './connection.ts'
import { DrinkWater } from '../../models/drinkWater.ts'
import { Habit, HabitWeekday } from '../../models/add-habits.ts'

export async function getDrinkWater() {
  const waterTracker = await db('drinkwater').select()
  return waterTracker as DrinkWater[]
}

export async function updateDrinkWater({
  id,
  completed,
}: Pick<DrinkWater, 'id' | 'completed'>): Promise<DrinkWater | undefined> {
  const [updatedWaterTracker] = await db('drinkwater')
    .where({ id })
    .update({ completed })
    .returning('*')

  return updatedWaterTracker
}

// Get all habits
export async function getHabits(): Promise<Habit[]> {
  const habits = await db('habits').select()
  return habits as Habit[]
}

// Get all weekdays for a habit
export async function getHabitWeekdays(
  habitId: number,
): Promise<HabitWeekday[]> {
  const habitWeekdays = await db('habit_weekdays')
    .where('habit_id', habitId)
    .select()
  return habitWeekdays as HabitWeekday[]
}

// Add a new habit
export async function addHabit(name: string): Promise<Habit> {
  const [newHabit] = await db('habits').insert({ name }).returning('*')
  return newHabit
}

// Update a habit
export async function updateHabit(
  id: number,
  name: string,
): Promise<Habit | undefined> {
  const [updatedHabit] = await db('habits')
    .where({ id })
    .update({ name })
    .returning('*')
  return updatedHabit
}

// Remove a habit
export async function removeHabit(id: number): Promise<void> {
  await db('habits').where({ id }).del()
}

// Add a weekday to a habit
export async function addHabitWeekday(
  habitId: number,
  weekday: string,
): Promise<HabitWeekday> {
  const [newHabitWeekday] = await db('habit_weekdays')
    .insert({ habit_id: habitId, weekday })
    .returning('*')
  return newHabitWeekday
}

// Remove a weekday from a habit
export async function removeHabitWeekday(id: number): Promise<void> {
  await db('habit_weekdays').where({ id }).del()
}
