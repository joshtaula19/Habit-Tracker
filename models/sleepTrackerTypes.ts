export type UserFormProps = {
  onSave: (name: string, targetSleepHours: number, targetSleepMinutes: number) => Promise<void>;
};

export type SleepRecordFormProps = {
  onSubmit: (
    sleepDate: string,
    sleepStart: string,
    sleepEnd: string,
    rested: boolean
  ) => void;
};

export type SleepRecord = {
  sleepDate: string;
  sleepDuration: number;
  rested: boolean;
};

export type SleepRecordsTableProps = {
  sleepRecords: SleepRecord[];
  pending: boolean;
  error: string | null;
};

