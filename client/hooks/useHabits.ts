import { useState, useEffect } from 'react'
import {
  getHabits,
  addHabit,
  updateHabit,
  removeHabit,
} from '../apis/add-habits'
import type { Habit } from '../../models/add-habits'

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchHabits() {
      try {
        const data = await getHabits()
        setHabits(data)
      } catch (err) {
        setError('Failed to fetch habits')
      } finally {
        setLoading(false)
      }
    }

    fetchHabits()
  }, [])

  const createHabit = async (name: string) => {
    try {
      const newHabit = await addHabit(name)
      setHabits((prevHabits) => [...prevHabits, newHabit])
    } catch (err) {
      setError('Failed to add habit')
    }
  }

  const modifyHabit = async (id: number, name: string) => {
    try {
      const updatedHabit = await updateHabit(id, name)
      setHabits(habits.map((habit) => (habit.id === id ? updatedHabit : habit)))
    } catch (err) {
      setError('Failed to update habit')
    }
  }

  const deleteHabit = async (id: number) => {
    try {
      await removeHabit(id)
      setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id))
    } catch (err) {
      setError('Failed to delete habit')
    }
  }

  return { habits, loading, error, createHabit, modifyHabit, deleteHabit }
}
