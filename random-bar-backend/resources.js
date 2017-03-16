const router = require('express').Router();

router.use('/saved_bars', require('./controllers/bars/index.js'));
router.use('/api', require('./controllers/api/index.js'));

module.exports = router;
