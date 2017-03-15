const router = require('express').Router();

router.use('/users', require('./controllers/users'));

router.use('/', require('./controllers/bars'));

router.use('/api', require('./controllers/api'));

module.exports = router;
