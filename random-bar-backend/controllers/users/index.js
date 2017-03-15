const router = require('express').Router();
const controller = require('./controller');

// GET Routes

router.get('/', controller.index);

router.get('/:id', controller.show);
//
// router.get(
//   '/:id/bars',
//   AuthService.restrict,
//   controller.show
// );
//
//POST ROUTES - submitting user forms
// router.post('/login', controller.process_login);
//
router.post('/', controller.create);

module.exports = router;
