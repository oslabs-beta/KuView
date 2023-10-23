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
  describe('Basic routes test', () => {
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
  });

  describe('Installation / system checks', () => {
    it('minikube should be running', (done) => {
      request(app)
        .get('/testing/minikube')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          const result = res.body;
          result ? done() : done(new Error('minikube is not running'));
        });
    });
    it('minikube should have prometheus-grafana', (done) => {
      request(app)
        .get('/testing/testgrafana')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);

          const result = res.body;
          if (typeof result !== 'boolean') {
            done(new Error('minikube not running'));
          } else if (!result) {
            done(new Error('prometheus pod not found'));
          } else {
            done();
          }
        });
    });
  });
});
