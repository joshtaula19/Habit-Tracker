/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema
  .createTable('drinkwater', (table) => {
    table.increments('id')
    table.string('weekday')
    table.boolean('completed')
  })
  .createTable('coding_habits', (table) => {
    table.increments('id').primary();
    table.date('date').notNullable();
    table.integer('hours').notNullable();
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema
  .dropTable('drinkwater')
  .dropTable('coding_habits')
}
