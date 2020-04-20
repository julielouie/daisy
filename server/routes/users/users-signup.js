const db = require('../../database');
const bcrypt = require('bcrypt');

const usersSignup = (req, res, next) => {
  const { email, password, fullName } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    console.error(err);
    const sql = `
                 INSERT INTO users (email, password, "fullName")
                      VALUES ($1, $2, $3);
                `;
    const params = [email, hash, fullName];
    db.query(sql, params)
      .then(result => res.status(201).json(result.rows[0]))
      .catch(err => {
        if (err.code === '23505') {
          res.status(400).json('Account already exists');
        }
        next(err);
      });
  });
};

module.exports = usersSignup;
