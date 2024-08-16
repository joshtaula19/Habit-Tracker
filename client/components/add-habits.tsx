import React, { useState } from 'react'
import { useHabits } from '../hooks/useHabits'

const AddHabitForm: React.FC = () => {
  const [name, setName] = useState('')
  const { createHabit } = useHabits()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    await createHabit(name)
    setName('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New Habit"
        className="border p-2"
      />
      <button type="submit" className="rounded bg-blue-500 p-2 text-white">
        Add Habit
      </button>
    </form>
  )
}

export default AddHabitForm
