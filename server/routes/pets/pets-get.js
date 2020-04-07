const db = require('../../database');

const petsGet = (req, res, next) => {
  const userId = parseInt(req.params.userId);
  const sql = `
                SELECT name, age, breed, species
                  FROM pets
                 WHERE "userId" = $1
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

module.exports = petsGet;
