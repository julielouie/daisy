const db = require('../../database');
const bcrypt = require('bcrypt');

const usersLogin = (req, res, next) => {
  const { email, password } = req.body;
  const loginSql = `
                    SELECT password
                      FROM users
                     WHERE email = $1;
                   `;
  const userSql = `
                   SELECT *
                     FROM users
                    WHERE email = $1;
                  `;
  const params = [email];
  db.query(loginSql, params)
    .then(loginResult => {
      if (!loginResult.rows.length) {
        res.status(401).send('Login failed, please check your credentials and try again.');
      } else {
        bcrypt.compare(password, loginResult.rows[0].password, (err, comparedResult) => {
          console.error(err);
          if (comparedResult) {
            db.query(userSql, params)
              .then(result => {
                const user = {
                  email: result.rows[0].email,
                  fullName: result.rows[0].fullName,
                  userId: result.rows[0].userId
                };
                req.session.user = user;
                res.status(200).json(user);
              })
              .catch(err => next(err));
          } else {
            res.status(401).send('Login failed, please check your credentials and try again.');
          }
        });
      }
    })
    .catch(err => next(err));
};

module.exports = usersLogin;
