const db = require('../../database');

const petsDelete = (req, res, next) => {
  const petId = parseInt(req.params.petId);
  const petIdSql = `
                    SELECT "petId"
                      FROM pets
                     WHERE "petId" = $1;
                  `;
  const sql = `
                DELETE FROM pets
                 WHERE "petId" = $1
              `;
  const petIdParams = [req.params.petId];
  const params = [petId];
  db.query(petIdSql, petIdParams)
    .then(petIdResult => {
      if (!petIdResult.rows.length) {
        res.status(200).send(`Pet with ID ${req.params.petId} does not exist`);
      } else {
        db.query(sql, params)
          .then(result => res.status(200).send(`Pet with ID ${req.params.petId} has been deleted`));
      }
    })
    .catch(err => next(err));

};

module.exports = petsDelete;
