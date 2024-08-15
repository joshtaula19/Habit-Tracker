import UserForm from './UserForm';
import SleepRecordForm from './SleepRecordForm';
import SleepRecordsTable from './SleepRecordsTable';
import useFetch from '../hooks/useFetch';
import useSubmitSleepRecord from '../hooks/useSubmitSleepRecord';
import { calculateSleepDuration } from '../../utils/calculateSleepDuration';
import { SleepRecord } from '../../models/sleepTrackerTypes';

function SleepTracker() {
  const { sleepRecords, submitSleepRecord } = useSubmitSleepRecord();
  const { data: existingSleepRecords, pending, error } = useFetch('/sleep-records');

  const handleSaveUser = async (name: string, targetSleepHours: number, targetSleepMinutes: number) => {
    const response = await fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, targetSleepHours, targetSleepMinutes }),
    });

    if (response.ok) {
      console.log('User created successfully');
    } else {
      console.error('Error creating user');
    }
  };

  const handleSubmitSleepRecord = (
    sleepDate: string,
    sleepStart: string,
    sleepEnd: string,
    rested: boolean
  ) => {
    const sleepDuration = calculateSleepDuration(sleepStart, sleepEnd);
    const sleepRecord: SleepRecord = { sleepDate, sleepDuration, rested };
    submitSleepRecord(sleepRecord);
  };

  return (
    <div>
      <h1>Sleep Tracker</h1>
      <UserForm onSave={handleSaveUser} />
      <SleepRecordForm onSubmit={handleSubmitSleepRecord} />
      <SleepRecordsTable sleepRecords={existingSleepRecords || []} pending={pending} error={error} />
    </div>
  );
}

export default SleepTracker;
