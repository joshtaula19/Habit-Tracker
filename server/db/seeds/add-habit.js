/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('habit_weekdays').del()
  await knex('habits').del()

  // Inserts seed entries
  await knex('habits').insert([
    { id: 1, name: 'Exercise' },
    { id: 2, name: 'Read' },
    { id: 3, name: 'Meditate' },
  ])

  await knex('habit_weekdays').insert([
    { habit_id: 1, weekday: 'Monday' },
    { habit_id: 1, weekday: 'Wednesday' },
    { habit_id: 1, weekday: 'Friday' },
    { habit_id: 2, weekday: 'Tuesday' },
    { habit_id: 2, weekday: 'Thursday' },
    { habit_id: 3, weekday: 'Saturday' },
  ])
}
