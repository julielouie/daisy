const db = require('../../database');

const petsGet = (req, res, next) => {
  const petId = parseInt(req.params.petId);
  const sql = `
               SELECT name, birthday, "adoptionDay", age, breed, species, coloring, allergies, diet
                 FROM pets
                WHERE "petId" = $1
              `;
  const params = [petId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows.length) {
        res.status(200).json([]);
      } else {
        res.status(200).json(result.rows);
      }
    })
    .catch(err => next(err));
};

module.exports = petsGet;
