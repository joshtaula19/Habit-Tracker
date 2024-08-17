import { UserFormProps } from '../../models/sleepTrackerTypes';
import useFormInput from '../hooks/useFormInput';
import useSubmitUser from '../hooks/useSubmitUser';

export default function UserForm({ onSave }: UserFormProps) {
  const nameInput = useFormInput('');
  const targetSleepHoursInput = useFormInput<number>(0);  // Initialized with a number
  const targetSleepMinutesInput = useFormInput<number>(0);  // Initialized with a number

  const { pending, error } = useSubmitUser();

  const handleSubmit = async () => {
    const name = nameInput.value;
    const targetSleepHours = parseInt(targetSleepHoursInput.value.toString(), 10);
    const targetSleepMinutes = parseInt(targetSleepMinutesInput.value.toString(), 10);

    try {
      await onSave(name, targetSleepHours, targetSleepMinutes);
    } catch (error) {
      console.error('Submission error:', error);
    }
  }

  return (
    <div>
      <h2>User Details</h2>
      <input type="text" placeholder="Name" {...nameInput} />
      <input type="number" placeholder="Target Sleep Hours" {...targetSleepHoursInput} />
      <input type="number" placeholder="Target Sleep Minutes" {...targetSleepMinutesInput} />
      <button onClick={handleSubmit} disabled={pending}>
        {pending ? 'Saving...' : 'Save User'}
      </button>
      {error && <p>Error: {error}</p>}
    </div>
  );
}
