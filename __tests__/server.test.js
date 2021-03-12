'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Server Test', () => {
  it ('will test a bad route', async () => {
    await request.get('/badroute')
    .then(result => {
      expect(result.status).toEqual(404);
    })
  })
})