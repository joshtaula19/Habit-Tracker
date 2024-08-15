import useCodingData from '../hooks/useCodingData'

const WeeklyView = () => {
  const { data, error, isLoading } = useCodingData()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  const weeklyTotal = data.reduce((total, entry) => total + entry.hours, 0)

  return (
    <div>
      <h2>Weekly Coding Hours</h2>
      <ul>
        {data.map((entry) => (
          <li key={entry.date}>{`${entry.date}: ${entry.hours} hours`}</li>
        ))}
      </ul>
      <div>Total Hours: {weeklyTotal}</div>
    </div>
  )
}

export default WeeklyView
