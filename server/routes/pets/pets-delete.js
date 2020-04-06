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
  const params = [petId];
  db.query(petIdSql, params)
    .then(petIdResult => {
      if (!petIdResult.rows.length) {
        res.status(200).send(`Pet with ID ${petId} does not exist`);
      } else {
        db.query(sql, params)
          .then(result => res.status(200).send(`Pet with ID ${petId} has been deleted`))
          .catch(err => next(err));
      }
    })
    .catch(err => next(err));

};

module.exports = petsDelete;
