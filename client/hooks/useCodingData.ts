import { useState, useEffect } from 'react'
import { getDailyCodingData } from '../apis/codingApi'
import { DailyCodingData } from '../apis/codingApi'

const useCodingData = () => {
  const [data, setData] = useState<DailyCodingData[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
      const data = await getDailyCodingData()
      setData(data)
      } catch (err) {
      setError((err as Error).message)
      } finally {
      setIsLoading(false)
      }
      }
  
      fetchData()
  }, [])

  return { data, error, isLoading }
}

export default useCodingData
