import SleepTracker from "./SleepTracker"
import WeekGrid from './WeekGrid.tsx'

function App() {

  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">Habit Tracker</h1>
        <h2 className="text-med border-black-200 block rounded-lg border p-6">
          Track your habits each day by clicking the icon once you have
          completed the minimum requirements.
        </h2>
        <p className="text-med border-black-200 block rounded-lg border p-6 font-bold">
          Drink Water Daily: minimum 4 glasses per day
        </p>
        <WeekGrid />
        <SleepTracker></SleepTracker>
      </div>
    </>
  )
}

export default App
