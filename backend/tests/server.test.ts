const request = require('supertest');
import { setupServer } from '../server'

// Initialize the Express server
let app = setupServer();

beforeAll(() => {
  app = setupServer();
});

afterAll((done) => {
  // Clean up any resources or connections after testing
  done();
});


describe('GET /api/data', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app).get('/hello');
    expect(response.status).toBe(200);
    expect(response.text).toBe('world');
  })
});

describe('GET /api/fixtures', () => {
  it('should retrieve fixtures from the database when GET /api/fixtures', async () => {
    const response = await request(app).get('/api/fixtures');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); // Check that the response contains data
  })
});

describe('GET /api/users', () => {
  it('should retrieve users from the database when GET /api/users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); // Check that the response contains data
  })
});

describe('GET /api/gameweek', () => {
  it('should retrieve gameweek data when GET /api/gameweek', async () => {
    const response = await request(app).get('/api/gameweek');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); // Check that the response contains data
  })
});

const payload = 
{ uid: "123456789",
  predications: [ [300001, 0, 1], [400001, 1, 3] ],
  current_gameweek: 'Gameweek 12'
}

const fakeload = {
  uid: [],
  predications: [ [300001, 0, 1], [400001, 1, 3] ],
  current_gameweek: 'Gameweek 12'
}

const fakeload2 = {
  uid: '123457',
  predications: [ [300001, 'num', 1], [400001, 1, 3] ],
  current_gameweek: []
}

describe('POST /api/predications', () => {
  it('should enter the data into the table ', async () => {
    const response = await request(app).post('/api/predications')
    .send(payload);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Data entered into the predications table!')
    expect(response.body).toBeDefined(); // Check that the response contains data
  })

  it('should not enter the data into the table when the uid is not a string ', async () => {
    const response = await request(app).post('/api/predications')
    .send(fakeload);
    expect(response.text).toBe('Error occurred while entering data!')
   // expect(response.status).toBe(500);
  })

  it('should not enter the data into the table when the gameweek is not a string ', async () => {
    const response = await request(app).post('/api/predications')
    .send(fakeload2);
    expect(response.text).toBe('Error occurred while entering data!')
   // expect(response.status).toBe(500);
  })
});

describe('GET /api/predications', () => {
  it('should retrieve predications data when GET /api/predications', async () => {
    const response = await request(app).get('/api/predications');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); // Check that the response contains data
  })
});

describe('GET /api/results', () => {
  it('should retrieve results data when GET /api/results', async () => {
    const response = await request(app).get('/api/results');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); // Check that the response contains data
  })
});

const realPoints = {
  uid: '123456',
  points: [[100, 20000, "Test Week"]]
}

const fakePoints = {
  uid: '123456,',
  points: [[100, "Test Week", 20000]]
}


describe('POST /api/points', () => {
  it('should return a message if nothing is entered ', async () => {
    const response = await request(app).post('/api/points')
    .send();
    expect(response.text).toBe('Points array is empty')
  })

  it('should enter the data into the table', async () => {
    const response = await request(app).post('/api/points')
    .send(realPoints);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Points inserted')
    expect(response.body).toBeDefined();
  })

  it('should not enter data when the the points array contains incorrect data', async () => {
    const response = await request(app).post('/api/points')
    .send(fakePoints);
    expect(response.status).toBe(500);
    expect(response.text).toBe('Internal server error')
  })
})
