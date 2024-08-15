import { GlassWater } from 'lucide-react'
import { useDrinkWater } from '../hooks/useDrinkWater'

export default function DrinkWaterTracker() {
  const { waterData, isLoading, isError, error, toggleDay } = useDrinkWater()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error?.message}</div>

  return (
    <div className="flex flex-row justify-around">
      {waterData.map((dayData) => (
        <div key={dayData.id} className="flex flex-col items-center">
          <div className="grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((glassIndex) => (
              <button
                key={glassIndex}
                onClick={() => toggleDay(dayData)}
                className="m-1"
              >
                <GlassWater
                  size={30}
                  className="pr-1"
                  color={dayData.completed ? '#3b82f6' : '#d1d5db'}
                  fill={dayData.completed ? '#3b82f6' : 'none'}
                />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
