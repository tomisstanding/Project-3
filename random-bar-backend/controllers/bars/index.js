const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.index);

router.post('/:id', controller.create);

router.delete('/:id', controller.delete);

module.exports = router;
