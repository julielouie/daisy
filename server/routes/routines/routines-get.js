const db = require('../../database');

const routinesGet = (req, res, next) => {
  const petId = parseInt(req.params.petId);
  const sql = `
                SELECT "routineId", "routineName", description, "dateTime", "isCompleted", "isRepeatable"
                  FROM routines
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

module.exports = routinesGet;
