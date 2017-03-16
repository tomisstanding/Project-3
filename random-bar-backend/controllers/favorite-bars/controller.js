
const Bar = require('../../models/bar');

const controller = {};

controller.create = (req, res) => {
  Bar
  .addToFavorites(req.body.bar)
  .then((data) => {
    res.status(201);
  })
  .catch((err) => {
    console.log('ERROR', err)
  });
}

module.exports = controller;
