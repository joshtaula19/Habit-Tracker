import DrinkWaterTracker from './DrinkWater'

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export default function WeekGrid() {
  return (
    <div className="m-4 mx-auto max-w-4xl border-4 border-black p-4">
      <div className="grid grid-rows-7 gap-4">
        {days.map((day) => (
          <div key={day} className="text-left font-bold">
            {day}
            <DrinkWaterTracker />
          </div>
        ))}
      </div>
    </div>
  )
}
