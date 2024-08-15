import CodingHabitForm from './CodingHabitForm.tsx'
import WeekGrid from './WeekGrid.tsx'

function App() {
  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">Habit Tracker</h1>
        <WeekGrid />
        <CodingHabitForm />
      </div>
    </>
  )
}

export default App
