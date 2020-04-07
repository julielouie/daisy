const db = require('../../database');

const routinesAdd = (req, res, next) => {
  const reqProps = ['userId', 'name', 'birthday', 'adoptionDay', 'age', 'breed', 'species', 'coloring', 'allergies', 'diet'];
  for (const prop in reqProps) {
    // eslint-disable-next-line no-prototype-builtins
    if (!req.body.hasOwnProperty(reqProps[prop])) {
      if (reqProps[prop] === 'adoptionDay' || reqProps[prop] === 'allergies') {
        continue;
      }
      res.status(400).send(`${reqProps[prop]} is required.`);
      return;
    }
  }
  const {
    userId, name, birthday, adoptionDay, age, breed, species, coloring, allergies, diet
  } = req.body;
  const sql = `
                  INSERT INTO pets ("userId", name, birthday, "adoptionDay", age, breed, species, coloring, allergies, diet)
                       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
                 `;
  const params = [userId, name, birthday, adoptionDay, age, breed, species, coloring, allergies, diet];
  db.query(sql, params)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
};

module.exports = routinesAdd;
