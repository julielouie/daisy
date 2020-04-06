const db = require('../../database');

const petsDelete = (req, res, next) => {
  const petId = parseInt(req.params.petId);
  const sql = `
                DELETE *
                  FROM pets
                 WHERE "petId" = $1
              `;
  const params = [petId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows.length) {
        res.status(200).send(`Pet with ID ${req.body.petId} does not exist`);
      } else {
        res.status(200).send(`Pet with ID ${Number(req.body.id)} has been deleted`);
      }
    })
    .catch(err => next(err));

};

module.exports = petsDelete;
