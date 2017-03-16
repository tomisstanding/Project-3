const db = require('../config/db');

const Bar = {};

Bar.findAll = (userId) => {
  return db.manyOrNone(`
    SELECT *
    FROM bars;`
  );
};

Bar.create = (bar) => {
  return db.none(`
    INSERT INTO bars
    (bar_name, address, phone_number, website, type_of_bar, user_id)
    VALUES
    ($1, $2, $3, $4, $5, $6);`
    [bar.bar_name, bar.address. bar.phone_number, bar.website, bar.type_of_bar, bar.user_id]
  );
};

Bar.delete = (bar) => {
  return db.none(`
    DELETE FROM bars
    WHERE id = $1;`,
    [id]
  );
};

module.exports = Bar;
