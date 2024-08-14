
export async function seed(knex) {

  function convertToMinutes(hours, minutes) {
    return (hours * 60) + minutes
  }

  await knex('users').insert([
    { name: 'Raureti', Target_sleep: convertToMinutes(7, 30) },
    { name: 'Josh', Target_sleep: convertToMinutes(8, 0)  },
  ]);
};