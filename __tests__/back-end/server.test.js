require('dotenv').config();
import app from '../../server/server.js';
const request = require('supertest');
const mongoose = require('mongoose');
describe('Server test', () => {
  let server;
  beforeAll(async () => {
    server = await app.listen(process.env.PORT, () => {});
  });

  afterAll(async () => {
    await server.close();
    await mongoose.connection.close();
  });

  it('GET "/" should respond with index.html', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
  it('GET "/error" should respond with 404', (done) => {
    request(app)
      .get('/error')
      .expect(404)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
  // it('GET "/api/test" should respond with a array', (done) => {
  //   request(app)
  //     .get('/api/test')
  //     .expect(200)
  //     .expect('Content-Type', /json/)
  //     .then((response) => {
  //       expect(Array.isArray(response.body)).toEqual(true);
  //       done();
  //     })
  //     .catch((err) => done(err));
  // });
});
