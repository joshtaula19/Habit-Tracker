import useFormInput from '../hooks/useFormInput';
import { UserFormProps } from '../../models/sleepTrackerTypes';
import useSubmitUser from '../hooks/useSubmitUser'

export default function UserForm() {
  const nameInput = useFormInput('');
  const targetSleepHoursInput = useFormInput('');  // Initialized with a string
  const targetSleepMinutesInput = useFormInput('');  // Initialized with a string

  const { submitUser, pending, error } = useSubmitUser()

  const handleSubmit = () => {
    submitUser(
      nameInput.value,
      parseInt(targetSleepHoursInput.value, 10),  // Convert to number
      parseInt(targetSleepMinutesInput.value, 10)  // Convert to number
    );
  };

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

