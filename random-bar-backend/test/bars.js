const request = require('supertest');
const expect  = require('chai').expect;

const app = require('../index');

describe('Bars', () => {

  let bar;

  before((done) => {

  });

  after((done) => {

  });

  it('GET /bars should return a 200 status code and be an object', (done) => {
    request(app)
    .get('/bars')
    .end((err, results) => {
      expect(results.statusCode).to.be.equal(200);
      expect(results.body).to.be.an.instanceOf(Object);
      done();
    })
  })


});
