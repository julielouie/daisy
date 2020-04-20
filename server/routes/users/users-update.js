const db = require('../../database');
const bcrypt = require('bcrypt');

const usersUpdate = (req, res, next) => {
  const userId = req.params.userId;
  const userSql = `
                   SELECT "userId", email, password, "fullName"
                     FROM users
                    WHERE "userId" = $1;
                  `;
  const sql = `
               UPDATE users
                  SET email = $1,
                      password = $2,
                      "fullName" = $3
                WHERE "userId" = $4
              `;
  const userParams = [userId];
  db.query(userSql, userParams)
    .then(userResult => {
      if (!userResult.rows.length) {
        res.status(404).send(`User with ID ${userId} does not exist`);
      } else {
        const password = userResult.rows[0].password;
        bcrypt.hash(password, 10, (err, hash) => {
          console.error(err);
          const params = [userResult.rows[0].email, hash, userResult.rows[0].fullName, userId];
          db.query(sql, params)
            .then(result => res.status(200).json(result.rows))
            .catch(err => next(err));
        });
      }
    })
    .catch(err => next(err));

};

module.exports = usersUpdate;
