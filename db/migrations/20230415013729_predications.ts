import { Knex } from "knex";

 /** 
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex : Knex) {
  return knex.schema.createTable('predications', (table) => {
    table.increments("entries").primary();
    table.string('uid');
    table.string('current_gameweek').nullable();
    table.integer('game_id')
    table.integer('home_predication').notNullable();
    table.integer('away_predication').notNullable();
    table.boolean('home_win').nullable();
    table.boolean('away_win').nullable();
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex: Knex) {
  knex.schema.dropTable("predications");
};
