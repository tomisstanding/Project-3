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

Bar.findByUserEmail = (email) => {
  return db.query(
    `SELECT
      saved_bars.id,
      saved_bars.name,
      saved_bars.rating,
      saved_bars.address,
      saved_bars.phone,
      users.email
    FROM saved_bars
    LEFT OUTER JOIN users
    ON users.id = saved_bars.user_id
    WHERE email = $1`,
    [email]
  );
}

module.exports = Bar;
