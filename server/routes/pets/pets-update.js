const db = require('../../database');

const petsUpdate = (req, res, next) => {
  const {
    name, birthday, adoptionDay, age, breed, species, coloring, allergies, diet, petId
  } = req.body;
  const petIdSql = `
                    SELECT "petId"
                      FROM pets
                     WHERE "petId" = $1;
                  `;
  const sql = `
                UPDATE pets
                   SET name = $1,
                       birthday = $2,
                       "adoptionDay" = $3,
                       age = $4,
                       breed = $5,
                       species = $6,
                       coloring = $7,
                       allergies = $8,
                       diet = $9
                 WHERE "petId" = $10
              `;
  const petIdParams = [req.body.petId];
  const params = [name, birthday, adoptionDay, age, breed, species, coloring, allergies, diet, petId];
  db.query(petIdSql, petIdParams)
    .then(petIdResult => {
      if (!petIdResult.rows.length) {
        res.status(404).send(`Pet with ID ${req.body.petId} does not exist`);
      } else {
        db.query(sql, params)
          .then(result => res.status(200).json(result.rows))
          .catch(err => next(err));
      }
    })
    .catch(err => next(err));

};

module.exports = petsUpdate;
