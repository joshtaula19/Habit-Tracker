import React, { useState } from 'react'
import { saveDailyCodingData } from '../apis/codingApi'

type CodingHabitFormProps = {
  onSuccess: () => void
  onError: (error: string) => void
}

const CodingHabitForm: React.FC<CodingHabitFormProps> = ({ onSuccess, onError }) => {
  const [date, setDate] = useState('')
  const [hours, setHours] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await saveDailyCodingData({ date, hours })
      onSuccess()
    } catch (error) {
      onError('Failed to save coding data')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Hours:
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          required
          min="0"
        />
      </label>
      <button type="submit">Save</button>
    </form>
  )
}

export default CodingHabitForm
