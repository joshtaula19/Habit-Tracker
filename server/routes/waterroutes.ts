import { Router } from 'express'

import * as db from '../db/db'
import { DrinkWater } from '../../models/drinkWater'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const drinkwater = await db.getDrinkWater()
    res.json(drinkwater)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Something went wrong getting your water info' })
  }
})

router.patch('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  console.log('test:', id)
  const { completed } = req.body

  if (completed === undefined) {
    return res.status(400).json({ message: 'completed status is required' })
  }

  try {
    const updateData: Pick<DrinkWater, 'id' | 'completed'> = { id, completed }

    const updatedDrinkWater = await db.updateDrinkWater(updateData)
    console.log('testing updatedrinkwater', updatedDrinkWater)
    if (!updatedDrinkWater) {
      return res
        .status(404)
        .json({ message: 'Drink Water entry not found mate' })
    }
    res.json(updatedDrinkWater)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Something went wrong updating your water tracker' })
  }
})

export default router
