import { API_Data } from "./globals";

const axios = require('axios')

const options = {
  method: 'GET',

  url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
  params: { league: '98', season: '2023' },
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': process.env.API_HOST
  }
};

async function getFixturesData() {
  let fixturesData: Object[] = [];

  try {
    
    const response = await axios.request(options);
    const data = response.data.response;
    data.map((game: API_Data) => fixturesData.push([
      game.fixture.id,
      game.league.round,
      game.teams.home.name,
      game.teams.away.name,
      game.fixture.date,
      game.fixture.status.short,
      game.teams.home.logo,
      game.teams.away.logo,
      game.teams.home.winner,
      game.teams.away.winner,
      game.score.fulltime.home,
      game.score.fulltime.away,
      game.fixture.venue.name,
      game.fixture.venue.city,
    ]))
  } catch (error) {
    console.error(error);
  }
  return fixturesData;
}

module.exports = { getFixturesData }