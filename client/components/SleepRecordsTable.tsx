import { SleepRecordsTableProps } from '../../models/sleepTrackerTypes';

function SleepRecordsTable({ sleepRecords, pending, error }: SleepRecordsTableProps) {
  if (pending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading records</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Duration (hours)</th>
          <th>Rested?</th>
        </tr>
      </thead>
      <tbody>
        {sleepRecords.map((record, index) => (
          <tr key={index}>
            <td>{record.sleepDate}</td>
            <td>{(record.sleepDuration / 60).toFixed(2)}</td>
            <td>{record.rested ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SleepRecordsTable;
