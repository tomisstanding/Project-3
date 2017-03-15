const router      = require('express').Router();
const AuthService = require('../../services/auth');
const controller  = require('./controller');

// GET Routes

router.get('/', controller.index);

router.get('/new', controller.new);

router.get(
  '/:id',
  AuthService.restrict,
  controller.show
);

// POST ROUTES - submitting user forms

router.post('/login', controller.process_login);

router.post('/', controller.create);

module.exports = router;
