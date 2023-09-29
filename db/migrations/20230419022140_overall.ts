import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex: Knex) {
  return knex.schema.createTable('overall', (table) => {
    table.increments("entries").primary();
    table.string('uid');
    table.string('gameweek');
    table.integer('overall_points').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex: Knex) {
  knex.schema.dropTable("overall");
};
