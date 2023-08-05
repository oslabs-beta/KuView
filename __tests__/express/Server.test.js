import request from 'supertest';
const app = require('../../server/server.js');
const server = 'http://localhost:4000';
/**
 * @testEnvironment node
 */
describe('Testing server.js', function () {
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
});
