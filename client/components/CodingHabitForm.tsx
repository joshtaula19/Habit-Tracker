import { useState } from 'react'
import { useCodingData } from '../hooks/useCodingData'

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function CodingHabitForm() {
  const { updateCodingHours, getMotivationalMessage } = useCodingData()
  const [hours, setHours] = useState<{ [key: string]: number }>({
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  })

  function handleHoursChange(day: string, value: number){
    setHours((prevHours) => ({
      ...prevHours,
      [day]: value,
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      await Promise.all(
        daysOfWeek.map(async (day) => {
          if (hours[day] > 0) {
            await updateCodingHours({ date: day, hours: hours[day] })
          }
        })
      )
    } catch (error) {
      console.error('Failed to save coding data')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {daysOfWeek.map((day) => (
        <div key={day}>
          <label>
            {day}:
            <select
              value={hours[day]}
              onChange={(e) => handleHoursChange(day, Number(e.target.value))}
              required
            >
              <option value="0">Select hours</option>
              {[...Array(13).keys()].map((hour) => (
                <option key={hour} value={hour}>
                  {hour} hour{hour !== 1 && 's'}
                </option>
              ))}
            </select>
          </label>
        </div>
      ))}
      <button type="submit">Save</button>
      <p>{getMotivationalMessage()}</p>
    </form>
  )
}

export default CodingHabitForm
