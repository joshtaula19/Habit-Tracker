import useFormInput from '../hooks/useFormInput';
import { SleepRecordFormProps } from '../../models/sleepTrackerTypes';

function SleepRecordForm({ onSubmit }: SleepRecordFormProps) {
  const sleepDateInput = useFormInput('');
  const sleepStartInput = useFormInput('');
  const sleepEndInput = useFormInput('');
  const restedInput = useFormInput(false); // Boolean handling

  const handleSubmit = () => {
    onSubmit(
      sleepDateInput.value,
      sleepStartInput.value,
      sleepEndInput.value,
      restedInput.value
    );
  };

  return (
    <div>
      <h2>Sleep Record</h2>
      <input type="date" {...sleepDateInput} />
      <input type="time" {...sleepStartInput} />
      <input type="time" {...sleepEndInput} />
      <label>
        Rested?
        <input type="checkbox" checked={restedInput.value} onChange={restedInput.onChange} />
      </label>
      <button onClick={handleSubmit}>Add Sleep Record</button>
    </div>
  );
}

export default SleepRecordForm;
