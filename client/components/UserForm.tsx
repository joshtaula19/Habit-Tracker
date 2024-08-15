import useFormInput from '../hooks/useFormInput';
import { UserFormProps } from '../../models/sleepTrackerTypes';

export default function UserForm({ onSave }: UserFormProps) {
  const nameInput = useFormInput('');
  const targetSleepHoursInput = useFormInput('8');  // Initialized with a string
  const targetSleepMinutesInput = useFormInput('0');  // Initialized with a string

  const handleSubmit = () => {
    onSave(
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
      <button onClick={handleSubmit}>Save User</button>
    </div>
  );
}

