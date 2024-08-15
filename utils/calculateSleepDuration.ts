// utils/calculateSleepDuration.ts

/**
 * Calculate the duration between two times in HH:MM format.
 * @param sleepStart - The start time of sleep (e.g., "22:30").
 * @param sleepEnd - The end time of sleep (e.g., "06:30").
 * @returns The duration in minutes.
 */
export function calculateSleepDuration(sleepStart: string, sleepEnd: string): number {
  // Convert time strings to Date objects
  const start = new Date(`1970-01-01T${sleepStart}:00`);
  const end = new Date(`1970-01-01T${sleepEnd}:00`);

  // If the end time is earlier than the start time, it means the end time is on the next day
  if (end < start) {
    end.setDate(end.getDate() + 1);
  }

  // Calculate the difference in milliseconds
  const durationMs = end.getTime() - start.getTime();

  // Convert milliseconds to minutes
  return Math.round(durationMs / (1000 * 60));
}
