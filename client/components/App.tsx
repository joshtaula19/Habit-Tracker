import { useState } from 'react';
import SleepTracker from './SleepTracker';
import WeekGrid from './WeekGrid.tsx'

function App() {
  const [activeTracker, setActiveTracker] = useState<string | null>(null);

  const handleTrackerClick = (tracker: string) => {
    setActiveTracker(prevTracker => (prevTracker === tracker ? null : tracker));
  };

  const renderTracker = () => {
    switch (activeTracker) {
      case 'sleep':
        return <SleepTracker />;
      default:
        return <p>Please select a habit tracker to view.</p>;
    }
  };

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
      <div className="mt-6 w-full">{renderTracker()}</div>
    </div>
  );
}

export default App;
