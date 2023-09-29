/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

import {Knex} from "knex"
import { Fixture } from "../../globals";

const { getFixturesData } = require('../../fixtures');

exports.seed = async function(knex: Knex) {
  // Deletes ALL existing entries


  const fixturesData = await getFixturesData();
  await knex('fixtures').del()

  for (const data of fixturesData) {
    await knex('fixtures').insert({
      fixture_id: data[0],
      gameweek: data[1],
      home_team_name: data[2],
      away_team_name: data[3],
      date: data[4],
      isFinished: data[5],
      home_team_logo_url: data[6],
      away_team_logo_url: data[7],
      did_home_team_win: data[8],
      did_away_team_win: data[9],
      home_team_score: data[10],
      away_team_score: data[11],
      venue_name: data[12],
      //venue_city: data[13]
    });
  }
};

