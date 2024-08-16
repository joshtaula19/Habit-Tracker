import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getDrinkWater, updateDrinkWater } from '../apis/waterTracker'
import { DrinkWater } from '../../models/drinkWater'

export function useDrinkWater() {
  const queryClient = useQueryClient()
  const query = useQuery({ queryKey: ['waterdata'], queryFn: getDrinkWater })

  const mutation = useMutation({
    mutationFn: updateDrinkWater,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['waterdata'] })
    },
  })

  const toggleDay = async (dayData: DrinkWater) => {
    const updatedDay = { ...dayData, completed: !dayData.completed }
    await mutation.mutateAsync(updatedDay)
  }

  return {
    waterData: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    toggleDay,
  }
}
