import { useState, useEffect } from 'react';
import { SleepRecord } from '../../models/sleepTrackerTypes';

function useFetch(url: string) {
  const [data, setData] = useState<SleepRecord[] | null>(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState<string | null>(null); // Error state as string or null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: SleepRecord[] = await response.json();
        setData(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error)); // Convert Error to string
      } finally {
        setPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, pending, error };
}

export default useFetch;
