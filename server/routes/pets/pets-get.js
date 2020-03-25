const db = require('../../database');

const petsGet = (req, res, next) => {
  const userId = parseInt(req.params.userId);
  const sql = `
                SELECT name, age, breed, species
                  FROM pets
                WHERE pets."userId" = $1
              `;
  const params = [userId];
  db.query(sql, params)
    .then(result => {
      if (result.rows.length === 0) {
        res.status(200);
        res.json([]);
      } else {
        res.status(200);
        res.json(result.rows);
      }
    })
    .catch(err => next(err));

};

module.exports = petsGet;
