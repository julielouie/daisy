const db = require('../../database');

const petsAdd = (req, res, next) => {
  const reqProps = ['userId', 'name', 'birthday', 'adoptionDay', 'age', 'breed', 'species', 'coloring', 'allergies', 'diet'];
  for (const prop in reqProps) {
    // eslint-disable-next-line no-prototype-builtins
    if (!req.body.hasOwnProperty(reqProps[prop])) {
      res.status(400).send(`${reqProps[prop]} is required.`);
      return;
    }
  }
  const {
    userId, name, birthday, adoptionDay, age, breed, species, coloring, allergies, diet
  } = req.body;
  const userSql = `
                    SELECT user."userId"
                      FROM user
                     WHERE "userId" = $1;
                  `;
  const petSql = `
                  INSERT INTO pets ("userId", name, birthday, "adoptionDay", age, breed, species, coloring, allergies, diet)
                       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
                 `;
  const userParams = [req.body.userId];
  const petParams = [userId, name, birthday, adoptionDay, age, breed, species, coloring, allergies, diet];
  db.query(userSql, userParams)
    .then(userResult => {
      if (!userResult.rows.length) {
        res.status(404).send(`userId ${req.body.userId} does not exist`);
      } else {
        db.query(petSql, petParams)
          .then(result => res.status(200).json(result.rows))
          .catch(err => next(err));
      }
    })
    .catch(err => next(err));
};

module.exports = petsAdd;
