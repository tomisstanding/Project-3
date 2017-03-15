const yelp = require('yelp-fusion');
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const YelpSearch = {};

YelpSearch.randomBar = (location) => {
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search({
      categories: 'bars',
      location: '40.739747, -73.989699',
      radius: 500,
      sorty_by: 'rating',
      open_now: true
    })
    .then((results) => {
      console.log(results.jsonBody);
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  });
}

module.exports = YelpSearch;
