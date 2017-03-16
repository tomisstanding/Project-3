
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

controller.create = (req, res) => {
  Bar
    .create(req.body.bar, req.params.id)
    .then(() => res.redirect('/bars'))
    .catch(err => console.log('ERROR', err));
}

controller.delete = (req, res) => {
  Bar
    .delete(req.params.id)
    .then(() => {
      res.redirect(`/users/${req.params.id}`)
    })
    .catch(err => console.log('ERROR', err));
}

module.exports = controller;
