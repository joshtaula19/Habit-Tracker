import { useState } from 'react';
import { SleepRecord } from '../../models/sleepTrackerTypes';

function useSubmitSleepRecord() {
  const [sleepRecords, setSleepRecords] = useState<SleepRecord[]>([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitSleepRecord = async (sleepRecord: SleepRecord) => {
    setPending(true);
    setError(null);

    try {
      const response = await fetch('/sleep-records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sleepRecord),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      setSleepRecords([...sleepRecords, sleepRecord]);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setPending(false);
    }
  };

  return {
    sleepRecords,
    submitSleepRecord,
    pending,
    error,
  };
}

export default useSubmitSleepRecord;
