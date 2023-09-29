import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex: Knex) {
  return knex.schema.createTable('users', function(table)  {
   table.increments('id').primary();
   table.string('uid').unique().notNullable();
   table.string('username', 20).unique().notNullable();
   table.date('date_of_birth').notNullable();
   table.string('location', 50).notNullable();
   table.string('favourite_team', 50).notNullable(); 
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex: Knex) {
  knex.schema.dropTable("users");
};
