import request from 'superagent'
import type { DrinkWater } from '../../models/drinkWater'

const rootUrl = '/api/v1'

export async function getDrinkWater(): Promise<DrinkWater[]> {
  const response = await request.get(rootUrl + '/watertracker')
  return response.body
}

export async function updateDrinkWater(
  updateDay: Partial<DrinkWater>,
): Promise<DrinkWater> {
  const response = await request
    .patch(rootUrl + `/watertracker/${updateDay.id}`)
    .send({
      completed: updateDay.completed,
    })
  return response.body
}
