const bcrypt = require('bcrypt');

const User = require('../../models/user');

const controller = {};

controller.index = (req, res) => {
  User
    .findAll()
    .then((data) => res.json({ user: data }))
    .catch((err) => console.log('ERROR', err));
};

controller.new = (req, res) => {
  res.render('users/new');
};

controller.show = (req, res) => {
  User
    .findById(req.params.id)
    .then((data) => {
      res.render('users/show', { users: data });
      console.log(data);
    })
    .catch((err) => console.log('ERROR', err));
};

controller.create = (req, res) => {
  User
    .create(req.body.user)
    .then((data) => {
      res.status(201)
      .redirect('/users/:id/show')
    })
    .catch(err => console.log('ERROR', err));
};

controller.login = (req, res) => {
  const error = {};
  // if error exists
  if (req.query.error) error.message = 'Incorrect Login Credentials';
  // send back to login page and render error message
  res.render('users/login', { message: error.message });
}

controller.process_login = (req, res) => {
  User
    .findByEmail(req.body.user.email)
    .then((user) => {
      // if user exists
      if (user) {
        // returns boolean
        const isAuthed = bcrypt.compareSync(req.body.user.password, user.password_digest);
        if (isAuthed) {
          // start session
          req.session.isAuthenticated = true;
          delete user.password_digest;
          req.session.user = user;
          res.redirect(`/users/${user.id}/show`)
        } else {
          // else send user back to login view
          res.redirect('/users/login?error=true');
        }
      } else {
        res.redirect('/users/login?error=true')
      }
    });
}

module.exports = controller;
