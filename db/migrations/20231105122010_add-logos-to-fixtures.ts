import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return await knex.schema.alterTable('fixtures', (table) => { 
    table.string('league_name', 64)
    table.string('league_logo_url', 256)
  })
}


export async function down(knex: Knex): Promise<void> {
  return await knex.schema.alterTable('fixtures', (table) => {
    table.dropColumns('league_name', 'league_logo')
  })
}

