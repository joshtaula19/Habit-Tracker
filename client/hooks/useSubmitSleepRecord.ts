// hooks/useSubmitSleepRecord.ts
import { useState } from 'react';
import { SleepRecord } from '../../models/sleepTrackerTypes';

function useSubmitSleepRecord() {
  const [sleepRecords, setSleepRecords] = useState<SleepRecord[]>([]);

  const submitSleepRecord = (sleepRecord: SleepRecord) => {
    // Assuming a backend API call would happen here
    setSleepRecords([...sleepRecords, sleepRecord]);
  };

  return {
    sleepRecords,
    submitSleepRecord,
  };
}

export default useSubmitSleepRecord;
