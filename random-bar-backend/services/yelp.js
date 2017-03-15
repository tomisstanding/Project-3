const yelp = require('yelp-fusion')
const fetch = require('node-fetch');
const Bars  = {};
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

yelp.accessToken(clientId, clientSecret)
  .then(response=> {
    console.log(response.jsonBody.access_token);
  })
  .catch(err => console.log(err)
  );

Bars.getBars = (city) = {
  return fetch(`https://api.yelp.com/v3/businesses/search?term=bar&location=${city}`)
}

module.exports = Bars;
