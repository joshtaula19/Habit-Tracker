import CodingHabitForm from './CodingHabitForm.tsx'
import { useState } from 'react';
import SleepTracker from './SleepTracker';
import WeekGrid from './WeekGrid.tsx'
// Import other habit trackers as needed

function App() {
  const [activeTracker, setActiveTracker] = useState<string | null>(null);

  const handleTrackerClick = (tracker: string) => {
    setActiveTracker(prevTracker => (prevTracker === tracker ? null : tracker));
  };

  const renderTracker = () => {
    switch (activeTracker) {
      case 'sleep':
        return <SleepTracker />;
        // Add cases for other trackers
    }
  };

  return (
    <div className="app">
      <h1 className="text-3xl font-bold underline">Habit Tracker</h1>
      <h2 className="text-med border-black-200 block rounded-lg border p-6">
        Track your habits each day by clicking the icon once you have completed
        the minimum requirements.
      </h2>
      <p className="text-med border-black-200 block rounded-lg border p-6 font-bold">
        Drink Water Daily: minimum 4 glasses per day
      </p>
      <WeekGrid />    
      <div>
      <CodingHabitForm />
    </div>
    </div>

  )
    <div>
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
        <div>
        <button
          onClick={() => handleTrackerClick('sleep')}
          className={`px-6 py-3 text-white font-semibold rounded-md shadow-md transition-colors duration-300 ${
            activeTracker === 'sleep' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {activeTracker === 'sleep' ? 'Close Sleep Tracker' : 'Sleep Tracker'}
        </button>
        {/* Add buttons for other trackers */}
      </div>
      </div>
      <div className="mt-6 w-full">{renderTracker()}</div>
    </div>
  );
}

export default App;
