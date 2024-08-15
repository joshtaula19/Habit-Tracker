import { Router } from 'express'

import * as db from '../db/db'

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
    const updateDrinkWater = await db.updateDrinkWater({
      id,
      completed,
    })
    console.log('testing updatedrinkwater', updateDrinkWater)
    if (!updateDrinkWater) {
      return res
        .status(404)
        .json({ message: 'Drink Water entry not found mate' })
    }
    res.json(updateDrinkWater)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Something went wrong updating your water tracker' })
  }
})

export default router
