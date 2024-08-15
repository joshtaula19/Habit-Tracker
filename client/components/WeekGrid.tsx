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
      <div className="grid grid-cols-7 gap-4">
        {days.map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}
