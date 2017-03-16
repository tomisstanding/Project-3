const db = require('../config/db');

const Bar = {};

Bar.addToFavorites = (bar) => {
  return db.none(
    `INSERT INTO saved_bars
    (name, rating, phone, price, address)
    VALUES
    ($1, $2, $3, $4, $5)`,
    [bar.name, bar.rating, bar.phone, bar.price, bar.address]
  );
}

module.exports = Bar;
