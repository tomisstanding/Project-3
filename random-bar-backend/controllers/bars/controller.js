
const Bar = require('../../models/bar');

const controller = {};

controller.index = (req, res) => {
  Bar
    .findAll()
    .then((data) => {
      res.json({ bars: data })
    })
    .catch((err) => console.log('ERROR', err));
}

module.exports = controller;
