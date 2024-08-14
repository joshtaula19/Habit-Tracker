import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits(): Promise<string[]> {
  return request.get(rootUrl + '/fruits').then((res) => {
    return res.body.fruits
  })
}

export function getDrinkWater(): Promise<string[]> {
  return request.get(rootUrl + '/drinkwater').then((res) => {
    return res.body.drinkwater
  })
}
