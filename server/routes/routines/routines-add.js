const db = require('../../database');

const routinesAdd = (req, res, next) => {
  const {
    petId, routineName, description, dateTime, isCompleted, isRepeatable
  } = req.body;
  const sql = `
               INSERT INTO routines ("petId", "routineName", description, "dateTime", "isCompleted", "isRepeatable")
                    VALUES ($1, $2, $3, $4, $5, $6);
              `;
  const params = [petId, routineName, description, dateTime, isCompleted, isRepeatable];
  db.query(sql, params)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
};

module.exports = routinesAdd;
