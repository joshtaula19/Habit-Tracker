import { Router } from 'express'
import * as db from '../db/db'

const router = Router()

// Get all habits
router.get('/habits', async (req, res) => {
  try {
    const habits = await db.getHabits()
    res.json(habits)
  } catch (err) {
    res.status(500).json({ error: 'Failed to get habits' })
  }
})

// Get all weekdays for a habit
router.get('/habits/:habitId/weekdays', async (req, res) => {
  try {
    const { habitId } = req.params
    const weekdays = await db.getHabitWeekdays(Number(habitId))
    res.json(weekdays)
  } catch (err) {
    res.status(500).json({ error: 'Failed to get habit weekdays' })
  }
})

// Add a new habit
router.post('/habits', async (req, res) => {
  try {
    const { name } = req.body
    const newHabit = await db.addHabit(name)
    res.status(201).json(newHabit)
  } catch (err) {
    res.status(500).json({ error: 'Failed to add habit' })
  }
})

// Update a habit
router.patch('/habits/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const updatedHabit = await db.updateHabit(Number(id), name)
    res.json(updatedHabit)
  } catch (err) {
    res.status(500).json({ error: 'Failed to update habit' })
  }
})

// Add a weekday to a habit
router.post('/habits/:habitId/weekdays', async (req, res) => {
  try {
    const { habitId } = req.params
    const { weekday } = req.body
    const newWeekday = await db.addHabitWeekday(Number(habitId), weekday)
    res.status(201).json(newWeekday)
  } catch (err) {
    res.status(500).json({ error: 'Failed to add weekday to habit' })
  }
})

// Remove a weekday from a habit
router.delete('/habit_weekdays/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.removeHabitWeekday(Number(id))
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove weekday from habit' })
  }
})

// Remove a habit
router.delete('/habits/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.removeHabit(Number(id))
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove habit' })
  }
})

export default router
