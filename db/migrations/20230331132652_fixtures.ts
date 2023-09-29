/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import { Knex } from "knex";

exports.up = function(knex: Knex) {
  return knex.schema.createTable('fixtures', (table) => {
    table.integer('fixture_id').primary()
    table.string('gameweek').notNullable();
    table.string('home_team_name', 64).notNullable();
    table.string('away_team_name', 64).notNullable();
    table.dateTime('date');
    table.string('isFinished');
    table.string('home_team_logo_url',256).notNullable();
    table.string('away_team_logo_url',256).notNullable();
    table.boolean('did_home_team_win').nullable();
    table.boolean('did_away_team_win').nullable();
    table.integer('home_team_score').nullable()
    table.integer('away_team_score').nullable();
    table.string('venue_name');
    table.string('venue_city');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex: Knex) {
  knex.schema.dropTable("fixtures");
};
