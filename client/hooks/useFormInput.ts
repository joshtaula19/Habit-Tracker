import { useState } from 'react';

function useFormInput<T extends string | number | boolean>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue: T;
    if (typeof initialValue === 'boolean') {
      newValue = e.target.checked as T; // Handle boolean values
    } else if (typeof initialValue === 'number') {
      newValue = (e.target.value as unknown) as T; // Handle number values
    } else {
      newValue = e.target.value as T; // Handle string values
    }
    setValue(newValue);
  };

  return {
    value,
    onChange,
  };
}

export default useFormInput;



