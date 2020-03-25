const db = require('./database');

const petsGet = (req, res, next) => {
  // const userId = parseInt(req.params.userId);
  const sql = 'SELECT name, age, breed, species ' +
                'FROM pets ';
  //   'JOIN "userId" ON users."userId" = pets."userId" ' +
  //  'WHERE "userId" = $1';
  // const params = [userId];
  db.query(sql)
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
