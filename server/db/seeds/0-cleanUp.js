export async function seed(knex) {
  await knex('users').del()
  await knex('sleep_records').del()
}