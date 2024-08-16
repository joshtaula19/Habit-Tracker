import React from 'react'
import { useHabits } from '../hooks/useHabits'

const HabitList: React.FC = () => {
  const { habits, deleteHabit, loading, error } = useHabits()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <ul className="list-disc pl-5">
      {habits.map((habit) => (
        <li key={habit.id} className="flex items-center justify-between">
          {habit.name}
          <button
            onClick={() => deleteHabit(habit.id)}
            className="rounded bg-red-500 p-1 text-white"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}

export default HabitList
