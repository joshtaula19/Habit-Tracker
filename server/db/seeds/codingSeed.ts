import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  const today = new Date()
  const sevenDaysAgo = new Date(today)
  sevenDaysAgo.setDate(today.getDate() - 6)

  const codingHabitsData = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(sevenDaysAgo)
    date.setDate(sevenDaysAgo.getDate() + index)
    return {
      date: date.toISOString().split('T')[0], 
      hours: Math.floor(Math.random() * 5) 
    }
  })

  await knex('coding_habits').del()

  await knex('coding_habits').insert(codingHabitsData)
}
