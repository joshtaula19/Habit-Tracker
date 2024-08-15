/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('drinkwater').del()
  await knex('drinkwater').insert([
    { id: 1, weekday: 'Monday', completed: false },
    { id: 2, weekday: 'Tuesday', completed: false },
    { id: 3, weekday: 'Wednesday', completed: false },
    { id: 4, weekday: 'Thursday', completed: false },
    { id: 5, weekday: 'Friday', completed: false },
    { id: 6, weekday: 'Saturday', completed: false },
    { id: 7, weekday: 'Sunday', completed: false },
  ])
}
