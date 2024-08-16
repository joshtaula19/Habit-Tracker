/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('habit_weekdays', function (table) {
    table.increments('id').primary()
    table
      .integer('habit_id')
      .unsigned()
      .references('id')
      .inTable('habits')
      .onDelete('CASCADE')
    table.string('weekday').notNullable()
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTableIfExists('habit_weekdays')
}
