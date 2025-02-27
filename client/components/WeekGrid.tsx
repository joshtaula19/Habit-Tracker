import DrinkWaterTracker from './DrinkWater'
import AddHabitForm from './add-habits'
import HabitList from './HabitList'

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
      <div className="flex flex-col">
        <div className="flex flex-row justify-around">
          {days.map((day) => (
            <div key={day} className="text-left font-bold">
              {day}
            </div>
          ))}
        </div>
        {/* Insert components here */}
        <DrinkWaterTracker />
        <div className="mt-4">
          <h2 className="text-xl font-bold">Manage Habits</h2>
          <AddHabitForm />
          <HabitList />
        </div>
      </div>
    </div>
  )
}
