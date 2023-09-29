//const setupServer = require('./server');
import { setupServer } from './server';
const PORT = process.env.PORT || 4000; // process.env will assign you a port
//const server = setupServer();

//const db = require('./knex');

( async () => {
  try {
    const server = setupServer();
    server.listen(PORT, () => {
      console.log(`app is listening at http://localhost:${PORT}`)
    })

  } catch (err) {
    console.error(`app failed to start ${err}`)

  }
})();
