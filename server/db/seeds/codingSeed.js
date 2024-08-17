export async function seed(knex) {
  await knex('coding_habit').del()

  await knex('coding_habit').insert([
    { id: 1, date: '2024-08-12', hours: 2 },
    { id: 2, date: '2024-08-13', hours: 3 },
    { id: 3, date: '2024-08-14', hours: 1 },
    { id: 4, date: '2024-08-15', hours: 4 },
    { id: 5, date: '2024-08-16', hours: 2 },
    { id: 6, date: '2024-08-17', hours: 5 },
    { id: 7, date: '2024-08-18', hours: 3 },
  ])
}
