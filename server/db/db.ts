import db from './connection.ts'
import { DrinkWater } from '../../models/drinkWater.ts'

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
