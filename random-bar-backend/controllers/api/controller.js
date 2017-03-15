const yelp = require('yelp-fusion');
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

let controller = {};

controller.index = (req, res) => {
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search({
      categories: 'bars,beergardens',
      location: '40.739747, -73.989699',
      radius: 500,
      sorty_by: 'rating',
      open_now: true
    })
    .then((results) => {
      res.json(results.jsonBody.businesses);
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  });
}

module.exports = controller;
