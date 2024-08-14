export async function seed(knex) {
  await knex('sleep_records').insert([
    { user_id: 1, sleep_date: '2024-08-01', sleep_start: '10:30 PM', sleep_end: '6:30 AM', rested: true },
    { user_id: 2, sleep_date: '2024-08-01', sleep_start: '9:30 PM', sleep_end: '7:00 AM', rested: true },
  ]);
};