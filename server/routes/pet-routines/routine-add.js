const db = require('../../database');

const routinesAdd = (req, res, next) => {
  const {
    petId, routineName, description, dateTime, isCompleted, isRepeatable
  } = req.body;
  const petIdSql = `
                    SELECT "petId"
                      FROM pets
                     WHERE "petId" = $1;
                  `;
  const sql = `
                INSERT INTO routines ("petId", routineName, description, dateTime, isCompleted, isRepeatable)
                      VALUES ($1, $2, $3, $4, $5, $6);
              `;
  const petIdParams = [petId];
  const params = [petId, routineName, description, dateTime, isCompleted, isRepeatable];
  db.query(petIdSql, petIdParams)
    .then(petIdResult => {
      if (!petIdResult.rows.length) {
        res.status(404).send(`Pet with ID ${petId} does not exist`);
      } else {
        db.query(sql, params)
          .then(result => res.status(200).json(result.rows))
          .catch(err => next(err));
      }
    })
    .catch(err => next(err));
};

module.exports = routinesAdd;
