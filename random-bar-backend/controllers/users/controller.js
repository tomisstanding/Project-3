const bcrypt = require('bcrypt');

const User = require('../../models/user');

const controller = {};

controller.index = (req, res) => {
  User
    .findAll()
    .then((data) => res.json({ user: data }))
    .catch((err) => console.log('ERROR', err));
}

controller.show = (req, res) => {
  User
    .findById(req.params.id)
    .then((data) => {
      res.json({ users: data });
      console.log(data);
    })
    .catch((err) => console.log('ERROR', err));
}

controller.create = (req, res) => {
  User
    .create(req.body.user)
    .then((data) => {
      res.status(201)
      .json({ user: data })
    })
    .catch(err => console.log('ERROR', err));
};

module.exports = controller;
