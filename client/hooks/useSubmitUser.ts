import { useState } from 'react';

function useSubmitUser() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitUser = async (name: string, targetSleepHours: number, targetSleepMinutes: number) => {
    setPending(true);
    setError(null);

    try {
      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          targetSleepHours,
          targetSleepMinutes,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      // Handle the result if necessary
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setPending(false);
    }
  };

  return {
    submitUser,
    pending,
    error,
  };
}

export default useSubmitUser;
