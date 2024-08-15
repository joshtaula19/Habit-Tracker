import { GlassWater } from 'lucide-react'
import { useDrinkWater } from '../hooks/useDrinkWater'

export default function DrinkWaterTracker() {
  const { waterData, isLoading, isError, error, toggleDay } = useDrinkWater()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error?.message}</div>

  return (
    <div className="drink-water">
      <div className="grid grid-cols-7">
        {waterData.map((dayData) => (
          <div key={dayData.id} className="water-day-data">
            <button
              onClick={() => toggleDay(dayData)}
              className="drink-water-button"
            >
              <GlassWater
                size={22}
                className="drink-water-icon"
                color={dayData.completed ? '#3b82f6' : '#d1d5db'}
                fill={dayData.completed ? '#3b82f6' : 'none'}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
