import db from './connection.ts'
import { DrinkWater } from '../../models/drinkWater.ts'
import { DailyCodingData } from '../../models/coding.ts'

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

export async function getCodingHabits(): Promise<DailyCodingData[]> {
  const codingHabits = await db('coding_habits').select()
  return codingHabits as DailyCodingData[]
}

export async function saveCodingHabit(data: DailyCodingData): Promise<DailyCodingData> {
  const [savedCodingHabit] = await db('coding_habits')
    .insert(data)
    .returning('*')

  return savedCodingHabit
}

export async function updateCodingHabit(data: DailyCodingData): Promise<DailyCodingData | undefined> {
  const [updatedCodingHabit] = await db('coding_habits')
    .where({ date: data.date }) // Assuming date is the unique identifier
    .update(data)
    .returning('*')

  return updatedCodingHabit
}