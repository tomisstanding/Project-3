const db = require('../config/db');

const Bar = {};

Bar.findAll = (userId) => {
  return db.manyOrNone(`
    SELECT *
    FROM bars;`
  )
}

module.exports = Bar;
