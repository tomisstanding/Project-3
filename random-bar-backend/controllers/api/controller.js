const Yelp = require('../../services/yelp.js');

let controller = {};

controller.getBar = (req, res) => {
  Yelp
    .getBar(req.query.city)
    .then(r => r.json())
    .then((data) => {
      // json object
      res.json({
        name: data.
      });
    });
    .catch((err) => console.log(err));
}

module.exports = controller;
