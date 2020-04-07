const db = require('../../database');

const routinesGet = (req, res, next) => {
  const userId = req.query.userId;
  const sql = `
                SELECT name, age, breed, species
                  FROM pets AS p
            INNER JOIN users AS u
                    ON u."userId" = p."userId"
                 WHERE p."userId" = $1
              `;
  const params = [userId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows.length) {
        res.status(200).json([]);
      } else {
        res.status(200).json(result.rows);
      }
    })
    .catch(err => next(err));
};

module.exports = routinesGet;
