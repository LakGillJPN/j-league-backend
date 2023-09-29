import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex: Knex) {
  return knex.schema.createTable('points', (table) => {
    table.increments("entries").primary();
    table.string('uid');
    table.integer('game_id')
    table.string('gameweek');
    table.integer('game_points').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex: Knex) {
  knex.schema.dropTable("points");
};
