const db = require('../../database');

const routinesGet = (req, res, next) => {
  const routineId = parseInt(req.params.routineId);
  const sql = `
                SELECT "routineName", description, "dateTime", "isCompleted", "isRepeatable"
                  FROM routines
                 WHERE "routineId" = $1
              `;
  const params = [routineId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows.length) {
        res.status(200).send(`Routine with ID ${routineId} does not exist`);
      } else {
        res.status(200).json(result.rows);
      }
    })
    .catch(err => next(err));
};

module.exports = routinesGet;
