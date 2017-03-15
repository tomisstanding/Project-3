const router = require('express').Router();
const controller = require('./controller');

router.get('/api', controller.getBar);

module.exports = router;
