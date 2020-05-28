const db = require('../../database');

const usersGet = (req, res, next) => {
  const userId = 5; // parseInt(req.params.userId);
  const sql = `
               SELECT email, "fullName"
                 FROM users
                WHERE "userId" = $1
              `;
  const params = [userId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows.length) {
        res.status(200).send(`User with ID ${userId} does not exist`);
      } else {
        res.status(200).json(result.rows);
      }
    })
    .catch(err => next(err));
};

module.exports = usersGet;
