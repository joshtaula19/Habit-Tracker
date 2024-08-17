import request from 'superagent'

export type DailyCodingData = {
  date: string
  hours: number
}

export function getDailyCodingData(): Promise<DailyCodingData[]> {
  return request
    .get('/api/v1/coding-habit')
    .then((res) => res.body.data)
    .catch((err) => {
      console.error('Failed to fetch daily coding data:', err)
      throw new Error('Failed to fetch daily coding data')
    })
}

export function saveDailyCodingData(data: DailyCodingData): Promise<DailyCodingData> {
  return request
    .post('/api/v1/coding-habit')
    .send(data)
    .then((res) => res.body.data)
    .catch((err) => {
      console.error('Failed to save daily coding data:', err)
      throw new Error('Failed to save daily coding data')
    })
}
