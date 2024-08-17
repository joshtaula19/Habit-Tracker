
export async function up(knex) {
  return knex.schema.createTable('sleep_records', (table) => {
    table.increments('id').primary()
    table.string('user_id')
    table.date('sleep_date')
    table.time('sleep_start')
    table.datetime('sleep_end')
    table.boolean('rested')
  })
};

export async function down(knex) {
  return knex.schema.dropTable('sleep_records')
};

