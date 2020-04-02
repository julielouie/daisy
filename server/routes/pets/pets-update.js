const db = require('../../database');

const petsUpdate = (req, res, next) => {
  const petId = parseInt(req.params.petId);
  const userId = parseInt(req.params.userId);
  const sql = `
                UPDATE pets
                   SET ("userId", name, birthday, "adoptionDay", age, breed, species, coloring, allergies, diet)
                 WHERE "petId" = $1
                   AND "userId" = $2
              `;
  const params = [petId, userId];
  db.query(sql, params)
    .then(result => {
      if (result.rows.length === 0) {
        res.status(200).json([]);
      } else {
        res.status(200).json(result.rows);
      }
    })
    .catch(err => next(err));

};

module.exports = petsUpdate;
