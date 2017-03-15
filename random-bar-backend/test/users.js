const request = require('supertest');
const expect  = require('chai').expect;

const app = require('../index');

describe('Users', () => {

  let user;

  before((done) => {

  });

  after((done) => {

  });

  it('GET /users should return a 200 status code and be an object', (done) => {
    request(app)
    .get('/users')
    .end((err, results) => {
      expect(results.statusCode).to.be.equal(200);
      expect(results.body).to.be.an.instanceOf(Object);
      done();
    })
  })


});
