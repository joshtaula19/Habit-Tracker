import { useState, useEffect } from 'react'
import {
  getHabitWeekdays,
  addHabitWeekday,
  removeHabitWeekday,
} from '../apis/add-habits'
import type { HabitWeekday } from '../../models/add-habits'

export function useHabitWeekdays(habitId: number) {
  const [weekdays, setWeekdays] = useState<HabitWeekday[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchWeekdays() {
      try {
        const data = await getHabitWeekdays(habitId)
        setWeekdays(data)
      } catch (err) {
        setError('Failed to fetch weekdays')
      } finally {
        setLoading(false)
      }
    }

    fetchWeekdays()
  }, [habitId])

  const addWeekday = async (weekday: string) => {
    try {
      const newWeekday = await addHabitWeekday(habitId, weekday)
      setWeekdays([...weekdays, newWeekday])
    } catch (err) {
      setError('Failed to add weekday')
    }
  }

  const removeWeekday = async (id: number) => {
    try {
      await removeHabitWeekday(id)
      setWeekdays(weekdays.filter((weekday) => weekday.id !== id))
    } catch (err) {
      setError('Failed to remove weekday')
    }
  }

  return { weekdays, loading, error, addWeekday, removeWeekday }
}
