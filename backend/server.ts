import express from 'express';
import db from './knex';
import path from 'path';
import {  Request, Response } from 'express';
import { Points } from '../globals';
import { homeCheck, awayCheck } from '../frontend/src/utils/predictCheck';

export function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, '../frontend/build')));
  app.use(express.json());

  app.get('/hello', (req : Request, res: Response) => {
    res.send('world');
  });

  // Retrive the fixtures data from the database
  app.get('/api/fixtures', async (req: Request, res: Response) => {
    const fixtures = await db('fixtures')
      .select('*')
      .timeout(1500)
    res.send(fixtures);
  });

  app.get('/api/users', async (req: Request, res: Response) => {
    const users = await db('users')
      .select('*')
      .timeout(1500)
    res.send(users);
  });

  // Retrieve all the of the fixtures that have not started ("NS") yet
  app.get('/api/gameweek', async (req: Request , res: Response) => {
    const gameweek = await db('fixtures')
      .select('gameweek','isFinished','date')
      .where("isFinished", "NS")
      .timeout(1500)
    res.send(gameweek);
  });

  /* 
   {
      userEmail,
      predications: result,
      current_gameweek: gameweek

      'joe@nufc.com',
      predications: [ [300001, 0, 1] [400001, 1, 3] ],
      current_gameweek: 'Gameweek 12'
   }
  */


  // Send the user's predication into the database
  app.post('/api/predications', async (req: Request, res: Response) => {
    try {
      if (typeof req.body.uid !== 'string') {
        throw new Error('uid must be a string')
      }
      await Promise.all(req.body.predications.map(async (check: any[]) => {
        await db('predications')
          .join('fixtures', 'predications.game_id', '=', 'fixtures.fixture_id')
          .where('uid', req.body.uid)
          .where('game_id', check[0])
          .delete();
      }));
      await Promise.all(req.body.predications.map(async (predict: number[]) => {
        await db('predications').insert({
          uid: req.body.uid,
          current_gameweek: req.body.current_gameweek,
          game_id: predict[0],
          home_predication: predict[1],
          away_predication: predict[2],
          home_win: homeCheck(predict[1], predict[2]),
          away_win: awayCheck(predict[1], predict[2]),
        });
      }));
      res.send('Data entered into the predications table!').status(200);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error occurred while entering data!');
    }
  });

  // Retrieve the predications data
  app.get('/api/predications', async (req: Request, res: Response) => {
    const predications = await db('predications')
      .select('*')
      .timeout(1500)
    res.send(predications);
  });

  // Create a query to compare the actual results and the predicated results
  app.get('/api/results', async (req: Request, res: Response) => {
    const results = await db('fixtures')
      .join('predications', 'fixtures.fixture_id', '=', 'predications.game_id')
      .select(
        'predications.uid',
        'fixtures.gameweek',
        'fixtures.home_team_name',
        'fixtures.away_team_name',
        'fixtures.fixture_id',
        'fixtures.isFinished',
        'fixtures.did_home_team_win',
        'fixtures.did_away_team_win',
        'fixtures.home_team_score',
        'fixtures.away_team_score',
        'predications.home_predication',
        'predications.away_predication',
        'predications.home_win',
        'predications.away_win'
      )
      .where('fixtures.isFinished', 'FT');
    res.send(results);
  });
  

  // Insert the user's points into the database
  app.post('/api/points', async (req: Request, res: Response) => {
    const { uid, points } = req.body;
    if (!points || points.length === 0) {
      return res.status(400).send('Points array is empty');
    }
  
    try {
      await Promise.all(points.map(async (check: any[]) => {
        await db('points')
          .join('fixtures', 'points.game_id', '=', 'fixtures.fixture_id')
          .where('uid', uid)
          .where('fixtures.gameweek', check[2])
          //.where('fixtures.gameweek', 'Regular Season - 18')
          .delete();
      }));
      await Promise.all(
      
        points.map(([gamePoints, gameId, gameweek]: [number, number, string]) =>
          db('points').insert({
            uid: uid,
            game_id: gameId,
            gameweek: gameweek,
            game_points: gamePoints,
          })
        )
      );
      res.send('Points inserted');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });

  // Get the user's gameweek points
  app.get('/api/total', async (req: Request, res: Response) => {
    try {
      const total = await db('points')
        .select('*')
        .timeout(1500)
      res.send(total);
    } catch (error) {
      console.error(error);
    }
  });

  // Send the user's weekly total to the overall table 
  app.post('/api/overall', async (req: Request, res: Response) => {
    const { uid } = req.body;
    const points = await db('points').where('uid', uid).select('game_points');
    const gameweek = await db('points').where('uid', uid).select('gameweek');
    const overall = points.reduce((prev: number, curr: { game_points: number }) => prev + curr.game_points, 0);
  
    try {
      const existingOverallRecord = await db('overall').where('uid', uid).first();
  
      if (existingOverallRecord) {
        // If a record exists, update it
        await db('overall')
          .where('uid', uid)
          .update({
            gameweek: Object.values(gameweek[0]).toString(),
            overall_points: overall,
          });
        res.send('Overall updated');
      } else {
        // If no record exists, insert a new one
        await db('overall').insert({
          uid: uid,
          gameweek: Object.values(gameweek[0]).toString(),
          overall_points: overall,
        });
        res.send('Overall inserted');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });
  
  return app;
};



//module.exports = setupServer;