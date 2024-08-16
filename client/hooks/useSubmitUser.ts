// hooks/useSubmitUser.ts
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

      const responseText = await response.text(); 
      if (!responseText) {
        throw new Error('Empty response');
      }

      return response; // Ensure to return the response object
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error)); // Set error message
      throw error; // Re-throw the error to handle it in the component
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
