/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('coding_habit', (table) => {
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
  return knex.schema.dropTable('coding_habit')
}
