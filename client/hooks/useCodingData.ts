import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getDailyCodingData, saveDailyCodingData } from '../apis/codingApi'
import type { DailyCodingData } from '../apis/codingApi'

export function useCodingData() {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['codingData'],
    queryFn: getDailyCodingData,
  })

  const mutation = useMutation({
    mutationFn: saveDailyCodingData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['codingData'] })
    },
  })

  const updateCodingHours = async (dayData: DailyCodingData) => {
    await mutation.mutateAsync(dayData)
  }

  const getMotivationalMessage = () => {
    if (!query.data) return ''

    const codingDays = query.data.filter(day => day.hours > 0).length

    if (codingDays === 0) return 'Never too late to start!'
    if (codingDays === 1) return 'Off to a good start!'
    if (codingDays >= 2 && codingDays <= 5) return `${codingDays} in a row! You are amazing!`
    if (codingDays === 7) return 'You are a coding star!'

    return ''
  }

  return {
    codingData: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    updateCodingHours,
    getMotivationalMessage,
  }
}
