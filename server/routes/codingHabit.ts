import express, { Request, Response } from 'express'
import request from 'superagent'

export type DailyCodingData = {
  date: string
  hours: number
}

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const habits = await getDailyCodingData()
    res.json({ data: habits })
  } catch (error) {
    console.error('Failed to retrieve daily coding data:', error)
    res.status(500).json({ error: 'Failed to retrieve coding habits' })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const habit = await saveDailyCodingData(req.body)
    res.json({ data: habit })
  } catch (error) {
    console.error('Failed to save daily coding data:', error)
    res.status(500).json({ error: 'Failed to save coding habit' })
  }
})

async function getDailyCodingData(): Promise<DailyCodingData[]> {
  try {
    const response = await request.get('/api/v1/coding-habit')
    return response.body.data
  } catch (err) {
    console.error('Failed to fetch daily coding data:', err)
    throw new Error('Failed to fetch daily coding data')
  }
}

async function saveDailyCodingData(data: DailyCodingData): Promise<DailyCodingData> {
  try {
    const response = await request.post('/api/v1/coding-habit').send(data)
    return response.body.data
  } catch (err) {
    console.error('Failed to save daily coding data:', err)
    throw new Error('Failed to save daily coding data')
  }
}

export default router
