import { useState } from 'react';
import SleepTracker from './SleepTracker';

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
    <div className="app flex flex-col items-center p-6 space-y-6">
      <h1 className="text-4xl font-bold">Habit Tracker</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => handleTrackerClick('sleep')}
          className={`px-6 py-3 text-white font-semibold rounded-md shadow-md transition-colors duration-300 ${
            activeTracker === 'sleep' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {activeTracker === 'sleep' ? 'Close Sleep Tracker' : 'Sleep Tracker'}
        </button>
        {/* Add buttons for other trackers with similar styling */}
      </div>
      <div className="mt-6 w-full">{renderTracker()}</div>
    </div>
  );
}

export default App;
