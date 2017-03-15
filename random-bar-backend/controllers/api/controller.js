const yelp = require('yelp-fusion');
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

let controller = {};

controller.randomizer = (req, res) => {
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search({
      categories: 'bars,beergardens',
      location: `${req.params.lat}, ${req.params.lng}`,
      radius: 500,
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
